/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import step1 from '../assets/steps/step1.png';
import step2 from '../assets/steps/step2.png';
import step3 from '../assets/steps/step3.png';

let HowTo = (props) => {
  const howto = css`
    background-color: #000000;
    color: white;

    h1 {
      font-family: teko;
      font-weight: 400;
      font-size: 45px;
      color: #ffffff;
      margin-top: -5px;
    }

    h2 {
      font-size: 14px;
      font-weight: 700;
      color: #aff038;
      margin-bottom: 0;
    }
  `;

  const steps = css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(416px, 1fr));
    font-size: 14px;
    color: #ffffff;
    @media (max-width: 960px) {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }

    .step-item {
      padding: 145px 20px 20px 20px;
      margin: 0 25px 25px 0;
      color: #b1b1b1;
      background-color: #151515;
      border-radius: 8px;
      background-position: 45% 20px;
      @media (max-width: 960px) {
        padding-top: 155px;
        background-position: 50% 20px;
      }
      @media (max-width: 640px) {
        padding-top: 155px;
        margin: 0 0 25px 0;
        background-position: 50% 20px;
      }

      h2 {
        font-size: 14px;
        font-weight: 700;
        color: #aff038;
        margin-bottom: 0;
      }

      h3 {
        font-size: 20px;
        color: #ffffff;
        margin-top: 10px;
      }

      a {
        color: #50e6ff;
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
  `;

  return (
    <div className="common-padding" id="howto" css={howto}>
      <h2>MINT</h2>
      <h1>HOW TO MINT</h1>
      <div css={steps}>
        <div className="step-item" id="step-1">
          <h2>Step 1</h2>
          <h3>Get some Ethereum</h3>
          <p>
            You can buy ETH on{' '}
            <a href="https://www.binance.com" target="_blank" rel="noreferrer">
              Binance
            </a>
            ,{' '}
            <a href="https://www.coinbase.com" target="_blank" rel="noreferrer">
              Coinbase
            </a>
            , or any centralized exchange.&nbsp;
            <a href="https://www.coinbase.com" target="_blank" rel="noreferrer">
              Learn more
            </a>
          </p>
        </div>
        <div className="step-item" id="step-2">
          <h2>Step 2</h2>
          <h3>Connect Metamask and mint your Nice Fun Zombie!</h3>
          <p>
            Set up Metamask or another non-custodial wallet. Transfer the ETH to
            your Metamask wallet.
          </p>
          <p>
            Learn more about{' '}
            <a href="https://www.binance.com" target="_blank" rel="noreferrer">
              Binance
            </a>{' '}
            or{' '}
            <a href="https://www.coinbase.com" target="_blank" rel="noreferrer">
              Coinbase
            </a>
          </p>
        </div>
        <div className="step-item" id="step-3">
          <h2>Step 3</h2>
          <h3>Connect Metamask and mint your Nice Fun Zombie!</h3>
          <p>
            On release day, connect your wallet to our website via Metamask’s
            Chrome or Firefox extension or mobile app. Go to the{' '}
            <a href="#mint">Mint</a> section on our website and press ‘mint’ to
            discover your Nice Fun Zombie.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowTo;
