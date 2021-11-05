/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import grungebg from '../assets/grunge.png';
import discord from '../assets/icons/discord.png';
import twitter from '../assets/icons/twitter.png';
import zombie from '../assets/gallery/mint.jpg';

let Info = (props) => {
  const info = css`
    background-image: url(${grungebg});
    background-position: 60px 10px;
    background-repeat: no-repeat;
    color: white;

    .green-highlight {
      color: #aff038;
    }

    p {
      font-weight: 700;
      font-size: 24px;
    }

    .clear {
      clear: both;
    }
  `;
  const topText = css`
    font-size: 18px;
    padding: 150px 0 0 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 960px) {
      flex-direction: column;
    }
    @media (max-width: 640px) {
      padding: 80px 0 0 0;
    }

    .description {
      width: 800px;
      line-height: 36px;
      margin-right: 15px;
      @media (max-width: 960px) {
        width: 100%;
        margin-right: 0;
      }
      @media (max-width: 640px) {
        font-size: 14px;
        width: 100%;
        margin-right: 0;
      }
    }

    #links {
      width: 320px;
      text-align: center;
      margin-top: -20px;
      @media (max-width: 960px) {
        align-self: flex-end;
        margin-top: 40px;
      }
      @media (max-width: 640px) {
        align-self: center;
        margin: 60px 0 0 0;
      }

      .link {
        height: 35px;
        border: 3px solid;
        padding: 10px 0;
        margin-top: 15px;

        .image {
          width: 32px;
          padding-top: 10px;
        }
      }

      #discord {
        border-color: #ab19ef;

        #discord-text {
          text-align: left;
          background-image: url(${discord});
          background-repeat: no-repeat;
          margin: 4px auto 0;
          padding: 4px 0 0 50px;
          width: 120px;
        }
      }

      #twitter {
        border-color: #50e6ff;

        #twitter-text {
          text-align: left;
          background-image: url(${twitter});
          background-repeat: no-repeat;
          margin: 7px auto 0;
          padding: 2px 0 0 50px;
          width: 120px;
        }
      }

      a {
        text-decoration: none;
        color: white;
      }
    }
  `;

  const bottomText = css`
    padding: 20px 0 0 0;

    h1 {
      font-family: teko;
      font-weight: 400;
      font-size: 45px;
      margin: 10px 0;
    }

    a {
      color: #50e6ff;
    }

    #flex-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      @media (max-width: 960px) {
        flex-direction: column;
      }

      #first-two {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 34%;

        .end {
          margin-right: 24px;
        }

        @media (max-width: 960px) {
          flex-direction: row;
          width: 100%;
          max-width: 100%;

          .mint-numbers {
            width: 50%;
          }

          .end {
            margin-right: 0;
          }
        }

        @media (max-width: 640px) {
          flex-direction: column;
          width: 100%;
          max-width: 100%;

          .mint-numbers {
            width: calc(100% - 48px);
            margin: 25px 0 0 0;
          }
        }
      }

      #last-two {
        display: flex;
        flex-direction: row;
        width: 66%;

        .mint-numbers {
          width: 50%;
        }

        @media (max-width: 960px) {
          width: 100%;
          min-width: 0;
        }

        @media (max-width: 640px) {
          flex-direction: column;
          width: 100%;

          .mint-numbers,
          .mint-numbers.zombie-bg {
            width: calc(100% - 48px);
            margin: 25px 0 0 0;
          }

          .zombie-bg {
            min-height: 317px;
          }
        }

        .zombie-bg {
          padding: 24px;
          background-image: url(${zombie});
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }
      }
    }

    .mint-numbers {
      font-size: 14px;
      line-height: 24.5px;
      background-color: #151515;
      color: #999999;
      padding: 24px;
      margin: 0 25px 25px 0;
      text-align: center;

      h2 {
        font-weight: 700;
        font-size: 48px;
        line-height: 48px;
        color: #ffffff;
        margin: 10px 5px 10px 0;
      }

      p {
        font-size: 14px;
        font-weight: 400;
        margin-top: 0;
      }

      .leftalign {
        text-align: left;
      }

      #discord {
        margin-bottom: 6px;
      }

      img {
        width: 45px;
      }
    }

    .mint-numbers.zombie-bg {
      background: none;
      text-align: left;
      padding: 0;
    }

    .mint-numbers.end {
      margin-right: 0;
    }
  `;

  return (
    <div className="common-padding" css={info}>
      <div css={topText}>
        <div className="description">
          <span className="green-highlight">Nice Fun Zombies</span> (NFZs) is a
          collection of unique zombie NFT characters on the Ethereum blockchain
          in search of BRAINS. Nice Fun Zombie owners will get access to a world
          where Every Decision Matters – holders will be faced with several
          choices, and they will be able to create a tailored NFT experience.
          Game theory mechanics such as searching locations, hording, and
          holding will reward different benefits. Additionally, NFZ holders will
          have access to a community of zombie loving fans, real life rewards,
          and be at the start of the development of a new IP. Come join the NFZ
          horde... we're definitely nice and fun.
        </div>
        <div id="links">
          Join the Horde!
          <a
            href="https://discord.gg/77VswFkcuY"
            target="_blank"
            rel="noreferrer"
          >
            <div className="link" id="discord">
              <div id="discord-text">On Discord</div>
            </div>
          </a>
          <a
            href="https://www.twitter.com/nicefunzombies"
            target="_blank"
            rel="noreferrer"
          >
            <div className="link" id="twitter">
              <div id="twitter-text">On Twitter</div>
            </div>
          </a>
        </div>
      </div>
      <div id="mint" css={bottomText}>
        <h1>
          MINT - <span className="green-highlight">LIVE NOW</span>
        </h1>

        <div id="flex-container">
          <div id="first-two">
            <div className="mint-numbers">
              <h2>4,444</h2>
              <p className="green-highlight">Available at Launch</p>
              <p className="green-highlight">
                Join our Discord to learn how
                <br />
                to get Pre-Sale Access!
              </p>
            </div>
            <div className="mint-numbers end">
              <h2>.06 ETH</h2>
              <span className="green-highlight">Price</span>
            </div>
          </div>

          <div id="last-two">
            <div className="mint-numbers">
              <h2>2,222</h2>
              <p className="green-highlight">
                Reserved to be found by NFZ Holders
                <br />
                (Only 6,666 Genesis NFZs will ever exist)
              </p>
              <p className="leftalign">
                Reserved NFZs will be available in the future{' '}
                <span className="green-highlight">
                  EXCLUSIVELY for Nice Fun Zombie holders
                </span>{' '}
                via <a href="#roadmap">Searching!!</a> (see Roadmap). Holding a
                Genesis Zombie gets you the best chance to get one of these in
                the future! See details below
              </p>
            </div>
            <div className="mint-numbers zombie-bg end"></div>
          </div>
        </div>
      </div>
      <div className="clear"></div>
    </div>
  );
};

export default Info;
