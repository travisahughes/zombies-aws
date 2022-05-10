import { Router, Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useState, useEffect } from 'react';
import ArenaPage from './Arena';
import BattlePage from './Battle';
import SelectionPage from './Selection';
import SearchPage from './Search';
import { useChain, useMoralis, useMoralisWeb3Api } from 'react-moralis';
import { contract_data } from '../../constants/moralis_env';

export default function Arena() {
  const history = useHistory();
  const { switchNetwork, chainId, account } = useChain();

  const [userAccount, setUserAccount] = useState(account);
  const [userNfts, setUserNfts] = useState(null);
  const [slots, setSlots] = useState({
    slot1: null,
    slot2: null,
    slot3: null,
    slot4: null,
    slot5: null,
  });

  let CONTRACT_ID;
  let NETWORK;
  let Web3Api;

  const {
    Moralis,
    authenticate,
    isAuthenticated,
    user,
    web3,
    isWeb3Enabled,
    enableWeb3,
  } = useMoralis();

  const ethereum = window.ethereum;
  if (ethereum) {
    Web3Api = useMoralisWeb3Api();
  }

  useEffect(() => {
    if (userAccount && Web3Api && chainId) {
      enableWeb3();
      // console.log('chainId', chainId);
      console.log('userAccount', userAccount);
      if (chainId === '0x1' || chainId === '0x89') {
        CONTRACT_ID = contract_data.mainnet.contract_id;
        NETWORK = contract_data.mainnet.network_id;
      } else {
        CONTRACT_ID = contract_data.rinkeby.contract_id;
        NETWORK = contract_data.rinkeby.network_id;
      }

      const fetchNfts = async () => {
        const nfts = await Web3Api.account.getNFTsForContract({
          address: userAccount,
          token_address: CONTRACT_ID,
          chain: NETWORK,
        });
        // const tokens = await Web3Api.account.getNFTsForContract({
        //   address: userAccount,
        //   token_address: POLY_TOKENS_ADDRESS,
        //   chain: POLY_TOKENS_CHAIN_ID,
        // });
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

  const initGame = async () => {
    // TODO add web3 interaction here

    history.push('/arena/search');
  };

  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/arena/battle">
            <BattlePage slots={slots} />
          </Route>
          <Route path="/arena/search">
            <SearchPage />
          </Route>
          <Route path="/arena/selection">
            <SelectionPage
              userNfts={userNfts}
              slots={slots}
              setSlots={setSlots}
              initGame={initGame}
            />
          </Route>
          <Route path="/">
            <ArenaPage initGame={initGame} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
