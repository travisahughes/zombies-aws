/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ReactModal from 'react-modal';
import { useState } from 'react';
import grungewhite from '../assets/grunge_white.png';
import edmsmall from '../assets/edm_small.jpg';
import edm from '../assets/edm.jpg';
import roadmap1 from '../assets/roadmap/roadmap1.png';
import roadmap2 from '../assets/roadmap/roadmap2.png';
import roadmap3 from '../assets/roadmap/roadmap3.png';

let Roadmap = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const roadmap = css`
    background-color: #000000;
    color: white;
  `;
  const topText = css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;

    margin: 30px auto 20px auto;
    padding: 0 20px;
    max-width: 1310px;

    img {
      width: auto;
      max-width: 500px;
      height: auto;
      cursor: pointer;
    }
    @media (max-width: 960px) {
      margin: 30px 0 20px;
      padding: 0;
    }
    @media (max-width: 640px) {
      flex-direction: column;
      margin: 30px 0 20px;
      padding: 0;

      img {
        width: 100%;
        max-width: 100%;
        height: auto;
      }
    }

    .grungebox {
      background-image: url(${grungewhite});
      background-repeat: no-repeat;
      background-size: cover;
      font-size: 18px;
      max-width: 600px;
      padding: 20px 25px 25px;
      margin: 40px 0 0 0;
      @media (max-width: 640px) {
        margin-top: 0;
      }

      .bold {
        font-weight: 700;
      }

      h1 {
        font-family: teko;
        color: #000000;
        font-size: 45px;
        line-height: 45px;
        font-weight: 400;
        text-transform: uppercase;
        margin: 10px 0;
      }

      h2 {
        color: #ab19ef;
        font-size: 14px;
        line-height: 14px;
        margin: 10px 0 0 0;
      }

      p {
        color: #000000;
        font-size: 14px;
        line-height: 24.5px;
        margin-top: 0;
      }

      a {
        color: #ab19ef;
        text-decoration: underline;
      }
    }
  `;

  const bottomText = css`
    margin: 50px 0;
    h1 {
      color: #ffffff;
      font-size: 45px;
      line-height: 45px;
      font-weight: 400;
      font-family: teko;
      margin: 45px 0 0 0;
    }

    h2 {
      color: #ff6161;
      font-size: 14px;
      margin: 10px 0 0 0;
    }

    #timeline-wrapper {
      #timeline-bar {
        width: 100%;
        height: 1px;
        background: rgba(175, 240, 56, 0.5);
      }

      #timeline-section {
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        @media (max-width: 960px) {
          flex-direction: column;
          width: 100%;
        }

        .timeline-item {
          padding: 0;
          background-color: #151515;
          margin: 0 20px 20px 0;
          padding: 0 10px;
          width: calc(33% - 40px);
          @media (max-width: 960px) {
            width: calc(100% - 20px);
          }

          .timeline-header {
            background-color: #aff038;
            color: #000000;
            padding: 10px;
          }

          .timeline-content {
            padding: 10px 10px;
          }

          h2 {
            font-size: 14px;
            line-height: 14px;
            font-weight: 400;
            line-height: 30px;
            color: #aff038;
            text-transform: uppercase;
          }

          h3 {
            font-size: 20px;
            font-weight: 700;
            line-height: 30px;
            color: #ffffff;
            margin: 0 0 20px;
          }

          p {
            color: #ffffff;
            font-size: 14px;
            line-height: 24.5px;
            font-weight: 400;
          }

          ul {
            margin: 0 0 0 -20px;
            font-size: 14px;
            font-weight: 400;
            line-height: 24.5px;

            li {
              padding: 10px 0 0 0;
            }
          }
        }
      }
    }

    #roadmap-section {
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;

      .roadmap-item {
        display: flex;
        flex-direction: column;
        padding: 0;
        background-color: #000000;
        margin: 0 20px 20px 0;
        width: calc(33% - 20px);
        @media (max-width: 960px) {
          width: 100%;
          margin-right: 0;
          flex-direction: row;

          #roadmap1 {
            padding-top: 30px;
          }

          #roadmap2 {
            padding-top: 15px;
          }

          #roadmap3 {
            padding-top: 50px;
          }
        }
        @media (max-width: 640px) {
          width: 100%;
          margin-right: 0;
          flex-direction: column;
        }

        .roadmap-header {
          background: none;
          color: #000000;
          padding: 10px;

          @media (max-width: 960px) {
            max-width: 300px;
          }
          @media (max-width: 640px) {
            align-self: center;
            max-width: 275px;
          }

          img {
            width: 100%;
          }
        }

        .roadmap-content {
          padding: 0 10px;

          .centered {
            font-size: 18px;
            line-height: 31.5px;
            font-weight: 600;
            margin-top: 20px;
            text-transform: uppercase;
            color: #ffffff;
            text-align: center;

            @media (max-width: 960px) {
              text-align: left;
            }
            @media (max-width: 640px) {
              text-align: center;
            }
          }

          h4 {
            color: white;
            font-size: 14px;
            line-height: 21px;
            margin-bottom: 0;
          }

          p {
            color: #b1b1b1;
            font-size: 14px;
            line-height: 24.5px;
            font-weight: 400;
            margin-top: 0;
          }

          li {
            color: #b1b1b1;
            font-size: 14px;
            line-height: 24.5px;
            font-weight: 400;
          }
        }

        h2 {
          font-size: 14px;
          line-height: 14px;
          background-color: #aff038;
          color: #000000;
          text-transform: uppercase;
        }

        h3 {
          font-size: 20px;
          font-weight: 700;
          line-height: 30px;
          color: #000000;
          margin: 5px 0;
        }

        p {
          color: #ffffff;
          font-size: 14px;
          font-weight: 400;
        }

        ul {
          margin: 0 0 0 -20px;
          font-size: 14px;
          font-weight: 400;
          line-height: 24.5px;

          li {
            padding: 0 0 10px 0;
          }
        }
      }
    }
  `;

  const footer = css`
    text-align: center;
    color: #ffffff;
    margin: 0 0 100px;
    font-size: 20px;

    a {
      text-decoration: none;
      color: #50e6ff;
    }
  `;

  const clear = css`
    clear: both;
  `;

  return (
    <div css={roadmap}>
      <div css={topText}>
        <div className="grungebox">
          <h1>Every Decision Matters</h1>
          <p>
            With different decision paths, Nice Fun Zombies will create a world
            that allows the holder to decide how they want their NFZ experience
            to be. You can decide on the prizes you want to aim for, your level
            of risk, and how active you want to be. Utilizing some supply and
            demand dynamics, each decision you make also has an impact on other
            holders. Even not making a decision is a choice that has impact
          </p>
          <p className="bold">
            Read more about game theory here:{' '}
            <a
              href="https://medium.com/@nicefunzombies/nice-fun-zombies-every-decision-matters-8ee3b90517a4"
              target="_blank"
              rel="noreferrer"
            >
              Every Decision Matters
            </a>
          </p>
        </div>
        <ReactModal
          isOpen={showModal}
          contentLabel="Every Decision Matters"
          onRequestClose={handleCloseModal}
          shouldCloseOnOverlayClick={true}
          className="Modal"
          overlayClassName="Overlay"
        >
          <img src={edm} alt="Every Decision Matters" />
          <br />
          <div className="ModalClose" onClick={handleCloseModal}>
            Close
          </div>
        </ReactModal>
        <img
          src={edmsmall}
          onClick={handleOpenModal}
          alt="Every Decision Matters"
        />
      </div>

      <div className="common-padding" css={bottomText}>
        <div id="timeline-wrapper">
          <div id="timeline-section">
            <div className="timeline-item">
              <h2>Generation 1</h2>
              <h3>Initial Launch Genesis</h3>
              <p>The spread begins.</p>
            </div>
            <div className="timeline-item">
              <h2>MILESTONE 1</h2>
              <h3>Keycard Airdrop</h3>
              <p>
                All Nice Fun Zombie owners will receive a free airdrop for an
                access card that allows them to search. Will you use it, sell
                it, or wait for a new location and items?
              </p>
            </div>
            <div className="timeline-item">
              <h2>Phase 1</h2>
              <h3>Locations Open</h3>
              <p>
                We will reveal the first two locations for Nice Fun Zombies to
                go searching. Each location will have different probability on
                certain items. You decide where to send your zombie! More
                details to come
              </p>
            </div>
          </div>
        </div>

        <h1 id="roadmap">Project Roadmap</h1>
        <div id="roadmap-section">
          <div className="roadmap-item">
            <div className="roadmap-header">
              <img src={roadmap1} alt="Roadmap 1.0" />
            </div>
            <div className="roadmap-content" id="roadmap1">
              <h4>Search. Hold. Horde. Burn.</h4>
              <ul>
                <li>Keycard airdrop unlocks searching locations</li>
                <li>
                  First two locations debut offering different NFT rewards
                </li>
                <li>Horde Challenges</li>
              </ul>

              <h4>Community Benefits & Collabs</h4>
              <ul>
                <li>Member Surprises & Exclusive Benefits/Rewards</li>
                <li>Establishment of the Community Fund</li>
                <li>NFT Collab with Professional Comic Book Aritst</li>
              </ul>
            </div>
          </div>
          <div className="roadmap-item">
            <div className="roadmap-header">
              <img src={roadmap2} alt="Roadmap 2.0" />
            </div>
            <div className="roadmap-content" id="roadmap2">
              <h4>Generation 2 Zombie Pets</h4>
              <p>And other items get added to the location prize pools</p>

              <h4>Choose your Zombie Destiny!</h4>
              <ul>
                <li>More game theory mechanics introduced</li>
                <li>Third location opens for searching, new rewards</li>
              </ul>

              <h4>More Community Benefits</h4>
              <ul>
                <li>Brains DAO establishment</li>
                <li>Exclusive merchandise</li>
              </ul>

              <p className="centered">More to be announced</p>
            </div>
          </div>
          <div className="roadmap-item">
            <div className="roadmap-header">
              <img src={roadmap3} alt="Beyond" />
            </div>
            <div className="roadmap-content" id="roadmap3">
              <h4>NFT BRAINS</h4>
              <p>Consultancy is established to work with brands</p>

              <h4>Nice Fun Zombie Entertainment</h4>
              <p>The universe we build will be seen by the masses</p>

              <h4>The Metaverse</h4>
              <p>We're still early, but we'll be there</p>

              <h4>A Nice Fun Zombie Rave Party in Vegas</h4>
              <p>It just sounds too fun</p>
            </div>
          </div>
        </div>
      </div>
      <div css={clear}></div>
      <div css={footer}>
        MORE DETAILS OF OUR ROADMAP FOUND ON{' '}
        <a
          href="https://discord.gg/77VswFkcuY"
          target="_blank"
          rel="noreferrer"
        >
          DISCORD
        </a>
      </div>
    </div>
  );
};

export default Roadmap;
