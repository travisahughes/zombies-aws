/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import bio from '../assets/bios/bio.png'

let Team = props => {
    const team = css`
        background-color: #000000;
        color: white;

        h1 {
            font-family: teko;
            font-weight: 400;
            font-size: 45px;
            color: #FFFFFF;
            margin: 0;
        }

        p {
            font-size: 14px;
            color: #B1B1B1;
        }
    `

    const members = css`
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(360px, 1fr));
        font-size: 14px;
        color: #FFFFFF;
        
        .member {
            padding: 50px 60px 20px 0;
            color: #B1B1B1;

            img {
                width: 360px;
                height: 349px;
                @media (max-width: 960px) {
                    width: 200px;
                    height: 195px;
                }
                @media (max-width: 640px) {
                    width: 150px;
                    height: 148px;
                }
            }

            h3 {
                color: #FFFFFF;
                font-size: 18px;
                margin-bottom: 0;
            }

            h4 {
                color: #B1B1B1;
                font-size: 14px;
                margin-top: 0px;
            }
        }
    `

    return (
        <div className="common-padding" id="team" css={team}>
            <h1>THE TEAM</h1>
            <p>This project is not affiliated with any companies listed in our backgrounds - this is a separate passion project!</p>
            <div css={members}>
                <div className="member" id="rayminbi">
                    <img src={bio} alt="bio image" />
                    <h3>@rayminbi</h3>
                    <h4>Lead, Strategy, Brand, Marketing</h4>
                    <p>Marketing & Business lead for ESPN in Asia, NFT Enthusiast</p>
                    <p>Thinks twice about visiting Korea after watching Kingdom</p>
                </div>
                <div className="member" id="tdubs">
                    <img src={bio} alt="bio image" />
                    <h3>@tdubs1</h3>
                    <h4>Lead, Tech</h4>
                    <p>Background in Tech for Disney+</p>
                    <p>11 seasons is not enough. Never wants The Walking Dead to end.</p>
                </div>
                <div className="member" id="firestarteronibi">
                    <img src={bio} alt="bio image" />
                    <h3>@firestarteronibi</h3>
                    <h4>Artist</h4>
                    <p>Amazing artist!</p>
                    <p>Designs the cutest zombies the metaverse has ever seen.</p>
                </div>
                <div className="member" id="bloodline">
                    <img src={bio} alt="bio image" />
                    <h3>@bloodl1n3</h3>
                    <h4>Dev</h4>
                    <p>Web dude!</p>
                </div>
            </div>
       </div>
    );
}

export default Team;