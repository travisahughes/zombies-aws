/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ReactModal from 'react-modal';
import { useState } from 'react';
import edmsmall from '../assets/edm_small.jpg';
import edm from '../assets/edm.jpg';
import roadmap1 from '../assets/roadmap/roadmap1.png';
import roadmap2 from '../assets/roadmap/roadmap2.png';
import roadmap3 from '../assets/roadmap/roadmap3.png';
import leftArrow from '../assets/left-arrow.svg';
import rightArrow from '../assets/right-arrow.svg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import styled from '@emotion/styled';

let Roadmap = () => {
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

    .carousel-root {
      width: 100%;
    }
  `;
  const topText = css`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    background: white;

    img {
      width: auto;
      height: 90%;
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
        width: 90%;
        height: auto;
      }
    }

    .grungebox {
      background: white;
      font-size: 18px;
      max-width: 440px;
      width: 100%;
      height: 100%;
      margin-right: 60px;

      @media (max-width: 1023px) {
        margin-top: 0;
        margin-right: 0;
        padding: 0;
        width: 90%;
        max-width: 800px;
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

      .game-theory-button {
        border: 2px solid #ab19ef;
        background: white;
        color: black;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 14px;
        line-height: 150%;
        cursor: pointer;

        :hover {
          background: #ab19ef;
          color: white;
        }

        @media (max-width: 1023px) {
          margin-bottom: 2rem;
        }
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
      position: relative;

      #next-arrow {
        position: absolute;
        top: 20%;
        right: 5%;
        z-index: 9999;
        @media (min-width: 768px) {
          top: 50%;
        }
      }

      #prev-arrow {
        position: absolute;
        top: 20%;
        left: 5%;
        z-index: 9999;

        @media (min-width: 768px) {
          top: 50%;
        }
      }

      .selected {
        opacity: 1;
      }
      .roadmap-item {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0;
        background-color: #000000;
        margin: 0 20px 20px 0;
        width: 100%;

        @media (max-width: 960px) {
          width: 100%;~
          margin-right: 0;
          flex-direction: column;

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
            width: 90%;

            @media (min-width: 768px){
              width: 100%;
            }
          }
        }

        .roadmap-content {
          padding: 0 10px;
          text-align: start;

          .centered {
            font-size: 18px;
            line-height: 31.5px;
            font-weight: 600;
            margin-top: 20px;
            text-transform: uppercase;
            color: #ffffff;
            /* text-align: center; */

            @media (max-width: 960px) {
              text-align: left;
            }
            @media (max-width: 640px) {
              text-align: center;
            }
          }

          .discord {
            font-weight: bold;
            font-size: 14px;
            line-height: 150%;
            color: #ffffff;
            margin-top: 2rem;
          }

          h4 {
            color: white;
            font-size: 20px;
            line-height: 150%;
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
          list-style-type: disc;

          li {
            padding: 0 0 10px 0;
          }
        }

        a {
          text-decoration: none;
          color: #50e6ff;
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

  const FlexBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    margin: 0px auto;
    padding: 0 20px;
    max-width: 1310px;

    @media (max-width: 960px) {
      max-width: 940px;
      padding: 0 20px;
      margin: 0 auto;
    }
    @media (max-width: 640px) {
      max-width: 620px;
      padding: 0 10px;
      margin: 0 auto;
    }
  `;

  const [currentSlide, setCurrentSlide] = useState(0);

  const updateCurrentSlide = (index) => {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  };

  return (
    <div className="" css={roadmap}>
      <div css={topText}>
        <FlexBox>
          <div className="grungebox">
            <h1>Every Decision Matters</h1>
            <p>
              With different decision paths, Nice Fun Zombies will create a
              world that allows the holder to decide how they want their NFZ
              experience to be. You can decide on the prizes you want to aim
              for, your level of risk, and how active you want to be. Utilizing
              some supply and demand dynamics, each decision you make also has
              an impact on other holders. Even not making a decision is a choice
              that has impact.
            </p>
            <p className="bold">
              Read our full game theory guide here:{' '}
              <a
                href="https://medium.com/@nicefunzombies/nice-fun-zombies-every-decision-matters-8ee3b90517a4"
                target="_blank"
                rel="noreferrer"
              >
                Every Decision Matters
              </a>
            </p>
            <div
              className="game-theory-button"
              onClick={() =>
                window.open(
                  'https://nice-fun-zombies.gitbook.io/game-theory/',
                  '_blank'
                )
              }
            >
              Game Theory Guide
            </div>
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
            style={{ width: '100%', maxWidth: '800px' }}
          />
        </FlexBox>
      </div>

      <div className="common-padding" css={bottomText}>
        <h1 id="roadmap">Project Roadmap</h1>
        <div id="roadmap-section">
          <img
            src={leftArrow}
            id="prev-arrow"
            alt="left-arrow"
            style={{ width: '10px' }}
            onClick={() => setCurrentSlide(currentSlide - 1)}
          />
          <img
            src={rightArrow}
            id="next-arrow"
            alt="right-arrow"
            style={{ width: '10px' }}
            onClick={() => setCurrentSlide(currentSlide + 1)}
          />
          <Carousel
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            showArrows={false}
            autoFocus
            infiniteLoop
            selectedItem={currentSlide}
            onChange={updateCurrentSlide}

            // renderArrowPrev={() => (
            //   <img src={leftArrow} alt="left-arrow" style={{ width: '10px' }} />
            // )}
            // renderArrowNext={() => (
            //   <img
            //     src={leftArrow}
            //     alt="right-arrow"
            //     style={{ width: '10px' }}
            //   />
            // )}
          >
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
                  <li>Member Surprises & Exclusive Benefits</li>
                  <li>Establishment of the BRAINS DAO</li>
                  <li>NFT Collab with Professional Comic Book Aritst</li>
                </ul>
                <p className="discord">
                  {' '}
                  MORE DETAILS OF OUR ROADMAP FOUND ON{' '}
                  <a
                    href="https://discord.gg/77VswFkcuY"
                    target="_blank"
                    rel="noreferrer"
                  >
                    DISCORD
                  </a>
                </p>
              </div>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-header">
                <img src={roadmap2} alt="Roadmap 2.0" />
              </div>
              <div className="roadmap-content" id="roadmap2">
                <h4>Phase 2 Begins - Third Location Opens</h4>
                <p>
                  A new experience gets added for owners to assign their zombies
                  to
                </p>

                <h4>Choose your Zombie Destiny!</h4>
                <ul>
                  <li>More game theory mechanics introduced</li>
                </ul>

                <h4>More Community Benefits</h4>
                <ul>
                  <li>Exclusive merchandise</li>
                </ul>

                <h4>More to be announced</h4>
                <p className="discord">
                  {' '}
                  MORE DETAILS OF OUR ROADMAP FOUND ON{' '}
                  <a
                    href="https://discord.gg/77VswFkcuY"
                    target="_blank"
                    rel="noreferrer"
                  >
                    DISCORD
                  </a>
                </p>
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
                <p className="discord">
                  {' '}
                  MORE DETAILS OF OUR ROADMAP FOUND ON{' '}
                  <a
                    href="https://discord.gg/77VswFkcuY"
                    target="_blank"
                    rel="noreferrer"
                  >
                    DISCORD
                  </a>
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      <div css={clear}></div>
    </div>
  );
};

export default Roadmap;
