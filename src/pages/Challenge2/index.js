/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useMoralis, useMoralisWeb3Api, useChain } from 'react-moralis';
import { css } from '@emotion/react';
import { contract_data } from '../../constants/moralis_env';

import Welcome from './Welcome';
import Game from './Game';
import Info from './Info';

function Challenge() {
  let CONTRACT_ID;
  let NETWORK;
  let Web3Api;

  const { Moralis, authenticate, isAuthenticated, user } = useMoralis();
  const { switchNetwork, chainId, account } = useChain();
  const ethereum = window.ethereum;
  if (ethereum) {
    Web3Api = useMoralisWeb3Api();
    Moralis.enableWeb3();
  }

  const [userNfts, setUserNfts] = useState(null);
  const [userAccount, setUserAccount] = useState(account);

  useEffect(() => {
    if (userAccount && Web3Api && chainId) {
      console.log('chainId', chainId);
      console.log('userAccount', userAccount);
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
        const web3Accounts = await window.ethereum.request({
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

  return (
    <div css={containerCss}>
      <div css={challengeCss} className="Challenge">
        <div className="body">
          <Router>
            <Switch>
              <Route path="/challenge2/info">
                <Info
                  authenticate={authenticate}
                  isAuthenticated={isAuthenticated}
                />
              </Route>
              <Route path="/challenge2/game">
                <Game userNfts={userNfts} user={user} />
              </Route>
              <Route path="/">
                <Welcome
                  authenticate={authenticate}
                  isAuthenticated={isAuthenticated}
                  user={user}
                  switchNetwork={switchNetwork}
                  chainId={chainId}
                  account={userAccount}
                />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default Challenge;
