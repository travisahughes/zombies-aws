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
                left: 25%;
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

            #footer-copyright {
                font-size: 14px;
                width: 400px;
                background-color: #000000;
                padding: 10px;
                margin: 50px auto 0;
                @media (max-width: 640px) {
                    font-size: 12px;
                    width: 300px;
                }
            }

            img {
                padding-top: 15px;
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
                <div id="footer-copyright">
                    NICE FUN ZOMBIES {year} - ALL RIGHTS RESERVED
                </div>
            </div>

            <img id="footerleft" src={footerleft} alt="zombie" />
            <img id="footerright" src={footerright} alt="zombie" />
       </div>
    );
}

export default Footer;