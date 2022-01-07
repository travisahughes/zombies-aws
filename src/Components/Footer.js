/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import footerlogo from '../assets/logo-mark-2.png';

let Footer = (props) => {
  const date = new Date();
  const year = date.getFullYear();

  const footer = css`
    height: 200px;
    width: 100%;
    background-color: #000000;
    font-size: 14px;
    display: flex;
    align-items: end;

    margin: 0px auto;
    max-width: 1310px;

    @media (max-width: 960px) {
      max-width: 940px;
      margin: 0 auto;
      height: 100px;
      width: 100%;
    }
    @media (max-width: 640px) {
      max-width: 620px;
      margin: 0 auto;
    }

    /* @media (max-width: 960px) { */
    /* height: 100px;
      width: 100%; */
    /* } */

    #footerleft {
      margin: 0 3rem;
      @media (max-width: 960px) {
      }
      @media (max-width: 640px) {
        margin: 0 1.9rem;
        height: auto;
        width: 100%;
        max-width: 82px;
      }
    }

    #copyright-wrapper {
      height: 100%;
      display: flex;
      align-items: center;
      @media (max-width: 640px) {
        padding: 0;
        bottom: 16px;
        margin: 0 auto;
        width: 100%;
        font-size: 14px;
      }

      #footer-copyright {
        color: #aff038;
        background-color: #000000;
        font-size: 14px;
        font-weight: 700;
        text-align: left;
        width: fit-content;

        @media (max-width: 640px) {
          font-size: 14px;
          margin: 0 auto;
        }
      }
    }
  `;

  return (
    <div id="footer" css={footer}>
      <img id="footerleft" src={footerlogo} alt="footer-logo" />
      <div id="copyright-wrapper">
        <div id="footer-copyright">
          NICE FUN ZOMBIES {year} - ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
