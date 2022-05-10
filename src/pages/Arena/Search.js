import styled from '@emotion/styled';
import hand from '../../assets/arena/logo-mark-1.png';
import background from '../../assets/arena/arena-bg.png';
import zombies from '../../assets/arena/zombies/glad_breakfast.png';
import logo from '../../assets/logo.png';
import lfg from '../../assets/arena/lfg.png';
import placeholder from '../../assets/arena/zombies/4100.png';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const SearchPageContainer = styled.div`
  height: 100vh;
  min-height: 700px;
  /* background-image: url(${background}); */
  background-repeat: no-repeat;
  background-size: cover;
  margin: auto;
  max-width: 1440px;
`;

const SearchPageContent = styled.div`
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

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

const Logo = styled.img`
  height: 48px;
  position: absolute;
  left: 16px;
  top: 8px;
`;

const ZombiesContainer = styled.div`
  /* position: relative; */
  display: none;
  @media (min-width: 768px) {
    width: 603px;
    display: flex;
    align-items: baseline;
  }
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

const MobileDisplay = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

const FlexRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 1rem;
`;

const MobileZombie = styled.img`
  width: 106px;
  border-radius: 9px;
  margin: 0 2.5px;
`;

export default function SearchPage() {
  const [display, setDisplay] = useState('initial');
  const history = useHistory();

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  useEffect(async () => {
    // Add the loading logic here.
    await sleep(5000);
    setDisplay('found');
    await sleep(5000);
    history.push('/arena/battle');
  }, []);

  return (
    <SearchPageContainer>
      <SearchPageContent>
        <Logo src={logo} alt="logo" />
        {display === 'initial' && (
          <>
            <HandImage src={hand} alt="searching" />
            <Subtitle>Searching for opponent</Subtitle>
          </>
        )}
        {display === 'found' && (
          <>
            <ZombiesContainer>
              <Zombie1 src={zombies} alt="zombie" />
              <Zombie2 src={zombies} alt="zombie" />
              <Zombie3 src={zombies} alt="zombie" />
            </ZombiesContainer>
            <MobileDisplay>
              <FlexRow>
                <MobileZombie src={placeholder} alt="zombie" />
                <MobileZombie src={placeholder} alt="zombie" />
                <MobileZombie src={placeholder} alt="zombie" />
              </FlexRow>
              <FlexRow>
                <MobileZombie src={placeholder} alt="zombie" />
                <MobileZombie src={placeholder} alt="zombie" />
              </FlexRow>
            </MobileDisplay>
            <Subtitle>Opponent Found!</Subtitle>
            <LFGButton onClick={() => history.push('/arena/battle')}>
              Fight!
            </LFGButton>
          </>
        )}
      </SearchPageContent>
    </SearchPageContainer>
  );
}
