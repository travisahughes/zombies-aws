/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

let Mission = props => {
    const mission = css`
        background-color: #151515;
        color: white;
        padding: 0px 30px;
        width: 100%;
    `
    const topText = css`
        float: right;
        font-size: 18px;
        width: 750px;
        padding: 50px 0 0 60px;

        h1 {
            color: #E80253;
            font-size: 36px;
            margin: 5px 0;
        }

        h2 {
            color: #BA84B0;
            font-size: 14px;
            margin: 10px 0 0 0;
        }

        p {
            color: #999999;
            font-size: 14px;
        }
    `
    
    const clear = css`
        clear: both;
    `

    return (
        <div id="mission" css={mission}>
            <div css={topText}>
                <h2>MISSION</h2>
                <h1>WHAT DOES IT MEAN TO BE A ZOMBIE?</h1>
                <p>We’re here to redefine it. We are relentless and undying and grow stronger by the numbers. Your zombie avatar is your alter-ego. While we may lead normal lives in real life, our zombie identity symbolizes our desire for more BRAINS and to be a part of something FUN in an ever evolving digital world.</p>
            </div>
            <div css={clear}></div>
       </div>
    );
}

export default Mission;