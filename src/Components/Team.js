/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import teambg from '../assets/team_bg.jpg'
import ray from '../assets/bios/ray.png'
import andy from '../assets/bios/andy.png'
import bearheart from '../assets/bios/bearheart.png'
import bloodline from '../assets/bios/bloodline.png'
import eggbolt from '../assets/bios/eggbolt.png'
import firestarter from '../assets/bios/firestarter.png'
import tdubs from '../assets/bios/tdubs.png'
import tert from '../assets/bios/tert.png'
import yauuay from '../assets/bios/yauuay.png'

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
            margin: 20px 0 0 0;
        }

        p {
            font-size: 14px;
            line-height: 24.5px;
            color: #B1B1B1;
        }
    `

    const members = css`
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(305px, 1fr));
        font-size: 14px;
        color: #FFFFFF;
        
        .member {
            max-width: 274px;
            background-color: #000000;
            padding: 16px 16px;
            margin: 20px 10px 0 0;
            color: #B1B1B1;

            img {
                width: 273px;
                @media (max-width: 960px) {
                    width: 273px;
                }
                @media (max-width: 640px) {
                    width: 273px;
                }
            }

            h3 {
                color: #FFFFFF;
                font-size: 18px;
                margin-bottom: 0;
            }

            h4 {
                color: #AFF038;
                font-size: 14px;
                margin-top: 0px;
            }
        }
    `

    return (
        <div css={teamwrap}>
            <div className="common-padding" id="team" css={team}>
                <h1>THE TEAM</h1>
                <p>
                    This project is not affiliated with any companies listed in our backgrounds -<br />
                    this is a separate passion project!
                </p>
                <div css={members}>
                    <div className="member" id="rayminbi">
                        <img src={ray} alt="bio" />
                        <h3>@rayminbi | Raymond</h3>
                        <h4>Founder, Strategy, Brand, Marketing, Partnerships</h4>
                        <p>Marketing & Business lead for ESPN in Asia, NFT Enthusiast</p>
                        <p>Thinks twice about visiting Korea after watching Kingdom</p>
                    </div>
                    <div className="member" id="tdubs">
                        <img src={tdubs} alt="bio" />
                        <h3>@tdubs1</h3>
                        <h4>Lead, Tech</h4>
                        <p>Background in Tech for Disney+, Activision Blizzard</p>
                        <p>Sees red whenever Shaun of the Dead is on</p>
                    </div>
                    <div className="member" id="firestarteronibi">
                        <img src={firestarter} alt="bio" />
                        <h3>@firestarteronibi</h3>
                        <h4>Artist, Illustrator, Toy Designer</h4>
                        <p>Art contributor for Disney</p>
                        <p>Creatively building our new Zombieland</p>
                    </div>
                    <div className="member" id="bloodline">
                        <img src={bloodline} alt="bio" />
                        <h3>@bloodl1n3</h3>
                        <h4>Development Lead</h4>
                        <p>Software Engineer for FuboTV</p>
                        <p>Just wait 28 Days Later to see all the magic he can build</p>
                    </div>
                    <div className="member" id="yauuay">
                        <img src={yauuay} alt="bio" />
                        <h3>@yauuay | Hannah</h3>
                        <h4>Marketing</h4>
                        <p>Background with Apple, Spotify, ESPN</p>
                        <p>Keeping checks on all the Warm Bodies yet to get bit</p>
                    </div>
                    <div className="member" id="andywmi">
                        <img src={andy} alt="bio" />
                        <h3>@andywmi</h3>
                        <h4>Research Advisor</h4>
                        <p>Blockchain Maxi / Red Pill Guy</p>
                        <p>Goes to bed early so he doesn’t miss the Dawn of the Dead</p>
                    </div>
                    <div className="member" id="bearheart">
                        <img src={bearheart} alt="bio" />
                        <h3>@bearheart | Anna</h3>
                        <h4>UI / UX Designer</h4>
                        <p>Background as Sr. Product Designer for Activision Blizzard</p>
                        <p>Quickly answered the Call of Duty when Zombies got involved</p>
                    </div>
                    <div className="member" id="eggbolt">
                        <img src={eggbolt} alt="bio" />
                        <h3>@eggbolt | Ed</h3>
                        <h4>Discord Moderator & Community Development</h4>
                        <p>Lead Discord Moderator for The Asian Mint</p>
                        <p>Definitely getting on the Train to BUsan when the world opens up again</p>
                    </div>
                </div>

                <h1>Special Advisor</h1>
                <div css={members}>
                    <div className="member" id="tert">
                        <img src={tert} alt="bio" />
                        <h3>@TerT | Terence </h3>
                        <h4>Strategic Advisor</h4>
                        <p>Founder, Uninterested Unicorns</p>
                        <p>Ensuring no Resident Evil falls upon this project</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;