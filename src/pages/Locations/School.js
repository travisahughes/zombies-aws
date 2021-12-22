import styled from '@emotion/styled';
import background from '../../assets/locations/split-path-image.png';
import paperBg from '../../assets/locations/paperbg2.png';
import chalkboard from '../../assets/locations/loading-school.gif';
import chairs from '../../assets/locations/chairs.png';
import hat from '../../assets/locations/hat.png';
import zeneca from '../../assets/locations/zeneca-academy-token.png';
import head from '../../assets/locations/head.png';
import eth1 from '../../assets/locations/eth.png';
import eth3 from '../../assets/locations/eth-3.png';
import Keycard from '../../assets/locations/keycard.png';
import discord from '../../assets/icons/discord.png';
import UserNFZ from '../../Components/userNFZ';
import school from '../../assets/locations/school.png';
import placeholder from '../../assets/locations/nfz-placeholder.png';
import shadow from '../../assets/game/shadow.png';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { keyframes } from '@emotion/react';
import { prizes } from '../../constants/prizes';

const SchoolPageContainer = styled.div`
  height: 100vh;
  min-height: 700px;
  background: ${(props) =>
    props.loading
      ? `url(${paperBg})`
      : `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${background})`};
  background-repeat: no-repeat;
  background-position-x: center;
  background-size: 160% 60vh;
  box-shadow: ${(props) =>
    props.loading ? 'none' : 'inset 0 0 0 2000px rgba(0, 0, 0, 0.75)'};
  position: relative;
  display: ${(props) => (props.loading ? 'flex' : 'block')};
  justify-content: center;
  align-items: flex-end;

  @media (min-width: 767px) {
    background-size: 100% 100vh;
  }
`;

const BenefitContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  width: 100%;
  margin-top: 10%;

  @media (min-width: 767px) {
    max-width: 620px;
    padding: 2rem 0 0 4rem;
  }
`;

const BenefitRow = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;
  @media (min-width: 767px) {
    width: 80%;
    margin: 0;
  }
`;

const HiddenItemsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 2rem;
  flex-wrap: wrap;

  @media (min-width: 767px) {
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const InstructionContainer = styled.div`
  margin-top: 1rem;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3.5rem;

  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

const BackButton = styled.div`
  width: 87px;
  height: 32px;
  border: 3px solid #ab19ef;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 25px;
  left: 25px;

  @media (min-width: 767px) {
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
    border: ${(props) =>
      props.betting ? '3px solid grey' : '3px solid #ab19ef'};
    height: 48px;
    width: 231px;
    cursor: ${(props) => (props.betting ? 'normal' : 'pointer')};
    font-weight: 700;
    margin-left: 40px;
    margin-top: 0;
    margin-bottom: 1rem;

    &:hover {
      background: ${(props) => (props.betting ? 'transparent' : '#ab19ef')};
    }
  }
`;

const HiddenItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  /* min-width: 50%; */
  max-width: 144px;

  @media (min-width: 767px) {
    justify-content: flex-start;
    min-height: 250px;
    min-width: 208px;
  }
`;

const RewardRightText = styled.div`
  margin-left: 3rem;
  line-height: 175%;
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 1rem;

  @media (mix-width: 767px) {
    font-size: 14px;
  }
`;

const NFTsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
  width: 100%;

  .nft-container {
    width: 110px;
    height: 110px;
    margin: 3px;
    position: relative;
    cursor: pointer;
    img {
      width: 100%;
    }

    .checkbox {
      width: 30px;
      height: 30px;
      opacity: 0;
      position: absolute;
      bottom: 0;
      right: 0;
    }

    @media (min-width: 767px) {
      width: 187px;
      height: 187px;
    }

    .located {
      position: absolute;
      left: 0%;
      top: 0%;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: black;
      opacity: 0.7;
      cursor: auto;
      font-weight: bold;
      font-size: 1.2rem;
      z-index: 999;
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

const SchoolImage = styled.img`
  width: 220px;
  /* height: 225px; */

  @media (min-width: 767px) {
    display: block;
    /* width: 571px; */
    width: 100%;
    /* height: 583px; */
  }
`;

const BenefitIcons = styled.img`
  display: none;
  @media (min-width: 767px) {
    display: block;
    margin: 0.5rem;
    padding: 0.5rem;
    max-width: 32px;
  }
`;

const YellowText = styled.span`
  color: #ccee25;
`;

const rotate360 = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  margin-left: 1rem;
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 2px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const InventoryText = styled.b`
  display: none;

  @media (min-width: 767px) {
    display: block;
    font-size: 14px;
    line-height: 150%;
    margin-top: 0.5rem;
  }
`;

const SendTeamButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) =>
    props.betting ? '3px solid grey' : '3px solid #ab19ef'};
  height: 48px;
  width: 90%;
  cursor: ${(props) => (props.betting ? 'normal' : 'pointer')};
  font-weight: 700;
  margin: auto;
  margin-top: 1rem;

  @media (min-width: 767px) {
    display: none;
  }
`;

const BenefitList = [
  {
    img: discord,
    alt: 'discord',
    listItem:
      'The School is the home of the NFZ DAO (Decentralized Autonomous Organization). Access to special School DAO Discord channel',
  },
  {
    img: chairs,
    alt: 'chairs',
    listItem: '1,200 total spots maximum within the school',
  },
  {
    img: head,
    alt: 'head',
    listItem:
      'Your zombies BECOME the DAO token. New trait added to your Nice Fun Zombie’s Metadata - Location: School',
  },
  {
    img: eth1,
    alt: 'eth1',
    listItem:
      'Estimate starting value of approx. 24 ETH, meaning automatic value increase to your zombie of 0.02ETH to start',
  },
  {
    img: hat,
    alt: 'hat',
    listItem: 'Monthly AMAs and NFT education sessions with top NFT experts',
  },
  {
    img: eth3,
    alt: 'eth3',
    listItem: 'Percentage of NFZ secondary sales will be given to the DAO',
  },
];

const MidRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 3rem;
  padding: 0 5%;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-around;
    text-align: start;
    margin: 4rem 0 2rem 0;
    width: 90%;
  }
`;

const ProbabilityContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

const ProbabilityLeftText = styled.span`
  font-size: 14px;
  font-weight: bold;
  line-height: 175%;

  @media (min-width: 767px) {
    margin-right: 3rem;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;

const TopRowSubheader = styled.b`
  text-align: center;
  font-size: 18px;
  padding: 0 5%;

  @media (min-width: 767px) {
    text-align: start;
    margin: 1rem 0;
  }
`;

const TopRowSubheader2 = styled.b`
  text-align: center;
  font-size: 18px;
  padding: 0 5%;

  @media (min-width: 767px) {
    text-align: start;
    min-width: 608px;
    margin: 0;
  }
`;

const MidRowSubheader = styled.b`
  font-size: 18px;
  margin: 1rem;

  @media (min-width: 767px) {
    text-align: start;
    margin: 0;
  }
`;

const ProbabilityItemRow = styled(Row)`
  margin-bottom: 1rem;
  min-width: 140px;

  @media (min-width: 767px) {
    max-width: none;
  }
`;

function ListItemWithIcon({ img, alt, text }) {
  return (
    <BenefitRow>
      <BenefitIcons src={img} alt={alt} height="" />
      {text}
    </BenefitRow>
  );
}

export default function SchoolPage({
  tokensContract,
  userAccount,
  zombieClick,
  selectedIds,
  userNfts,
  useKeyCard,
  userKeyCards,
  totalSchoolCount,
  schoolPrizeCounts,
}) {
  const [loading, setLoading] = useState(false);
  const [betting, setBetting] = useState(false);
  const history = useHistory();

  const casinoClick = () => {
    if (betting || selectedIds.length < 1) return;

    useKeyCard();
    setBetting(true);
    const _ids = selectedIds.map(Number);
    tokensContract.methods
      .burnKeycard(userAccount, _ids, 1, 1)
      .send({ from: userAccount })
      .on('receipt', (receipt) => {
        setLoading(true);
        setBetting(false);
        console.log('keyCardBurn txn', receipt);
      });
  };

  return (
    <SchoolPageContainer loading={loading}>
      {!loading && (
        <>
          <BackButton onClick={() => history.push('/locations')}>
            Back
          </BackButton>
          <TopContainer>
            <BenefitContainer>
              <TopRowSubheader>Guaranteed Benefits</TopRowSubheader>
              {BenefitList.map((item, index) => (
                <ListItemWithIcon
                  img={item.img}
                  alt={item.alt}
                  text={item.listItem}
                  key={index}
                />
              ))}
              <br />
            </BenefitContainer>
            <Col justifyContent="center" alignItems="center">
              <SchoolImage src={school} alt="school" />
              <BetButton
                betting={selectedIds.length < 1 || betting}
                onClick={casinoClick}
              >
                Hit the Books! {betting && <Spinner />}
              </BetButton>
              <InventoryText>
                There are {totalSchoolCount} other Zombies currently in the
                School
              </InventoryText>
              <InventoryText>
                You have <YellowText>{userKeyCards}</YellowText> keycards to
                use. One will be burned to play.
              </InventoryText>
            </Col>
          </TopContainer>
          <MidRowContainer>
            <ProbabilityContainer>
              <TopRowSubheader2>
                What’s Hiding in the School (To be found by Searching)
              </TopRowSubheader2>
              {schoolPrizeCounts && (
                <HiddenItemsRow>
                  <HiddenItems>
                    <img src={placeholder} alt="NFZs" />
                    <span>
                      {schoolPrizeCounts[prizes.generalPrizes[1]] || 0} NFZs
                    </span>
                  </HiddenItems>

                  <HiddenItems>
                    <img
                      src={zeneca}
                      alt="zeneca"
                      style={{ maxWidth: '106px' }}
                    />
                    <span>
                      {schoolPrizeCounts[prizes.generalPrizes[2]] || 0} Zeneca
                      Academy Tokens
                    </span>
                  </HiddenItems>
                  <HiddenItems>
                    <img
                      src={shadow}
                      alt="5 Custom NFZs"
                      style={{ maxWidth: '144px' }}
                    />
                    <p>
                      {schoolPrizeCounts[prizes.generalPrizes[4]] || 0} Custom
                      NFZs
                    </p>
                    <span style={{ fontSize: '10px' }}>
                      (no utility, special commission)
                    </span>
                  </HiddenItems>
                </HiddenItemsRow>
              )}
            </ProbabilityContainer>
            <ProbabilityContainer>
              <MidRowSubheader>
                Horde Size Search Prize Probabilities
              </MidRowSubheader>
              <p style={{ fontSize: '10px', textAlign: 'justify' }}>
                *Sending a Genesis Zombie in a Horde gives +1 to the Horde Size
                (only once)
              </p>
              <Row justifyContent="space-between" alignItems="center">
                <Col justifyContent="space-between" alignItems="space-between">
                  <ProbabilityItemRow
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <ProbabilityLeftText>Send 1 NFZ</ProbabilityLeftText>{' '}
                    <YellowText>10%</YellowText>
                  </ProbabilityItemRow>
                  <ProbabilityItemRow
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <ProbabilityLeftText>Send 2 NFZs</ProbabilityLeftText>{' '}
                    <YellowText>25%</YellowText>
                  </ProbabilityItemRow>

                  <ProbabilityItemRow
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <ProbabilityLeftText>Send 3 NFZs</ProbabilityLeftText>{' '}
                    <YellowText>35%</YellowText>
                  </ProbabilityItemRow>
                </Col>
                <Col justifyContent="start" alignItems="space-between">
                  <ProbabilityItemRow
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <ProbabilityLeftText>Send 4 NFZs</ProbabilityLeftText>{' '}
                    <YellowText>50%</YellowText>
                  </ProbabilityItemRow>

                  <ProbabilityItemRow
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <ProbabilityLeftText>Send 5 NFZs</ProbabilityLeftText>{' '}
                    <YellowText>70%</YellowText>
                  </ProbabilityItemRow>

                  <ProbabilityItemRow
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <ProbabilityLeftText>Send 6 NFZs</ProbabilityLeftText>{' '}
                    <YellowText>100%</YellowText>
                  </ProbabilityItemRow>
                </Col>
              </Row>
            </ProbabilityContainer>
            <ProbabilityContainer>
              {/* <MidRowSubheader>Zombies Held within Casino</MidRowSubheader>
              <br />
              <Col justifyContent="space-around" alignItems="space-around">
                <Row justifyContent="space-between" alignItems="center">
                  <ZombieHeld>1 - 3 NFZs</ZombieHeld>
                  <RewardRightText>
                    Collect 1,000 Brain Fragments Daily
                  </RewardRightText>
                </Row>
                <Row justifyContent="space-between" alignItems="center">
                  <ZombieHeld>4 - 8 NFZs</ZombieHeld>
                  <RewardRightText>
                    Collect 3,000 Brain Fragments Daily
                  </RewardRightText>
                </Row>
                <Row justifyContent="space-between" alignItems="center">
                  <ZombieHeld>9 - 14 NFZs</ZombieHeld>
                  <RewardRightText>
                    Collect 6,000 Brain Fragments Daily
                  </RewardRightText>
                </Row>
                <Row justifyContent="space-between" alignItems="center">
                  <ZombieHeld>15+ NFZs</ZombieHeld>
                  <RewardRightText>
                    Collect 10,000 Brain Fragments Daily
                  </RewardRightText>
                </Row>
              </Col> */}
            </ProbabilityContainer>
          </MidRowContainer>
          <InstructionContainer>
            <b style={{ fontSize: '18px' }}>
              CHOOSE THE ZOMBIES YOU WANT TO SEARCH WITH (MAX 6)
            </b>
            <p>{selectedIds.length} Zombies Selected</p>
          </InstructionContainer>
          <NFTsContainer>
            {userNfts &&
              userNfts.result.map((nft, index) => (
                <UserNFZ
                  nfz={nft}
                  id={index}
                  key={index}
                  selectedIds={selectedIds}
                  onClick={zombieClick}
                ></UserNFZ>
              ))}
          </NFTsContainer>
        </>
      )}
      {loading && (
        <img
          src={chalkboard}
          alt="chalkboard"
          style={{ maxHeight: '80%', margin: 'auto' }}
        />
      )}
      <SendTeamButton
        betting={selectedIds.length < 1 || betting}
        onClick={casinoClick}
      >
        Send my team!
      </SendTeamButton>
    </SchoolPageContainer>
  );
}
