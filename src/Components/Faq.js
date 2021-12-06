/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import FaqItem from './FaqItem';
import zombie from '../assets/gallery/faq.jpg';

let Faq = (props) => {
  const faq = css`
    background-color: #000000;
    color: white;
    min-height: 400px;
    margin: 50px 0;
    overflow: auto;

    h1 {
      font-family: teko;
      font-size: 45px;
      font-weight: 400;
      margin: 10px 0 0 0;
    }

    #faq-list {
      float: left;
      width: calc(100% - 435px);
      padding: 0;
      @media (max-width: 960px) {
        width: 100%;
      }
    }

    #faq-image {
      width: 416px;
      float: right;
      @media (max-width: 960px) {
        display: none;
      }

      img {
        width: 416px;
      }
    }
  `;

  return (
    <div id="faq" className="common-padding" css={faq}>
      <h1>FAQ</h1>
      <div id="faq-list">
        <FaqItem
          title="When do Nice Fun Zombies go on sale?"
          content="Pre-Sale Begins Thurs Oct 21, Public Sale Begins Fri Oct 22."
        />
        <FaqItem
          title="How many NFZs are available?"
          content={
            <ul>
              <li>4,444 NFZs will be available, excluding giveaways</li>
              <li>
                2,222 NFZs will be unreleased and only be available in the
                future for NFZ holders via horde challenges and
                Searching/Hunting
              </li>
              <li>
                There will be only 6,666 Genesis (Gen 1) NFZs ever available and
                deflationary mechanics will be introduced at a later point.
              </li>
            </ul>
          }
        />
        <FaqItem
          title="How do I get access to the pre-sale?"
          content="There will be various ways to obtain pre-sale access, including most active users on Discord, various raffles, and more. Check out Discord for full details."
        />
        <FaqItem
          title="How do I buy Nice Fun Zombies?"
          content="The easiest way is to install a MetaMask extension in your browser and link your crypto wallet to it to transfer some funds. Ensure that you have enough ETH in your wallet, plus extra for the variable gas fee. Approve the transaction on MetaMask and you are set!"
        />
        <FaqItem
          title="How is this project different from the others out there?"
          content={
            <ul>
              <li>
                Value & Strategy - We are DEAD set on delivering value for our
                holders. We’ll be introducing mechanics for “staking” and
                eventually burning. New generations of zombies will help to grow
                our community while genesis (Gen 1) holders will benefit from
                the overall growth of the project. Every decision we make will
                be keeping the value of the project and NFTs in mind. We are
                huge fans of NFTs and will use our favorite projects for
                inspiration while adding our own crazy twists to give a fresh
                experience.
              </li>
              <li>
                The Team – We are a mix of individuals with expertise in the
                areas we work in and we are NFT fanatics. With backgrounds at
                ESPN, Disney, FuboTV, Apple, Spotify and more – we value the
                importance of brand and fans and are excited to be in the NFT
                space and grow this project.
              </li>
              <li>
                Nice Fun Zombie Universe – We are building a zombie universe
                both in our community and tied to the NFTs. Storytelling is at
                the heart of what we believe in and we’re building something fun
                long-term. In the meantime, fans can help us get to the moon by
                join the community and share their fandom for all things zombie!
              </li>
              <li>
                Brand Focus - There is a long term vision of working more
                closely with brands, helping them navigate the NFT space in an
                authentic way, and showing them the power of community. We'll
                start with goals to work with zombie specific projects (movies,
                shows, video games, etc.), which will establish ourselves before
                we expand further!
              </li>
            </ul>
          }
        />
        <FaqItem
          title="When is the reveal?"
          content="It takes a little bit for all of us to turn…it will likely be 24 hours after selling out, give or take!"
        />
        <FaqItem
          title="What rights do I get as a Nice Fun Zombie holder?"
          content={
            <span>
              We encourage creation and building with your NFZ. You will have
              the commercialization rights to you NFZ on a non-exclusive basis,
              shared with us so that we can also help grow the IP and
              characters. More details{' '}
              <a
                href="https://images.nicefunzombies.io/site/NFZ_Terms_2021.pdf"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
            </span>
          }
        />
        <FaqItem
          title="Will rarities matter?"
          content="Horde Challenges will involve some level of holding specific types of zombies for rewards. These will only be announced when the challenges release to ensure fair opportunity for holders to collect. Our advice for now is to collect."
        />
      </div>
      <div id="faq-image">
        <img src={zombie} alt="zombie" />
      </div>
    </div>
  );
};

export default Faq;
