/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'


let Roadmap = props => {
    const roadmap = css`
        background-color: #282c34;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        padding: 20px 200px;

        .map-segment {
            margin-bottom: 20px;
            width: 600px;

            li {
                text-align: left;
            }

            .phase {
                font-weight: 700;
                font-size: 24px;
                text-align: left;
            }
        }

    `

    return (
        <div id="roadmap" css={roadmap}>
            <div className='map-segment'>
                <p className='phase'>Phase 1 (after launch) – Getting bit and establishing the foundation, we’re early!</p>
                <ul>
                    <li>Establish presence with Rarity.tools, Rarity Sniper and more</li>
                    <li>Giveaways & contests for Degenerate Zombies NFT holders</li>
                    <li>Establishment of community grant</li>
                    <li>Early partnership benefits announced</li>
                    <li>Creation of first special art piece and utility for it</li>
                    <li>Building the team for future growth</li>
                </ul>
            </div>

            <div className='map-segment'>
                <p className='phase'>Phase 2 – Introducing new mechanics</p>
                    <ul>
                        <li>Introduction of Gen 2 Zombies (Pets) and their utility</li>
                        <li>“Staking” to be implemented - ability for our horde to obtain one of the remainder 3,000 Genesis zombies held back at the start, or a new Gen 2 Zombie Pet </li>
                        <li>Airdrops and other benefits</li>
                        <li>Invasion into the Real World – funds will strategically used to bring our digital world into the real one via marketing. Only a matter of time before your zombie </li>
                        <li>Merch drops or store</li>
                    </ul>
            </div>

            <div className='map-segment'>
                <p className='phase'>Beyond – Some hints at the longer term vision</p>
                    <ul>
                        <li>Storytelling – we are building a new universe with rich storylines and characters. How this manifests itself will remain to be seen, but we have a wider vision for this world. We will first establish the lore and build the brand to a point where it can take the next step.</li>
                        <li>Metaverse exploration – we believe there’s an opportunity here, but it will take some time to get right. Locations in the zombie world matter – from the hospital, to the mall, to the school – locations are rich for telling the story and we plan on establishing these locations in the metaverse when the time is right. </li>
                    </ul>
            </div>
        </div>
    );
}

export default Roadmap;