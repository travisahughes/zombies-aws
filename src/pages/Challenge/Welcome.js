/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import bgimg from '../../assets/challenge/challengebg.png';

function Welcome({ setActivePage, authenticate, isAuthenticated }) {
  const challengeCss = css`
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
    padding: 75vh 20px 0;

    .btn {
      display: inline-flex;
      border: 3px solid #ab19ef;
      padding: 20px;
      cursor: pointer;
      margin: 8px;
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
    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @-moz-keyframes fadein {
      /* Firefox */
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @-webkit-keyframes fadein {
      /* Safari and Chrome */
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @-o-keyframes fadein {
      /* Opera */
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `;

  return (
    <div css={challengeCss}>
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
          <div className="btn" onClick={() => setActivePage('game')}>
            Face Your Challenge
          </div>
        )}
      </div>
    </div>
  );
}

export default Welcome;
