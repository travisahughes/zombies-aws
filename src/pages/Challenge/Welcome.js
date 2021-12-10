/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import bgimg from '../../assets/challenge/challengebg.png';
import rainingeth from '../../assets/challenge/rainingeth.png';
import fox from '../../assets/challenge/metamaskfox.png';
import './Welcome.css';
import { contract_data } from '../../constants/moralis_env';

function Welcome({
  authenticate,
  isAuthenticated,
  user,
  switchNetwork,
  chainId,
  account,
}) {
  // TODO: Change to '0x1' for prod!
  const preferredChain = '0x4';
  const [challengeCompleted, setChallengeCompleted] = useState(false);
  const [shortAddress, setShortAddress] = useState(false);

  useEffect(() => {
    if (account) {
      if (account.length > 25) {
        setShortAddress(
          account.substr(0, 6) +
            '...' +
            account.substr(account.length - 4, account.length)
        );
      }
      axios
        .get(`https://api.nicefunzombies.io/challenge/${account}`)
        .then((response) => {
          setChallengeCompleted(true);
        })
        .catch(() => {
          console.log('No saved user data');
          setChallengeCompleted(false);
        });
    }
  }, [account]);

  const history = useHistory();
  const challengeCss = css`
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 51.27%, #000000 100%);
    background-image: url(${bgimg});
    background-size: 100% auto;
    background-position: top;
    background-repeat: no-repeat;
    animation: fadein 4s;
    -moz-animation: fadein 4s; /* Firefox */
    -webkit-animation: fadein 4s; /* Safari and Chrome */
    -o-animation: fadein 4s; /* Opera */

    display: flex;
    flex-direction: column;
    margin: 0 auto 20px auto;
    padding: 90vh 20px 0;
    @media (max-width: 1300px) {
      padding-top: 80vh;
    }
    @media (max-width: 1000px) {
      padding-top: 60vh;
    }
    @media (max-width: 640px) {
      padding-top: 30vh;
    }

    h1 {
      @media (max-width: 640px) {
        font-size: 24px;
      }
    }

    p {
      @media (max-width: 640px) {
        font-size: 14px;
      }
    }

    #ethrain {
      position: absolute;
      top: -1000px;
      left: 0;
      width: 100%;
      height: 100vh;
      background-image: url(${rainingeth});
      background-size: 100% auto;
      background-position: top;
      background-repeat: no-repeat;
      animation: slidedown 0.75s forwards 0.75s;
      -moz-animation: slidedown 0.75s forwards 0.75s; /* Firefox */
      -webkit-animation: slidedown 0.75s forwards 0.75s; /* Safari and Chrome */
      -o-animation: slidedown 0.75s forwards 0.75s; /* Opera */
    }

    .btn {
      display: inline-flex;
      border: 3px solid #ab19ef;
      padding: 20px;
      cursor: pointer;
      margin: 8px;
      -webkit-transition: border 500ms ease-out;
      -moz-transition: border 500ms ease-out;
      -o-transition: border 500ms ease-out;
      transition: border 500ms ease-out;
      z-index: 99;
    }

    .btn:hover {
      border: 3px solid #ccee25;
      box-sizing: border-box;
      filter: drop-shadow(0px 0px 4px #ccee25);
    }

    .challenge-complete {
      color: #ccee25;
    }

    #user-address {
      position: fixed;
      top: 0;
      right: 0;
      width: 250 px;
      z-index: 100;
      color: white;
      display: flex;
      flex-direction: row;
      align-content: center;
      justify-content: flex-end;
      align-items: center;
      padding: 10px 10px 0;

      #fox {
        width: 25px;
        height: auto;
        padding: 0 10px 0 0;
      }
    }

    .content-section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-self: center;
      color: white;
      text-align: center;
      max-width: 800px;
    }
  `;

  return (
    <div css={challengeCss}>
      <div id="ethrain"></div>
      <div className="content-section">
        <h1>Welcome to the nice fun Challenge!</h1>
      </div>
      <div className="content-section">
        <p>
          The key to any great team is to build one that works great together.
          So we’re challenging you to assemble a horde with a very particular
          set of skills.
        </p>
      </div>
      <div className="content-section">
        <p>
          Rise to the challenge to win something cool, before: xx/xx xxPM SG /
          xxAM ET - xx/xx xxPM SG / xxAM ET
        </p>
        {challengeCompleted && (
          <p className="challenge-complete">
            Congratulations! You've completed this challenge.
          </p>
        )}
      </div>
      <div className="content-section">
        {!isAuthenticated && (
          <div id="login" className="btn" onClick={() => authenticate()}>
            Connect Your Wallet
          </div>
        )}
        {isAuthenticated && chainId === preferredChain && !challengeCompleted && (
          <div className="btn" onClick={() => history.push('/challenge/info')}>
            Face Your Challenge
          </div>
        )}
        {isAuthenticated && chainId !== preferredChain && (
          <div className="btn" onClick={() => switchNetwork(preferredChain)}>
            Switch to {contract_data[preferredChain]?.network_name || 'Unknown'}
          </div>
        )}
      </div>
      <div id="user-address">
        <img id="fox" src={fox} alt="Metamask" />
        {shortAddress}
      </div>
    </div>
  );
}

export default Welcome;
