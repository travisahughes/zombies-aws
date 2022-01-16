/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import textmask from '../assets/textmask.jpg';
import bannerImg from '../assets/banner-image.png';
import treeBg from '../assets/hero_bg.jpg';
import star from '../assets/star.svg';
import twitter from '../assets/icons/twitter.png';
import discord from '../assets/icons/discord.png';
import Nav from './Nav';
import styled from '@emotion/styled';
import openseaLogo from '../assets/icons/opensea.png';
import looksrareLogo from '../assets/icons/looksrare.png';

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
    background-size: 100% 140%;
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
  font-size: 36px;

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
  height: 50px;
  border: 3px solid #bad14d;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 150px;
  margin-right: 1rem;
  @media (min-width: 768px) {
    /* width: 300px; */
  }
`;

const ButtonTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

const CheckOpenseaText = styled.span`
  /* font-weight: bold; */
  font-size: 16px;
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

const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background: #000000;
  margin-bottom: 1rem;
  height: 40px;
`;

const Link = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: bold;
  line-height: 150%;
  cursor: pointer;
  img {
    margin-right: 16px;
  }

  @media (min-width: 768px) {
    font-size: 14px;

    img {
      margin-right: 8px;
    }
  }
`;

const JoinHordeText = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  line-height: 150%;
`;

const MarketplaceButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

let Hero = (props) => {
  return (
    <>
      <Nav />
      <HeroSection>
        <FlexBox>
          <BannerImg src={bannerImg} alt="banner" />
          <RightContainer>
            <TitleText>
              An undying GAME THEORY NFT Project & Community
            </TitleText>
            <DescriptionText>
              <GreenText> Nice Fun Zombies</GreenText> (NFZs) is a collection of
              6,666 unique zombie NFT characters on the Ethereum blockchain in
              search of BRAINS. Nice Fun Zombie owners will get access to game
              mechanics such as searching, holding, and hording for benefits, a
              community of zombie loving fans, and digital and real world perks.{' '}
              <b>Come join the NFZ horde, we're definitely nice and fun.</b>
            </DescriptionText>

            <LinksContainer>
              <Link
                onClick={() =>
                  window.open('https://rarity.tools/nicefunzombies', '_blank')
                }
              >
                <img src={star} alt="rarity" /> Rarity Tools
              </Link>
              <Link
                onClick={() =>
                  window.open('https://discord.gg/77VswFkcuY', '_blank')
                }
              >
                <img src={discord} alt="discord" height="18" /> Discord
              </Link>
              <Link
                onClick={() =>
                  window.open(
                    'https://www.twitter.com/nicefunzombies',
                    '_blank'
                  )
                }
              >
                <img src={twitter} alt="twitter" height="17" /> Twitter
              </Link>
            </LinksContainer>
            <JoinHordeText>
              <GreenText>Join the horde!</GreenText> Purchase On:
            </JoinHordeText>
            <MarketplaceButtonsContainer>
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
                  <CheckOpenseaText>OpenSea</CheckOpenseaText>
                </ButtonTextContainer>
              </OpenseaButton>
              <OpenseaButton
                onClick={() =>
                  window
                    .open(
                      'https://looksrare.org/collections/0x65273D9be210e10be64D7E122387cc85857F92FD',
                      '_blank'
                    )
                    .focus()
                }
              >
                <img src={looksrareLogo} alt="looksrare" />
                <ButtonTextContainer>
                  <CheckOpenseaText>Looksrare</CheckOpenseaText>
                </ButtonTextContainer>
              </OpenseaButton>
            </MarketplaceButtonsContainer>
          </RightContainer>
        </FlexBox>
      </HeroSection>
    </>
  );
};

export default Hero;
