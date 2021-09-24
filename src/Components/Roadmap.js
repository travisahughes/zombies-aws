/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import grungewhite from '../assets/grunge_white.png'
import goals1 from '../assets/goals1.png'

let Roadmap = props => {
    const roadmap = css`
        background-color: #000000;
        color: white;
    `
    const topText = css`
        float: left;
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
            margin: -5px 0 5px;
        }

        h2 {
            color: #AB19EF;
            font-size: 14px;
            text-transform: uppercase;
            margin: 10px 0 0 0;
        }

        p {
            color: #000000;
            font-size: 14px;
            margin-top: 0;
        }

        .bold {
            font-weight: 700;
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

        #roadmap-section {
            margin-top: 20px;
            display: grid;
            grid-template-columns: repeat(auto-fill,minmax(360px, 1fr));
            @media (max-width: 960px) {
                grid-template-columns: repeat(auto-fill,minmax(300px, 1fr));
            }
            @media (max-width: 640px) {
                grid-template-columns: repeat(auto-fill,minmax(240px, 1fr));
            }
            

            .roadmap-item {
                padding-right: 30px;
                border: 2px solid rgba(175, 240, 56, 0.25);
                border-radius: 6px;
                margin: 0 20px 20px 0;
                padding: 10px 20px;

                h2 {
                    font-size: 14px;
                    color: #AFF038;
                    text-transform: uppercase;
                }

                h3 {
                    font-size: 20px;
                    font-weight: 700;
                    color: #FFFFFF;
                    margin: 5px 0;
                }

                p {
                    color: #FFFFFF;
                    font-size: 14px;
                    font-weight: 400;
                }

                ul {
                    margin: 10px 0 0 -20px;
                }
            }
        }
    `

    const footer = css`
        text-align: center;
        color: #FFFFFF;
        margin: 0 0 100px;
        font-size: 20px;

        a {
            text-decoration: none;
            color: #50E6FF;
        }
    `
    
    const clear = css`
        clear: both;
    `

    return (
        <div id="roadmap" className="common-padding" css={roadmap}>
            <div css={topText}>
                <h2>Project Roadmap</h2>
                <h1>Generations of Zombies - Game Theory</h1>
                <p>In the future, new generations of zombies will deliver value to holders. Owners can use their zombies to “go searching” and come back with more zombies comrades (a New and Fun NFT).</p>
                <p className="bold">Holding a Genesis (Gen 1) Zombie will give you the best chance for an older gen zombie!</p>
            </div>
            <div css={clear}></div>
            <div css={bottomText}>
                <div id="roadmap-section">
                    <div className="roadmap-item">
                        <h2>Generation 1</h2>
                        <h3>Initial Launch Genesis</h3>
                        <p>The spread begins.</p>
                    </div>
                    <div className="roadmap-item">
                        <h2>Generation 2</h2>
                        <h3>Zombie Pets</h3>
                        <p>Gen 1 Zombies can search (similar to staking) for Gen 2 Pets. Each Gen 1 Zombie has a chance to even find another unreleased Gen 1 Zombie.</p>
                    </div>
                    <div className="roadmap-item">
                        <h2>Generation 3</h2>
                        <h3>TBA</h3>
                        <p>Gen 1 and Gen 2 zombies can both search. Earlier generation zombies will always have the best chance to come back with earlier generation rewards.</p>
                    </div>
                    <div className="roadmap-item">
                        <h2>Roadmap 1.0</h2>
                        <h3>The Spread Begins!</h3>
                        <ul>
                            <li>The NFZ Team Grows</li>
                            <li>Establish all the key NFT support tools </li>
                            <li>Member Surprises & Exclusive Benefits/Rewards</li>
                            <li>Establish the Community Fund</li>
                            <li>Commissioning of Art Story NFT Special</li>
                            <li>Horde challenges begin</li>
                        </ul>
                    </div>
                    <div className="roadmap-item">
                        <h2>Roadmap 2.0</h2>
                        <h3>More bites!</h3>
                        <ul>
                            <li>Searching mechanics introduced with Generation 2 Zombie Pets</li>
                            <li>More game theory mechanics introduced, rewarding holders</li>
                            <li>Collaborations with zombie themed media releases (movies, shows, games, etc)</li>
                            <li>DAO establishment</li>
                            <li>Exclusive merchandise</li>
                            <li>More to be announced</li>
                        </ul>
                    </div>
                    <div className="roadmap-item">
                        <h2>Beyond</h2>
                        <h3>The Long Term Vision</h3>
                        <ul>
                            <li>Zombie themed collaborations extend further into the real world and an NFT BRAINS agency is established, working with brands to perfect their NFT strategy and execution. All NFZ holders will receive a share of the benefits of future projects.</li>
                            <li>Nice Fun Zombie entertainment - the culmination of the universe we build now seen to the masses.</li>
                            <li>The Metaverse - we're still early, but we'll be there.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div css={clear}></div>
            <div css={footer}>
                MORE DETAILS OF OUR ROADMAP FOUND ON <a href="https://www.discord.com" target="_blank">DISCORD</a>
            </div>
       </div>
    );
}

export default Roadmap;
