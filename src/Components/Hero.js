/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import textmask from '../assets/textmask.jpg';
import bannerImg from '../assets/banner-image.png';
import treeBg from '../assets/trees-bg.png';
import Nav from './Nav';
import styled from '@emotion/styled';
import openseaLogo from '../assets/icons/opensea.png';

const HeroSection = styled.section`
  /* height: 90vh; */
  /* min-height: 700px; */
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-color: #301934 !important;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 38.27%,
      rgba(0, 0, 0, 0.75) 77.47%
    ),
    url(${treeBg});
  background-repeat: no-repeat;
  background-position-x: center;
  background-size: cover;

  @media (min-width: 768px) {
    /* background-size: 100% 100%; */
  }
`;

const BannerImg = styled.img`
  max-width: 290px;
  @media (min-width: 768px) {
    width: 100%;
    max-width: 528px;
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 650px;
  width: 90%;
`;

const TitleText = styled.p`
  font-family: Teko;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 57px;
  text-transform: uppercase;
  margin: 0;
`;
const DescriptionText = styled.p`
  font-size: 14px;
  line-height: 175%;
`;
const GreenText = styled.span`
  color: #aff038;
`;

const OpenseaButton = styled.div`
  height: 80px;
  width: 368px;
  border: 3px solid #bad14d;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  width: 320px;
  @media (min-width: 768px) {
    width: 368px;
  }
`;

const ButtonTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

const SoldOutText = styled.span`
  font-weight: bold;
  font-size: 20px;
  line-height: 150%;
`;

const CheckOpenseaText = styled.span`
  /* font-weight: bold; */
  font-size: 16px;
`;

const RarityTool = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 150%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  max-width: 368px;

  @media (min-width: 768px) {
    /* max-width: 242px;
     */
    width: 320px;

    width: 100%;
  }

  a {
    text-decoration: none;
    color: #50e6ff;
  }
`;

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  align-items: center;

  margin: 60px auto 20px auto;
  padding: 0 20px;
  max-width: 1310px;

  @media (max-width: 960px) {
    max-width: 940px;
    padding: 0 20px;
    margin: 60px auto 20px auto;
  }
  @media (max-width: 640px) {
    max-width: 620px;
    padding: 0 10px;
    margin: 60px auto 20px auto;
  }
`;

let Hero = (props) => {
  return (
    <>
      <Nav />
      <HeroSection>
        <FlexBox>
          <BannerImg src={bannerImg} alt="banner" />
          <RightContainer>
            <TitleText>An undying NFT Art Project & Community</TitleText>
            <DescriptionText>
              Note: There are approximately{' '}
              <GreenText>2,000 NFZs still to be found in locations</GreenText> -
              NFZ holders can send their zombies to SEARCH locations for hidden
              ones in the collection. (Coming Soon)
            </DescriptionText>

            <OpenseaButton
              onClick={() =>
                window
                  .open(
                    'https://opensea.io/collection/nicefunzombies',
                    '_blank'
                  )
                  .focus()
              }
            >
              <img src={openseaLogo} alt="opensea" />
              <ButtonTextContainer>
                <SoldOutText>The Mint is SOLD OUT!</SoldOutText>
                <CheckOpenseaText>Check OpenSea to Purchase</CheckOpenseaText>
              </ButtonTextContainer>
            </OpenseaButton>
            <RarityTool>
              <a
                href="https://rarity.tools/nicefunzombies"
                target="_blank"
                rel="noreferrer"
              >
                Check us out on Rarity Tools
              </a>
            </RarityTool>
          </RightContainer>
        </FlexBox>
      </HeroSection>
    </>
  );
};

export default Hero;
