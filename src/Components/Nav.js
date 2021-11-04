/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';
import discordLogo from '../assets/icons/discord.png';
import twitterLogo from '../assets/icons/twitter.png';
import openseaLogo from '../assets/icons/opensea.png';
import etherscanLogo from '../assets/icons/etherscan.png';
import burger from '../assets/icons/burger.png';

let Header = (props) => {
  const header = css`
    z-index: 100;
    width: 100%;
    height: 64px;
    color: white;
    padding: 0 0;
    font-size: 14px;
    @media (max-width: 640px) {
      position: fixed;
      top: 0;
      left: 0;
      background-color: #000000;
    }

    .green-highlight {
      color: #aff038;
    }

    .header-left {
      float: left;
      padding-top: 7px;

      a {
        color: white;
        text-decoration: none;
      }
    }

    .header-right {
      background-color: #000000;
      float: right;
      padding-left: 50px;
    }

    .toggle-false {
      @media (max-width: 640px) {
        display: none;
      }
    }

    .toggle-true {
      @media (max-width: 640px) {
        display: block;
        padding: 10px 0;
        width: 100%;
      }
    }

    #hamburger {
      display: none;
      @media (max-width: 640px) {
        display: block;
        position: absolute;
        top: 24px;
        left: 10px;
        width: 25px;
        height: 25px;
        cursor: pointer;

        img {
          width: 25px;
        }
      }
    }

    #logo {
      font-family: teko;
      font-size: 24px;
      font-weight: 400;
      width: 130px;
      margin: 4px 0 0 15px;
      @media (max-width: 640px) {
        position: absolute;
        top: 15px;
        left: 31%;
      }
    }
  `;

  const navmenu = css`
    list-style-type: none;
    margin: 0;
    padding: 10px 10px 0px 0;
    float: left;
    background-color: #000000;
    @media (max-width: 640px) {
      margin: 0;
      padding: 50px 0 0 0;
    }

    li {
      float: left;
      padding: 7px 12px;
      @media (max-width: 960px) {
        font-size: 12px;
        padding: 10px 8px;
      }
      @media (max-width: 640px) {
        font-size: 12px;
        font-weight: 500;
        padding: 16px 8px 16px 32px;
        width: 100%;
        box-sizing: border-box;
        &:hover {
          background-color: #aff038;
          color: #000000;

          a {
            color: #000000;
          }
        }
      }

      a {
        color: white;
        text-decoration: none;

        &:hover,
        &:active {
          color: #aff038;
          border-bottom: #aff038 4px solid;
          padding-bottom: 17px;
          @media (max-width: 960px) {
            padding-bottom: 20px;
          }
        }

        @media (max-width: 640px) {
          color: #aff038;
          font-size: 14px;
          padding: 7px 8px;
          width: 100%;
          height: 40px;
          &:hover,
          &:active {
            color: #000000;
            border: none;
          }
        }
      }
    }

    #discord-icon {
      fill: white;
      &:hover {
        fill: green;
      }
    }

    li.icon {
      padding: 0 10x;
      @media (max-width: 640px) {
        background: none;
        width: 70px;
        float: left;
        margin-top: 50px;
        padding: 10px;
      }

      a:hover,
      a:active {
        border: none;
      }

      img {
        @media (max-width: 960px) {
          width: 32px;
        }
      }
    }

    li#twitter {
      padding-top: 5px;

      @media (max-width: 960px) {
        padding-top: 3px;
      }
    }

    li#discord {
      padding-top: 3px;
      @media (max-width: 640px) {
        margin-left: 80px;
      }
    }

    li#opensea {
      padding-top: 0;
    }

    li#etherscan {
      padding-top: 0;
    }
  `;

  const [toggleState, setToggleState] = useState(false);

  const toggleMenu = () => {
    const updatedToggle = !toggleState;
    setToggleState(updatedToggle);
  };

  return (
    <header css={header}>
      <div id="top" className="header-left">
        <div id="hamburger" onClick={toggleMenu}>
          <img src={burger} alt="menu" />
        </div>
        <div id="logo">
          <a href="/">
            Nice Fun <span className="green-highlight">Zombies</span>
          </a>
        </div>
      </div>
      <div className={`header-right toggle-${toggleState}`}>
        <ul css={navmenu}>
          <li className="text">
            <a href="/dashboard" onClick={toggleMenu}>
              Dashboard
            </a>{' '}
          </li>
          <li className="text">
            <a href="#mission" onClick={toggleMenu}>
              Mission & Goals
            </a>
          </li>
          <li className="text">
            <a href="#roadmap" onClick={toggleMenu}>
              Roadmap
            </a>
          </li>
          <li className="text">
            <a href="#team" onClick={toggleMenu}>
              Team
            </a>
          </li>
          <li className="text">
            <a href="#howto" onClick={toggleMenu}>
              How to Mint
            </a>
          </li>
          <li className="text">
            <a href="#faq" onClick={toggleMenu}>
              FAQ
            </a>
          </li>
          <li className="icon" id="discord">
            <a
              href="https://discord.gg/77VswFkcuY"
              target="_blank"
              rel="noreferrer"
              onClick={toggleMenu}
            >
              <img alt="discord" src={discordLogo} />
            </a>
          </li>
          <li className="icon" id="twitter">
            <a
              href="https://www.twitter.com/nicefunzombies"
              target="_blank"
              rel="noreferrer"
              onClick={toggleMenu}
            >
              <img alt="twitter" src={twitterLogo} />
            </a>
          </li>
          <li className="icon" id="opensea">
            <a
              href="https://opensea.io/collection/nicefunzombies"
              target="_blank"
              rel="noreferrer"
              onClick={toggleMenu}
            >
              <img alt="opensea" src={openseaLogo} />
            </a>
          </li>
          <li className="icon" id="etherscan">
            <a
              href="https://etherscan.io/address/0x65273d9be210e10be64d7e122387cc85857f92fd"
              target="_blank"
              rel="noreferrer"
              onClick={toggleMenu}
            >
              <img alt="etherscan" src={etherscanLogo} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
