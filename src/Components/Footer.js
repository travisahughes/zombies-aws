/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import footerleft from '../assets/footer_left.png'
import footerright from '../assets/footer_right.png'
import discord from '../assets/icons/discord.png'

let Footer = props => {
    const date = new Date()
    const year = date.getFullYear()
    
    const footer = css`
        text-align: center;
        position: relative;
        height: 500px;
        width: 100%;
        background-color: #000000;
        color: #B1B1B1;
        font-size: 14px;

        #footerleft {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 0;
        }
        #footerright {
            position: absolute;
            right: 0;
            bottom: 0;
            z-index: 0;
        }

        #footer-text {
            z-index: 10;
            padding: 180px 0 0 0;
            @media (max-width: 960px) {
                padding: 150px 0 0 0;
            }
            @media (max-width: 640px) {
                padding: 100px 0 0 0;
            }

            img {
                padding-top: 15px;
            }
        }

        #footer-links {
            z-index: 10;
            position: absolute;
            bottom: 100px;
            left: 0;
            @media (max-width: 960px) {
                bottom: 100px;
            }
            @media (max-width: 640px) {
                bottom: 120px;
            }

            #footer-links-left {
                float: left;
                width: 440px;
                text-align: right;
                padding: 15px 10px 15px;
                color: #AFF038;
                
                @media (max-width: 640px) {
                    width: 300px;
                    font-size: 10px;
                }
            }

            #footer-links-right {
                float: left;
                padding: 15px 0 15px 10px;
                @media (max-width: 640px) {
                    font-size: 10px;
                }

                a {
                    color: #50E6FF;
                    text-decoration: underline;
                    padding-left: 10px;

                    &:hover, &:active {
                        color: #999999;
                    }
                }
            }
        }
    `

    return (
        <div id="footer" css={footer}>
            <div id="footer-text">
                Join the horde on DISCORD to get your Nice Fun Zombie<br />
                <a href="https://discord.gg/nTN9T6sS" target="_blank" rel="noreferrer">
                    <img src={discord} alt="discord" />
                </a>
            </div>
            <div id="footer-links">
                <div id="footer-links-left">
                    NICE FUN ZOMBIES {year} - ALL RIGHTS RESERVED
                </div>
                <div id="footer-links-right">
                    <a href="#terms">TERMS</a> |
                    <a href="#privacy">PRIVACY POLICY</a> |
                    <a href="#contact">CONTACT</a>
                </div>
            </div>

            <img id="footerleft" src={footerleft} alt="zombie" />
            <img id="footerright" src={footerright} alt="zombie" />
       </div>
    );
}

export default Footer;