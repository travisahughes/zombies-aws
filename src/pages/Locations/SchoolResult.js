import styled from '@emotion/styled';
import background from '../../assets/locations/school-interior-bg.png';
import logo from '../../assets/locations/logo-result.png';
import school from '../../assets/locations/school.png';
import rewardContainer from '../../assets/locations/casino-reward-container.png';

import { useEffect, useState } from 'react';
const SchoolResultPageContainer = styled.div`
  height: 100vh;
  min-height: 900px;
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
    max-width: 306px;
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
    width: 146px;
    height: 146px;
    margin: 2px;
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
  min-width: 160px;
  max-width: 454px;
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
    margin-bottom: 0;
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
    max-width: 450px;
    margin-bottom: 1.2rem;
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
  margin-bottom: 1.5rem;

  @media (min-width: 767px) {
    font-size: 14px;
    margin-top: 0;
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
    max-width: 680px;
    line-height: 17.5px;
    margin-bottom: 4px;
  }
`;

const MobileKeycard = styled.img`
  height: 248px;
  @media (min-width: 767px) {
    display: none;
  }
`;

const ImageRow = styled(Row)`
  width: 100%;
  flex-wrap: wrap;
`;

export default function SchoolResultPage({ selectedZombies, userRewards }) {
  const [rewardStatement, setRewardStatement] = useState(null);
  useEffect(() => {
    const statement = userRewards?.generalReward
      ? `Congraulations your zombies found a ${userRewards?.generalReward}`
      : 'Unfortunately your horde did not find a Search reward';

    setRewardStatement(statement);
  }, [userRewards]);
  return (
    <SchoolResultPageContainer>
      <LogoImg src={logo} alt="reward-logo" />
      <MobileKeycard src={school} alt="school" />
      <RewardContainer>
        <TopRow justifyContent="center" alignItems="center">
          <ImageCol justifyContent="center" alignItems="center">
            <ImageRow>
              {selectedZombies.map((zombie, index) => (
                <ZombieImage src={zombie.image} key={index} />
              ))}
            </ImageRow>
          </ImageCol>
          <ImageCol justifyContent="center" alignItems="center">
            <img
              src={school}
              alt="school"
              style={{ maxWidth: '309px', width: '100%' }}
            />
          </ImageCol>
        </TopRow>
        {/* <Col alignItems="center" justifyContent="center">
          <RewardHighlight>
            Congratulations your zombies found X/Y/Z.
          </RewardHighlight>
          <RewardSubtext>
            There are now only X number of Y in the School Copy
          </RewardSubtext>
          <YellowText>
            Your zombies are now associated with the School
          </YellowText>
          <RewardParagraph>
            Please check your NFT wallet in a few minutes to see your rewards
          </RewardParagraph>
          <RewardParagraph>
            Our world is growing…what locations will open up next?
          </RewardParagraph>
        </Col> */}
        <Col alignItems="center" justifyContent="center">
          <RewardHighlight>
            Welcome to the Nice Fun Zombies School!
          </RewardHighlight>
          <RewardSubtext>{rewardStatement}</RewardSubtext>
          <YellowText>
            Your horde will now be associated with the School and receive the
            School Location Benefits
          </YellowText>
          <RewardParagraph>
            Please head to our Discord to verify your status and join the School
            channels{userRewards?.generalReward && ','}
          </RewardParagraph>
          {userRewards?.generalReward && (
            <RewardParagraph>
              and for details on how to receive your reward.
            </RewardParagraph>
          )}
        </Col>
      </RewardContainer>
      <MobileZombies>
        {selectedZombies.map((zombie, index) => (
          <ZombieImage src={zombie.image} key={index} />
        ))}
      </MobileZombies>
    </SchoolResultPageContainer>
  );
}
