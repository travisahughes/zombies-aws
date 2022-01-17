/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { getFreeClaimProof } from '../utils';
import { contract_data } from '../constants/moralis_env';
import freeClaims, { walletToClaims } from '../constants/free_claims';
import NFZABI from '../constants/abis/NFZv3.json';

let NFZPrizeClaim = ({
  userAccount,
  Web3Api,
  Moralis,
  chainId,
  switchNetwork,
}) => {
  let CONTRACT_CHAIN;
  let CONTRACT_ADDRESS;

  // TODO: MAKE SURE prod = true BEFORE DEPLOYING!
  let prod = false;
  if (prod) {
    CONTRACT_CHAIN = contract_data.mainnet.chain_id;
    CONTRACT_ADDRESS = contract_data.mainnet.contract_id;
  } else {
    CONTRACT_CHAIN = contract_data.rinkeby.chain_id;
    CONTRACT_ADDRESS = contract_data.rinkeby.contract_id;
  }

  const [claimIds, setClaimIds] = useState([]);
  const [loadedData, setLoadedData] = useState(false);
  const [curUserAccount, setCurUserAccount] = useState(null);

  useEffect(async () => {
    if (Web3Api && userAccount && loadedData === false) {
      console.log('web3api/useraccount', userAccount, Web3Api);
      setLoadedData(true);
      let unclaimedNFZs = [];
      let claims =
        walletToClaims[
          Object.keys(walletToClaims).filter(function (k) {
            return k.toLowerCase() === userAccount.toLowerCase();
          })[0]
        ] || [];
      console.log(`[claims] userAccount: ${userAccount}`, claims);

      for (let x = 0; x < claims.length; x++) {
        const nfzContractOptions = {
          chain: CONTRACT_CHAIN,
          address: CONTRACT_ADDRESS,
          abi: NFZABI.abi,
        };

        let ownerOf = null;
        // We expect ownerOf to throw an error on an unclaimed token id
        // Moralis doesn't provide a good way to catch errors though
        try {
          ownerOf = await Web3Api.native.runContractFunction({
            ...nfzContractOptions,
            function_name: 'ownerOf',
            params: { tokenId: claims[x] },
          });
        } catch (e) {
          // Unclaimed ids are available to claim, so add them to array
          console.log(`NFZ #${claims[x]} is unclaimed`);
          unclaimedNFZs.push(claims[x]);
        }
      }

      console.log('setClaimIds', unclaimedNFZs);
      setClaimIds(unclaimedNFZs);
    }
  }, [userAccount, Web3Api]);

  useEffect(() => {
    // console.log('zzz Moralis?', Moralis);
  }, [Moralis]);

  useEffect(() => {
    if (userAccount && userAccount !== curUserAccount) {
      console.log('updating curUserAccount to: ', userAccount);
      setLoadedData(false);
      setCurUserAccount(userAccount);
    }
  }, [userAccount]);

  const handleClaim = async (event, id) => {
    event.target.innerHTML = 'Claiming!';
    const proofData = getFreeClaimProof(userAccount, id);
    if (proofData.valid) {
      const options = {
        contractAddress: CONTRACT_ADDRESS,
        functionName: 'freeClaim',
        abi: NFZABI.abi,
        awaitReceipt: false,
        params: {
          account: userAccount,
          proof: proofData.proof,
          tokenId: id,
        },
      };

      const tx = await Moralis.executeFunction(options);

      tx.on('receipt', (receipt) => {
        console.log('receipt', receipt);
        event.target.className += ' hidden';
      }).on('error', (error) => {
        console.log('error', error);
        event.target.innerHTML = 'Claim #' + id;
      });
    }
  };

  const prizeclaim = css`
    font-family: overpassmono;
    color: white;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    padding: 10px 10px 10px 25px;
    border-left: 1px solid #4c4c4c;

    #claim-header {
      margin: 0 10px;
      font-size: 14px;

      button {
        font-size: 12px;
        margin: 10px 0 20px;
      }
    }

    #claim-row {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
      align-content: flex-start;

      .claim-button {
        font-size: 14px;
        margin: 0 10px;
      }
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

    .hidden {
      display: none;
    }
  `;

  return (
    <div css={prizeclaim}>
      <div id="claim-header">
        {chainId !== CONTRACT_CHAIN && (
          <div id="header-text">
            To claim your NFZs, you must be on{' '}
            {contract_data[CONTRACT_CHAIN]?.network_name}
            <br />
            <button
              className="network-switch"
              onClick={() =>
                switchNetwork(contract_data[CONTRACT_CHAIN]?.chain_id)
              }
            >
              Switch to {contract_data[CONTRACT_CHAIN]?.network_name}
            </button>
          </div>
        )}
      </div>
      <div id="claim-row">
        {claimIds.length > 0 &&
          claimIds.map(function (id) {
            return (
              <div
                className="claim-button glow-button"
                id={'claim-' + id}
                key={id}
                onClick={(e) => handleClaim(e, id)}
              >
                Claim #{id}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default NFZPrizeClaim;
