/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useMoralis, useMoralisWeb3Api, useChain } from 'react-moralis';
import { contract_data } from '../constants/moralis_env';
import NavV2 from '../Components/NavV2';
import TraitChecker from '../Components/TraitChecker';
import ReactModal from 'react-modal';

function Dashboard() {
  // TODO: setup env var
  const prod = false;
  let CONTRACT_ID;
  let NETWORK;
  let Web3Api;

  const { Moralis, authenticate, isAuthenticated, user } = useMoralis();
  const { switchNetwork, chainId, chain, account } = useChain();
  const ethereum = window.ethereum;
  if (ethereum) {
    Web3Api = useMoralisWeb3Api();
    Moralis.enableWeb3();
  }

  const [userNfts, setUserNfts] = useState(null);
  const [processedNfzs, setProcessedNfzs] = useState(null);
  const [userAccount, setUserAccount] = useState(account);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (userAccount && chainId && Web3Api) {
      console.log(`zzz userAccount ${userAccount} -- chainId ${chainId}`);
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
      console.log('userNfts update!', userNfts);
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
    margin: 30px auto 20px auto;
    padding: 0 20px;
    max-width: 1310px;
    @media (max-width: 640px) {
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

      .dashboard-item {
        background: #101010;
        padding: 10px;
        margin: 0 10px 0 0;
        width: 30%;
        &:last-child {
          margin: 0;
        }
      }

      #chain-info {
        font-size: 14px;
        line-height: 40px;
      }
    }

    .your-horde {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 40px;

      .horde-header {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
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
      font-size: 18px;
      font-weight: 700;
      line-height: 26px;
      text-transform: uppercase;
      color: #aff038;
      margin-top: 5px;
    }

    #login {
      border: 3px solid #aff038;
      padding: 20px;
      cursor: pointer;
    }

    #trait-checker {
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
    }

    #user-nfts-locations,
    #user-nfts-nolocations {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      .nft-container {
        width: 100px;
        padding: 10px;
        margin: 0 10px 10px;

        .nft-img {
          width: 100px;
          height: auto;
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
              <TraitChecker />
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
                <div>Wallet connected: {userAccount}</div>
                <div>
                  Chain: ({contract_data[chainId]?.network_name || 'Unknown'})
                  {chainId === '0x1' && (
                    <button
                      className="network-switch"
                      onClick={() => switchNetwork('0x4')}
                    >
                      Switch to Rinkeby
                    </button>
                  )}
                  {chainId === '0x4' && (
                    <button
                      className="network-switch"
                      onClick={() => switchNetwork('0x1')}
                    >
                      Switch to Ethereum
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
          <div id="dao" className="dashboard-item">
            <h2>DAO</h2>
            <div id="dao-value">
              NFZ School DAO: 24ETH
              <br />
              Current Estimated Value (Updated weekly)
            </div>
          </div>
          <div id="events" className="dashboard-item">
            <h2>Active Events</h2>
            <div id="challenges">
              <a href="/locations">Locations - (Dec. 20 - Jan. 13)</a>
            </div>
          </div>
        </div>

        {isAuthenticated && (
          <div className="your-horde">
            <div className="horde-header">
              <h2>Your horde</h2>
            </div>
            <div id="user-nfts-locations">
              {processedNfzs?.locations?.length > 0 &&
                processedNfzs?.locations.map((nft, index) => (
                  <div className="nft-container" key={index}>
                    <img src={nft?.image} className="nft-img" />
                    <div>
                      #{nft?.zombieId} - {nft?.location}
                    </div>
                  </div>
                ))}
            </div>
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
      </div>
    </div>
  );
}

export default Dashboard;
