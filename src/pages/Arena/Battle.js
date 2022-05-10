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
import { imageUrl } from './Selection';

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
  /* transition: transform 2s; */
  -webkit-transition: all 300ms ease;
  cursor: pointer;

  /* padding-top: 33px; */

  :hover {
    padding-bottom: 33px;
  }
`;

const BattleZombieImage = styled.img`
  margin: 0 50px;

  filter: ${(props) => (props.hit ? 'brightness(60%) opacity(60%)' : 'none')};

  @media (max-width: 768px) {
    width: 128px;
  }
`;

const ZombieImageOverlay = styled.div`
  position: absolute;
  height: 262px;
  width: 180px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
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

const WinnderZombieImg = styled.img`
  border-radius: 14px;
  margin: 0 8px;
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

export default function BattlePage({ slots }) {
  const [display, setDisplay] = useState('selection');

  return (
    <BattlePageContainer>
      <BattlePageContent>
        {display === 'selection' && (
          <RoundsContainer>
            <img src={opponentCards} />
            <RoundText>Round 1</RoundText>
            <ZombiesContainer>
              {slots.slot1
                ? Object.values(slots).map((id, index) => (
                    <ZombieImage src={imageUrl(id)} alt="zombie" key={index} />
                  ))
                : [1, 2, 3, 4, 5].map((id, index) => (
                    <ZombieImage src={imageUrl(id)} alt="zombie" key={index} />
                  ))}
            </ZombiesContainer>
            <FlexRow>
              <InstructionsText>
                Attack mode! Choose the fighter with the best{' '}
                <img src={cleave} />
                <GreenHighlight>ATTACK</GreenHighlight> for round 1.
              </InstructionsText>
              <LFGButton>Fight!</LFGButton>
            </FlexRow>
          </RoundsContainer>
        )}
        {display === 'fight' && (
          <>
            <RoundsContainer>
              <OpponentScore>
                <BrainImage src={brain} alt="brain" />
                <EmptyScore />
                <EmptyScore />
                <EmptyScore />
                <EmptyScore />
              </OpponentScore>
              <YourScore>
                <BrainImage src={brain} alt="brain" />
                <EmptyScore />
                <EmptyScore />
                <EmptyScore />
                <EmptyScore />
              </YourScore>
              <OpponentCardsImg src={opponentCards} alt="opponent-card" />

              <ThisRoundZombiesContainer>
                <div style={{ position: 'relative' }}>
                  {/* <ZombieImageOverlay /> */}
                  {false && <Splatter />}
                  {true && <Bite src={bite} />}
                  <BattleZombieImage src={sample} alt="figher" hit={true} />
                </div>
                <div style={{ position: 'relative' }}>
                  {false && <Splatter />}
                  {true && <Bite src={bite} />}
                  <BattleZombieImage src={sample} alt="figher" hit={false} />
                </div>
              </ThisRoundZombiesContainer>
              <SpectatorContainer>
                <SpectatorZombieImg src={placeholder} />
                <SpectatorZombieImg src={placeholder} />
                <SpectatorZombieImg src={placeholder} />
                <SpectatorZombieImg src={placeholder} />
              </SpectatorContainer>
            </RoundsContainer>
          </>
        )}

        {display === 'winner' && (
          <>
            {/* <Logo src={logo} alt="logo" /> */}
            <RoundsContainer>
              <WinnerContainer>
                <img src={winner} />
                <RoundDetailContainer>
                  <WinnderZombieImg src={placeholder} />
                  <WinnderZombieImg src={placeholder} />
                  <WinnderZombieImg src={placeholder} />
                  <div>
                    <LFGButton>Find a new fight!</LFGButton>
                    <LFGButton>rest up (quit)</LFGButton>
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
