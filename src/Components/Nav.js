/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import discordLogo from '../assets/icons/discord.png';
import twitterLogo from '../assets/icons/twitter.png';
import openseaLogo from '../assets/icons/opensea.png';
import etherscanLogo from '../assets/icons/etherscan.png';


let Header = props => {
    const header = css`
        height: 64px;
        width: 75%;
        display: flex;
        justify-content: space-between;
        color: white;
        padding: 20px 0;
        font-size: 14px;

        .header-left {
            flex: 1 1 auto;
            text-align: left;
            padding-top: 7px;

            a {
                color: white;
                text-decoration: none;
            }
        }

        .header-right {
            flex: 1 1 auto;
            justify-content: flex-end;
        }
    `

    const navmenu = css`
        list-style-type: none;
        margin: 0;
        padding: 11px 10px 0px 10px;
        float: right;
        background-color: black;

        li {
            float: left;
            padding: 7px 13px;

            a {
                color: white;
                text-decoration: none;

                &:hover {
                    color: #899F78;
                    border-bottom: #899F78 4px solid;
                    padding-bottom: 13px;
                }

                &:active {
                    color: #668A6E;
                    border-bottom: #668A6E 4px solid;
                    padding-bottom: 13px;
                }
            }
        }

        #discord-icon {
            fill: white;
            &:hover {
                fill: green;
            }
        }

        li.icon {
            padding: 0 10x;

            a:hover, a:active {
                border: none;
            }
        }

        li#twitter {
            padding-top: 5px;
        }

        li#discord {
            padding-top: 3px;
        }

        li#opensea {
            padding-top: 0;
        }

        li#etherscan {
            padding-top: 0;
        }
    `

    return (
        <header css={header}>
            <div id="top" className="header-left">
                <a href="/">Nice Fun Zombies</a>
            </div>
            <div className="header-right">
                <ul css={navmenu}>
                    <li ><a href="#mission">Mission & Goals</a></li>
                    <li ><a href="#roadmap">Roadmap</a></li>
                    <li ><a href="#howto">How to Mint</a></li>
                    <li ><a href="#team">Team</a></li>
                    <li ><a href="#faq">FAQ</a></li>
                    <li className="icon" id="discord"><a href="https://www.discord.com" target="_blank" rel="noreferrer"><img alt="discord" src={discordLogo} /></a></li>
                    <li className="icon" id="twitter"><a href="https://www.twitter.com/nicefunzombies" target="_blank" rel="noreferrer"><img alt="twitter" src={twitterLogo} /></a></li>
                    <li className="icon" id="opensea"><a href="https://www.opensea.io" target="_blank" rel="noreferrer"><img alt="opensea" src={openseaLogo} /></a></li>
                    <li className="icon" id="etherscan"><a href="https://www.etherscan.com" target="_blank" rel="noreferrer"><img alt="etherscan" src={etherscanLogo} /></a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;