/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import bgimg from '../../assets/challenge/challengebg.png';
import rainingeth from '../../assets/challenge/rainingeth.png';
import './Welcome.css';

function Welcome({ authenticate, isAuthenticated, user }) {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    console.log('welcome user,', user);
    if (user) {
      console.log('user challenge', user);
      const userAddress = user.get('ethAddress');
      const options = {
        mode: 'no-cors',
      };
      console.log('user address, welcome', userAddress);
      fetch(
        `https://api.nicefunzombies.io/challenge/${userAddress}`,
        options
      ).then((result) => {
        console.log('result', result);

        result.nfzIds.length > 0 ? setCompleted(true) : null;
      });
    }

    //Check to see if user already completed challenge
  }, [user]);

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

    .content-section {
      display: flex;
      flex-direction: row;
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
      </div>
      <div className="content-section">
        {!isAuthenticated && (
          <div id="login" className="btn" onClick={() => authenticate()}>
            Connect Your Wallet
          </div>
        )}
        {isAuthenticated && (
          <div className="btn" onClick={() => history.push('/challenge/info')}>
            Face Your Challenge
          </div>
        )}
      </div>
    </div>
  );
}

export default Welcome;
