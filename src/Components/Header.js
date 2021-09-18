/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'


let Header = props => {
    const header = css`
        background-color: #282c34;
        height: 30px;
        display: flex;
        justify-content: space-between;
        color: white;
        padding: 20px 200px;

        .header-left {
            flex: 1 1 auto;
            text-align: left;

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
        padding: 0;
        float: right;

        li {
            float: left;
            padding: 0 20px;

            a {
                color: white;
                text-decoration: none;
            }
        }
    `

    return (
        <header css={header}>
            <div id="top" className="header-left">
                <a href="/">Nice Fun Zombies</a>
            </div>
            <div className="header-right">
                <ul css={navmenu}>
                    <li ><a href="#mission">Mission</a></li>
                    <li ><a href="#utility">Utility</a></li>
                    <li ><a href="#roadmap">Roadmap</a></li>
                    <li ><a href="#team">Team</a></li>
                    <li ><a href="#faq">FAQ</a></li>
                    <li ><a href="#socials">Socials</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;