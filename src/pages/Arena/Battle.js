import styled from '@emotion/styled';
import hand from '../../assets/arena/logo-mark-1.png';
import background from '../../assets/arena/arena-bg.png';
import zombies from '../../assets/arena/zombies/glad_breakfast.png';
import logo from '../../assets/logo.png';
import lfg from '../../assets/arena/lfg.png';
import sample from '../../assets/arena/sample-zombie-card.png';
import splatter from '../../assets/arena/splatter.png';
import { useState, useEffect } from 'react';

const BattlePageContainer = styled.div`
  height: 100vh;
  min-height: 700px;
  /* background-image: url(${background}); */
  background-repeat: no-repeat;
  background-size: cover;
  margin: auto;
  max-width: 1440px;
`;

const BattlePageContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1440px;
  position: relative;
`;

const HandImage = styled.img`
  height: 300px;
  width: 249px;
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
  width: 603px;
  display: flex;
  align-items: baseline;
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
`;

const VSText = styled.span`
  font-family: 'Hyperwave Three';
  font-weight: 400;
  font-size: 96px;
  line-height: 150%;
  margin: 0 32px;
`;

const Splatter = styled.div`
  background: url(${splatter});
  mix-blend-mode: hard-light;
  height: 325px;
  width: 521px;
  position: absolute;
  /* left: 0; */
  z-index: 1;
  /* left: 50%; */
  background-size: contain;
  background-repeat: no-repeat;
`;

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export default function BattlePage() {
  const [display, setDisplay] = useState('found');

  useEffect(async () => {
    // await sleep(5000);
    // setDisplay('found');
  }, []);

  return (
    <BattlePageContainer>
      <BattlePageContent>
        {display === 'initial' && (
          <>
            <Logo src={logo} alt="logo" />
            <HandImage src={hand} alt="searching" />
            <Subtitle>Searching for opponent</Subtitle>
          </>
        )}
        {display === 'found' && (
          <>
            <Logo src={logo} alt="logo" />
            <ZombiesContainer>
              <Zombie1 src={zombies} />
              <Zombie2 src={zombies} />
              <Zombie3 src={zombies} />
            </ZombiesContainer>
            <Subtitle>Opponent Found!</Subtitle>
            <LFGButton onClick={() => history.push('/arena/battle')}>
              Fight!
            </LFGButton>
          </>
        )}
        {display === 'round' && (
          <>
            <Logo src={logo} alt="logo" />
            <RoundsContainer>
              <RoundText>Round 2</RoundText>
              <ThisRoundZombiesContainer>
                <div style={{ position: 'relative' }}>
                  <ZombieImageOverlay />
                  <Splatter />
                  <ZombieImage src={sample} alt="figher" />
                </div>
                <VSText>vs</VSText>
                <ZombieImage src={sample} alt="figher" />
              </ThisRoundZombiesContainer>
            </RoundsContainer>
          </>
        )}
      </BattlePageContent>
    </BattlePageContainer>
  );
}
