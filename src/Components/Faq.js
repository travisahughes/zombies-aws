/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import FaqItem from './FaqItem';

let Faq = (props) => {
  const faq = css`
    background-color: #000000;
    color: white;
    min-height: 400px;
    margin: 50px 0;
    overflow: auto;
    @media (max-width: 960px) {
      width: 100%;
    }

    h1 {
      font-family: teko;
      font-size: 45px;
      font-weight: 400;
      margin: 10px 0 0 2rem;
    }

    #faq-list {
      /* float: left; */
      margin: auto;
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

    .flex-col {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `;

  return (
    <>
      <div id="faq" className="centered-content" css={faq}>
        <h1>FAQ</h1>
        <div className="common-padding">
          <div id="faq-list">
            <FaqItem
              title="When do Nice Fun Zombies go on sale?"
              content="Pre-Sale Begins Thurs Oct 21, Public Sale Begins Fri Oct 22."
            />
            <FaqItem
              title="How many NFZs are available?"
              content={
                <ul>
                  <li>
                    There will be only 6,666 Nice Fun Zombies ever available
                    however they have not all been released yet. The remaining
                    quantity will gradually be made available via location
                    Searching by existing NFZ holders.
                  </li>
                </ul>
              }
            />
            <FaqItem
              title="How do I buy Nice Fun Zombies?"
              content="The easiest way is to install a MetaMask extension in your browser and link your crypto wallet to it to transfer some funds. Ensure that you have enough ETH in your wallet, plus extra for the variable gas fee. Head over to our official collection on OpenSea and select the NFZ you want. Approve the transaction on MetaMask and you are set!"
            />
            <FaqItem
              title="What are Genesis Nice Fun Zombies?"
              content="Genesis zombies are the first 2,000 minted zombies (Serial numbers #1 to #2000). As the early zombies, these have some slight benefits in our Every Decision Matters world and Horde Challenges. As an example, having a Genesis zombie can sometimes serve as a wild card or increase a horde size when Searching. Follow our updates on Discord and Twitter to find future benefits. When searching on OpenSea to purchase, you can filter by the “Group” trait or simply look to see what number the zombie is."
            />
            <FaqItem
              title="How is this project different from the others out there?"
              content={
                <ul>
                  <li>
                    Game Theory – Nice Fun Zombies is a project focused on game
                    theory and giving owners flexibility on how they want to
                    engage. Owners will be given choices that allow them to
                    tailor their experience and rewards.
                  </li>
                  <li>
                    Expansion Flexibility – Locations and their unique benefits
                    offer different experiences. By building this NFZ world, we
                    are create even more ways for fans to interact with the
                    introduction of future locations.
                  </li>
                  <li>
                    The Team – We are a mix of individuals with expertise in the
                    areas we work. We value the importance of what a community
                    is, and are excited to be in the NFT space and grow this
                    project. We are our fans ourselves and understand the
                    important of delivering value back to our NFZ owners.
                  </li>
                  <li>
                    Nice Fun Zombie Universe – We are building a zombie universe
                    both in our community and tied to the NFTs. Art &
                    storytelling is at the heart of what we believe in and we’re
                    building something fun long-term. In the meantime, fans can
                    help us get to the moon by join the community and share
                    their fandom for all things zombie!
                  </li>
                  <li>
                    Brand Focus – Both with our NFZ brand and with others. There
                    is a long-term vision of working more closely with brands,
                    helping them navigate the NFT space in an authentic way, and
                    showing them the power of community. We'll start with goals
                    to work with zombie specific projects (movies, shows, video
                    games, etc.), which will establish ourselves before we
                    expand further!
                  </li>
                </ul>
              }
            />
            <FaqItem
              title="What rights do I get as a Nice Fun Zombie holder?"
              content={
                <span>
                  We encourage creation and building with your NFZ. You will
                  have the commercialization rights to you NFZ on a
                  non-exclusive basis, shared with us so that we can also help
                  grow the IP and characters. More details here{' '}
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
              content={
                <ul>
                  <li>
                    We love all NFZ owners and there will be benefits for any
                    rarity level. It is worth noting that the first 2,000 minted
                    zombies are considered "Genesis" zombies have some added
                    utility, but all zombies in the collection will still have
                    use!
                  </li>
                  <li>
                    Additionally, Horde Challenges will involve some level of
                    holding specific types of zombies for rewards. These will
                    only be announced when the challenges release to ensure fair
                    opportunity for holders to collect.
                  </li>
                </ul>
              }
            />
            <FaqItem
              title="How do I make money on NFZs?"
              content={
                <span>
                  Besides the value of the NFZ itself, which grows as more
                  people learn about the project and get interested, there are
                  other ways to derive value from owning. In Phase 1, both the
                  Casino and School over value back to owners in different ways.
                  Check out our full Game Theory Guide to{' '}
                  <a
                    href="https://nice-fun-zombies.gitbook.io/game-theory/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    learn more
                  </a>
                  !
                </span>
              }
            />
          </div>
          {/* <div id="faq-image">
        <img src={zombie} alt="zombie" />
      </div> */}
        </div>
      </div>
    </>
  );
};

export default Faq;
