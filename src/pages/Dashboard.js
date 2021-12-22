/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useMoralis, useMoralisWeb3Api, useChain } from 'react-moralis';
import { contract_data } from '../constants/moralis_env';
import NavV2 from '../Components/NavV2';
import TraitChecker from '../Components/TraitChecker';
import ReactModal from 'react-modal';
import footerV2 from '../assets/footerV2.png';

function Dashboard() {
  // TODO: setup env var
  const prod = true;
  let CONTRACT_ID;
  let NETWORK;
  let Web3Api;
  // TODO: Change to '0x1' for prod!
  // const preferredChain = '0x4'; // rinkeby / staging
  const preferredChain = '0x1'; // prod

  const { Moralis, authenticate, isAuthenticated, user } = useMoralis();
  const { switchNetwork, chainId, chain, account } = useChain();
  const ethereum = window.ethereum;
  if (ethereum) {
    Web3Api = useMoralisWeb3Api();
    Moralis.enableWeb3();
  }

  const date = new Date();
  const year = date.getFullYear();

  const [userNfts, setUserNfts] = useState(null);
  const [processedNfzs, setProcessedNfzs] = useState(null);
  const [userAccount, setUserAccount] = useState(account);
  const [showModal, setShowModal] = useState(false);
  const [shortAddress, setShortAddress] = useState(null);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (userAccount && chainId && Web3Api) {
      if (userAccount.length > 25) {
        setShortAddress(
          userAccount.substring(0, 6) +
            '...' +
            userAccount.substring(userAccount.length - 4, userAccount.length)
        );
      }

      if (chainId === '0x1') {
        CONTRACT_ID = contract_data.mainnet.contract_id;
        NETWORK = contract_data.mainnet.network_id;
      } else {
        CONTRACT_ID = contract_data.rinkeby.contract_id;
        NETWORK = contract_data.rinkeby.network_id;
      }
      // console.log('CONTRACT_ID', CONTRACT_ID);
      // console.log('NETWORK', NETWORK);
      const fetchNfts = async () => {
        const nfts = await Web3Api.account.getNFTsForContract({
          address: userAccount,
          token_address: CONTRACT_ID,
          chain: NETWORK,
        });
        setUserNfts(nfts);
        console.log('nfts', nfts);
      };
      fetchNfts();
    }
  }, [userAccount, chainId]);

  useEffect(() => {
    // If no account address is found from Moralis
    // fetch it via window.ethereum
    // This is the problem on page load usually
    if (!account) {
      const fetchAccount = async () => {
        const web3Accounts = await ethereum.request({
          method: 'eth_requestAccounts',
        });
        const web3Account = web3Accounts[0];
        setUserAccount(web3Account);
      };
      fetchAccount();
    } else if (account !== userAccount) {
      // When changing wallets in Metamask, 'account' is updated through Moralis
      setUserAccount(account);
    }
  }, [account]);

  useEffect(() => {
    if (userNfts) {
      console.log('userNfts update', userNfts);
      const fetchNftData = async () => {
        const promises = [];
        for (let x = 0; x < userNfts?.result.length; x++) {
          promises.push(loadNFZTraits(userNfts?.result[x].token_id));
        }
        let values = await Promise.all(promises);
        let mappedValues = values.map((res) => res.data);
        let nfzsLocations = {
          locations: [],
          nolocations: [],
        };
        values.forEach((val) => {
          const data = val.data;
          let hasLocation = false;
          for (let x = 0; x < data?.attributes?.length; x++) {
            if (data.attributes[x].trait_type.toLowerCase() === 'location') {
              hasLocation = true;
              data.location = data.attributes[x].value;
              nfzsLocations.locations.push(data);
              break;
            }
          }
          if (!hasLocation) nfzsLocations.nolocations.push(data);
        });
        console.log('nfzsLocations', nfzsLocations);
        setProcessedNfzs(nfzsLocations);
      };
      fetchNftData();
    }
  }, [userNfts]);

  useEffect(() => {
    console.log('processedNfzs', processedNfzs);
  }, [processedNfzs]);

  const loadNFZTraits = async (zombieId) => {
    if (zombieId && zombieId > 0 && zombieId <= 6666) {
      let token_uri;
      if (chainId === '0x4' && prod === false) {
        token_uri = `https://bnpoulp3kk.execute-api.us-west-2.amazonaws.com/main/metadata/${zombieId}`;
      } else {
        token_uri = `https://api.nicefunzombies.io/metadata/${zombieId}`;
      }
      return axios.get(token_uri);
    }
    return null;
  };

  const dashboardCss = css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 30px auto 0 auto;
    padding: 0 20px;
    max-width: 1310px;
    min-height: calc(100vh - 110px);
    @media (max-width: 700px) {
      margin-top: 100px;
    }

    .green-highlight {
      color: #aff038;
    }

    .dashboard-header {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;

      .checker {
        padding-bottom: 5px;
      }
    }

    .dashboard-info {
      width: 100%;
      margin-top: 40px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      @media (max-width: 960px) {
        flex-direction: column;
        margin-top: 10px;
      }

      .dashboard-item {
        background-color: #151515;
        border-radius: 4px;
        padding: 10px;
        margin: 0 10px 0 0;
        width: 30%;
        &:last-child {
          margin: 0;
        }
        @media (max-width: 960px) {
          width: calc(100% - 20px);
          margin-top: 20px;
          &:last-child {
            margin-top: 20px;
          }
        }
      }

      #chain-info {
        font-size: 14px;
        line-height: 40px;
      }
    }

    #dao {
      font-size: 18px;
      font-weigth: 700;
      line-height: 16px;

      #dao-value {
        margin: 20px 0;
      }

      .subtext {
        font-size: 11px;
        line-height: 16px;
        font-weight: 400;
      }
    }

    #casino {
      font-size: 14px;

      #casino-rewards-wrapper {
        margin-top: 20px;

        .casino-rewards {
          border: 3px solid #ab19ef;
          background: black;
          color: white;
          text-decoration: none;
          padding: 5px 15px;
          cursor: pointer;
          -webkit-transition: border 500ms ease-out;
          -moz-transition: border 500ms ease-out;
          -o-transition: border 500ms ease-out;
          transition: border 500ms ease-out;
          &:hover {
            border: 3px solid #ccee25;
            box-sizing: border-box;
            filter: drop-shadow(0px 0px 4px #ccee25);
          }
        }
      }
    }

    .your-horde {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 10px 0 50px 0;

      .horde-header {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        margin-top: 20px;
      }

      #current-events {
        display: flex;
        flex-direction: row;
        font-size: 14px;
        background-color: #151515;
        border-radius: 4px;
        width: calc(100% - 20px);
        padding: 10px;
        margin: 10px 0;
        @media (max-width: 960px) {
          flex-direction: column;
          width: calc(100% - 20px);
          align-items: center;
        }

        .event-item {
          width: 33%;
          @media (max-width: 960px) {
            width: calc(100% - 20px);
            text-align: center;
          }
        }

        #header {
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
        }

        #time-remaining {
          text-transform: uppercase;
          text-align: center;

          a {
            color: #fff;
          }
        }
      }
    }

    h1 {
      font-family: teko;
      font-size: 45px;
      font-weight: 400;
      line-height: 45px;
      text-transform: uppercase;
      margin-bottom: 0;
    }

    h2 {
      font-family: overpassmono;
      font-size: 14px;
      font-weight: 700;
      line-height: 14px;
      text-transform: uppercase;
      color: #aff038;
      margin-top: 5px;
    }

    #trait-checker,
    #login {
      font-family: overpassmono;
      font-weight: 700;
      font-size: 14px;
      line-height: 21px;
      border: 3px solid #ab19ef;
      background: black;
      color: white;
      padding: 5px 15px;
      cursor: pointer;
      -webkit-transition: border 500ms ease-out;
      -moz-transition: border 500ms ease-out;
      -o-transition: border 500ms ease-out;
      transition: border 500ms ease-out;
      &:hover {
        border: 3px solid #ccee25;
        box-sizing: border-box;
        filter: drop-shadow(0px 0px 4px #ccee25);
      }
      @media (max-width: 960px) {
        font-size: 10px;
      }
    }

    #user-nfts-locations,
    #user-nfts-nolocations {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 10px;
      @media (max-width: 960px) {
        justify-content: center;
      }

      .nft-container {
        width: 135px;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        text-transform: uppercase;
        padding: 0 10px 10px 0;
        margin: 0 10px 10px 0;
        @media (max-width: 960px) {
          width: 100px;
        }

        .nft-img {
          width: 135px;
          height: auto;
          @media (max-width: 960px) {
            width: 100px;
          }
        }

        .casino {
          color: #aff038;
        }
        .school {
          color: #ffa452;
        }
      }
    }

    #challenges {
      a {
        color: lightblue;
      }
    }

    .network-switch {
      margin-left: 5px;
      padding: 2px 5px 0;
      border: 2px solid white;
      border-radius: 4px;
      background: white;
      color: black;
      font-family: overpassmono;
      font-weight: 700;
      text-transform: uppercase;
      cursor: pointer;
    }

    #footer {
      width: 100%;
      margin-top: auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      color: #aff038;

      #footer-img {
        width: 100px;
        height: auto;
      }
      #footer-text {
        font-size: 14px;
        font-weight: 700;
        margin-left: 20px;
        @media (max-width: 960px) {
          font-size: 10px;
        }
      }
    }
  `;

  const herobg = css`
    width: 100%;
  `;

  return (
    <div>
      <div css={herobg}>
        <NavV2 />
      </div>
      <div css={dashboardCss} className="Dashboard">
        <div className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
          </div>
          <div className="checker">
            <ReactModal
              isOpen={showModal}
              contentLabel="Trait Checker"
              onRequestClose={handleCloseModal}
              shouldCloseOnOverlayClick={true}
              className="Modal-TraitChecker"
              overlayClassName="Overlay"
            >
              <TraitChecker prod={prod} />
            </ReactModal>
            <button id="trait-checker" onClick={handleOpenModal}>
              Open Trait Checker
            </button>
          </div>
        </div>
        <div className="dashboard-info">
          <div id="chain-info" className="dashboard-item">
            <h2>Account</h2>
            {!isAuthenticated && (
              <div id="login" onClick={() => authenticate()}>
                Login to see your horde!
              </div>
            )}
            {isAuthenticated && (
              <div>
                <div>
                  Wallet connected: <b>{shortAddress}</b>
                </div>
                <div>
                  Chain: ({contract_data[chainId]?.network_name || 'Unknown'})
                  {chainId !== preferredChain && (
                    <button
                      className="network-switch"
                      onClick={() =>
                        switchNetwork(contract_data[preferredChain]?.chain_id)
                      }
                    >
                      Switch to {contract_data[preferredChain]?.network_name}
                    </button>
                  )}
                  {/* {chainId === '0x1' && chainId !== preferredChain && (
                    <button
                      className="network-switch"
                      onClick={() => switchNetwork('0x4')}
                    >
                      Switch to Rinkeby
                    </button>
                  )}
                  {chainId === '0x4' && chainId !== preferredChain && (
                    <button
                      className="network-switch"
                      onClick={() => switchNetwork('0x1')}
                    >
                      Switch to Ethereum
                    </button>
                  )} */}
                </div>
              </div>
            )}
          </div>
          <div id="dao" className="dashboard-item">
            <h2>NFZ School DAO</h2>
            <div id="dao-value">
              Current Estimate Value:{' '}
              <span className="green-highlight">24ETH</span>
              <br />
              <span className="subtext">(Updated weekly)</span>
            </div>
          </div>
          <div id="casino" className="dashboard-item">
            <h2>Casino Rewards</h2>
            <div id="challenges">
              Check our Discord for the latest casino prizes!
              <div id="casino-rewards-wrapper">
                <a
                  className="casino-rewards"
                  href="https://discord.gg/77VswFkcuY"
                  target="_blank"
                  rel="noreferrer"
                >
                  Roll those dice!
                </a>
              </div>
            </div>
          </div>
        </div>

        {isAuthenticated && (
          <div className="your-horde">
            <div id="current-events">
              <div id="header" className="event-item green-highlight">
                Active Events
              </div>
              <div id="time-remaining" className="event-item">
                <a href="/locations">
                  Casino vs School&nbsp;&nbsp;&nbsp;Ends Jan. 15
                </a>
              </div>
              <div id="prizes-remaining" className="event-item">
                &nbsp;
              </div>
            </div>
            <div className="horde-header">
              <h2>Your horde</h2>
            </div>
            <div id="user-nfts-locations">
              {processedNfzs?.locations?.length > 0 &&
                processedNfzs?.locations.map((nft, index) => (
                  <div className="nft-container" key={index}>
                    <img src={nft?.image} className="nft-img" />
                    <div>
                      #{nft?.zombieId} -{' '}
                      <span className={nft?.location.toLowerCase()}>
                        {nft?.location}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
            {processedNfzs?.nolocations?.length > 0 && <h2>No Location</h2>}
            <div id="user-nfts-nolocations">
              {processedNfzs?.nolocations?.length > 0 &&
                processedNfzs?.nolocations.map((nft, index) => (
                  <div className="nft-container" key={index}>
                    <img src={nft?.image} className="nft-img" />
                    <div>#{nft?.zombieId}</div>
                  </div>
                ))}
            </div>
          </div>
        )}
        <div id="footer">
          <img id="footer-img" src={footerV2} alt="Nice Fun Zombies" />
          <div id="footer-text">
            NICE FUN ZOMBIES {year} - ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
