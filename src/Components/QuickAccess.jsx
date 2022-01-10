import locationBg from '../assets/locations/split-path-image.png';
import casino from '../assets/locations/casino.png';
import school from '../assets/locations/school.png';
import keycard from '../assets/locations/keycard.png';
// import dashboard from '../assets/dashboard.png';
import graveBg from '../assets/bg-grave.jpg';
import splitBg from '../assets/bg-splitpath.jpg';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';

const QuickAccessSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  min-height: 250px;
  width: 100%;
  max-width: 1440px;
  margin: auto;
`;

const DashboardAccess = styled.div`
  height: 100%;
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 16px;
  background-image: url(${graveBg});
  background-repeat: no-repeat;
  background-position-x: center;
  background-size: cover;
  cursor: pointer;
`;

const LocationAccess = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%),
    url(${splitBg});
  /* background-image: url(${splitBg}); */
  background-repeat: no-repeat;
  background-position-x: center;
  background-size: cover;
  padding: 16px;
  cursor: pointer;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 340px;
  p {
    font-size: 14px;
    line-height: 125%;
    margin: 0;
  }
`;

const BlueText = styled.span`
  color: #50e6ff;
  font-weight: bold;
`;

const Title = styled.span`
  font-family: Teko;
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: 52px;
  text-transform: uppercase;
`;

const KeycardImage = styled.img`
  height: 220px;
`;

const CasinoImage = styled.img`
  height: 184px;
  margin-top: 2rem;
`;

const SchoolImage = styled.img`
  height: 196px;
  margin-bottom: 2rem;
  margin-left: -30px;
`;

export default function QuickAccess() {
  const history = useHistory();
  return (
    <QuickAccessSection>
      <DashboardAccess onClick={() => history.push('/dashboard')}>
        <KeycardImage src={keycard} alt="keycard" />
        <TextContainer>
          <Title>OWNER DASHBOARD</Title>
          <p>
            View details on your NFZs, the state of the DAO, and the Trait
            Checker.
          </p>
        </TextContainer>
      </DashboardAccess>
      <LocationAccess onClick={() => history.push('/locations')}>
        <CasinoImage src={casino} alt="casino" />
        <SchoolImage src={school} alt="school" height={196} />
        <TextContainer>
          <span>Action Phase 1</span>
          <Title>LOCATIONS ARE NOW OPEN</Title>
          <p>
            Go to school, take your chances at the casino, or hold for something
            undiscovered...{' '}
          </p>
          <BlueText>which will you choose?</BlueText>
        </TextContainer>
      </LocationAccess>
    </QuickAccessSection>
  );
}
