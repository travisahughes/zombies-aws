import styled from '@emotion/styled';
import hand from '../../assets/arena/logo-mark-1.png';
import background from '../../assets/arena/arena-bg.png';
import zombies from '../../assets/arena/zombies/glad_breakfast.png';
import logo from '../../assets/logo.png';
import lfg from '../../assets/arena/lfg.png';
import sample from '../../assets/arena/sample-zombie-card.png';
import splatter from '../../assets/arena/splatter.png';
import winner from '../../assets/arena/winner.png';
import placeholder from '../../assets/arena/zombies/4100.png';
import battleBg from '../../assets/arena/battle-bg.png';
import opponentCards from '../../assets/arena/opponent-cards.png';
import cleave from '../../assets/arena/icons/cleave.svg';
import brain from '../../assets/arena/icons/brain-nom.png';
import bite from '../../assets/arena/bite.png';
import { useState, useEffect } from 'react';
import { keyframes } from '@emotion/react';
import axios from 'axios';
import { Spinner } from '../../Components/Spinner';

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const BattlePageContainer = styled.div`
  height: 100vh;
  min-height: 700px;
  background-image: url(${battleBg});
  background-repeat: no-repeat;
  background-position: center;
  margin: auto;
  overflow: hidden;

  @media (min-width: 768px) {
    background-size: cover;
  }
`;

const BattlePageContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 1440px;
  margin: auto;
`;

const Subtitle = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  margin: 2rem 0;
  margin-bottom: 0;
`;

const Logo = styled.img`
  height: 48px;
  position: absolute;
  left: 16px;
  top: 8px;
`;

const ZombiesContainer = styled.div`
  /* position: relative; */
  /* width: 603px; */
  display: flex;
  align-items: end;
  min-height: 300px;
  margin-bottom: 50px;
`;

const Zombie1 = styled.img`
  /* position: absolute; */
  height: 280px;
  width: 280px;
  left: 0;
  bottom: 0;
`;
const Zombie2 = styled.img`
  /* position: absolute; */
  height: 340px;
  width: 340px;
  left: 132px;
  margin-left: -140px;
  bottom: 0;
  z-index: 1;
`;
const Zombie3 = styled.img`
  /* position: absolute; */
  height: 280px;
  width: 280px;
  margin-left: -140px;
  right: 0;
  bottom: 0;
`;

const LFGButton = styled.div`
  background-image: url(${lfg});
  width: 181px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  color: #000000;
  margin-top: 24px;
  cursor: pointer;
`;

const RoundsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ZombieImage = styled.img`
  height: 262px;
  width: 180px;
  margin: 0 8px;
  border-radius: 15px;
  -webkit-transition: all 300ms ease;
  cursor: pointer;
  /* filter: ${({ isUnavailable }) =>
    isUnavailable ? 'grayscale(1)' : 'unset'}; */

  padding-bottom: ${({ isSelected }) => (isSelected ? '33px' : '0')};
  :hover {
    padding-bottom: 33px;
  }
`;

const BattleZombieImage = styled.img`
  margin: 0 50px;
  width: 128px;

  filter: ${(props) => (props.hit ? 'brightness(60%) opacity(60%)' : 'none')};

  @media (min-width: 768px) {
    width: 180px;
  }
`;

const ZombieImageOverlay = styled.div`
  position: absolute;
  height: 262px;
  width: 180px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  z-index: 9;
`;

const ThisRoundZombiesContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const RoundText = styled.span`
  font-family: 'Hyperwave Two';
  font-weight: 400;
  font-size: 80px;
  line-height: 75%;
  margin-bottom: 16px;
  margin-top: 50px;
`;

const InstructionsText = styled.span`
  font-size: 14px;
  line-height: 150%;
  margin: 32px 0;
  font-weight: 700;
  display: flex;
  margin-right: 17px;
  img {
    margin-left: 5px;
    margin-right: 5px;
  }
`;
const GreenHighlight = styled.span`
  color: #ccee25;
  margin-right: 5px;
`;

const Splatter = styled.div`
  background: url(${splatter});
  mix-blend-mode: hard-light;
  position: absolute;
  z-index: 1;
  background-size: contain;
  background-repeat: no-repeat;
  width: 200px;
  @media (min-width: 768px) {
    height: 325px;
    width: 521px;
  }
`;

const fadeInOut = keyframes`
  0%,100% { opacity: 0 }
  10% { opacity: 1 }
`;

const Bite = styled.img`
  /* background: url(${bite}); */
  /* mix-blend-mode: hard-light; */
  width: 200px;
  position: absolute;
  left: -50%;
  bottom: -50%;
  z-index: 1;
  opacity: 0;
  background-size: contain;
  background-repeat: no-repeat;
  animation: ${fadeInOut} 1s linear;

  @media (min-width: 768px) {
    width: 564px;
    height: 486px;
  }
`;

// const Bite = styled.div`
//   background: url(${bite});
//   mix-blend-mode: hard-light;
//   width: 564px;
//   height: 486px;
//   position: absolute;
//   left: -50%;
//   z-index: 1;
//   background-size: contain;
//   background-repeat: no-repeat;
// `;

const SpectatorContainer = styled(FlexRow)`
  position: fixed;
  bottom: 15px;

  @media (max-width: 767px) {
    bottom: 50px;
  }
`;
const SpectatorZombieImg = styled.img`
  border-radius: 8px;
  width: 84px;
  margin: 0px 4px;

  @media (min-width: 1441px) {
    width: 130px;
  }
`;

const WinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RoundDetailContainer = styled(FlexRow)`
  align-items: center;
`;

const WinnerZombieImg = styled.img`
  border-radius: 14px;
  margin: 0 8px;
  height: 300px;
`;

const OpponentCardsImg = styled.img`
  position: fixed;
  top: 10px;
  @media (max-width: 767px) {
    /* position: relative; */
    top: 5%;
    max-width: 245px;
  }
`;

const EmptyScore = styled.div`
  background: #000000;
  border: 1px solid rgba(255, 255, 255, 0.25);
  height: 22px;
  width: 22px;
  border-radius: 50%;
  margin: 0 5px;
`;

const OpponentScore = styled(FlexRow)`
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  left: 3%;
  top: 20px;

  @media (min-width: 768px) {
    left: 20%;
    top: 20px;
  }
`;
const YourScore = styled(FlexRow)`
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  right: 3%;
  bottom: 20px;

  @media (min-width: 768px) {
    right: 20%;
    bottom: 20px;
  }
`;

const BrainImage = styled.img`
  max-width: 32px;
`;

const UnavailableZombieOverlay = styled.div`
  position: absolute;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
    url(cards-color.png);
  border-radius: 15px;
  top: 0;
  width: 180px;
  height: 262px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 8px;
`;

const LostText = styled.div`
  padding: 20px;
  font-size: 20px;
  text-align: center;
`;

export default function BattlePage({
  slots,
  nextRound,
  account,
  roundInfo,
  display,
  loading,
  attacking,
  gruntsData,
  getImageUrl,
}) {
  const [selectedChampion, setSelectedChampion] = useState(null);

  const unavailableZombies = roundInfo?.roster?.player?.unavailableZombies;
  const loser = roundInfo?.lastRoundResult?.loser;
  const playerChampion = roundInfo?.roster?.player?.champion;

  // const getGameStage = async () => {
  //   const endpointUrl = `https://bnpoulp3kk.execute-api.us-west-2.amazonaws.com/main/game?walletId=${account}`;
  //   const response = await axios.get(endpointUrl);
  //   console.log('getGameStage');
  //   console.log(response);
  // };
  // useEffect(() => {
  //   if (account) {
  //     getGameStage();
  //   }
  // }, [account]);

  console.log('Roundinfo');
  console.log(roundInfo);

  return (
    <BattlePageContainer>
      <BattlePageContent>
        {display === 'selection' && (
          <RoundsContainer>
            <img src={opponentCards} />
            <RoundText>Round {roundInfo?.currentRound?.round}</RoundText>
            <ZombiesContainer>
              {roundInfo?.roster?.player?.availableZombies
                .concat(roundInfo?.roster?.player?.unavailableZombies)
                .map((id, index) => (
                  <div style={{ position: 'relative' }}>
                    <ZombieImage
                      isSelected={selectedChampion === id}
                      isUnavailable={unavailableZombies.includes(id)}
                      src={getImageUrl(id)}
                      alt="zombie"
                      key={index}
                      onClick={() => {
                        if (unavailableZombies.includes(parseInt(id))) return;
                        setSelectedChampion(id);
                      }}
                    />
                    {unavailableZombies.includes(parseInt(id)) && (
                      <UnavailableZombieOverlay>
                        round {unavailableZombies.indexOf(parseInt(id)) + 1}
                      </UnavailableZombieOverlay>
                    )}
                  </div>
                ))}
            </ZombiesContainer>
            <FlexRow>
              <InstructionsText>
                Attack mode! &nbsp;
                <GreenHighlight>{roundInfo?.currentRound?.text}</GreenHighlight>
                {/* Choose the fighter with the best{' '} */}
                {/* <img src={cleave} /> */}
                {/* <GreenHighlight>ATTACK</GreenHighlight> for round 1. */}
              </InstructionsText>
              {selectedChampion && (
                <LFGButton
                  onClick={() => {
                    if (loading) return;
                    nextRound(selectedChampion);
                    setSelectedChampion(null);
                  }}
                >
                  {loading ? <Spinner /> : 'Fight!'}
                </LFGButton>
              )}
            </FlexRow>
          </RoundsContainer>
        )}
        {display === 'fight' && (
          <>
            <RoundsContainer>
              <OpponentScore>
                {Array.apply(null, { length: roundInfo.scores.opponent }).map(
                  (i) => (
                    <BrainImage src={brain} alt="brain" key={i} />
                  )
                )}
                {Array.apply(null, {
                  length: 5 - roundInfo.scores.opponent,
                }).map((i) => (
                  <EmptyScore />
                ))}
              </OpponentScore>
              <YourScore>
                {Array.apply(null, { length: roundInfo.scores.player }).map(
                  (i) => (
                    <BrainImage src={brain} alt="brain" key={i} />
                  )
                )}
                {Array.apply(null, {
                  length: 5 - roundInfo.scores.player,
                }).map((i) => (
                  <EmptyScore />
                ))}
              </YourScore>
              <OpponentCardsImg src={opponentCards} alt="opponent-card" />

              <ThisRoundZombiesContainer>
                <div style={{ position: 'relative' }}>
                  {/* {false && <Splatter />} */}
                  {loser === playerChampion && attacking && <Bite src={bite} />}
                  <BattleZombieImage
                    src={getImageUrl(playerChampion)}
                    alt="figher"
                    hit={loser === playerChampion}
                  />
                </div>
                <div style={{ position: 'relative' }}>
                  {/* {false && <Splatter />} */}
                  {loser === roundInfo.roster.opponent.champion &&
                    attacking && <Bite src={bite} />}
                  <BattleZombieImage
                    src={getImageUrl(roundInfo.roster.opponent.champion)}
                    alt="figher"
                    hit={loser === roundInfo.roster.opponent.champion}
                  />
                </div>
              </ThisRoundZombiesContainer>

              <SpectatorContainer>
                {roundInfo.roster.player.availableZombies
                  .concat(unavailableZombies)
                  .filter((item) => item !== playerChampion)
                  .map((id) => (
                    <SpectatorZombieImg
                      src={getImageUrl(id)}
                      alt={id}
                      key={id}
                    />
                  ))}
              </SpectatorContainer>
            </RoundsContainer>
          </>
        )}

        {display === 'winner' && (
          <>
            <RoundsContainer>
              <WinnerContainer>
                {roundInfo.scores.player > roundInfo.scores.opponent && (
                  <img src={winner} />
                )}
                <RoundDetailContainer>
                  {roundInfo.scores.player > roundInfo.scores.opponent ? (
                    unavailableZombies
                      .slice(0, 3)
                      .map((id) => (
                        <WinnerZombieImg
                          src={getImageUrl(id)}
                          key={id}
                          alt="zombies"
                        />
                      ))
                  ) : (
                    <LostText>
                      You lost this battle
                      <br />
                      Build another roster and take on a new team!
                    </LostText>
                  )}
                  <div>
                    <a href="/arena" style={{ textDecoration: 'none' }}>
                      <LFGButton>Find a new fight!</LFGButton>
                    </a>
                    <a href="/" style={{ textDecoration: 'none' }}>
                      <LFGButton>rest up (quit)</LFGButton>
                    </a>
                  </div>
                </RoundDetailContainer>
              </WinnerContainer>
            </RoundsContainer>
          </>
        )}
      </BattlePageContent>
    </BattlePageContainer>
  );
}
