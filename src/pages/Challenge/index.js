/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { useMoralis, useMoralisWeb3Api } from 'react-moralis';
import { css } from '@emotion/react';

import Nav from '../../Components/Nav';
import Welcome from './Welcome';
import Game from './Game';
import Results from './Results';

function Challenge() {
  const [activePage, setActivePage] = useState('welcome');
  const { authenticate, isAuthenticated, user } = useMoralis();
  let CONTRACT_ID = '0xeA7500664c4cCb77A89479a1daa75d59e2FBc97f';
  let NETWORK = 'rinkeby';

  const Web3Api = useMoralisWeb3Api();

  const [userNfts, setUserNfts] = useState(null);

  useEffect(() => {
    if (user && Web3Api) {
      console.log('user', user);
      const fetchNfts = async () => {
        const nfts = await Web3Api.account.getNFTs({
          address: user.get('ethAddress'),
          token_address: CONTRACT_ID,
          chain: NETWORK,
        });
        setUserNfts(nfts);

        console.log('nfts', nfts);
      };
      fetchNfts();
    }
  }, [user]);

  const containerCss = css`
    margin: 0;
  `;

  const challengeCss = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .body {
      width: 100%;
    }
  `;

  let activePageComponent;
  switch (activePage) {
    case 'game':
      activePageComponent = <Game setActivePage={setActivePage} />;
      break;
    case 'results':
      activePageComponent = <Results setActivePage={setActivePage} />;
      break;
    default:
      activePageComponent = (
        <Welcome
          setActivePage={setActivePage}
          authenticate={authenticate}
          isAuthenticated={isAuthenticated}
        />
      );
  }

  return (
    <div css={containerCss}>
      {/* <Nav /> */}
      <div css={challengeCss} className="Challenge">
        <div className="body">{activePageComponent}</div>
      </div>
    </div>
  );
}

export default Challenge;
