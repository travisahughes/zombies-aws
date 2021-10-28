/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import grungewhite from '../assets/grunge_white.png';
import zombie from '../assets/gallery/mission.png';
import pigeon from '../assets/pigeon.png';

let Mission = (props) => {
  const mission = css`
    background-color: #000000;
    color: white;
  `;
  const topText = css`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;

    margin: 30px auto 20px auto;
    padding: 0 20px;
    max-width: 1310px;
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
    }
  `;

  const bottomText = css`
    margin: 50px 0;
    h1 {
      font-family: teko;
      color: #ffffff;
      font-size: 45px;
      font-weight: 400;
      margin: 5px 0;
    }

    h2 {
      color: #aff038;
      font-size: 14px;
      margin: 10px 0 0 0;
    }

    #goals {
      margin-top: 20px;
      display: grid;
      grid-template-areas:
        'a b c'
        'd e e';
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr 1fr;

      @media (max-width: 960px) {
        grid-template-areas:
          'a b'
          'c d'
          'e e';
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr;
      }
      @media (max-width: 640px) {
        grid-template-areas:
          'a'
          'b'
          'c'
          'd'
          'e';
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
        grid-template-columns: 1fr;
      }

      .goal-item {
        padding: 0 30px 40px 0;
        @media (max-width: 640px) {
          padding: 0 0 40px 0;
        }

        .green-highlight {
          color: #aff038;
        }

        h3 {
          font-size: 18px;
          font-weight: 700;
          line-height: 30px;
          color: #ffffff;
          margin: 2px 0;
        }

        p {
          color: #b1b1b1;
          font-size: 14px;
          font-weight: 400;
          line-height: 24.5px;
        }
      }

      #goal1 {
        grid-area: a;
      }
      #goal2 {
        grid-area: b;
      }
      #goal3 {
        grid-area: c;
      }
      #goal4 {
        grid-area: d;
      }
      #goal5 {
        grid-area: e;
      }

      .goal-item-img img {
        @media (max-width: 960px) {
          width: 200px;
        }
        @media (max-width: 640px) {
          width: 150px;
        }
      }

      #goal5 {
        text-align: center;
        p {
          font-size: 20px;
          line-height: 30px;
          color: #ffffff;
        }

        p.top {
          margin-top: 0;
          padding-top: 5px;
        }
      }
    }
  `;

  const clear = css`
    clear: both;
  `;

  return (
    <div id="mission" css={mission}>
      <div css={topText}>
        <img src={zombie} alt="zombie" />
        <div className="grungebox">
          <h2>MISSION</h2>
          <h1>Join the Nice Fun Zombie Horde</h1>
          <p>
            What does it mean to be a Zombie? We’re here to redefine it. We are
            unrelentless and undying and grow stronger by the numbers. Your
            zombie avatar is your alter-ego. While we may lead normal lives in
            real life, our zombie identity symbolizes our desire for more BRAINS
            and to be a part of something FUN in an ever-evolving digital world.
          </p>
        </div>
      </div>
      <div css={clear}></div>
      <div className="common-padding" css={bottomText}>
        <h1>GOALS</h1>
        <div id="goals">
          <div className="goal-item" id="goal1">
            <h3>
              Make the NFZ experience Nice and Fun via Game Theory Mechanics
            </h3>
            <p>
              We'll implement NFT game theory mechanics to make it{' '}
              <span className="green-highlight">FUN</span> to be a zombie. A
              perfect tie-in with zombies, thematic actions in the future will
              include{' '}
              <span className="green-highlight">
                horde challenges, hunting/searching
              </span>{' '}
              (similar to staking), and{' '}
              <span className="green-highlight">killing</span> (similar to
              burning).
            </p>
          </div>
          <div className="goal-item" id="goal2">
            <h3>Deliver value via real world and virtual benefits</h3>
            <p>
              We'll put our NFZ holders as the top priority and will work
              undyingly to make things Nice and Fun via{' '}
              <span className="green-highlight">
                partnerships, collaborations, airdrops, merchandise and more.
              </span>{' '}
              Real world brands will see the power of the horde community and
              the impact we can have.
            </p>
          </div>
          <div className="goal-item" id="goal3">
            <h3>Build the ultimate zombie horde community</h3>
            <p>
              We love NFTs and are{' '}
              <span className="green-highlight">
                creating a community to appreciate zombie trait NFTs
              </span>{' '}
              and celebrate achievements in the space. Additionally, our Discord
              will be a place to just kick back and have a nice fun chat about
              your favorite zombie movies, shows, comics, video games and more.
            </p>
          </div>
          <div className="goal-item" id="goa4">
            <h3>Build the Nice Fun Zombie universe via art and storytelling</h3>
            <p>
              The NFZ universe will unfold through unique NFT art and
              storytelling.{' '}
              <span className="green-highlight">
                Our zombies are misunderstood
              </span>{' '}
              - they didn't choose to be zombies yet the humans hunt and kill
              them.{' '}
              <span className="green-highlight">
                This is a story told from the zombie point of view.
              </span>
            </p>
          </div>
          <div className="goal-item" id="goal5">
            <p className="top">
              We have many creative ideas for how our universe will expand and
              evolve.
              <br />
              <span className="green-highlight">
                Like NFTs, we’re only at the beginning.
              </span>
            </p>
            <img src={pigeon} alt="pigeon" />
          </div>
        </div>
      </div>
      <div css={clear}></div>
    </div>
  );
};

export default Mission;
