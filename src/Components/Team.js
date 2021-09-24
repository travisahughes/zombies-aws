/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import teambg from '../assets/team_bg.jpg'
import bio from '../assets/bios/bio.png'

let Team = props => {
    const teamwrap = css`
        background-image: url(${teambg});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        #team {
            padding-top: 64px;
            padding-bottom: 64px;
        }
    `
    const team = css`
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
        grid-template-columns: repeat(auto-fill,minmax(416px, 1fr));
        font-size: 14px;
        color: #FFFFFF;
        
        .member {
            max-width: 380px;
            background-color: #000000;
            padding: 16px 16px;
            margin: 20px 10px 0 0;
            color: #B1B1B1;

            img {
                width: 380px;
                @media (max-width: 960px) {
                    width: 380px;
                }
                @media (max-width: 640px) {
                    width: 380px;
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
        <div css={teamwrap}>
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
        </div>
    );
}

export default Team;