import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import hand from '../../assets/locations/logo-mark-1.png';
import background from '../../assets/locations/split-path-image.png';

const BattlePageContainer = styled.div`
  height: 100vh;
  min-height: 700px;
  background-repeat: no-repeat;
  background-size: cover;
  margin: auto;
  max-width: 1440px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%),
    url(${background});
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.75);
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

export default function ErrorPage() {
  const history = useHistory();

  return (
    <BattlePageContainer>
      <BattlePageContent>
        <HandImage src={hand} alt="hand" />
        <Subtitle>Something went wrong!</Subtitle>
        <BackButton onClick={() => history.push('/locations/casino')}>
          Go Back
        </BackButton>
      </BattlePageContent>
    </BattlePageContainer>
  );
}
