import { Router, Switch, Route } from 'react-router-dom';
import { useMoralis, useMoralisWeb3Api, useChain } from 'react-moralis';
import CasinoPage from './Casino';
import CasinoResultPage from './CasinoResult';
import SplitPathPage from './SplitPath';
import { useHistory } from 'react-router';
import { useState, useEffect } from 'react';
import { contract_data } from '../../constants/moralis_env';
//IMPORT ABI
import PolyTokensABI from '../../constants/abis/NFZMechanicTokens.json';
import PolyGameMechanicsABI from '../../constants/abis/NFZGameMechanics.json';
import contractAddress from '../../constants/contracts.json';
import { prizes } from '../../constants/prizes';
import SchoolPage from './School';
import SchoolResultPage from './SchoolResult';
export default function Location() {
  const [polyTokensContract, setPolyTokensContract] = useState(null);

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
  const { switchNetwork, chainId, account } = useChain();
  const ethereum = window.ethereum;
  if (ethereum) {
    Web3Api = useMoralisWeb3Api();
  }
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectedZombies, setSelectedZombies] = useState([]);
  const [userNfts, setUserNfts] = useState(null);
  const [userKeycards, setUserKeycards] = useState(0);
  const [userAccount, setUserAccount] = useState(account);
  const [userRewards, setUserRewards] = useState(null);
  const history = useHistory();

  useEffect(() => {
    if (userAccount && Web3Api && chainId) {
      enableWeb3();
      console.log('chainId', chainId);
      console.log('userAccount', userAccount);
      if (chainId === '0x1') {
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
        const tokens = await Web3Api.account.getNFTsForContract({
          address: user.get('ethAddress'),
          token_address: contractAddress.POLY_TOKENS,
          chain: 'mumbai',
        });
        setUserNfts(nfts);
        keyCardParse(tokens);
        console.log('polyTokens', tokens);
        console.log('nfts', nfts);
      };
      fetchNfts();

      const getLocationData = async () => {};
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

  useEffect(() => {
    if (isWeb3Enabled) {
      console.log('enabling events');
      const Web3 = require('web3');

      web3.setProvider(web3.currentProvider);

      const polyTokensContract = new web3.eth.Contract(
        PolyTokensABI.abi,
        contractAddress.POLY_TOKENS
      );

      const gameMechanicsContract = new web3.eth.Contract(
        PolyGameMechanicsABI.abi,
        contractAddress.GAME_MECHANICS
      );

      const locationData = async () => {
        const gameMechanicsOptions = {
          contractAddress: contractAddress.GAME_MECHANICS,

          abi: PolyGameMechanicsABI.abi,
        };

        const casinoStruct = await Moralis.executeFunction({
          functionName: 'returnStruct',
          params: { _locationId: 2 },
          ...gameMechanicsOptions,
        });
        const schoolStruct = await Moralis.executeFunction({
          functionName: 'returnStruct',
          params: { _locationId: 1 },
          ...gameMechanicsOptions,
        });

        const schoolPrizes = await Moralis.executeFunction({
          functionName: 'getLocationPrizeArray',
          params: { _locationId: 1 },
          ...gameMechanicsOptions,
        });
        const casinoPrizes = await Moralis.executeFunction({
          functionName: 'getLocationPrizeArray',
          params: { _locationId: 2 },
          ...gameMechanicsOptions,
        });
        console.log('casino', casinoStruct);
        console.log('school', schoolStruct);
        console.log('school prizes', schoolPrizes.prizes);
        console.log('casino prizes', casinoPrizes.prizes);
        const counts = {};

        schoolPrizes.prizes.forEach((el) => {
          counts[prizes.generalPrizes[el]] = counts[prizes.generalPrizes[el]]
            ? (counts[prizes.generalPrizes[el]] += 1)
            : 1;
        });
        console.log(counts);
      };

      locationData();

      setPolyTokensContract(polyTokensContract);

      const maticweb3 = new Web3(
        new Web3.providers.WebsocketProvider(
          'wss://speedy-nodes-nyc.moralis.io/2c972d75afae6cd6989c4928/polygon/mumbai/ws'
        )
      );

      const gameMechanicsWSS = new maticweb3.eth.Contract(
        PolyGameMechanicsABI.abi,
        contractAddress.GAME_MECHANICS
      );

      gameMechanicsWSS.events
        .EPrizes()
        .on('data', function (event) {
          const { userPrizes, from, location } = event.returnValues;

          if (from.toLowerCase() != userAccount.toLowerCase()) return;

          console.log('PRIZES');
          console.log(event);
          console.log(
            `user prizes - ${userPrizes}, from - ${from}, location - ${location}`
          );
          const prizeIds = userPrizes.map(Number);
          const userRewards = {
            generalReward: prizes.generalPrizes[prizeIds[0]],
            specialReward: prizes.specialPrizes[prizeIds[1]],
          };
          setUserRewards(userRewards);

          history.push('/locations/casino-result');

          console.log('------------------------------');
        })
        .on('error', function (error, receipt) {
          // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
          console.log('event listener error', error);
        });
      gameMechanicsWSS.events
        .ELocationSet({})
        .on('data', function (event) {
          console.log(
            `New Location Event: Send ${event?.returnValues?.tokenIds} to Location #${event?.returnValues?.location}\n\n`
          );
          // console.log('event data', event)
          console.log('------------------------------');
        })
        .on('error', function (error, receipt) {
          // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
          console.log('event listener error', error);
        });
    }
  }, [isWeb3Enabled]);

  const useKeyCard = () => {
    let keyCardAmount = userKeycards;
    keyCardAmount--;
    setUserKeycards(keyCardAmount);
    console.log('keyCard amount', keyCardAmount);
  };
  const keyCardParse = (tokens) => {
    tokens.result?.forEach((token) => {
      const { amount, token_id } = token;
      console.log(`tokenId ${token_id} - amount ${amount}`);
      token_id === '0' ? setUserKeycards(amount) : null;
      console.log('userKeycards', amount);
    });
  };
  const zombieSelect = (metadata, id) => {
    if (selectedIds.includes(metadata.zombieId)) {
      const _ids = [...selectedIds].filter((z) => z != metadata.zombieId);
      const _selectedZombies = [...selectedZombies].filter((md) => {
        return md.zombieId != metadata.zombieId;
      });
      setSelectedZombies(_selectedZombies);
      setSelectedIds(_ids);

      return;
    } else {
      if (selectedIds.length >= 6) return;

      const _ids = [...selectedIds];
      const _selectedZombies = [...selectedZombies];
      _selectedZombies.push(metadata);
      _ids.push(metadata.zombieId);
      console.log(_ids);
      console.log('selected zombies', _selectedZombies);
      setSelectedIds(_ids);
      setSelectedZombies(_selectedZombies);
    }

    // }

    return;
  };
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/locations/casino">
            <CasinoPage
              zombieClick={zombieSelect}
              tokensContract={polyTokensContract}
              userAccount={userAccount}
              selectedIds={selectedIds}
              userNfts={userNfts}
              useKeyCard={useKeyCard}
            />
          </Route>
          <Route path="/locations/school">
            <SchoolPage
              zombieClick={zombieSelect}
              tokensContract={polyTokensContract}
              userAccount={userAccount}
              selectedIds={selectedIds}
              userNfts={userNfts}
              useKeyCard={useKeyCard}
              userKeyCards={userKeycards}
            />
          </Route>
          <Route path="/locations/casino-result">
            <CasinoResultPage
              selectedZombies={selectedZombies}
              userRewards={userRewards}
            />
          </Route>
          <Route path="/locations/school-result" component={SchoolResultPage} />
          <Route path="/" component={SplitPathPage} />
        </Switch>
      </Router>
    </div>
  );
}
