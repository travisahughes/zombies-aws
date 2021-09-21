/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import textmask from '../assets/textmask.png'
import Nav from'./Nav'


let Hero = props => {
    const hero = css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        padding: 0px 30px;
        

        p {
            font-weight: 700;
            font-size: 24px;
        }

        #header {
            width: 850px;
            margin-top: 470px;
            flex-direction: column;
            display: flex;
            align-items: center;
            justify-content: center;    
        }

        #top-text {
            width: 400px;
            align-self: flex-start;
            font-weight: 700;
            font-size: 32px;
            -webkit-text-stroke: 2px black;
        }

        #main-text {
            width: 680px;
            align-self: flex-end;
            font-weight: 700;
            font-size: 72px;
            margin-top: -10px;
            -webkit-text-stroke: 2px black;

            #zombies {
                color: pink;
            }
        }

        #sub-text {
            width: 680px;
            align-self: flex-end;
            font-weight: 400;
            font-size: 18px;
            margin-top: 10px;
        }

        .clip-text {
            font-size: 72px;
            font-weight: bold;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-image: url(${textmask});
        }
    `

    return (
        <div css={hero}>

            <Nav />
            <div id='header'>
                <div id='top-text'>
                    ENTER THE UNIVERSE OF
                </div>
                <div id='main-text'>
                    NICE FUN <span id='zombies' className='clip-text'>ZOMBIES</span>
                </div>
                <div id='sub-text'>
                    -- An Undying NFT Art Project & Community --
                </div>
            </div>
       </div>
    );
}

export default Hero;