/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import footerbg from '../assets/bg_footer.jpg'
import footerhighlight from '../assets/footer_highlight.png'
import discord from '../assets/icons/discord.png'

let Footer = props => {
    const footer = css`
        text-align: center;
        position: relative;
        height: 500px;
        width: 100%;
        background-image: url("${footerbg}");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: #171717;
        color: #B1B1B1;
        font-size: 14px;

        #footer-text {
            padding: 180px 0 0 0;

            img {
                padding-top: 15px;
            }
        }

        #footer-links {
            position: absolute;
            bottom: 100px;
            left: 0;

            #footer-links-left {
                float: left;
                width: 440px;
                text-align: right;
                padding: 15px 10px 15px;
                background-image: url(${footerhighlight});
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                color: #FFFFFF;
            }

            #footer-links-right {
                float: left;
                padding: 15px 0 15px 10px;

                a {
                    color: white;
                    text-decoration: none;
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
                Join the horde on DISCORD to get your zombie<br />
                <a href="https://www.discord.com" target="_blank" rel="noreferrer">
                    <img src={discord} alt="discord" />
                </a>
            </div>
            <div id="footer-links">
                <div id="footer-links-left">
                    NICE FUN ZOMBIES 2021 - ALL RIGHTS RESERVED
                </div>
                <div id="footer-links-right">
                    <a href="#terms">TERMS</a> |
                    <a href="#privacy">PRIVACY POLICY</a> |
                    <a href="#contact">CONTACT</a>
                </div>
            </div>
       </div>
    );
}

export default Footer;