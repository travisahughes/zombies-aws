/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import freeClaims, { walletToClaims } from '../constants/free_claims';

let NFZPrizeClaim = ({ userAccount }) => {
  const [claimIds, setClaimIds] = useState([]);

  useEffect(() => {
    if (userAccount) {
      let claims =
        walletToClaims[
          Object.keys(walletToClaims).filter(function (k) {
            return k.toLowerCase() === userAccount.toLowerCase();
          })[0]
        ];
      console.log(`[claim] userAccount: ${userAccount}`, claims);
      if (claimIds && claims.length > 0) {
        console.log('setclaimids....', claims);
        setClaimIds(claims);
      }
    }
  }, [userAccount]);

  const handleClaim = (id) => {
    console.log(`web3.freeClaim(${id})`);
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
          // returns Nathan, then John, then Jane
          return (
            <div
              className="claim-button glow-button"
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
