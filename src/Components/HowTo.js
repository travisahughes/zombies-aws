/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import step1 from '../assets/steps/step1.png'
import step2 from '../assets/steps/step2.png'
import step3 from '../assets/steps/step3.png'
import step4 from '../assets/steps/step4.png'

let HowTo = props => {
    const howto = css`
        background-color: #000000;
        color: white;

        h1 {
            font-family: teko;
            font-weight: 400;
            font-size: 45px;
            color: #FFFFFF;
            margin: 0;
            padding-bottom: 40px;
        }

        h2 {
            font-size: 14px;
            font-weight: 700;
            color: #C4C4C4;
            margin-bottom: 0;
        }
    `

    const steps = css`
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(400px, 1fr));
        font-size: 14px;
        color: #FFFFFF;
        @media (max-width: 960px) {
            grid-template-columns: repeat(auto-fill,minmax(300px, 1fr));
        }
        
        .step-item {
            padding: 145px 60px 20px 0;
            color: #B1B1B1;
            background-position: 45% 0;
            @media (max-width: 960px) {
                background-position: 35% 0;
            }

            h3 {
                color: #FFFFFF;
            }

            a {
                text-decoration: none;
                color: #FFFFFF;
            }
        }

        #step-1 {
            background-image: url(${step1});
            background-repeat: no-repeat;
        }
        
        #step-2 {
            background-image: url(${step2});
            background-repeat: no-repeat;
        }
        
        #step-3 {
            background-image: url(${step3});
            background-repeat: no-repeat;
        }
    `
    
    const clear = css`
        clear: both;
    `

    return (
        <div className="common-padding" id="howto" css={howto}>
            <h2>MINT</h2>
            <h1>HOW TO MINT</h1>
            <div css={steps}>
                <div className="step-item" id="step-1">
                    <h3>Step 1: Get some ETH</h3>
                    <p>ETH can be purchased on any centralized exchange such as Binance or Coinbase.&nbsp; 
                        <a href="https://www.coinbase.com" target="_blank">Learn more</a>
                    </p>
                </div>
                <div className="step-item" id="step-2">
                    <h3>Step 2: Set up Metamask and transfer ETH</h3>
                    <p>transfer the ETH purchased on your exchange to the Metamask wallet. The simplest way to do so can be viewed for Binance here and Coinbase here.</p>
                    <p>Set up Metamask or another non-custodial wallet to hold ETH and mint your Zombie.</p>
                </div>
                <div className="step-item" id="step-3">
                    <h3>Step  3: Connect Metamask to our site and mint on the release date</h3>
                    <p>On release day, connect your Metamask to our website via the Chrome extension (or the Metamask app on mobile). We recommend using the Chrome Extension as this provides for the smoothest user experience. Go to the Mint section on our website and press ‘mint’ to find your Nice Fun Zombie.</p>
                </div>
            </div>
       </div>
    );
}

export default HowTo;