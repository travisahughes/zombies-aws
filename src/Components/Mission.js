/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import grungewhite from '../assets/grunge_white.png'
import goals1 from '../assets/goals1.png'

let Mission = props => {
    const mission = css`
        background-color: #000000;
        color: white;
        padding: 0px 190px;
    `
    const topText = css`
        float: right;
        background-image: url(${grungewhite});
        background-repeat: no-repeat;
        background-size: cover;
        font-size: 18px;
        width: 600px;
        padding: 15px 25px 25px;
        margin: 40px 0 0 0;

        h1 {
            color: #000000;
            font-size: 30px;
            margin: 5px 0;
        }

        h2 {
            color: #E80253;
            font-size: 14px;
            margin: 10px 0 0 0;
        }

        p {
            color: #000000;
            font-size: 14px;
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
            display: flex;
            justify-content: space-between;

            .goal-item {
                width: 360px;

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
        <div id="mission" css={mission}>
            <div css={topText}>
                <h2>MISSION</h2>
                <h1>WHAT DOES IT MEAN TO BE A ZOMBIE?</h1>
                <p>We’re here to redefine it. We are relentless and undying and grow stronger by the numbers. Your zombie avatar is your alter-ego. While we may lead normal lives in real life, our zombie identity symbolizes our desire for more BRAINS and to be a part of something FUN in an ever evolving digital world.</p>
            </div>
            <div css={clear}></div>
            <div css={bottomText}>
                <h2>GOALS</h2>
                <h1>WHAT ARE THE NFZS TRYING TO DO?</h1>
                <div id="goals">
                    <div className="goal-item">
                        <div id="goal-item-img">
                            <img src={goals1} alt="Value!" />
                        </div>
                        <h3>Deliver value to our NFT holders</h3>
                        <p>And increase overall appreciation of zombie skin NFTs</p>
                    </div>
                    <div className="goal-item">
                        <div id="goal-item-img">
                            <img src={goals1} alt="Value!" />
                        </div>
                        <h3>Build the ultimate zombie horde community</h3>
                        <p>A place at the center of zombie moments in movies, shows, comics, games and more.</p>
                    </div>
                    <div className="goal-item">
                        <div id="goal-item-img">
                            <img src={goals1} alt="Value!" />
                        </div>
                        <h3>Build the Nice Fun Zombie universe</h3>
                        <p>Through unique art and storytelling, plus NFT game theory mechanics to make it FUN to be a zombie.</p>
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