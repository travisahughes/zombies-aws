/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { useMoralis, useMoralisWeb3Api, useChain } from 'react-moralis';
import { contract_data } from '../constants/moralis_env';
import Hero from '../Components/Hero';
import headerimg from '../assets/bg.jpg';

function Dashboard() {
  // TODO: setup env var
  const prod = false;
  let CONTRACT_ID;
  let NETWORK;

  const { Moralis, authenticate, isAuthenticated, user, refetchUserData } =
    useMoralis();
  const { switchNetwork, chainId, chain, account } = useChain();
  Moralis.enableWeb3();
  const Web3Api = useMoralisWeb3Api();

  const [userNfts, setUserNfts] = useState(null);

  useEffect(() => {
    console.log('zzz account / web3', account, Web3Api);
    if (account && Web3Api) {
      console.log('user', user);
      console.log('chainId', chainId);
      if (chainId === '0x1') {
        CONTRACT_ID = contract_data.mainnet.contract_id;
        NETWORK = contract_data.mainnet.network_id;
      } else {
        CONTRACT_ID = contract_data.rinkeby.contract_id;
        NETWORK = contract_data.rinkeby.network_id;
      }
      console.log('CONTRACT_ID', CONTRACT_ID);
      console.log('NETWORK', NETWORK);
      const fetchNfts = async () => {
        const nfts = await Web3Api.account.getNFTsForContract({
          address: account, // user.get('ethAddress'),
          token_address: CONTRACT_ID,
          chain: NETWORK,
        });
        setUserNfts(nfts);

        console.log('nfts', nfts);
      };
      fetchNfts();
    } else {
      if (isAuthenticated) {
        refetchUserData();
      } else {
        // authenticate();
      }
    }
  }, [account, chainId]);

  useEffect(() => {
    console.log('user change (authenticate?)', user);
    console.log('isAuthenticated', isAuthenticated);
    console.log('account', account);
  }, [user]);

  const dashboardCss = css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;

    margin: 30px auto 20px auto;
    padding: 0 20px;
    max-width: 1310px;

    #login {
      border: 3px solid green;
      padding: 20px;
      cursor: pointer;
    }

    #user-nfts {
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
      padding: 5px;
      border: 2px solid #4035fa;
      border-radius: 4px;
      background: rgb(64, 53, 250);
      background: linear-gradient(
        90deg,
        rgba(64, 53, 250, 1) 0%,
        rgba(68, 42, 164, 1) 48%,
        rgba(55, 0, 128, 1) 100%
      );
      color: white;
      cursor: pointer;
    }
  `;

  const herobg = css`
    width: 100%;
    background-image: url('${headerimg}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  `;

  return (
    <div>
      <div className="content-section" css={herobg}>
        <Hero />
      </div>
      <div css={dashboardCss} className="Dashboard">
        <div className="body">
          <div className="content-section" style={{ color: 'white' }}>
            <h1>Dashboard</h1>
            {!isAuthenticated && (
              <div id="login" onClick={() => authenticate()}>
                Login to see your horde!
              </div>
            )}
            {isAuthenticated && (
              <div>
                <h2>Wallet connected: {account}</h2>
                <h3>
                  Chain ({contract_data[chainId]?.network_name || 'Unknown'})
                </h3>
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
                <h3>Your horde:</h3>
                <div id="user-nfts">
                  {userNfts?.result.length > 0 &&
                    userNfts?.result.map((nft, index) => (
                      <div className="nft-container" key={index}>
                        <img
                          src={JSON.parse(nft?.metadata)?.image}
                          className="nft-img"
                        />
                        <div>NFZ #{nft?.token_id}</div>
                      </div>
                    ))}
                </div>
                <h3>Challenges:</h3>
                <div id="challenges">
                  <a href="/challenge">Challenge #1 - (Nov. 15 - Nov. 19)</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
