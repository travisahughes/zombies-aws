/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import gsap from 'gsap';

import shadowImage from '../../assets/game/shadow.png';
import theifImage from '../../assets/game/theif.png';
import wildcardImage from '../../assets/game/wildcard.png';
import checkbox from '../../assets/game/check.png';
import comic from '../../assets/challenge/comic.png';
import discord from '../../assets/icons/discord.png';
import twitter from '../../assets/icons/twitter.png';
import UserNFZ from '../../Components/userNFZ';
import IntroNFZ from '../../Components/introNFZ';
import ChallengeSelection from '../../Components/challengeSelection';
import challenge from '../Challenge/configs/challenge1.json';
import './Game.css';
import { isCompositeComponentWithType } from 'react-dom/test-utils';
import { _setDefaults } from 'gsap/gsap-core';
const maxes = [];

function Game({ userNfts, user }) {
  const [shadowBox, setShadowBox] = useState({});
  const [theifBox, setTheifBox] = useState({});
  const [wildcardBox, setWildcardBox] = useState({});

  const [selectedCount, setSelectedCount] = useState(0);
  const [selectedIds, setSelectedIds] = useState([]);
  const [challengeBoxes, setChallengeBoxes] = useState([]);

  const [genesisZombies, setGenesisZombies] = useState([]);
  const [isInGame, setIsInGame] = useState(false);
  const [isInFinal, setIsInFinal] = useState(false);
  useEffect(() => {
    setChallengeBoxes(challenge.boxes);
  }, []);

  useEffect(() => {
    console.log(selectedCount);
  }, [selectedCount]);
  useEffect(() => {
    if (shadowBox.image) {
      gsap.to('.preview-sections.preview .preview-section.shadow .checkbox', {
        duration: 0.5,
        opacity: 1,
        ease: 'power1.inOut',
      });
    }
  }, [shadowBox]);

  useEffect(() => {
    if (theifBox.image) {
      gsap.to('.preview-sections.preview .preview-section.theif .checkbox', {
        duration: 0.5,
        opacity: 1,
        ease: 'power1.inOut',
      });
    }
  }, [theifBox]);

  useEffect(() => {
    if (wildcardBox.image) {
      gsap.to('.preview-sections.preview .preview-section.wildcard .checkbox', {
        duration: 0.5,
        opacity: 1,
        ease: 'power1.inOut',
      });
    }
  }, [wildcardBox]);
  let xuserNfts = {
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
          '{"attributes":[{"value":"Closed","trait_type":"Eyes"},{"value":"Bulletproof Vest","trait_type":"Outfit"},{"value":"Macho","trait_type":"Hair"},{"value":"Strawberry","trait_type":"Background"},{"value":"Pacifier","trait_type":"Mouth"},{"value":"Generic","trait_type":"Type"},{"value":"Male","trait_type":"Gender"},{"value":"Pink","trait_type":"Color"}],"description":"NFZ","image":"https://images.nicefunzombies.io/5.png","name":"#5","zombieId":"5"}',
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
          '{"attributes":[{"value":"Sus","trait_type":"Eyes"},{"value":"Hawaiian Green","trait_type":"Outfit"},{"value":"Burglar","trait_type":"Eye_wear"},{"value":"Bangs Seagreen","trait_type":"Hair"},{"value":"Arrow","trait_type":"Head_gear"},{"value":"Seagreen","trait_type":"Background"},{"value":"Tentacles","trait_type":"Mouth"},{"value":"Fleshy","trait_type":"Type"},{"value":"Female","trait_type":"Gender"}],"description":"NFZ","image":"https://images.nicefunzombies.io/2.png","name":"#2","zombieId":"2"}',
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
          '{"attributes":[{"value":"Wide Blank","trait_type":"Eyes"},{"value":"None","trait_type":"Outfit"},{"value":"Messy Sandy","trait_type":"Hair"},{"value":"Crown","trait_type":"Head_gear"},{"value":"Gold","trait_type":"Background"},{"value":"Chewed Hand","trait_type":"Mouth"},{"value":"Male","trait_type":"Gender"},{"value":"Green","trait_type":"Color"},{"value":"Genesis","trait_type":"Group"}],"description":"NFZ","image":"https://images.nicefunzombies.io/1.png","name":"#1","zombieId":"1"}',
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
          '{"attributes":[{"value":"Blank Wide","trait_type":"Eyes"},{"value":"Clown","trait_type":"Outfit"},{"value":"Youth Lime","trait_type":"Hair"},{"value":"Charcoal","trait_type":"Background"},{"value":"Pizza","trait_type":"Mouth"},{"value":"Robo","trait_type":"Type"},{"value":"Male","trait_type":"Gender"}],"description":"NFZ","image":"https://images.nicefunzombies.io/3.png","name":"#3","zombieId":"3"}',
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
          @media (max-width: 640px) {
            width: 100px;
            height: auto;
          }

          .genesis-text {
            opacity: 0;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%);
          }

          &.genesis {
            &:hover {
              .genesis-text {
                opacity: 1;
              }
            }
          }

          .nft-img {
            width: 200px;
            height: auto;
            cursor: move; /* fallback if grab cursor is unsupported */
            cursor: grab;
            cursor: -moz-grab;
            cursor: -webkit-grab;
            @media (max-width: 640px) {
              width: 100px;
            }
          }
          .nft-img:active {
            cursor: grabbing;
            cursor: -moz-grabbing;
            cursor: -webkit-grabbing;
          }

          &:hover {
            .nft-img {
              opacity: 0.5;
            }
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
    gsap.to('.game-preview', {
      duration: 0.5,
      opacity: 1,
      ease: 'power1.inOut',
    });
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

    // gsap.to('.shadow.alone', {
    //   duration: 0.1,
    //   display: 'none',
    //   ease: 'power1.easeOut',
    //   delay: 9,
    // });
    // gsap.to('.theif.alone', {
    //   duration: 0.1,
    //   display: 'none',
    //   ease: 'power1.easeOut',
    //   delay: 9,
    // });
    // gsap.to('.wildcard.alone', {
    //   duration: 0.1,
    //   display: 'none',
    //   ease: 'power1.inOut',
    //   delay: 9,
    // });

    gsap.to('.game-preview-header.preview', {
      duration: 1,
      opacity: 1,
      ease: 'power1.inOut',
      delay: 9,
      display: 'block',
    });
    gsap.to('.preview-sections.preview', {
      duration: 1,
      opacity: 1,
      ease: 'power1.inOut',
      delay: 9,
    });
    gsap.to('.game-preview-start-button', {
      duration: 0.1,
      display: 'flex',
      ease: 'power1.inOut',
      delay: 9,
    });
    gsap.to('.game-preview-start-button', {
      duration: 0.9,
      opacity: 1,
      ease: 'power1.inOut',
      delay: 9.1,
    });
  };
  const getTrait = (trait, md) => {
    for (let x = 0; x < md.length; x++) {
      if (md[x].trait_type === trait) {
        return md[x].value;
      }
    }
    return null;
  };
  const updateChallengeBox = (slot, zombieMetadata) => {
    const boxes = [...challengeBoxes];
    const index = boxes.indexOf(slot);
    boxes[index].zombie = zombieMetadata;

    setChallengeBoxes(boxes);
  };
  const validate = (metadata) => {
    const { attributes } = metadata;
    const genesisCount = genesisZombies.length;
    console.log('genesis count', genesisCount);
    // const genesisCount = challengeBoxes
    //   .filter((z) => Object.keys(z.zombie).length > 0)
    //   .map((obj) => {
    //     return obj.zombie;
    //   })
    //   .filter((zombie) => getTrait('Group', zombie.attributes) == 'Genesis');

    const isGenesis = getTrait('Group', attributes) ? true : false;
    const available = challengeBoxes.filter(
      (b) => Object.keys(b.zombie).length === 0
    );

    for (var x = 0; x < available.length; x++) {
      const { category, requirements, wildcard } = available[x];
      let requirement = null;
      for (var j = 0; j < category.length; j++) {
        if (requirements.includes(getTrait(category[j], attributes))) {
          console.log('requirement');
          requirement = available[x];
          break;
        }
      }
      if (requirement) return available[x];
    }

    for (var i = 0; i < available.length; i++) {
      const { category, requirements, wildcard } = available[i];

      // const requirment = category.map((c) => {
      //   if (requirements.includes(getTrait(c, attributes))) {
      //     console.log('requirement');
      //     return available[i];
      //   }
      // });

      if (genesisCount == 0 && isGenesis) {
        const usedGenesis = [...genesisZombies];
        usedGenesis.push(attributes);
        setGenesisZombies(usedGenesis);
        console.log('used genesis', usedGenesis);
        return available[i];
      } else if (wildcard) {
        return available[i];
      }
    }
  };
  const hordeClick = (metadata, index) => {
    const zombies = challengeBoxes
      .filter((z) => Object.keys(z.zombie).length > 0)
      .map((obj) => {
        return obj.zombie;
      });

    let isPresent = false;
    zombies.forEach((z) => {
      console.log('z zombie id', z.zombieId);
      console.log(metadata);
      console.log('metadata zombieId', metadata.zombieId);
      if (z.zombieId === metadata.zombieId) isPresent = true;
    });
    if (isPresent) {
      console.log('alaready used');
      return;
    }

    const selectedSlot = validate(metadata);
    if (selectedSlot) {
      updateChallengeBox(selectedSlot, metadata);
      const count = selectedCount + 1;
      setSelectedCount(count);

      const _ids = [...selectedIds];
      _ids.push(metadata.zombieId);
      console.log('adding id', _ids);
      setSelectedIds(_ids);
    }

    return;
  };

  const handleBoxClick = (challengeBox) => {
    console.log(challengeBox);
    if (Object.keys(challengeBox.zombie).length === 0) return;
    const boxes = [...challengeBoxes];
    const index = boxes.indexOf(challengeBox);

    const zombieMetadata = boxes[index].zombie;

    boxes[index].zombie = {};

    setChallengeBoxes(boxes);

    const genesis = genesisZombies.filter(
      (z) => zombieMetadata.attributes != z
    );

    setGenesisZombies(genesis);

    const count = selectedCount - 1;
    setSelectedCount(count);

    const _ids = [...selectedIds].filter(
      (zId) => zId != zombieMetadata.zombieId
    );
    setSelectedIds(_ids);
    console.log('removing id', _ids);
  };
  const handleSend = () => {
    //fire off payload
    if (!user) return;
    const userAdress = user.get('ethAddress');
    const challengId = `0_${userAdress.substring(6, 10)}`;

    const _ids = challengeBoxes.map((box) => {
      const { zombie } = box;
      return zombie.zombieId;
    });

    const payload = {
      challengeKey: challengId,
      userWallet: userAdress,
      nfzIds: _ids,
    };
    const options = {
      method: 'POST',
      body: JSON.stringify(payload),
      mode: 'no-cors',
    };
    fetch('https://api.nicefunzombies.io/challenge', options);
    console.log(payload);
    console.log(userAdress);
    console.log(challengId);

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
      display: 'none',
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
      scale: 0.75,
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
      display: 'flex',
      duration: 0.5,
      opacity: 1,
      ease: 'power1.easeOut',
      delay: 3,
    });

    setIsInFinal(true);
  };
  const handleStart = () => {
    setIsInGame(true);
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
      delay: 2,
    });
    gsap.to('.game-preview-header.preview', {
      duration: 0.5,
      opacity: 0,
      ease: 'power1.easeOut',
      delay: 0.5,
      display: 'none',
    });
    gsap.to('.game-preview-header.content', {
      duration: 0.5,
      opacity: 1,
      ease: 'power1.inOut',
      delay: 1.5,
      display: 'block',
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
      ease: 'power1.inOut',
      delay: 1.5,
    });
    gsap.to('.game-preview', {
      duration: 0.5,
      paddingBottom: 64,
      ease: 'power1.inOut',
    });
  };

  return (
    <div css={containerCss}>
      <div className="game-preview">
        <div className="background-wrapper" />

        <div className="pigeon">
          <img src={comic} alt="" />
        </div>
        <div className={isInFinal ? 'final-bottom isfinal' : 'final-bottom'}>
          <div className="mb-2 text-3xl text-center text-white uppercase final-bottom-title">
            achievement unlocked
          </div>
          <div className="mb-10 text-center text-white final-bottom-desc">
            Your horde has risen to the challenge! We will send your reward to
            your wallet after the deadline. Please do not sell or transfer any
            of the three NFZs used in the Horde Challenge until after the
            deadline and you have received your reward, otherwise your entry
            will be deemed invalid.
          </div>
          <div className="final-bottom-buttons-header">Let'em know!</div>
          <div className="final-buttom-buttons">
            <a
              className="final-button discord-button"
              href="https://discord.gg/77VswFkcuY"
              target="_blank"
            >
              <img src={discord} alt="" />
              <div className="final-button-text">Discord</div>
            </a>
            <a
              className="final-button twitter-button"
              href="https://www.twitter.com/nicefunzombies"
              target="_blank"
            >
              <img src={twitter} alt="" />
              <div className="final-button-text">Twitter</div>
            </a>
          </div>
        </div>
        <div className="game-preview-header preview">
          <div className="game-preview-header-title">Recruit your team</div>
          <div className="game-preview-header-desc">
            Glad we can count on you! To pull off this heist, you’ll need to
            build a team with these traits. Any NFZ with the Genesis trait can
            be used as a wildcard (only once)
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
        <div
          className={
            isInGame
              ? 'preview-sections preview ingame'
              : 'preview-sections preview'
          }
        >
          {challengeBoxes.map((box, index) => (
            <ChallengeSelection
              box={box}
              id={index}
              key={index}
              onClick={handleBoxClick}
            ></ChallengeSelection>
          ))}
        </div>
        <div className="preview-sections final">
          {challengeBoxes.map((box, index) => (
            <ChallengeSelection
              box={box}
              id={index}
              key={index}
              onClick={handleBoxClick}
              final={true}
            ></ChallengeSelection>
          ))}
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
          disabled={selectedCount < 3}
        >
          Send my team!
        </button>
        <div id="collection">
          <h2>Your Collection</h2>
          <p>Choose who to send</p>
          <div id="user-nfts">
            {userNfts?.result.length > 0 &&
              userNfts?.result.map((nft, index) => (
                <UserNFZ
                  nfz={nft}
                  id={index}
                  key={index}
                  selectedIds={selectedIds}
                  //onClick={handleNtfBoxClick}
                  onClick={hordeClick}
                ></UserNFZ>
              ))}
          </div>
        </div>

        <div className="shadow preview-section alone">
          <img src={shadowImage} alt="" />
          <div className="preview-section-text">
            <div className="preview-section-text-header">The Shadow</div>
            <div className="preview-section-text-sub-header">
              (Charcoal Background)
            </div>
          </div>
        </div>
        <div className="preview-section theif alone">
          <img src={theifImage} alt="" />
          <div className="preview-section-text">
            <div className="preview-section-text-header">The Theif</div>
            <div className="preview-section-text-sub-header">
              (Bulletproof Vest or Burglar Eye Wear)
            </div>
          </div>
        </div>
        <div className="preview-section wildcard alone">
          <img src={wildcardImage} alt="" />
          <div className="preview-section-text">
            <div className="preview-section-text-header">The Star</div>
            <div className="preview-section-text-sub-header">
              (Your favorite NFZ)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
