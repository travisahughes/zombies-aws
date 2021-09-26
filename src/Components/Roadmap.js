/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import grungewhite from '../assets/grunge_white.png'
import zombie from '../assets/gallery/roadmap.jpg'

let Roadmap = props => {
    const roadmap = css`
        background-color: #000000;
        color: white;
    `
    const topText = css`
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
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
                color: #AB19EF;
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
    `

    const bottomText = css`
        margin: 50px 0;
        h1 {
            color: #FFFFFF;
            font-size: 45px;
            line-height: 45px;
            font-weight: 400;
            font-family: teko;
            margin: 45px 0 0 0;
        }
        
        h2 {
            color: #FF6161;
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
                        background-color: #AFF038;
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
                        color: #AFF038;
                        text-transform: uppercase;
                    }
    
                    h3 {
                        font-size: 20px;
                        font-weight: 700;
                        line-height: 30px;
                        color: #FFFFFF;
                        margin: 0 0 20px;
                    }
    
                    p {
                        color: #FFFFFF;
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
                padding: 0;
                background-color: #151515;
                margin: 0 20px 20px 0;
                width: calc(33% - 20px);
                @media (max-width: 960px) {
                    width: calc(50% - 20px);
                }
                @media (max-width: 640px) {
                    width: 100%;
                    margin-right: 0;
                }

                .roadmap-header {
                    background-color: #AFF038;
                    color: #000000;
                    padding: 10px;
                }

                .roadmap-content {
                    padding: 10px 10px;
                }

                h2 {
                    font-size: 14px;
                    line-height: 14px;
                    background-color: #AFF038;
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
                    color: #FFFFFF;
                    font-size: 14px;
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
        <div id="roadmap" css={roadmap}>
            <div css={topText}>
                <div className="grungebox">
                    <h1>Generations of Zombies - Game Theory</h1>
                    <p>In the future, new generations of zombies will deliver value to holders. Owners can use their zombies to “go searching” and come back with more zombies comrades (a New and Fun NFT).</p>
                    <p className="bold">Holding a Genesis (Gen 1) Zombie will give you the best chance for an older gen zombie!</p>
                </div>
                <img src={zombie} alt="zombie" />
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
                            <h2>Generation 2</h2>
                            <h3>Zombie Pets</h3>
                            <p>Gen 1 Zombies can search (similar to staking) for Gen 2 Pets. Each Gen 1 Zombie has a chance to even find another unreleased Gen 1 Zombie from the 2k pool.</p>
                        </div>
                        <div className="timeline-item">
                            <h2>Generation 3</h2>
                            <h3>TBA New Series</h3>
                            <p>Gen 1 and Gen 2 zombies can both search. Earlier generation zombies will always have the best chance to come back with earlier generation rewards.</p>
                        </div>
                    </div>
                </div>

                <h1>Project Roadmap</h1>
                <div id="roadmap-section">
                    <div className="roadmap-item">
                        <div className="roadmap-header">
                            <h2>Roadmap 1.0</h2>
                            <h3>The Spread Begins!</h3>    
                        </div>
                        <div className="roadmap-content">
                            <ul>
                                <li>The NFZ Team Grows</li>
                                <li>Establish all the key NFT support tools </li>
                                <li>Member Surprises & Exclusive Benefits/Rewards</li>
                                <li>Establish the Community Fund</li>
                                <li>Commissioning of Art Story NFT Special</li>
                                <li>Horde challenges begin</li>
                            </ul>
                        </div>
                    </div>
                    <div className="roadmap-item">
                        <div className="roadmap-header">
                            <h2>Roadmap 2.0</h2>
                            <h3>The Horde Grows Stronger</h3>
                        </div>
                        <div className="roadmap-content">
                            <ul>
                                <li>Searching mechanics introduced with Generation 2 Zombie Pets</li>
                                <li>More game theory mechanics introduced, rewarding holders</li>
                                <li>Collaborations with zombie themed media releases (movies, shows, games, etc)</li>
                                <li>DAO establishment</li>
                                <li>Exclusive merchandise</li>
                                <li>More to be announced</li>
                            </ul>
                        </div>
                    </div>
                    <div className="roadmap-item">
                        <div className="roadmap-header">
                            <h2>Beyond</h2>
                            <h3>The Long Term Vision</h3>
                        </div>
                        <div className="roadmap-content">
                            <ul>
                                <li>Zombie themed collaborations extend further into the real world and an NFT BRAINS consultancy is established, working with brands to perfect their NFT strategy and execution. All NFZ holders will receive a share of the benefits of future projects.</li>
                                <li>Nice Fun Zombie entertainment - the culmination of the universe we build will be seen by the masses.</li>
                                <li>The Metaverse - we're still early, but we'll be there.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div css={clear}></div>
            <div css={footer}>
                MORE DETAILS OF OUR ROADMAP FOUND ON <a href="https://discord.gg/BBEBjvpp" target="_blank" rel="noreferrer">DISCORD</a>
            </div>
       </div>
    );
}

export default Roadmap;
