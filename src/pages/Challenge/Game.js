/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import gsap from 'gsap';

import shadow from '../../assets/game/shadow.png';
import theif from '../../assets/game/theif.png';
import wildcard from '../../assets/game/wildcard.png';
import checkbox from '../../assets/game/check.png';
import pigeon from '../../assets/challenge/pigeon.png';
import discord from '../../assets/icons/discord.png';
import twitter from '../../assets/icons/twitter.png';

import './Game.css';
const maxes = [];

function Game({ userNfts }) {
  const [shadowBox, setShadowBox] = useState(shadow);
  const [theifBox, setTheifBox] = useState(theif);
  const [wildcardBox, setWildcardBox] = useState(wildcard);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 1) {
      gsap.to('.preview-sections.preview .preview-section.shadow .checkbox', {
        duration: 0.5,
        opacity: 1,
        ease: 'power1.inOut',
      });
    } else if (count === 2) {
      gsap.to('.preview-sections.preview .preview-section.theif .checkbox', {
        duration: 0.5,
        opacity: 1,
        ease: 'power1.inOut',
      });
    } else {
      gsap.to('.preview-sections.preview .preview-section.wildcard .checkbox', {
        duration: 0.5,
        opacity: 1,
        ease: 'power1.inOut',
      });
    }
  }, [count]);
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
    width: 100%;
    height: 100%;

    #collection {
      max-width: 1300px;
      align-self: center;
      text-align: center;
      display: none;
      opacity: 0;
      flex-direction: column;
      z-index: 3;

      #user-nfts {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;

        .nft-container {
          width: 200px;
          height: 200px;
          margin: 0 10px 10px;
          cursor: pointer;
          position: relative;

          .checkbox {
            opacity: 0;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%);
          }

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
  `;

  useEffect(() => {
    playAnimation();
    return () => {
      maxes.forEach((max) => {
        max.kill();
      });
    };
  }, []);

  const playAnimation = () => {
    gsap.to('.shadow.alone', {
      duration: 1,
      opacity: 1,
      ease: 'power1.inOut',
    });
    gsap.to('.shadow.alone', {
      duration: 1,
      opacity: 0,
      ease: 'power1.easeOut',
      delay: 2,
    });

    gsap.to('.theif.alone', {
      duration: 1,
      opacity: 1,
      ease: 'power1.inOut',
      delay: 3,
    });
    gsap.to('.theif.alone', {
      duration: 1,
      opacity: 0,
      ease: 'power1.easeOut',
      delay: 5,
    });

    gsap.to('.wildcard.alone', {
      duration: 1,
      opacity: 1,
      ease: 'power1.inOut',
      delay: 6,
    });
    gsap.to('.wildcard.alone', {
      duration: 1,
      opacity: 0,
      ease: 'power1.easeOut',
      delay: 8,
    });

    gsap.to('.shadow.alone', {
      duration: 0.1,
      display: 'none',
      ease: 'power1.easeOut',
      delay: 9,
    });
    gsap.to('.theif.alone', {
      duration: 0.1,
      display: 'none',
      ease: 'power1.easeOut',
      delay: 9,
    });
    gsap.to('.wildcard.alone', {
      duration: 0.1,
      display: 'none',
      ease: 'power1.inOut',
      delay: 9,
    });

    gsap.to('.game-preview-header.preview', {
      duration: 1,
      opacity: 1,
      ease: 'power1.inOut',
      delay: 9,
    });
    gsap.to('.preview-sections.preview', {
      duration: 1,
      opacity: 1,
      ease: 'power1.inOut',
      delay: 9,
    });
    gsap.to('.game-preview-start-button', {
      duration: 1,
      opacity: 1,
      ease: 'power1.inOut',
      delay: 9,
    });
  };

  const handleNtfBoxClick = (imageUrl, index) => {
    if (count === 3) {
      return;
    }
    if (count === 0) {
      setShadowBox(imageUrl);
    } else if (count === 1) {
      setTheifBox(imageUrl);
    } else {
      setWildcardBox(imageUrl);
    }
    setCount(count + 1);

    gsap.to(`#nft-box-${index} .checkbox`, {
      duration: 0.5,
      opacity: 1,
      ease: 'power1.inOut',
    });
    gsap.to(`#nft-box-${index} .nft-img`, {
      duration: 0.5,
      opacity: 0.5,
      ease: 'power1.inOut',
    });
  };

  const handleSend = () => {
    gsap.to('#collection', {
      duration: 0.5,
      opacity: 0,
      ease: 'power1.easeOut',
    });
    gsap.to('#collection', {
      duration: 0.1,
      display: 'none',
      ease: 'power1.inOut',
      delay: 0.5,
    });
    gsap.to('.game-preview', {
      duration: 0.5,
      paddingTop: 0,
      ease: 'power1.inOut',
      delay: 0.5,
    });
    gsap.to('.game-preview', {
      duration: 0.5,
      paddingBottom: 0,
      ease: 'power1.inOut',
      delay: 0.5,
    });
    gsap.to('.game-preview', {
      duration: 0.1,
      overflow: 'hidden',
      ease: 'power1.inOut',
    });
    gsap.to('.game-preview-header.content', {
      duration: 0.5,
      opacity: 0,
      ease: 'power1.easeOut',
      delay: 0.5,
    });
    gsap.to('.send-my-team-button', {
      duration: 0.5,
      opacity: 0,
      ease: 'power1.easeOut',
      delay: 0.5,
    });

    gsap.to('.preview-sections.preview .preview-section.shadow', {
      duration: 0.5,
      opacity: 0,
      ease: 'power1.easeOut',
      delay: 1,
    });
    gsap.to('.preview-sections.preview .preview-section.theif', {
      duration: 0.5,
      opacity: 0,
      ease: 'power1.easeOut',
      delay: 1.5,
    });
    gsap.to('.preview-sections.preview .preview-section.wildcard', {
      duration: 0.5,
      opacity: 0,
      ease: 'power1.easeOut',
      delay: 2,
    });

    gsap.to('.preview-sections.preview', {
      duration: 0.1,
      display: 'none',
      ease: 'power1.easeOut',
      delay: 2.5,
    });

    gsap.to('.preview-sections.final', {
      duration: 0.1,
      display: 'flex',
      ease: 'power1.easeOut',
      delay: 2.5,
    });

    gsap.to('.pigeon', {
      duration: 0.5,
      opacity: 1,
      ease: 'power1.easeOut',
      delay: 2.5,
    });
    gsap.to('.pigeon', {
      duration: 0.5,
      scale: 1,
      ease: 'power1.easeOut',
      delay: 2.5,
    });

    gsap.to('.background-wrapper', {
      duration: 0.5,
      opacity: 1,
      delay: 3,
    });

    gsap.from('.preview-sections.final .preview-section.shadow', {
      duration: 0.5,
      x: -100,
      ease: 'power1.easeOut',
      delay: 3,
    });
    gsap.to('.preview-sections.final .preview-section.shadow', {
      duration: 0.5,
      opacity: 1,
      ease: 'power1.easeOut',
      delay: 3.2,
    });

    gsap.from('.preview-sections.final .preview-section.theif', {
      duration: 0.5,
      y: -500,
      ease: 'power1.easeOut',
      delay: 3,
    });
    gsap.to('.preview-sections.final .preview-section.theif', {
      duration: 0.5,
      opacity: 1,
      ease: 'power1.easeOut',
      delay: 3.2,
    });

    gsap.from('.preview-sections.final .preview-section.wildcard', {
      duration: 0.5,
      x: 1100,
      ease: 'power1.easeOut',
      delay: 3,
    });
    gsap.to('.preview-sections.final .preview-section.wildcard', {
      duration: 0.5,
      opacity: 1,
      ease: 'power1.easeOut',
      delay: 3.2,
    });

    gsap.to('.final-bottom', {
      duration: 0.5,
      opacity: 1,
      ease: 'power1.easeOut',
      delay: 3,
    });
  };

  const handleStart = () => {
    gsap.to('.preview-sections.preview', {
      duration: 0.1,
      opacity: 0,
      ease: 'power1.easeOut',
    });
    gsap.to('.game-preview-start-button', {
      duration: 0.1,
      display: 'none',
      ease: 'power1.easeOut',
    });

    gsap.to('.send-my-team-button', {
      duration: 0.1,
      display: 'flex',
      ease: 'power1.easeOut',
      delay: 0.5,
    });
    gsap.to('.send-my-team-button', {
      duration: 0.5,
      opacity: 1,
      ease: 'power1.inOut',
      delay: 0.5,
    });
    gsap.to('.game-preview-header.preview', {
      duration: 0.5,
      opacity: 0,
      ease: 'power1.easeOut',
      delay: 0.5,
    });
    gsap.to('.game-preview-header.content', {
      duration: 0.5,
      opacity: 1,
      ease: 'power1.inOut',
      delay: 1.5,
    });

    gsap.to('.preview-sections.preview', {
      duration: 0.5,
      opacity: 1,
      ease: 'power1.inOut',
      delay: 1,
    });

    gsap.to('#collection', {
      duration: 0.1,
      display: 'block',
      ease: 'power1.inOut',
      delay: 0.5,
    });
    gsap.to('#collection', {
      duration: 1,
      opacity: 1,
      ease: 'power1.inOut',
      delay: 0.5,
    });

    gsap.to('.game-preview', {
      duration: 0.5,
      paddingTop: 235,
      ease: 'power1.inOut',
      delay: 1.5,
    });
    gsap.to('.game-preview', {
      duration: 0.5,
      paddingBottom: 64,
      ease: 'power1.inOut',
    });
  };

  // function meetsReqs(el, attrs) {
  //   return !!draggingImgAttrs.filter((obj) => {
  //     return (
  //       obj.trait_type === el.dataset.reqType &&
  //       obj.value === el.dataset.reqValue
  //     );
  //   }).length;
  // }

  return (
    <div css={containerCss}>
      <div className="game-preview">
        <div className="background-wrapper" />
        <div className="pigeon">
          <img src={pigeon} alt="" />
        </div>
        <div className="final-bottom">
          <div className="mb-2 text-3xl text-center text-white uppercase final-bottom-title">
            achievement unlocked
          </div>
          <div className="mb-10 text-center text-white final-bottom-desc">
            Your horde has risen to the challenge and won! We've added yoru
            reward to your wallet.
          </div>
          <div className="final-bottom-buttons-header">Let'em know!</div>
          <div className="final-buttom-buttons">
            <div className="final-button discord-button">
              <img src={discord} alt="" />
              <div className="final-button-text">Discord</div>
            </div>
            <div className="final-button twitter-button">
              <img src={twitter} alt="" />
              <div className="final-button-text">Twitter</div>
            </div>
          </div>
        </div>
        <div className="game-preview-header preview">
          <div className="game-preview-header-title">Recruit your team</div>
          <div className="game-preview-header-desc">
            Glad we can count on you! To pull off this heist, you’ll need to
            build a team with these traits
          </div>
        </div>
        <div className="game-preview-header content">
          <div className="game-preview-header-title">
            Your NFZ Crew Requirements
          </div>
          <div className="game-preview-header-desc">
            Glad we can count on you! To pull off this heist, you’ll need to
            build a team with these traits
          </div>
        </div>
        <div className="preview-sections preview">
          <div className="preview-section shadow">
            <div className="preview-section-image">
              <img src={shadowBox} alt="" />
              <img className="checkbox" src={checkbox} alt="" />
            </div>
            <div className="preview-section-text">
              <div className="preview-section-text-header">The Shadow</div>
              <div className="preview-section-text-sub-header">
                (charcol background)
              </div>
            </div>
          </div>
          <div className="preview-section theif">
            <div className="preview-section-image">
              <img src={theifBox} alt="" />
              <img className="checkbox" src={checkbox} alt="" />
            </div>
            <div className="preview-section-text">
              <div className="preview-section-text-header">The Theif</div>
              <div className="preview-section-text-sub-header">(suit)</div>
            </div>
          </div>
          <div className="preview-section wildcard">
            <div className="preview-section-image">
              <img src={wildcardBox} alt="" />
              <img className="checkbox" src={checkbox} alt="" />
            </div>
            <div className="preview-section-text">
              <div className="preview-section-text-header">The Wildcard</div>
              <div className="preview-section-text-sub-header">
                (your favorite NFZ)
              </div>
            </div>
          </div>
        </div>
        <div className="preview-sections final">
          <div className="preview-section shadow">
            <div className="preview-section-image">
              <img src={shadowBox} alt="" />
              <img className="checkbox" src={checkbox} alt="" />
            </div>
          </div>
          <div className="preview-section theif">
            <div className="preview-section-image">
              <img src={theifBox} alt="" />
              <img className="checkbox" src={checkbox} alt="" />
            </div>
          </div>
          <div className="preview-section wildcard">
            <div className="preview-section-image">
              <img src={wildcardBox} alt="" />
              <img className="checkbox" src={checkbox} alt="" />
            </div>
          </div>
        </div>
        <div
          className="game-preview-start-button"
          onClick={() => handleStart()}
        >
          Start
        </div>
        <button
          className="send-my-team-button"
          onClick={() => handleSend()}
          disabled={count < 3}
        >
          Send my team!
        </button>
        <div id="collection">
          <h2>Your Collection</h2>
          <p>Choose who to send</p>
          <div id="user-nfts">
            {userNfts?.result.length > 0 &&
              userNfts?.result.map((nft, index) => (
                <div
                  className="nft-container"
                  key={index}
                  id={`nft-box-${index}`}
                  onClick={() =>
                    handleNtfBoxClick(JSON.parse(nft.metadata).image, index)
                  }
                >
                  <img
                    src={JSON.parse(nft.metadata).image}
                    className="nft-img"
                  />
                  <img className="checkbox" src={checkbox} alt="" />
                </div>
              ))}
          </div>
        </div>
        <div className="preview-section shadow alone">
          <img src={shadow} alt="" />
          <div className="preview-section-text">
            <div className="preview-section-text-header">The Shadow</div>
            <div className="preview-section-text-sub-header">
              (charcol background)
            </div>
          </div>
        </div>
        <div className="preview-section theif alone">
          <img src={theif} alt="" />
          <div className="preview-section-text">
            <div className="preview-section-text-header">The Theif</div>
            <div className="preview-section-text-sub-header">(suit)</div>
          </div>
        </div>
        <div className="preview-section wildcard alone">
          <img src={wildcard} alt="" />
          <div className="preview-section-text">
            <div className="preview-section-text-header">The Wildcard</div>
            <div className="preview-section-text-sub-header">
              (your favorite NFZ)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
