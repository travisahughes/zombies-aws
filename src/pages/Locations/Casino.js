import styled from '@emotion/styled';
import background from '../../assets/locations/split-path-image.png';
import paperBg from '../../assets/locations/paperbg.png';
import slotMachine from '../../assets/locations/loading-casino-2.gif';
import brain from '../../assets/locations/brain.png';
import chip from '../../assets/locations/chip.png';
import card from '../../assets/locations/cards.png';
import NFZs from '../../assets/locations/2797.png';
import Keycard from '../../assets/locations/keycard.png';
import discord from '../../assets/icons/discord.png';
import UserNFZ from '../../Components/userNFZ';
import casino from '../../assets/locations/casino.png';
import placeholder from '../../assets/locations/nfz-placeholder.png';
import shadow from '../../assets/game/shadow.png';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { keyframes } from '@emotion/react';
import { isCompositeComponentWithType } from 'react-dom/cjs/react-dom-test-utils.production.min';
import { prizes } from '../../constants/prizes';

const CasinoPageContainer = styled.div`
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
  align-items: center;
  font-size: 14px;
  width: 100%;
  padding: 0;
  margin-left: -1rem;

  @media (min-width: 767px) {
    align-items: flex-start;
    min-width: 610px;
    max-width: 650px;
    padding: 2rem 0 0 4rem;
    margin-right: 2rem;
    width: 100%;
  }
`;

const BenefitRow = styled.div`
  display: flex;
  align-items: center;
  width: 80%;

  @media (min-width: 767px) {
    width: 100%;
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
    justify-content: flex-start;
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
    justify-content: space-around;
    padding: 0 5%;
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
    width: 350px;
    cursor: ${(props) => (props.betting ? 'normal' : 'pointer')};
    font-weight: 700;
    margin-left: 40px;
    margin-top: 1rem;
    margin-bottom: 1rem;

    &:hover {
      background: ${(props) => (props.betting ? 'transparent' : '#ab19ef')};
    }
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
    min-width: 200px;
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
    min-height: 130px;
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

const CasinoImage = styled.img`
  width: 220px;
  /* height: 225px; */

  @media (min-width: 767px) {
    display: block;
    /* width: 571px; */
    width: 100%;
    max-width: 571px;
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

const ZombieHeld = styled(YellowText)`
  margin-bottom: 1rem;
  min-width: 95px;
`;

const BenefitList = [
  {
    img: discord,
    alt: 'discord',
    listItem: (
      <ul>
        <li>
          <b>An active degen experience </b> - entering the casino gives access
          to a special Discord channel to play casino games and earn Brain
          Fragments (see table below)
        </li>
      </ul>
    ),
  },
  {
    img: brain,
    alt: 'brain',
    listItem: (
      <ul>
        <li>
          <span>
            <b>Brain fragments are redeemable for prizes, </b> selection rotates
            weekly
          </span>
        </li>
      </ul>
    ),
  },
  {
    img: chip,
    alt: 'chip',
    listItem: (
      <ul>
        <li>
          <span>
            <b>Access to monthly poker games </b>
          </span>
        </li>
      </ul>
    ),
  },
  {
    img: card,
    alt: 'card',
    listItem: (
      <ul>
        <li>
          <span>
            <b>New trait </b> added to your Nice Fun Zombie’s metadata –{' '}
            <YellowText>Location: Casino</YellowText>
          </span>
        </li>
      </ul>
    ),
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
    margin: 2rem 0 5rem 0;
    margin-top: 3rem;
    width: 80%;
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
  /* padding: 0 5%; */

  @media (min-width: 767px) {
    text-align: start;
    margin: 1rem 0;
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

const SlotMachineImage = styled.img`
  /* position: absolute;
    right: 50%;
    bottom: 0; */
  max-height: 90%;
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

const TopLeftContainer = styled(Col)`
  max-width: 620px;
  /* padding: 2rem 0 0 4rem; */
  /* width: 100%; */

  @media (min-widht: 767px) {
    min-width: 620px;
  }
`;

function ListItemWithIcon({ img, alt, text }) {
  return (
    <BenefitRow>
      <BenefitIcons src={img} alt={alt} height="100%" />
      {text}
    </BenefitRow>
  );
}

export default function CasinoPage({
  tokensContract,
  userAccount,
  zombieClick,
  selectedIds,
  userNfts,
  useKeyCard,
  userKeyCards,
  totalCasinoCount,
  casinoPrizeCounts,
}) {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [betting, setBetting] = useState(false);

  const casinoClick = () => {
    if (betting || selectedIds.length < 1) return;
    useKeyCard();
    setBetting(true);
    const _ids = selectedIds.map(Number);
    console.log(_ids);

    tokensContract.methods
      .burnKeycard(userAccount, _ids, 2, 1)
      .send({ from: userAccount })
      .on('receipt', (receipt) => {
        setLoading(true);
        setBetting(false);
        //console.log('keyCardBurn txn', receipt);
      })
      .on('error', (err) => {
        setBetting(false);
      });
  };

  return (
    <CasinoPageContainer loading={loading}>
      {!loading && (
        <>
          <BackButton onClick={() => history.push('/locations')}>
            Back
          </BackButton>
          <TopContainer>
            <TopLeftContainer justifyContent="center" alignItems="center">
              <CasinoImage src={casino} alt="casino" />
              <BetButton
                betting={selectedIds.length < 1 || betting}
                onClick={casinoClick}
              >
                BET ON THE CASINO {betting && <Spinner />}
              </BetButton>
              <InventoryText>
                There are {totalCasinoCount} other Zombies currently in the
                Casino
              </InventoryText>
              <InventoryText>
                You have <YellowText>{userKeyCards}</YellowText> keycards to
                use. One will be burned to Search & Assign.
              </InventoryText>
            </TopLeftContainer>
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

              <TopRowSubheader>
                What’s Hiding in the Casino (To be found by Searching)
              </TopRowSubheader>
              {casinoPrizeCounts && (
                <>
                  <HiddenItemsRow>
                    <HiddenItems>
                      <img src={placeholder} alt="NFZs" />
                      <span>
                        {casinoPrizeCounts[prizes.generalPrizes[1]] || 0} NFZs
                      </span>
                    </HiddenItems>

                    <HiddenItems>
                      <img
                        src={Keycard}
                        alt="Keycards"
                        style={{ maxWidth: '106px' }}
                      />
                      <span>
                        {casinoPrizeCounts[prizes.generalPrizes[3]] || 0}{' '}
                        Keycards
                      </span>
                    </HiddenItems>

                    <HiddenItems>
                      <img
                        src={shadow}
                        alt="5 Custom NFZs"
                        style={{ maxWidth: '144px' }}
                      />
                      <p>
                        {casinoPrizeCounts[prizes.generalPrizes[4]] || 0} Custom
                        NFZs
                      </p>
                      <span style={{ fontSize: '10px' }}>
                        (no utility, special commission)
                      </span>
                    </HiddenItems>
                  </HiddenItemsRow>
                </>
              )}
            </BenefitContainer>
          </TopContainer>
          <MidRowContainer>
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
                    <YellowText>20%</YellowText>
                  </ProbabilityItemRow>
                  <ProbabilityItemRow
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <ProbabilityLeftText>Send 2 NFZs</ProbabilityLeftText>{' '}
                    <YellowText>30%</YellowText>
                  </ProbabilityItemRow>

                  <ProbabilityItemRow
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <ProbabilityLeftText>Send 3 NFZs</ProbabilityLeftText>{' '}
                    <YellowText>40%</YellowText>
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
                    <YellowText>75%</YellowText>
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
              <MidRowSubheader>Zombies Held within Casino</MidRowSubheader>
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
              </Col>
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
      {loading && <SlotMachineImage src={slotMachine} alt="slot-machine" />}
      <SendTeamButton
        betting={selectedIds.length < 1 || betting}
        onClick={casinoClick}
      >
        Send my team!
      </SendTeamButton>
    </CasinoPageContainer>
  );
}
