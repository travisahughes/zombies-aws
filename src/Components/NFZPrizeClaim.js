/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { contract_data } from '../constants/moralis_env';
import freeClaims, { walletToClaims } from '../constants/free_claims';
import NFZABI from '../constants/abis/NFZv2.json';

let NFZPrizeClaim = ({ userAccount, Web3Api, Moralis }) => {
  const [claimIds, setClaimIds] = useState([]);

  useEffect(async () => {
    if (Web3Api && userAccount) {
      console.log('userAccount & web3api ready');

      let unclaimedNFZs = [];
      let claims =
        walletToClaims[
          Object.keys(walletToClaims).filter(function (k) {
            return k.toLowerCase() === userAccount.toLowerCase();
          })[0]
        ];
      console.log(`[claims] userAccount: ${userAccount}`, claims);

      for (let x = 0; x < claims.length; x++) {
        const nfzContractOptions = {
          chain: contract_data.mainnet.chain_id,
          address: contract_data.mainnet.contract_id,
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

        console.log(`${claims[x]} owner`, ownerOf);
      }

      if (unclaimedNFZs && unclaimedNFZs.length > 0) {
        console.log('setclaimids....', unclaimedNFZs);
        setClaimIds(unclaimedNFZs);
      }
    }
  }, [userAccount, Web3Api]);

  useEffect(() => {
    console.log('zzz Moralis?', Moralis);
  }, [Moralis]);

  const handleClaim = async (id) => {
    console.log(`web3.freeClaim(${id})`);
    // TODO: Figure out proof logic
    const options = {
      contractAddress: contract_data.mainnet.contract_id,
      functionName: 'freeClaiim',
      abi: NFZABI.abi,
      params: {
        account: userAccount,
        proof: '',
        tokenId: id,
      },
    };

    const receipt = await Moralis.executeFunction(options);
    console.log(`freeClaim complete`, receipt);
  };

  const prizeclaim = css`
    font-family: overpassmono;
    color: white;
    background-color: #000000;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
    margin-left: 10px;
    padding: 10px 10px 10px 25px;
    border-left: 1px solid #4c4c4c;

    .claim-button {
      font-size: 14px;
      margin: 0 10px;
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
  `;

  return (
    <div css={prizeclaim}>
      {claimIds.length > 0 &&
        claimIds.map(function (id) {
          return (
            <div
              className="claim-button glow-button"
              id={'claim-' + id}
              key={id}
              onClick={() => handleClaim(id)}
            >
              Claim #{id}
            </div>
          );
        })}
    </div>
  );
};

export default NFZPrizeClaim;
