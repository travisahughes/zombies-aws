/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import FaqItem from './FaqItem'
import zombie from '../assets/gallery/zombie4.png'

let Faq = props => {
    const faq = css`
        background-color: #000000;
        color: white;
        min-height: 400px;
        margin: 50px 0;
        overflow: auto;

        h1 {
            color: #FFFFFF;
            font-size: 30px;
            margin: 5px 0;
        }
        
        h1 {
            font-size: 45px;
            margin: 10px 0 0 0;
        }

        #faq-list {
            float: left;
            width: calc(100% - 435px);
            padding: 0;
            @media (max-width: 960px) {
                width: 100%;
            }
        }

        #faq-image {
            width: 416px;
            float: right;
            @media (max-width: 960px) {
                display: none;
            }

            img {
                width: 416px;
            }
        }

    `

    return (
        <div id="faq" className="common-padding" css={faq}>
            <h1>FAQ</h1>
            <div id="faq-list">
                <FaqItem 
                    title="How is your project different?" 
                    content="Zombie ipsum reversus ab viral inferno nam rick amarus, monstra malum flesh Pestilentia violent vel ulnis eof Apocalypsi, morbi serpere locis Adlard coup spargit flesh. Undead perterritus decay oculi of Terror sicut ghouls est bieapoc twenty-eight implent, sed mauris braindead shaun caule sunt aere for creaturis. Vivens infecti screams omni Aenean Qui sed and Fit apocalypsi Terror braaaiiiins, nostra go morbo illud Alii Romero armis decay four Sicut. Is Lucio et iam oculi sicut et Adlard animated yof historiarum, virus per defunctis morbo viventium eorum magna deadsentio , lum ground contagium Maleficia! canum mortua pœnitentiam! twenty-eight malus. Bieapoc undead est deformis nostra haec yof Nescio carnem iam, malus undeath Nigh Cum mortua wal horror portae, eaters sacerdos leighter sit' implent The undead night." 
                />
                <FaqItem 
                    title="How do I access the presale?" 
                    content="Zombie ipsum reversus ab viral inferno nam rick amarus, monstra malum flesh Pestilentia violent vel ulnis eof Apocalypsi, morbi serpere locis Adlard coup spargit flesh. Undead perterritus decay oculi of Terror sicut ghouls est bieapoc twenty-eight implent, sed mauris braindead shaun caule sunt aere for creaturis. Vivens infecti screams omni Aenean Qui sed and Fit apocalypsi Terror braaaiiiins, nostra go morbo illud Alii Romero armis decay four Sicut. Is Lucio et iam oculi sicut et Adlard animated yof historiarum, virus per defunctis morbo viventium eorum magna deadsentio , lum ground contagium Maleficia! canum mortua pœnitentiam! twenty-eight malus. Bieapoc undead est deformis nostra haec yof Nescio carnem iam, malus undeath Nigh Cum mortua wal horror portae, eaters sacerdos leighter sit' implent The undead night." 
                />
            </div>
            <div id="faq-image">
                <img src={zombie} alt="zombie" />
            </div>
       </div>
    );
}

export default Faq;
