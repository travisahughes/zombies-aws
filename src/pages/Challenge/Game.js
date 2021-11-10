/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

import Card from '../../Components/Card';

function Game({ setActivePage, userNfts }) {
  console.log('game nfts', userNfts);
  const containerCss = css`
    margin: 20px;
    display: flex;
    flex-direction: column;
    margin: 0 auto 20px auto;
    padding: 0 20px;

    .content-section {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-self: center;
      color: white;
      text-align: center;
      max-width: 800px;

      h1 {
        font-family: teko;
        text-transform: uppercase;
        font-size: 45px;
        line-height: 45px;
        font-weight: 400;
        color: #ffffff;
      }
    }

    #collection {
      max-width: 1300px;
      align-self: center;
      text-align: center;
      display: flex;
      flex-direction: column;

      #user-nfts {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;

        .nft-container {
          width: 200px;
          margin: 0 10px 10px;
          cursor: pointer;

          .nft-img {
            width: 200px;
            height: auto;
          }
        }
      }
    }
  `;

  return (
    <div css={containerCss}>
      <div className="content-section">
        <h1>Your NFZ Crew Requirements</h1>
      </div>
      <div className="content-section">
        <p>
          Glad we can count on you! To pull off this heist, you’ll need to build
          a team with these traits
        </p>
      </div>
      <div className="content-section">
        <Card subtitle="Charcoal Background" />
        <Card subtitle="Burglar Eye Wear" />
        <Card subtitle="Any NFZ" />
      </div>
      <div id="collection">
        <h2>Your Collection</h2>
        <p>Choose who to send</p>
        <div id="user-nfts">
          {userNfts?.result.length > 0 &&
            userNfts?.result.map((nft, index) => (
              <div className="nft-container" key={index}>
                <img src={JSON.parse(nft.metadata).image} className="nft-img" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Game;
