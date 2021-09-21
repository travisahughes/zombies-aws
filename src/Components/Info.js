/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import grungebg from '../assets/grunge.png'
import zombie1 from '../assets/zombie1.png'
import zombie2 from '../assets/zombie2.png'
import zombie3 from '../assets/zombie3.png'
import zombie4 from '../assets/zombie4.png'
import zombie5 from '../assets/zombie5.png'


let Info = props => {
    const info = css`
        background-image: url(${grungebg});
        background-position: 130px 10px;
        background-repeat: no-repeat;
        color: white;
        padding: 0px 30px;
        width: 100%;

        p {
            font-weight: 700;
            font-size: 24px;
        }

    `
    const topText = css`
        font-size: 18px;
        width: 750px;
        padding: 150px 0 0 60px;
    `
    
    const bottomText = css`
        width: 700px;
        float: right;
        text-align: left;
        padding: 50px 60px 50px 0;
        
        h1 {
            font-weight: 700;
            font-size: 45px;
            margin: 10px 0;
        }

        .mint-numbers {
            float: left;
            width: 300px;
            font-size: 14px;
            color: #999999;

            h2 {
                font-weight: 700;
                font-size: 36px;
                color: #FFFFFF;
                margin: 20px 5px 10px 0;
            }
        }
    `
    const imageRow = css`
        clear: both;
        width: 100%;
        text-align: center;
        
        .zombie {
            margin: 0 20px;
        }
    `

    return (
        <div css={info}>
            <div css={topText}>
                Nice Fun Zombies (NFZs) is an art collection of 6,666 initial mint (and 10k total) unique zombie characters on the Ethereum blockchain (ERC-721). Art is inspired by horror and zombie lore, movies, shows, comics, our favorite NFT projects, and more.
            </div>
            <div css={bottomText}>
                <h1>MINT - COMING SOON</h1>
                <div className="mint-numbers">
                    <h2>6,666</h2>
                    Available at Launch
                </div>
                <div className="mint-numbers">
                    <h2>666</h2>
                    Available for Pre-sale
                </div>
                <div className="mint-numbers">
                    <h2>2,000</h2>
                    To be available in the future for Zombie holders - Holding a Genesis Zombie gets you the best chance to get one of these in the future! See details below
                </div>
                <div className="mint-numbers">
                    <h2>668</h2>
                    Genesis Zombies to be held for giveaways, promotional purposes, the team and mods
                </div>
            </div>
            <div css={imageRow}>
                <img className="zombie" src={zombie1} alt="zombie!" />
                <img className="zombie" src={zombie2} alt="zombie!" />
                <img className="zombie" src={zombie3} alt="zombie!" />
                <img className="zombie" src={zombie4} alt="zombie!" />
                <img className="zombie" src={zombie5} alt="zombie!" />
            </div>
       </div>
    );
}

export default Info;