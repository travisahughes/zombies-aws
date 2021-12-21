import styled from '@emotion/styled';
import { contract_data } from '../../constants/moralis_env';
import background from '../../assets/locations/split-path-image.png';
import textBg from '../../assets/locations/text-bg.png';
import casino from '../../assets/locations/casino.png';
import school from '../../assets/locations/school.png';
import { useHistory } from 'react-router';

const SplitPathPageContainer = styled.div`
  height: 100vh;
  min-height: 700px;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position-x: center;
  background-size: 160% 60vh;

  @media (min-width: 767px) {
    background-size: 100% 100vh;
  }
`;

const SplitPathHeader = styled.h1`
  visibility: hidden;
  display: none;
  @media (min-width: 767px) {
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 175%;
    visibility: visible;
    display: block;
  }
`;

const SplitPathTextContainer = styled.div`
  background-image: url(${textBg});
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 5%;
  min-height: 200px;

  @media (min-width: 1024px) {
    min-width: 1000px;
    min-height: 180px;
  }
`;

const SplitPathTextMain = styled.span`
  font-size: 16px;
  margin: 8px 0;

  @media (min-width: 767px) {
    font-size: 24px;
  }
`;

const SplitPathTextSub = styled.span`
  font-size: 12px;
  @media (min-width: 767px) {
    font-size: 14px;
  }
`;

const LocationImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: -3rem;
  margin-bottom: 3rem;
  @media (min-width: 767px) {
    margin: 0;
  }
`;

const LocationImage = styled.img`
  margin: 0;
  width: 50%;

  @media (min-width: 767px) {
    max-height: 50vh;
    max-width: 50%;
    cursor: pointer;
    margin: 0 1rem;
    transition: all 0.3s ease-in-out;

    :hover {
      transform: scale(1.3);
    }
  }
`;

const SplitPathContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (min-width: 767px) {
    padding: 0 12%;
    justify-content: space-between;
  }
`;

const FunButton = styled.div`
  display: inline-flex;
  border: 3px solid #ab19ef;
  padding: 20px;
  cursor: pointer;
  margin: 8px;
  -webkit-transition: border 500ms ease-out;
  -moz-transition: border 500ms ease-out;
  -o-transition: border 500ms ease-out;
  transition: border 500ms ease-out;
  z-index: 99;

  &:hover {
    border: 3px solid #ccee25;
    box-sizing: border-box;
    filter: drop-shadow(0px 0px 4px #ccee25);
  }
`;

export default function SplitPathPage({
  authenticate,
  isAuthenticated,
  chainId,
  switchNetwork,
}) {
  const history = useHistory();
  // TODO: Change to '0x89' for prod!
  const preferredChain = '0x13881'; // mumbai / staging
  // const preferredChain = '0x89'; // prod polygon

  return (
    <SplitPathPageContainer>
      <SplitPathContent>
        <SplitPathHeader>Every Decision Matters</SplitPathHeader>
        <LocationImageContainer>
          <LocationImage
            src={casino}
            alt="casino"
            onClick={() => history.push('/locations/casino')}
          />
          <LocationImage
            src={school}
            alt="school"
            onClick={() => history.push('/locations/school')}
          />
        </LocationImageContainer>
        <SplitPathTextContainer>
          {!isAuthenticated && (
            <FunButton
              id="login"
              className="btn"
              onClick={() => authenticate()}
            >
              Connect Your Wallet
            </FunButton>
          )}
          {isAuthenticated && chainId !== preferredChain && (
            <FunButton
              className="btn"
              onClick={() => switchNetwork(preferredChain)}
            >
              Switch to{' '}
              {contract_data[preferredChain]?.network_name || 'Unknown'}
            </FunButton>
          )}
          <SplitPathTextMain>
            Two Locations have Emerged, Each with different Benefits
          </SplitPathTextMain>
          <SplitPathTextSub>
            Please select the location you want to have your zombies search
          </SplitPathTextSub>
        </SplitPathTextContainer>
      </SplitPathContent>
    </SplitPathPageContainer>
  );
}
