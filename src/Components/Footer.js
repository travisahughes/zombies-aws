/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import footerleft from '../assets/footer_left.png'
import footerright from '../assets/footer_right.png'
import discord from '../assets/icons/discord_large.png'

let Footer = props => {
    const date = new Date()
    const year = date.getFullYear()
    
    const footer = css`
        text-align: center;
        position: relative;
        height: 500px;
        width: 100%;
        background-color: #000000;
        color: #FFFFFF;
        font-size: 14px;
        @media (max-width: 640px) {
            height: 350px;
        }

        #footerleft {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 0;
            @media (max-width: 960px) {
                width: 300px;
            }
            @media (max-width: 640px) {
                width: 250px;
                left: 27%;
            }
        }
        #footerright {
            position: absolute;
            right: 0;
            bottom: 0;
            z-index: 0;
            @media (max-width: 960px) {
                width: 300px;
            }
            @media (max-width: 640px) {
                display: none;
            }
        }
        }

        #footer-text {
            position: relative;
            z-index: 10;
            font-size: 20px;
            padding: 180px 0 0 0;
            @media (max-width: 960px) {
                padding: 150px 0 0 0;
            }
            @media (max-width: 640px) {
                font-size: 14px;
                padding: 100px 0 0 0;
            }

            #top {
                background-color: #000000;
                padding: 10px;
                width: 660px;
                margin: 0 auto;
                @media (max-width: 640px) {
                    width: 290px;
                }
            }

            img {
                padding-top: 15px;
            }
        }

        #footer-links {
            z-index: 10;
            position: absolute;
            background-color: #000000;
            padding: 10px;
            bottom: 55px;
            left: 64px;
            @media (max-width: 960px) {
                bottom: 100px;
            }
            @media (max-width: 640px) {
                bottom: 40px;
            }

            #footer-links-left {
                float: left;
                text-align: right;
                color: #AFF038;
                
                @media (max-width: 640px) {
                    font-size: 10px;
                }
            }

            #footer-links-right {
                float: left;
                
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
                <div id="top">Join the horde on DISCORD to get your Nice Fun Zombie</div>
                <a href="https://discord.gg/BBEBjvpp" target="_blank" rel="noreferrer">
                    <img id="discord" src={discord} alt="discord" />
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