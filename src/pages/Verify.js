/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import qs from 'qs';
import axios from 'axios';
import { useMoralis, useMoralisWeb3Api, useChain } from 'react-moralis';

import { contract_data } from '../constants/moralis_env';
import contractAddress from '../constants/contracts.json';

import bg from '../assets/challenge/challenge-bg.png';

function Verify({ location }) {
  // TODO: setup env var
  const prod = true;
  const VERIFY_SAVE_URL = 'https://api.nicefunzombies.io/verify';
  let Web3Api;
  // let NFZ_CONTRACT_ID;
  // let NETWORK;

  const { Moralis, authenticate, isAuthenticated } = useMoralis();
  const { chainId, account } = useChain();
  const ethereum = window.ethereum;
  if (ethereum) {
    Web3Api = useMoralisWeb3Api();
    Moralis.enableWeb3();
  }

  // const [userNfts, setUserNfts] = useState(null);
  // const [processedNfzs, setProcessedNfzs] = useState(null);
  const [userAccount, setUserAccount] = useState(account);
  const [shortAddress, setShortAddress] = useState(null);
  const [qsDiscord, setQsDiscord] = useState(null);
  const [validUrl, setValidUrl] = useState(false);

  useEffect(() => {
    console.log('zzz location', location);
    console.log(`zzz isAuthenticated: ${isAuthenticated}`);
    const querystring = qs.parse(location.search, {
      ignoreQueryPrefix: true,
      decoder: (c) => c,
    }).discord;

    console.log(`querystring: ${querystring}, qsDiscord: ${qsDiscord}`);
    if (querystring && querystring !== qsDiscord) {
      setQsDiscord(querystring);
      setValidUrl(true);
    }
  }, []);

  useEffect(() => {
    if (userAccount && chainId && Web3Api) {
      console.log(`zzz userAccount: ${userAccount}`);
      if (userAccount.length > 25) {
        setShortAddress(
          userAccount.substring(0, 6) +
            '...' +
            userAccount.substring(userAccount.length - 4, userAccount.length)
        );
      }

      // NOT FETCHING NFTS -- ANYONE CAN VERIFY
      // Always pull mainnet info. If you need to test with test nets, use above logic
      // NFZ_CONTRACT_ID = contract_data.mainnet.contract_id;
      // NETWORK = contract_data.mainnet.network_id;

      // const fetchNfts = async () => {
      //   const nfts = await Web3Api.account.getNFTsForContract({
      //     address: userAccount,
      //     token_address: NFZ_CONTRACT_ID,
      //     chain: NETWORK,
      //   });
      //   setUserNfts(nfts);
      //   console.log('nfts', nfts);
      // };

      // fetchNfts();
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

  // NOT FETCHING NFTS RIGHT NOW
  // useEffect(() => {
  //   if (userNfts) {
  //     console.log('userNfts update', userNfts);
  //     const fetchNftData = async () => {
  //       const promises = [];
  //       for (let x = 0; x < userNfts?.result.length; x++) {
  //         promises.push(loadNFZTraits(userNfts?.result[x].token_id));
  //       }
  //       let values = await Promise.all(promises);
  //       let mappedValues = values.map((res) => res.data);
  //       let nfzsLocations = {
  //         locations: [],
  //         nolocations: [],
  //       };
  //       values.forEach((val) => {
  //         const data = val.data;
  //         let hasLocation = false;
  //         for (let x = 0; x < data?.attributes?.length; x++) {
  //           if (data.attributes[x].trait_type.toLowerCase() === 'location') {
  //             hasLocation = true;
  //             data.location = data.attributes[x].value;
  //             nfzsLocations.locations.push(data);
  //             break;
  //           }
  //         }
  //         if (!hasLocation) nfzsLocations.nolocations.push(data);
  //       });
  //       console.log('nfzsLocations', nfzsLocations);
  //       setProcessedNfzs(nfzsLocations);
  //     };
  //     fetchNftData();
  //   }
  // }, [userNfts]);

  // useEffect(() => {
  //   console.log('processedNfzs', processedNfzs);
  // }, [processedNfzs]);

  // const loadNFZTraits = async (zombieId) => {
  //   if (zombieId && zombieId > 0 && zombieId <= 6666) {
  //     let token_uri;
  //     if (chainId === '0x4' && prod === false) {
  //       token_uri = `https://bnpoulp3kk.execute-api.us-west-2.amazonaws.com/main/metadata/${zombieId}`;
  //     } else {
  //       token_uri = `https://api.nicefunzombies.io/metadata/${zombieId}`;
  //     }
  //     return axios.get(token_uri);
  //   }
  //   return null;
  // };

  const verify = async (evt) => {
    evt.target.disabled = true;
    evt.target.innerHTML = 'Saving...';

    const payload = {
      walletAddress: userAccount,
      shh: qsDiscord,
    };
    const response = await axios.post(VERIFY_SAVE_URL, payload);
    console.log('save response', response);
    evt.target.innerHTML = "You're verified!";
  };

  const verifyCss = css`
    background-image: url(${bg});
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0 auto;
    padding: 0 20px;
    min-height: 100vh;
    text-align: center;

    h2 {
      margin-top: 0;
    }

    .green-highlight {
      color: #aff038;
    }

    .glow-button {
      font-family: overpassmono;
      font-size: 14px;
      border: 3px solid #ab19ef;
      background: black;
      color: white;
      padding: 10px 15px;
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

    .verify-info {
      width: 550px;
      background-color: #151515;
      border: 1px solid #222222;
      border-radius: 3px;
      margin: 20vh auto;
      padding: 30px 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 960px) {
        width: calc(100% - 20px);
      }

      #connect-button {
        text-align: center;
      }

      .verify-item {
        background-color: #151515;
        border-radius: 4px;
        margin: 0 10px 0 0;
        width: 100%;
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
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 14px;
        line-height: 40px;

        #login {
          width: 260px;
          &:hover {
            box-sizing: content-box;
          }
        }

        #invalid {
          a {
            text-decoration: none;
          }
          #discord {
            width: 260px;
            margin-top: 30px;
            &:hover {
              box-sizing: content-box;
            }
          }
        }

        #wallet-info,
        #invalid {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }
  `;

  return (
    <div css={verifyCss}>
      <div className="verify-info">
        <div id="chain-info" className="verify-item">
          <h2>Connect Your Discord Account</h2>
          {(!isAuthenticated || !userAccount) && (
            <div
              id="login"
              className="glow-button"
              onClick={() => authenticate()}
            >
              Connect your wallet to verify!
            </div>
          )}
          {isAuthenticated && userAccount && validUrl && (
            <div id="wallet-info">
              <div>
                Wallet connected: <b>{shortAddress}</b>
              </div>
              <button
                id="connect-button"
                className="glow-button"
                onClick={(e) => verify(e)}
              >
                Verify!
              </button>
            </div>
          )}
          {!validUrl && (
            <div id="invalid">
              <div>
                Invalid verify link.
                <br />
                Please contact us in the #zomb-support channel on Discord.
              </div>
              <a href="https://www.discord.com">
                <div id="discord" className="glow-button">
                  Contact us on Discord!
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Verify;
