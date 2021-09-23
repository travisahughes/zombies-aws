/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import grungewhite from '../assets/grunge_white.png'
import goals1 from '../assets/goals1.png'

let Mission = props => {
    const mission = css`
        background-color: #000000;
        color: white;
    `
    const topText = css`
        float: right;
        background-image: url(${grungewhite});
        background-repeat: no-repeat;
        background-size: cover;
        font-size: 18px;
        max-width: 600px;
        padding: 15px 25px 25px;
        margin: 40px 0 0 0;

        h1 {
            font-family: teko;
            color: #000000;
            font-size: 45px;
            text-transform: uppercase;
            margin: 5px 0 0;
        }

        h2 {
            color: #E80253;
            font-size: 14px;
            margin: 10px 0 0 0;
        }

        p {
            color: #000000;
            font-size: 14px;
            margin-top: 0;
        }
    `

    const bottomText = css`
        margin: 50px 0;
        h1 {
            color: #FFFFFF;
            font-size: 30px;
            margin: 5px 0;
        }
        
        h2 {
            color: #FF6161;
            font-size: 14px;
            margin: 10px 0 0 0;
        }

        #goals {
            margin-top: 20px;
            display: grid;
            grid-template-columns: repeat(auto-fill,minmax(360px, 1fr));
            @media (max-width: 960px) {
                grid-template-columns: repeat(auto-fill,minmax(300px, 1fr));
            }
            @media (max-width: 640px) {
                grid-template-columns: repeat(auto-fill,minmax(240px, 1fr));
            }
            

            .goal-item {
                padding-right: 30px;

                h3 {
                    font-size: 18px;
                    font-weight: 700;
                    color: #FFFFFF;
                    margin: 2px 0;
                }

                p {
                    color: #B1B1B1;
                    font-size: 14px;
                    font-weight: 400;
                }
            }

            .goal-item-img img{
                @media (max-width: 960px) {
                    width: 200px;
                }
                @media (max-width: 640px) {
                    width: 150px;
                }
            }
        }
    `

    const footer = css`
        text-align: center;
        color: #B1B1B1;
        margin: 50px 0;
        font-size: 14px;

        #footer-white {
            color: #FFFFFF;
        }
    `
    
    const clear = css`
        clear: both;
    `

    return (
        <div id="mission" className="common-padding" css={mission}>
            <div css={topText}>
                <h1>Join the Nice Fun Zombie Horde</h1>
                <p>What does it mean to be a Zombie? We’re here to redefine it. We are unrelentless and undying and grow stronger by the numbers. Your zombie avatar is your alter-ego. While we may lead normal lives in real life, our zombie identity symbolizes our desire for more BRAINS and to be a part of something FUN in an ever-evolving digital world.</p>
            </div>
            <div css={clear}></div>
            <div css={bottomText}>
                <h2>GOALS</h2>
                <h1>WHAT ARE THE NFZS TRYING TO DO?</h1>
                <div id="goals">
                    <div className="goal-item">
                        <div className="goal-item-img">
                            <img src={goals1} alt="Value!" />
                        </div>
                        <h3>Make the NFZ experience Nice and Fun</h3>
                        <p>We'll implement NFT game theory mechanics to make it FUN to be a zombie. A perfect tie-in with zombies, thematic actions in the future will include horde challenges, hunting (similar to staking), and killing (similar to burning).</p>
                    </div>
                    <div className="goal-item">
                        <div className="goal-item-img">
                            <img src={goals1} alt="Value!" />
                        </div>
                        <h3>Deliver value via real world and virtual benefits</h3>
                        <p>We'll put our NFT holders as the top priority and will work undyingly to make things Nice and Fun via partnerships, collaborations, airdrops, merchandise and more. Real world brands will see the power of the horde community and the impact we can have.</p>
                    </div>
                    <div className="goal-item">
                        <div className="goal-item-img">
                            <img src={goals1} alt="Value!" />
                        </div>
                        <h3>Build the ultimate zombie horde community</h3>
                        <p>We love NFTs and are creating a place that pays homage to all zombie NFTs. Additionally, we'll be at the center of zombie moments in movies, shows, comics, games and more.</p>
                    </div>
                    <div className="goal-item">
                        <div className="goal-item-img">
                            <img src={goals1} alt="Value!" />
                        </div>
                        <h3>Build the Nice Fun Zombie universe</h3>
                        <p>The NFZ universe will unfold through unique art and storytelling. Our zombies are misunderstood - they didn't choose to be zombies yet the humans hunt and kill them. This is a story told from the zombie point of view.</p>
                    </div>
                </div>
            </div>
            <div css={clear}></div>
            <div css={footer}>
                We have many creative ideas for how our universe will expand and evolve.<br />
                <span id="footer-white">Like NFTs, we’re only at the beginning.</span>
            </div>
       </div>
    );
}

export default Mission;