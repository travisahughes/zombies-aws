import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
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
  font-family: teko;
  // visibility: hidden;
  // display: none;

  font-style: normal;
  font-weight: normal;
  text-transform: uppercase;
  font-size: 165px;
  line-height: 288px;
  margin: 20px 0 0;
  visibility: visible;
  display: block;
  text-shadow: 0px 0px 4px #696647;

  @media (max-width: 1640px) {
    font-size: 100px;
    line-height: 188px;
  }
  @media (max-width: 1000px) {
    font-size: 80px;
    line-height: 150px;
  }
  @media (max-width: 800px) {
    font-size: 60px;
    line-height: 150px;
  }
  @media (max-width: 500px) {
    font-size: 40px;
    line-height: 100px;
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
    margin-left: 5rem;

    :hover {
      transform: scale(1.3);
    }
  }
`;

const SplitPathContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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

const ErrorMessage = styled.div`
  color: #63ffa9;
  font-size: 18px;
  padding: 10px 0;
`;

export default function SplitPathPage({
  authenticate,
  isAuthenticated,
  chainId,
  switchNetwork,
}) {
  const history = useHistory();
  // TODO: Change to '0x89' for prod!
  //const preferredChain = '0x13881'; // mumbai / staging
  const preferredChain = '0x89'; // prod polygon

  const [errMessage, setErrMessage] = useState(null);

  useEffect(() => {
    console.log('authed/chain', isAuthenticated, chainId);
    if (isAuthenticated && chainId == preferredChain) {
      setErrMessage(null);
    }
  }, [isAuthenticated, chainId]);

  const casinoClick = () => {
    if (!isAuthenticated || chainId !== preferredChain) {
      // show message
      setErrMessage('Connect your wallet & switch to the Polygon network!');
    } else {
      history.push('/locations/casino');
    }
  };

  const schoolClick = () => {
    if (!isAuthenticated || chainId !== preferredChain) {
      // show message
      setErrMessage('Connect your wallet & switch to the Polygon network!');
    } else {
      history.push('/locations/school');
    }
  };

  return (
    <SplitPathPageContainer>
      <SplitPathContent>
        <SplitPathHeader>Every Decision Matters</SplitPathHeader>
        <LocationImageContainer>
          <LocationImage
            src={casino}
            alt="casino"
            onClick={() => casinoClick()}
          />

          <LocationImage
            src={school}
            alt="school"
            onClick={() => schoolClick()}
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
          {errMessage && (
            <ErrorMessage id="err-message">{errMessage}</ErrorMessage>
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
