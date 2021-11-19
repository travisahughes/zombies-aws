/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

import Card from '../../Components/Card';

import zombie3 from '../../assets/gallery/zombie3.png';
import zombie2 from '../../assets/gallery/zombie2.png';
import zombie1 from '../../assets/gallery/zombie1.png';

function Game({ setActivePage, userNfts }) {
  console.log('game nfts', userNfts);
  const containerCss = css`
    margin: 20px;
    display: flex;
    flex-direction: column;
    margin: 0 auto 20px auto;
    padding: 0 20px;

    .pending {
      opacity: 0.5;
    }

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
            cursor: move; /* fallback if grab cursor is unsupported */
            cursor: grab;
            cursor: -moz-grab;
            cursor: -webkit-grab;
          }
          .nft-img:active {
            cursor: grabbing;
            cursor: -moz-grabbing;
            cursor: -webkit-grabbing;
          }
        }
      }
    }

    .target-cards {
      margin: 38px;
      &:first-of-type {
        margin-left: 0px;
      }
      &:last-of-type {
        margin-right: 0px;
      }
    }
  `;

  let draggingImgSrc = null;
  let pendingTarget = null;

  function onDragStart(e) {
    draggingImgSrc = e.target.src;
  }

  function onDrop(e) {
    pendingTarget = null;
    e.target.classList.remove('pending');
  }

  function onDragEnter(e) {
    let targetImg = e.target.querySelector('img');
    if (targetImg) {
      targetImg.classList.add('pending');
      targetImg.src = draggingImgSrc;
      pendingTarget = targetImg;
    }
  }

  function onDragEnd(e) {
    if (pendingTarget) {
      pendingTarget.src = '';
    }
  }

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
        <div
          className="target-cards"
          draggable="true"
          onDragOver={(event) => event.preventDefault()}
          onDragEnter={onDragEnter}
          onDrop={onDrop}
        >
          <Card subtitle="Charcoal Background" />
        </div>
        <div
          className="target-cards"
          draggable="true"
          onDragOver={(event) => event.preventDefault()}
          onDragEnter={onDragEnter}
          onDrop={onDrop}
        >
          <Card subtitle="Burglar Eye Wear" draggable="true" />
        </div>
        <div
          className="target-cards"
          draggable="true"
          onDragOver={(event) => event.preventDefault()}
          onDragEnter={onDragEnter}
          onDrop={onDrop}
        >
          <Card subtitle="Any NFZ" draggable="true" />
        </div>
      </div>
      <div id="collection">
        <h2>Your Collection</h2>
        <p>Choose who to send</p>
        <div id="user-nfts">
          {userNfts?.result.length > 0 &&
            userNfts?.result.map((nft, index) => (
              <div className="nft-container" key={index}>
                <img
                  src={JSON.parse(nft.metadata).image}
                  className="nft-img"
                  draggable="true"
                  onDragStart={onDragStart}
                  onDragOver={(event) => event.preventDefault()}
                  onDragEnd={onDragEnd}
                />
              </div>
            ))}
          <div className="nft-container">
            <img
              src={zombie1}
              className="nft-img"
              draggable="true"
              onDragStart={onDragStart}
              onDragOver={(event) => event.preventDefault()}
              onDragEnd={onDragEnd}
            />
          </div>
          <div className="nft-container">
            <img
              src={zombie2}
              className="nft-img"
              draggable="true"
              onDragStart={onDragStart}
              onDragOver={(event) => event.preventDefault()}
              onDragEnd={onDragEnd}
            />
          </div>
          <div className="nft-container">
            <img
              src={zombie3}
              className="nft-img"
              draggable="true"
              onDragStart={onDragStart}
              onDragOver={(event) => event.preventDefault()}
              onDragEnd={onDragEnd}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
