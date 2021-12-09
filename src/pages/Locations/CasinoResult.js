import styled from '@emotion/styled';
import background from '../../assets/locations/casino-interior-bg.png';
import logo from '../../assets/locations/logo-result.png';
import keycard from '../../assets/locations/keycard-lg.png';
import rewardContainer from '../../assets/locations/casino-reward-container.png';
import zombie1 from '../../assets/gallery/zombie1.png';
import zombie2 from '../../assets/gallery/zombie2.png';
import zombie3 from '../../assets/gallery/zombie3.png';
import zombie4 from '../../assets/gallery/zombie4.png';
import zombie5 from '../../assets/gallery/zombie5.png';
import zombie6 from '../../assets/gallery/zombie6.png';

const CasinoResultPageContainer = styled.div`
  /* height: 100vh; */
  min-height: 700px;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position-x: center;
  background-size: 100% 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 767px) {
    background-size: 100% 100%;
  }
`;

const LogoImg = styled.img`
  /* margin: auto; */
  text-align: center;
  margin: 1rem 0;
  max-width: 238px;

  @media (min-width: 767px) {
    margin: 2rem 0;
    max-width: 0px;
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

const RewardContainer = styled.div`
  background-image: url(${rewardContainer});
  background-repeat: no-repeat;
  background-position-x: center;
  background-size: 100%;
  padding: 10px;
  width: 90%;

  @media (min-width: 767px) {
    height: 682;
    width: 850px;
    padding: 6% 2% 6% 2%;
  }
`;

const ZombieImage = styled.img`
  height: 60px;
  margin: 0px;
  width: 16.6%;

  @media (min-width: 767px) {
    width: 120px;
    height: 120px;
    margin: 4px;
  }
`;

const MobileZombies = styled.div`
  position: fixed;
  height: 60px;
  bottom: 0;
  z-index: 1;
  width: 100%;

  @media (min-width: 767px) {
    display: none;
  }
`;

const ImageCol = styled(Col)`
  min-width: 180px;
`;

const RewardHighlight = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  margin: 1rem 0 0.5rem 0;

  @media (min-width: 767px) {
    font-size: 20px;
  }
`;

const YellowText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 125%;
  text-align: center;
  margin: 0;
  color: #ccee25;

  @media (min-width: 767px) {
    font-size: 14px;
  }
`;

const TopRow = styled(Row)`
  display: none;
  @media (min-width: 767px) {
    display: flex;
  }
`;

const RewardSubtext = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 175%;
  text-align: center;
  margin-bottom: 0 0 1rem 0;

  @media (min-width: 767px) {
    font-size: 14px;
  }
`;

const RewardParagraph = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 125%;
  max-width: 570px;
  text-align: center;

  @media (min-width: 767px) {
    font-size: 14px;
  }
`;

const MobileKeycard = styled.img`
  height: 248px;
  @media (min-width: 767px) {
    display: none;
  }
`;

export default function CasinoResultPage() {
  return (
    <CasinoResultPageContainer>
      <LogoImg src={logo} alt="reward-logo" />
      <MobileKeycard src={keycard} alt="keycard" />

      <RewardContainer>
        <TopRow justifyContent="space-around" alignItems="center">
          <ImageCol justifyContent="center" alignItems="">
            <Row justifyContent="flex-end" alignItems="center">
              <ZombieImage src={zombie1} alt="zombie" />
            </Row>
            <Row justifyContent="flex-start" alignItems="center">
              <ZombieImage src={zombie2} alt="zombie" />
            </Row>
            <Row justifyContent="flex-end" alignItems="center">
              <ZombieImage src={zombie3} alt="zombie" />
            </Row>
          </ImageCol>
          <img src={keycard} />
          <ImageCol justifyContent="center" alignItems="">
            <Row justifyContent="flex-start" alignItems="center">
              <ZombieImage src={zombie4} alt="zombie" />
            </Row>
            <Row justifyContent="flex-end" alignItems="center">
              <ZombieImage src={zombie5} alt="zombie" />
            </Row>
            <Row justifyContent="flex-start" alignItems="center">
              <ZombieImage src={zombie6} alt="zombie" />
            </Row>
          </ImageCol>
        </TopRow>
        <Col alignItems="center" justifyContent="center">
          <RewardHighlight>
            Congratulations your zombies found X/Y/Z.
          </RewardHighlight>
          <RewardSubtext>
            There are now only X number of Y in the Casino Copy
          </RewardSubtext>
          <YellowText>
            Your zombies are now associated with the Casino
          </YellowText>
          <RewardParagraph>
            Please check your NFT wallet in a few minutes to see your rewards
          </RewardParagraph>
          <RewardParagraph>
            Our world is growing…what locations will open up next?
          </RewardParagraph>
        </Col>
      </RewardContainer>
      <MobileZombies>
        <ZombieImage src={zombie1} alt="zombie" />
        <ZombieImage src={zombie2} alt="zombie" />
        <ZombieImage src={zombie3} alt="zombie" />
        <ZombieImage src={zombie4} alt="zombie" />
        <ZombieImage src={zombie5} alt="zombie" />
        <ZombieImage src={zombie6} alt="zombie" />
      </MobileZombies>
    </CasinoResultPageContainer>
  );
}