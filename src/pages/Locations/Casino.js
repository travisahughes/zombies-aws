import styled from '@emotion/styled';
import background from '../../assets/locations/split-path-image.png';
import cardBackground from '../../assets/locations/card-bg.png';
import UserNFZ from '../../Components/userNFZ';
import casino from '../../assets/locations/casino.png';
import { useState } from 'react';

const CasinoPageContainer = styled.div`
  height: 100vh;
  min-height: 700px;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position-x: center;
  background-size: 160% 60vh;

  @media (min-width: 767px) {
    background-size: 100% 100vh;
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.75);
  }
`;

const BenefitContainer = styled.div`
  background-image: url(${cardBackground});
  background-size: 100% 60vh;
  background-repeat: no-repeat;
  position: relative;
  /* display: flex;
  flex-direction: column; */
  min-height: 480px;
  font-size: 10px;
  color: black;
  width: 100%;
  /* padding: 40% 35% 10px 5%; */

  @media (min-width: 767px) {
    background-size: 100% 100%;
    height: 500px;
    padding: 0;
    width: 600px;
    font-size: 14px;
    height: 652px;
  }
`;

const BenefitContent = styled.div`
  position: absolute;
  z-index: 1;
  top: 30%;
  left: 3%;
  max-width: 250px;

  @media (min-width: 767px) {
    top: 20%;
    max-width: 400px;

    ul {
      margin-left: 5%;
    }
  }
`;

const TheCasinoText = styled.h1`
  display: none;
  font-family: teko;
  font-size: 45px;
  margin-left: 10%;
  margin-bottom: 0px;
  @media (min-width: 767px) {
    display: block;
  }
`;

const CasinoTagline = styled.p`
  display: none;
  margin: 0 0 30px 10%;

  @media (min-width: 767px) {
    display: block;
  }
`;

const BenefitText = styled.div`
  margin-left: 10%;
`;

const InstructionContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  text-align: center;
  span {
    font-size: 18px;
    margin: 0;
  }
  p {
    font-size: 14px;
    margin: 0;
  }
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (min-width: 767px) {
    justify-content: center;
    align-items: center;
  }
`;

const BackButton = styled.div`
  display: none;

  @media (min-width: 767px) {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 25px;
    left: 25px;
    border: 3px solid #ab19ef;
    color: white;
    height: 48px;
    width: 120px;
    cursor: pointer;

    &:hover {
      background: #ab19ef;
    }
  }
`;

const BetButton = styled.div`
  display: none;
  @media (min-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid #ab19ef;
    height: 48px;
    width: 230px;
    cursor: pointer;
    font-weight: 700;
    margin-left: 40px;

    &:hover {
      background: #ab19ef;
    }
  }
`;

const NFTsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;

  .nft-container {
    width: 110px;
    height: 110px;
    margin: 3px;
    cursor: pointer;
    img {
      width: 100%;
    }

    @media (min-width: 767px) {
      width: 187px;
      height: 187px;
    }
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
`;

const CasinoImage = styled.img`
  display: none;

  @media (min-width: 767px) {
    display: block;
  }
`;

const BenefitList = [
  {
    listItem: 'An active degen experience',
  },

  {
    listItem: 'Entry into special discord channel to play casino games',
  },
  {
    listItem: 'Minimum 10,000 points to start playing with',
  },
  {
    listItem: 'Entry into exclusive poker games',
  },
  {
    listItem: 'Weekly rotating prizes to be claimed',
  },
  {
    listItem: 'A X% chance to find a new NFZ',
  },
  {
    listItem: '200 total zombies available within casino',
  },
];

const userNfts = {
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

export default function CasinoPage() {
  const [selectedIds, setSelectedIds] = useState([]);

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

  return (
    <CasinoPageContainer>
      <BackButton>Back</BackButton>
      <TopContainer>
        <CasinoImage src={casino} alt="casino" />
        <BenefitContainer>
          <BenefitContent>
            <TheCasinoText>The Casino</TheCasinoText>
            <CasinoTagline>You like some fast-paced action!</CasinoTagline>
            <BenefitText>Location Benefit</BenefitText>
            <ul>
              {BenefitList.map((item) => (
                <li>{item.listItem}</li>
              ))}
            </ul>
            <BetButton>BET ON THE CASINO</BetButton>
          </BenefitContent>
        </BenefitContainer>
      </TopContainer>
      <InstructionContainer>
        <span>CHOOSE THE ZOMBIES YOU WANT TO SEARCH WITH (MAX 6)</span>
        <p>2 Zombies Selected</p>
      </InstructionContainer>
      <NFTsContainer>
        {userNfts.result.map((nft, index) => (
          <UserNFZ
            nfz={nft}
            id={index}
            key={index}
            selectedIds={selectedIds}
            onClick={hordeClick}
          ></UserNFZ>
        ))}
      </NFTsContainer>
    </CasinoPageContainer>
  );
}
