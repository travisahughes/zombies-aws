import styled from '@emotion/styled';
import { useHistory } from 'react-router';
import background from '../../assets/arena/arena-cover.png';
import leftImg from '../../assets/arena/arena-left.png';
import rightImg from '../../assets/arena/arena-right.png';
import lfg from '../../assets/arena/lfg.png';
import lfgMobile from '../../assets/arena/lfg-mobile.png';

const ArenaPageContainer = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: 639px 359px;
  background-position: center;
  min-height: 400px;
  height: 100%;

  @media (min-width: 767px) {
    height: 100vh;
    min-height: 700px;
    background-size: cover;
  }
`;

const ArenaPageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  @media (min-width: 768px) {
    justify-content: space-evenly;
  }
`;

const EnterArenaText = styled.span`
  font-family: 'Hyperwave Two';
  font-weight: 400;
  font-size: 64px;
  line-height: 57px;
  @media (min-width: 767px) {
    font-size: 144px;
    line-height: 50%;
    text-align: center;
    margin-bottom: 32px;
  }
`;

const BlackContainer = styled.div`
  background: #000000;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 24px 32px;
  height: 200px;
  @media (min-width: 767px) {
    justify-content: center;
    position: relative;
    width: 439px;
    height: 162px;
  }
`;

const EnterArenaDesc = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
`;

const LFGButton = styled.div`
  background-image: url(${lfgMobile});
  background-repeat: no-repeat;
  background-size: 100%;
  color: #000000;
  width: 90%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 21px;
  @media (min-width: 768px) {
    background-image: url(${lfg});
    width: 181px;
    height: 48px;
    font-weight: 700;
    line-height: 150%;
    margin-top: 24px;
    cursor: pointer;
  }
`;

const Desktop = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const Mobile = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

export default function ArenaPage(props) {
  const history = useHistory();
  return (
    <ArenaPageContainer>
      <ArenaPageContent>
        <Desktop>
          <EnterArenaText>ENTER THE ARENA</EnterArenaText>
        </Desktop>
        <BlackContainer>
          <Mobile>
            <EnterArenaText>ENTER THE ARENA</EnterArenaText>
          </Mobile>
          <EnterArenaDesc>
            Battle your best NFZs for clout and prizes
          </EnterArenaDesc>
          <EnterArenaDesc style={{ fontWeight: 'bold' }}>
            You have x battle tokens. Burn one to play!
          </EnterArenaDesc>
          <LFGButton onClick={() => history.push('/arena/selection')}>
            LFG!
          </LFGButton>
        </BlackContainer>
      </ArenaPageContent>
    </ArenaPageContainer>
  );
}
