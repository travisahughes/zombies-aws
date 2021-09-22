/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import teko from '../assets/fonts/Teko-Regular.ttf'
import textmask from '../assets/textmask.png'
import Nav from'./Nav'


let Hero = props => {
    const hero = css`
        @font-face {
            font-family: teko;
            src: url(${teko});
        }
        
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
            width: 920px;
            margin-top: 290px;
            flex-direction: column;
            display: flex;
            align-items: center;
            justify-content: center;    
        }

        #top-text {
            font-family: teko;
            width: 450px;
            align-self: flex-start;
            font-weight: 400;
            font-size: 40px;
        }

        #main-text {
            font-family: teko;
            width: 730px;
            align-self: flex-end;
            font-weight: 400;
            font-size: 116px;
            margin-top: -35px;

            #zombies {
                color: pink;
            }
        }

        #sub-text {
            width: 730px;
            align-self: flex-end;
            font-weight: 400;
            font-size: 18px;
            margin-top: -35px;
        }

        .clip-text {
            font-size: 116px;
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