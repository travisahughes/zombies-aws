import { Router, Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useState, useEffect } from 'react';
import ArenaPage from './Arena';
import BattlePage from './Battle';
import SelectionPage from './Selection';
import SearchPage, { sleep } from './Search';
import { useChain, useMoralis, useMoralisWeb3Api } from 'react-moralis';
import { contract_data } from '../../constants/moralis_env';
import axios from 'axios';

export default function Arena() {
  const history = useHistory();
  const { switchNetwork, chainId, account } = useChain();

  const [roundDisplay, setRoundDisplay] = useState('selection');
  const [roundInfo, setRoundInfo] = useState(null);
  const [loading, setLoading] = useState(null);
  const [userAccount, setUserAccount] = useState(account);
  const [attacking, setAttacking] = useState(account);
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

  const headers = {
    'Content-Type': 'application/json',
  };

  const setAttackAnimation = async () => {
    await sleep(2000);
    setAttacking(true);
  };

  const initGame = async () => {
    setLoading(true);
    const endpointUrl =
      'https://bnpoulp3kk.execute-api.us-west-2.amazonaws.com/main/game-init';
    const payload = {
      walletId: userAccount,
      zombies: Object.values(slots),
    };
    const response = await axios.post(endpointUrl, payload, headers);
    console.log('---------initGameResponse---------');
    console.log(response.data);

    setRoundDisplay('selection');
    setRoundInfo(response.data.body);
    setLoading(false);
    history.push('/arena/battle');
  };

  const nextRound = async (champion) => {
    const endpointUrl =
      'https://bnpoulp3kk.execute-api.us-west-2.amazonaws.com/main/game';
    const payload = {
      walletId: userAccount,
      champion,
    };

    const response = await axios.post(endpointUrl, payload, headers);
    console.log(response);
    setRoundInfo(response.data);
    setRoundDisplay('fight');
    await setAttackAnimation();
    await sleep(3000);

    if (response.data.isConcluded === 0) {
      setRoundDisplay('selection');
      console.log('fightround');
    } else {
      console.log('winner');
      setRoundDisplay('winner');
    }
    setAttacking(false);
  };

  const enqueue = async () => {
    const endpointUrl =
      'https://8dxqvg8gf9.execute-api.us-west-2.amazonaws.com/prod/v1/enqueue';
    const payload = {
      from: userAccount,
      eventType: 'EBattle',
    };
    const response = await axios.post(endpointUrl, payload, headers);
    console.log(response);
    history.push('/arena/selection');
  };

  const getGameStage = async () => {
    const endpointUrl = `https://bnpoulp3kk.execute-api.us-west-2.amazonaws.com/main/game/${account}`;
    const response = await axios.get(endpointUrl, headers);
    setRoundInfo(response.data);
    return response.data;
  };

  useEffect(() => {
    if (account) {
      getGameStage();
    }
  }, [account]);

  const continueOrStartNewRound = async () => {
    setLoading(true);

    const gameStage = await getGameStage();

    const { currentRound } = gameStage;

    if (currentRound && currentRound.round && currentRound.round !== 3) {
      setRoundInfo(gameStage);
      history.push('/arena/battle');
    } else {
      enqueue();
    }
    setLoading(false);
  };

  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/arena/battle">
            <BattlePage
              slots={slots}
              nextRound={nextRound}
              roundInfo={roundInfo}
              account={account}
              display={roundDisplay}
              loading={loading}
              attacking={attacking}
            />
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
              loading={loading}
            />
          </Route>
          <Route path="/">
            <ArenaPage enqueue={continueOrStartNewRound} loading={loading} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
