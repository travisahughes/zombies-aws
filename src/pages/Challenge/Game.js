/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

import Card from '../../Components/Card';

function Game({ setActivePage, userNfts }) {
  console.log('game nfts', userNfts);

  // Stealing all Travis' Zombies
  userNfts = {
    total: 8,
    page: 0,
    page_size: 500,
    result: [
      {
        token_address: '0xea7500664c4ccb77a89479a1daa75d59e2fbc97f',
        token_id: '5',
        amount: '1',
        owner_of: '0x03766e2cabaa26324c10120ede914f9c1ca49861',
        block_number: '9501322',
        block_number_minted: '9501322',
        contract_type: 'ERC721',
        token_uri: 'https://api.nicefunzombies.io/metadata/5',
        metadata:
          '{"attributes":[{"value":"Closed","trait_type":"Eyes"},{"value":"Bulletproof Vest","trait_type":"Outfit"},{"value":"Macho","trait_type":"Hair"},{"value":"Strawberry","trait_type":"Background"},{"value":"Pacifier","trait_type":"Mouth"},{"value":"Generic","trait_type":"Type"},{"value":"Male","trait_type":"Gender"},{"value":"Pink","trait_type":"Color"},{"value":"Genesis","trait_type":"Group"}],"description":"NFZ","image":"https://images.nicefunzombies.io/5.png","name":"#5","zombieId":"5"}',
        synced_at: '2021-11-11T01:27:20.055Z',
        name: 'Nice Fun Zombies',
        symbol: 'NFZ',
      },
      {
        token_address: '0xea7500664c4ccb77a89479a1daa75d59e2fbc97f',
        token_id: '2',
        amount: '1',
        owner_of: '0x03766e2cabaa26324c10120ede914f9c1ca49861',
        block_number: '9501322',
        block_number_minted: '9501322',
        contract_type: 'ERC721',
        token_uri: 'https://api.nicefunzombies.io/metadata/2',
        metadata:
          '{"attributes":[{"value":"Sus","trait_type":"Eyes"},{"value":"Hawaiian Green","trait_type":"Outfit"},{"value":"3D","trait_type":"Eye_wear"},{"value":"Bangs Seagreen","trait_type":"Hair"},{"value":"Arrow","trait_type":"Head_gear"},{"value":"Seagreen","trait_type":"Background"},{"value":"Tentacles","trait_type":"Mouth"},{"value":"Fleshy","trait_type":"Type"},{"value":"Female","trait_type":"Gender"},{"value":"Genesis","trait_type":"Group"}],"description":"NFZ","image":"https://images.nicefunzombies.io/2.png","name":"#2","zombieId":"2"}',
        synced_at: '2021-11-11T01:27:20.062Z',
        name: 'Nice Fun Zombies',
        symbol: 'NFZ',
      },
      {
        token_address: '0xea7500664c4ccb77a89479a1daa75d59e2fbc97f',
        token_id: '1',
        amount: '1',
        owner_of: '0x03766e2cabaa26324c10120ede914f9c1ca49861',
        block_number: '9501316',
        block_number_minted: '9501316',
        contract_type: 'ERC721',
        token_uri: 'https://api.nicefunzombies.io/metadata/1',
        metadata:
          '{"attributes":[{"value":"Wide Blank","trait_type":"Eyes"},{"value":"None","trait_type":"Outfit"},{"value":"Messy Sandy","trait_type":"Hair"},{"value":"Crown","trait_type":"Head_gear"},{"value":"Gold","trait_type":"Background"},{"value":"Chewed Hand","trait_type":"Mouth"},{"value":"Generic","trait_type":"Type"},{"value":"Male","trait_type":"Gender"},{"value":"Green","trait_type":"Color"},{"value":"Genesis","trait_type":"Group"}],"description":"NFZ","image":"https://images.nicefunzombies.io/1.png","name":"#1","zombieId":"1"}',
        synced_at: '2021-11-11T01:27:20.071Z',
        name: 'Nice Fun Zombies',
        symbol: 'NFZ',
      },
      {
        token_address: '0xea7500664c4ccb77a89479a1daa75d59e2fbc97f',
        token_id: '10',
        amount: '1',
        owner_of: '0x03766e2cabaa26324c10120ede914f9c1ca49861',
        block_number: '9503954',
        block_number_minted: '9503954',
        contract_type: 'ERC721',
        token_uri: 'https://api.nicefunzombies.io/metadata/10',
        metadata:
          '{"attributes":[{"value":"Wide Blank","trait_type":"Eyes"},{"value":"Shirt Torn Red","trait_type":"Outfit"},{"value":"Messy Seagreen","trait_type":"Hair"},{"value":"Party","trait_type":"Head_gear"},{"value":"Headphones","trait_type":"Neck_gear"},{"value":"Grape","trait_type":"Background"},{"value":"Sewn","trait_type":"Mouth"},{"value":"Generic","trait_type":"Type"},{"value":"Male","trait_type":"Gender"},{"value":"Blue","trait_type":"Color"},{"value":"Genesis","trait_type":"Group"}],"description":"NFZ","name":"#10","image":"https://images.nicefunzombies.io/10.png","zombieId":"10"}',
        synced_at: '2021-11-11T01:27:20.111Z',
        name: 'Nice Fun Zombies',
        symbol: 'NFZ',
      },
      {
        token_address: '0xea7500664c4ccb77a89479a1daa75d59e2fbc97f',
        token_id: '4',
        amount: '1',
        owner_of: '0x03766e2cabaa26324c10120ede914f9c1ca49861',
        block_number: '9501322',
        block_number_minted: '9501322',
        contract_type: 'ERC721',
        token_uri: 'https://api.nicefunzombies.io/metadata/4',
        metadata:
          '{"attributes":[{"value":"Button Teal","trait_type":"Eyes"},{"value":"Hip Hop","trait_type":"Outfit"},{"value":"Pigtails Grape","trait_type":"Hair"},{"value":"Spinning Beanie","trait_type":"Head_gear"},{"value":"Charcoal","trait_type":"Background"},{"value":"Ripped","trait_type":"Mouth"},{"value":"Generic","trait_type":"Type"},{"value":"Female","trait_type":"Gender"},{"value":"Purple","trait_type":"Color"},{"value":"Genesis","trait_type":"Group"}],"description":"NFZ","image":"https://images.nicefunzombies.io/4.png","name":"#4","zombieId":"4"}',
        synced_at: '2021-11-11T01:27:20.088Z',
        name: 'Nice Fun Zombies',
        symbol: 'NFZ',
      },
      {
        token_address: '0xea7500664c4ccb77a89479a1daa75d59e2fbc97f',
        token_id: '8',
        amount: '1',
        owner_of: '0x03766e2cabaa26324c10120ede914f9c1ca49861',
        block_number: '9502301',
        block_number_minted: '9502301',
        contract_type: 'ERC721',
        token_uri: 'https://api.nicefunzombies.io/metadata/8',
        metadata:
          '{"attributes":[{"value":"Wide Blank","trait_type":"Eyes"},{"value":"Fur Coat One","trait_type":"Outfit"},{"value":"Brain Orange","trait_type":"Hair"},{"value":"Smiley","trait_type":"Head_gear"},{"value":"Seagreen","trait_type":"Background"},{"value":"Tongue Pepto","trait_type":"Mouth"},{"value":"Generic","trait_type":"Type"},{"value":"Male","trait_type":"Gender"},{"value":"Grey","trait_type":"Color"},{"value":"Genesis","trait_type":"Group"}],"description":"NFZ","name":"#8","image":"https://images.nicefunzombies.io/8.png","zombieId":"8"}',
        synced_at: '2021-11-11T01:27:20.096Z',
        name: 'Nice Fun Zombies',
        symbol: 'NFZ',
      },
      {
        token_address: '0xea7500664c4ccb77a89479a1daa75d59e2fbc97f',
        token_id: '9',
        amount: '1',
        owner_of: '0x03766e2cabaa26324c10120ede914f9c1ca49861',
        block_number: '9502306',
        block_number_minted: '9502306',
        contract_type: 'ERC721',
        token_uri: 'https://api.nicefunzombies.io/metadata/9',
        metadata:
          '{"attributes":[{"value":"Mean ","trait_type":"Eyes"},{"value":"Tux Damaged","trait_type":"Outfit"},{"value":"Afro Rainbow","trait_type":"Hair"},{"value":"Baby Blue","trait_type":"Background"},{"value":"Rage","trait_type":"Mouth"},{"value":"Generic","trait_type":"Type"},{"value":"Male","trait_type":"Gender"},{"value":"Green","trait_type":"Color"},{"value":"Genesis","trait_type":"Group"}],"description":"NFZ","name":"#9","image":"https://images.nicefunzombies.io/9.png","zombieId":"9"}',
        synced_at: '2021-11-11T01:27:20.104Z',
        name: 'Nice Fun Zombies',
        symbol: 'NFZ',
      },
      {
        token_address: '0xea7500664c4ccb77a89479a1daa75d59e2fbc97f',
        token_id: '3',
        amount: '1',
        owner_of: '0x03766e2cabaa26324c10120ede914f9c1ca49861',
        block_number: '9501322',
        block_number_minted: '9501322',
        contract_type: 'ERC721',
        token_uri: 'https://api.nicefunzombies.io/metadata/3',
        metadata:
          '{"attributes":[{"value":"Blank Wide","trait_type":"Eyes"},{"value":"Clown","trait_type":"Outfit"},{"value":"Youth Lime","trait_type":"Hair"},{"value":"Charcoal","trait_type":"Background"},{"value":"Pizza","trait_type":"Mouth"},{"value":"Robo","trait_type":"Type"},{"value":"Male","trait_type":"Gender"},{"value":"Genesis","trait_type":"Group"}],"description":"NFZ","image":"https://images.nicefunzombies.io/3.png","name":"#3","zombieId":"3"}',
        synced_at: '2021-11-11T01:27:20.080Z',
        name: 'Nice Fun Zombies',
        symbol: 'NFZ',
      },
    ],
    status: 'SYNCED',
  };

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
  let draggingImgAttrs = null;
  let pendingTarget = null;

  function onDragStart(e, attributes) {
    draggingImgSrc = e.target.src;
    draggingImgAttrs = attributes;
  }

  function onDrop(e) {
    pendingTarget = null;
    e.target.classList.remove('pending');
  }

  function meetsReqs(el, attrs) {
    return !!draggingImgAttrs.filter((obj) => {
      return (
        obj.trait_type === el.dataset.reqType &&
        obj.value === el.dataset.reqValue
      );
    }).length;
  }

  function onDragEnter(e) {
    if (e.target.classList.contains('target-cards')) {
      if (meetsReqs(e.target, draggingImgAttrs)) {
        let targetImg = e.target.querySelector('img');
        if (targetImg) {
          targetImg.classList.add('pending');
          targetImg.src = draggingImgSrc;
          pendingTarget = targetImg;
        }
      }
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
          data-req-type="Background"
          data-req-value="Charcoal"
        >
          <Card subtitle="Charcoal Background" />
        </div>
        <div
          className="target-cards"
          draggable="true"
          onDragOver={(event) => event.preventDefault()}
          onDragEnter={onDragEnter}
          onDrop={onDrop}
          data-type="Eye_wear"
          data-value="Burglar"
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
                  onDragStart={(event) =>
                    onDragStart(event, JSON.parse(nft.metadata).attributes)
                  }
                  onDragOver={(event) => event.preventDefault()}
                  onDragEnd={onDragEnd}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Game;
