/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import axios from 'axios';
import { useMoralis, useMoralisWeb3Api, useChain } from 'react-moralis';

import NavV2 from '../Components/NavV2';
import TraitChecker from '../Components/TraitChecker';
import NFZPrizeClaim from '../Components/NFZPrizeClaim';

import { contract_data } from '../constants/moralis_env';
import contractAddress from '../constants/contracts.json';
import PolyGameMechanicsABI from '../constants/abis/NFZGameMechanicsV2.json';
import { prizes } from '../constants/prizes';
import { getFreeClaimProof } from '../utils';

import footerV2 from '../assets/footerV2.png';
import keycard_icon from '../assets/icons/keycard_icon.png';
import keycard_reward from '../assets/dashboard/keycard_reward.png';
import nfz_reward from '../assets/dashboard/nfz_reward.png';
import silhouette_reward from '../assets/dashboard/silhouette_reward.png';
import zeneca_reward from '../assets/dashboard/zeneca_reward.png';

function Dashboard() {
  // TODO: setup env var
  const prod = true;
  let NFZ_CONTRACT_ID;
  let KEYCARD_CONTRACT_ID;
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
  const [userKeycards, setUserKeycards] = useState(0);
  const [processedNfzs, setProcessedNfzs] = useState(null);
  const [userAccount, setUserAccount] = useState(account);
  const [showModal, setShowModal] = useState(false);
  const [shortAddress, setShortAddress] = useState(null);
  const [showPrizesRemaining, setShowPrizesRemaining] = useState(false);
  const [schoolPrizeCounts, setSchoolPrizeCounts] = useState({});
  const [casinoPrizeCounts, setCasinoPrizeCounts] = useState({});
  const [userTotalRewards, setUserTotalRewards] = useState(0);
  const [userRewards, setUserRewards] = useState({
    1: 0, // NFZ
    2: 0, // Zeneca token
    3: 0, // Custom NFZ
  });

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

      // if (chainId === '0x1') {
      //   NFZ_CONTRACT_ID = contract_data.mainnet.contract_id;
      //   NETWORK = contract_data.mainnet.network_id;
      // } else {
      //   NFZ_CONTRACT_ID = contract_data.rinkeby.contract_id;
      //   NETWORK = contract_data.rinkeby.network_id;
      // }
      // console.log('NFZ_CONTRACT_ID', NFZ_CONTRACT_ID);
      // console.log('NETWORK', NETWORK);

      // Always pull mainnet info. If you need to test with test nets, use above logic
      NFZ_CONTRACT_ID = contract_data.mainnet.contract_id;
      KEYCARD_CONTRACT_ID = contractAddress.POLY_TOKENS;
      NETWORK = contract_data.mainnet.network_id;

      const fetchNfts = async () => {
        const gameMechanicsOptions = {
          chain: contract_data.polygon.chain_id,
          address: contractAddress.GAME_MECHANICS,
          abi: PolyGameMechanicsABI.abi,
        };
        const nfts = await Web3Api.account.getNFTsForContract({
          address: userAccount,
          token_address: NFZ_CONTRACT_ID,
          chain: NETWORK,
        });
        setUserNfts(nfts);
        console.log('nfts', nfts);

        const keycards = await Web3Api.account.getNFTsForContract({
          address: userAccount,
          token_address: KEYCARD_CONTRACT_ID,
          chain: contract_data.polygon.chain_id,
        });
        console.log('keycards', keycards);

        const schoolPrizes = await Moralis.Web3API.native.runContractFunction({
          ...gameMechanicsOptions,
          function_name: 'getLocationPrizeArray',
          params: { _locationId: 1 },
        });

        const casinoPrizes = await Moralis.Web3API.native.runContractFunction({
          ...gameMechanicsOptions,
          function_name: 'getLocationPrizeArray',
          params: { _locationId: 2 },
        });

        const rewards = await Moralis.Web3API.native.runContractFunction({
          ...gameMechanicsOptions,
          function_name: 'getUserRewards',
          params: { account: userAccount },
        });

        const schoolPrizeCounts = {};
        const casinoPrizeCounts = {};
        schoolPrizes.prizes.forEach((el) => {
          schoolPrizeCounts[prizes.generalPrizes[el]] = schoolPrizeCounts[
            prizes.generalPrizes[el]
          ]
            ? (schoolPrizeCounts[prizes.generalPrizes[el]] += 1)
            : 1;
        });
        casinoPrizes.prizes.forEach((el) => {
          casinoPrizeCounts[prizes.generalPrizes[el]] = casinoPrizeCounts[
            prizes.generalPrizes[el]
          ]
            ? (casinoPrizeCounts[prizes.generalPrizes[el]] += 1)
            : 1;
        });

        let tmpRewards = {};
        rewards.forEach((rewardId) => {
          if (tmpRewards[rewardId]) {
            tmpRewards[rewardId]++;
          } else {
            tmpRewards[rewardId] = 1;
          }
        });

        keycards.result?.forEach((token) => {
          const { amount, token_id } = token;
          if (token_id === '0') {
            setUserKeycards(amount);
          }
          console.log('userKeycards', amount);
        });

        console.log('School Prize', schoolPrizeCounts);
        console.log('Casino Prizes', casinoPrizeCounts);
        console.log('tmpRewards', tmpRewards);
        setSchoolPrizeCounts(schoolPrizeCounts);
        setCasinoPrizeCounts(casinoPrizeCounts);
        setUserRewards(tmpRewards);
        setUserTotalRewards(rewards?.length || 0);
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

  const toggleRemainingPrizes = () => {
    setShowPrizesRemaining(!showPrizesRemaining);
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

    .glow-button {
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

    #current-events {
      display: flex;
      flex-direction: column;
      background-color: #151515;
      border-radius: 4px;
      width: calc(100% - 20px);
      padding: 10px;
      margin: 10px 0;
      @media (max-width: 960px) {
        flex-direction: column;
        width: calc(100% - 20px);
        align-items: center;
        font-size: 12px;
      }

      #top-row {
        display: flex;
        flex-direction: row;
        font-size: 14px;
        @media (max-width: 960px) {
          font-size: 12px;
          width: 100%;
          flex-direction: column;
        }

        .event-item {
          width: 33%;
          @media (max-width: 960px) {
            width: calc(100% - 20px);
            text-align: left;
            margin-bottom: 5px;
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
          @media (max-width: 960px) {
            text-align: left;
          }

          a {
            color: #fff;
          }
        }

        #prizes-remaining {
          text-align: right;
          cursor: pointer;
          -webkit-transition: color 500ms ease-out;
          -moz-transition: color 500ms ease-out;
          -o-transition: color 500ms ease-out;
          transition: color 500ms ease-out;
          &:hover {
            color: #ccee25;
          }
          @media (max-width: 960px) {
            text-align: left;
          }
        }
      }

      #bottom-row {
        margin: 20px 0 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 14px;
        @media (max-width: 960px) {
          flex-direction: column;
          width: 100%;
        }
      }
      #bottom-row.hidden {
        display: none;
      }
    }

    .dashboard-info {
      width: 100%;
      margin: 10px 0;
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

        .keycards {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          align-content: center;

          #keycard-icon {
            width: 32px;
            height: auto;
            margin: 0 10px 0 0;
          }
        }
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

    .your-rewards {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 20px 0 10px 0;

      .rewards {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 10px;
        @media (max-width: 960px) {
          justify-content: center;
        }
        .reward-box {
          text-align: center;
          padding: 0 20px 0 0;
          @media (max-width: 960px) {
            font-size: 14px;
          }

          img {
            height: 175px;
            width: auto;
            @media (max-width: 960px) {
              height: 100px;
            }
          }
        }
        .reward-claim {
          margin-left: 10px;
          padding: 10px 10px 10px 25px;
          border-left: 1px solid #4c4c4c;

          .claim-button {
            font-size: 14px;
          }
        }
      }

      h2 {
        font-size: 18px;
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
      }

      h2 {
        font-size: 18px;
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
    background-color: #151515;
    margin: 0 auto;
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
        <div id="current-events">
          <div id="top-row">
            <div id="header" className="event-item green-highlight">
              Active Events
            </div>
            <div id="time-remaining" className="event-item">
              <a href="/challenge2">
                Challenge #2&nbsp;&nbsp;&nbsp;Ends Jan. 23
              </a>
              <br />
              <a href="/locations">
                Casino vs School&nbsp;&nbsp;&nbsp;Ends Jan. 31
              </a>
            </div>
            <div
              id="prizes-remaining"
              className="event-item"
              onClick={toggleRemainingPrizes}
            >
              + Show remaining prizes
            </div>
          </div>
          <div id="bottom-row" className={showPrizesRemaining ? '' : 'hidden'}>
            <div>
              <h3>School</h3>
              <div>All prizes have been claimed</div>
            </div>
            <div>
              <h3>Casino</h3>
              <table>
                <tbody>
                  <tr>
                    <td>Custom Nice Fun Zombie:</td>
                    <td>{casinoPrizeCounts['Custom Nice Fun Zombie'] || 0}</td>
                  </tr>
                  <tr>
                    <td>Generation 1 Keycard:</td>
                    <td>{casinoPrizeCounts['Generation 1 Keycard'] || 0}</td>
                  </tr>
                  <tr>
                    <td>Nice Fun Zombie NFT (unrevealed):</td>
                    <td>
                      {casinoPrizeCounts['Nice Fun Zombie NFT (unrevealed)'] ||
                        0}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
                  Network: {contract_data[chainId]?.network_name || 'Unknown'}
                  {/* {chainId !== preferredChain && (
                    <button
                      className="network-switch"
                      onClick={() =>
                        switchNetwork(contract_data[preferredChain]?.chain_id)
                      }
                    >
                      Switch to {contract_data[preferredChain]?.network_name}
                    </button>
                  )} */}
                </div>
                <div className="keycards">
                  <img id="keycard-icon" src={keycard_icon} alt="Keycard" />
                  <div>
                    Keycards: <b>{userKeycards}</b>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div id="dao" className="dashboard-item">
            <h2>NFZ School DAO</h2>
            <div id="dao-value">
              Current Estimate Value:{' '}
              <span className="green-highlight">52ETH</span>
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

        {isAuthenticated && userTotalRewards > 0 && (
          <div className="your-rewards">
            <h2>Rewards</h2>
            <div className="rewards">
              {userTotalRewards > 0 && userRewards[1] > 0 && (
                <div className="reward-box">
                  <img
                    src={nfz_reward}
                    alt="NFZ Reward"
                    className="reward-image"
                  />
                  <div className="reward-text">{userRewards[1]} NFZs</div>
                </div>
              )}
              {userTotalRewards > 0 && userRewards[2] > 0 && (
                <div className="reward-box">
                  <img
                    src={zeneca_reward}
                    alt="Zeneca Reward"
                    className="reward-image"
                  />
                  <div className="reward-text">
                    {userRewards[2]} Zeneca Tokens
                  </div>
                </div>
              )}
              {userTotalRewards > 0 && userRewards[3] > 0 && (
                <div className="reward-box">
                  <img
                    src={keycard_reward}
                    alt="Keycard Reward"
                    className="reward-image"
                  />
                  <div className="reward-text">{userRewards[3]} Keycards</div>
                </div>
              )}
              {userTotalRewards > 0 && userRewards[4] > 0 && (
                <div className="reward-box">
                  <img
                    src={silhouette_reward}
                    alt="Silhouette Reward"
                    className="reward-image"
                  />
                  <div className="reward-text">
                    {userRewards[4]} Custom NFZs
                  </div>
                </div>
              )}
              {userTotalRewards > 0 && userRewards[1] > 0 && (
                <NFZPrizeClaim
                  userAccount={userAccount}
                  Web3Api={Web3Api}
                  Moralis={Moralis}
                  chainId={chainId}
                  switchNetwork={switchNetwork}
                />
              )}
            </div>
          </div>
        )}
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
