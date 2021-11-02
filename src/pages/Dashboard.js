/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { useMoralis, useMoralisWeb3Api } from 'react-moralis';

function Dashboard() {
  let CONTRACT_ID = '0xeA7500664c4cCb77A89479a1daa75d59e2FBc97f';
  let NETWORK = 'rinkeby';

  const { authenticate, isAuthenticated, user } = useMoralis();
  const Web3Api = useMoralisWeb3Api();

  const [userNfts, setUserNfts] = useState(null);

  useEffect(() => {
    if (user && Web3Api) {
      console.log('user', user);
      console.log('Web3Api', Web3Api);
      const fetchNfts = async () => {
        const nfts = await Web3Api.account.getNFTs({
          address: user.get('ethAddress'),
          token_address: CONTRACT_ID,
          chain: 'rinkeby',
        });
        setUserNfts(nfts);

        console.log('nfts', nfts);
      };
      fetchNfts();
    }
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
        width: 300px;
        padding: 10px;
        margin: 10px;

        .nft-img {
          width: 250px;
          height: auto;
        }
      }
    }
  `;

  return (
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
              <h2>Wallet connected: {user.get('ethAddress')}</h2>
              <div id="user-nfts">
                {userNfts?.result.length > 0 &&
                  userNfts?.result.map((nft, index) => (
                    <div className="nft-container">
                      <img
                        src={JSON.parse(nft.metadata).image}
                        className="nft-img"
                      />
                      <div>nft id: {nft.token_id}</div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
