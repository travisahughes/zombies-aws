/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import footerleft from '../assets/footer_left2.png';
import footerright from '../assets/footer_right.png';
import discord from '../assets/icons/discord_large.png';
import nftcal from '../assets/icons/nft-calendar-transparent.png';

let Footer = (props) => {
  const date = new Date();
  const year = date.getFullYear();

  const footer = css`
    text-align: center;
    position: relative;
    height: 500px;
    width: 100%;
    background-color: #000000;
    color: #ffffff;
    font-size: 14px;

    #footerleft {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 0;
      @media (max-width: 960px) {
        width: 300px;
      }
      @media (max-width: 640px) {
        width: 360px;
        height: auto;
      }
    }
    #footerright {
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 0;
      @media (max-width: 960px) {
        width: 300px;
      }
      @media (max-width: 640px) {
        display: none;
      }
    }

    #footer-text {
      position: relative;
      z-index: 10;
      font-size: 18px;
      line-height: 27px;
      padding: 220px 0 0 0;
      @media (max-width: 960px) {
        padding: 240px 0 0 0;
      }
      @media (max-width: 640px) {
        font-size: 14px;
        line-height: 21px;
        padding: 310px 0 0 0;
      }

      #wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        #discord-icon {
          background-color: #000000;
          width: 55px;
          padding: 7px;
          @media (max-width: 640px) {
            width: 40px;
          }

          img {
            width: 55px;
            height: auto;
            margin-top: 5px;
            @media (max-width: 640px) {
              width: 40px;
            }
          }
        }

        #text {
          text-align: left;
          background-color: #000000;
          padding: 7px;
        }
      }

      #nftcal-wrapper {
        display: flex;
        flex-direction: row;
        align-items: left;
        justify-content: center;

        #nftcal-icon {
          background-color: #000000;
          width: 100px;
          padding: 7px;
          @media (max-width: 640px) {
            width: 70px;
          }

          img {
            width: 100px;
            height: auto;
            margin-top: 5px;
            @media (max-width: 640px) {
              width: 70px;
            }
          }
        }

        #text {
          align-self: center;
          background-color: #000000;
          padding: 7px;
          font-style: italic;
        }
      }
    }

    #copyright-wrapper {
      position: absolute;
      bottom: 63px;
      padding: 0 0 0 64px;
      width: calc(100% - 64px);
      z-index: 10;
      @media (max-width: 640px) {
        padding: 0;
        bottom: 16px;
        margin: 0 auto;
        width: 100%;
        font-size: 12px;
      }

      #footer-copyright {
        color: #aff038;
        background-color: #000000;
        font-size: 14px;
        font-weight: 700;
        text-align: left;
        width: fit-content;

        @media (max-width: 640px) {
          font-size: 12px;
          margin: 0 auto;
        }
      }
    }
  `;

  return (
    <div id="footer" css={footer}>
      <div id="footer-text">
        <div id="wrapper">
          <div id="discord-icon">
            <a
              href="https://discord.gg/77VswFkcuY"
              target="_blank"
              rel="noreferrer"
            >
              <img id="discord" src={discord} alt="discord" />
            </a>
          </div>
          <div id="text">
            Join the horde on DISCORD
            <br />
            to get your Nice Fun Zombie
          </div>
        </div>
        <div id="nftcal-wrapper">
          <div id="text">As seen on</div>
          <div id="nftcal-icon">
            <a
              href="https://nftcalendar.io/event/nice-fun-zombies/"
              target="_blank"
              rel="noreferrer"
            >
              <img id="nftcal-img" src={nftcal} alt="nft calendar" />
            </a>
          </div>
        </div>
      </div>

      <div id="copyright-wrapper">
        <div id="footer-copyright">
          NICE FUN ZOMBIES {year} - ALL RIGHTS RESERVED
        </div>
      </div>

      <img id="footerleft" src={footerleft} alt="zombie" />
      <img id="footerright" src={footerright} alt="zombie" />
    </div>
  );
};

export default Footer;
