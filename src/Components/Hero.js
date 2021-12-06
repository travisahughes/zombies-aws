/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import textmask from '../assets/textmask.jpg';
import Nav from './Nav';

let Hero = (props) => {
  const hero = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    @media (max-width: 640px) {
      margin-top: 64px;
    }

    p {
      font-weight: 700;
      font-size: 24px;
    }

    #header {
      z-index: 10;
      width: 753px;
      margin-top: 340px;
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 960px) {
        margin-top: 180px;
        width: 640px;
      }
      @media (max-width: 640px) {
        margin-top: 360px;
        width: 360px;
      }
    }

    #top-text {
      font-family: teko;
      width: 450px;
      align-self: flex-start;
      font-weight: 400;
      font-size: 40px;
      @media (max-width: 960px) {
        width: 350px;
        font-size: 30px;
      }
      @media (max-width: 640px) {
        width: 300px;
        padding-left: 0;
        font-size: 24px;
        font-weight: 500;
        align-self: center;
      }
    }

    #main-text {
      font-family: teko;
      width: 625px;
      align-self: flex-end;
      font-weight: 400;
      font-size: 116px;
      margin-top: -35px;
      @media (max-width: 960px) {
        width: 525px;
        font-size: 96px;
      }
      @media (max-width: 640px) {
        width: 300px;
        align-self: center;
        font-size: 48px;
        font-weight: 500;
        margin-top: -10px;
      }
    }

    #sub-text {
      width: 630px;
      align-self: flex-end;
      font-weight: 400;
      font-size: 18px;
      text-align: center;
      margin-top: -35px;

      @media (max-width: 960px) {
        width: 550px;
        font-size: 14px;
      }
      @media (max-width: 640px) {
        width: 300px;
        align-self: center;
        font-size: 14px;
        margin-top: 10px;
        text-align: center;
      }
    }

    .clip-text {
      font-size: 116px;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image: url(${textmask});
      @media (max-width: 960px) {
        font-size: 96px;
      }
      @media (max-width: 640px) {
        font-size: 48px;
        -webkit-background-clip: unset;
        -webkit-text-fill-color: white;
        background-image: none;
        color: #ffffff;
      }
    }
  `;

  return (
    <div css={hero}>
      <Nav />
      <div id="header">
        <div id="top-text">ENTER THE UNIVERSE OF</div>
        <div id="main-text">
          NICE FUN{' '}
          <span id="zombies" className="clip-text">
            ZOMBIES
          </span>
        </div>
        <div id="sub-text">-- An Undying NFT Art Project & Community --</div>
      </div>
    </div>
  );
};

export default Hero;
