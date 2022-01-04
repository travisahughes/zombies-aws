/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import textmask from '../assets/textmask.jpg';
import bannerImg from '../assets/banner-image.png';
import treeBg from '../assets/trees-bg.png';
import Nav from './Nav';
import styled from '@emotion/styled';
import openseaLogo from '../assets/icons/opensea.png';

const HeroSection = styled.section`
  height: 90vh;
  min-height: 700px;
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

let Hero = (props) => {
  // const hero = css`
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  //   color: white;
  //   @media (max-width: 640px) {
  //     margin-top: 64px;
  //   }

  //   p {
  //     font-weight: 700;
  //     font-size: 24px;
  //   }

  //   #header {
  //     /* z-index: 10; */
  //     /* width: 753px; */
  //     width: 100%;
  //     /* margin-top: 340px; */
  //     flex-direction: row;
  //     display: flex;
  //     align-items: center;
  //     justify-content: center;
  //     @media (max-width: 960px) {
  //       margin-top: 180px;
  //       width: 640px;
  //     }
  //     @media (max-width: 640px) {
  //       margin-top: 360px;
  //       width: 360px;
  //     }
  //   }

  //   #top-text {
  //     font-family: teko;
  //     width: 450px;
  //     align-self: flex-start;
  //     font-weight: 400;
  //     font-size: 40px;
  //     @media (max-width: 960px) {
  //       width: 350px;
  //       font-size: 30px;
  //     }
  //     @media (max-width: 640px) {
  //       width: 300px;
  //       padding-left: 0;
  //       font-size: 24px;
  //       font-weight: 500;
  //       align-self: center;
  //     }
  //   }

  //   #main-text {
  //     font-family: teko;
  //     width: 625px;
  //     align-self: flex-end;
  //     font-weight: 400;
  //     font-size: 116px;
  //     margin-top: -35px;
  //     @media (max-width: 960px) {
  //       width: 525px;
  //       font-size: 96px;
  //     }
  //     @media (max-width: 640px) {
  //       width: 300px;
  //       align-self: center;
  //       font-size: 48px;
  //       font-weight: 500;
  //       margin-top: -10px;
  //     }
  //   }

  //   #sub-text {
  //     width: 630px;
  //     align-self: flex-end;
  //     font-weight: 400;
  //     font-size: 18px;
  //     text-align: center;
  //     margin-top: -35px;

  //     @media (max-width: 960px) {
  //       width: 550px;
  //       font-size: 14px;
  //     }
  //     @media (max-width: 640px) {
  //       width: 300px;
  //       align-self: center;
  //       font-size: 14px;
  //       margin-top: 10px;
  //       text-align: center;
  //     }
  //   }

  //   .clip-text {
  //     font-size: 116px;
  //     -webkit-background-clip: text;
  //     -webkit-text-fill-color: transparent;
  //     background-image: url(${textmask});
  //     @media (max-width: 960px) {
  //       font-size: 96px;
  //     }
  //     @media (max-width: 640px) {
  //       font-size: 48px;
  //       -webkit-background-clip: unset;
  //       -webkit-text-fill-color: white;
  //       background-image: none;
  //       color: #ffffff;
  //     }
  //   }
  // `;

  return (
    <>
      <Nav />
      <HeroSection>
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
                .open('https://opensea.io/collection/nicefunzombies', '_blank')
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
      </HeroSection>
    </>
  );
};

export default Hero;
