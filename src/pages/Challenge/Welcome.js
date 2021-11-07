/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

function Welcome({ setActivePage, authenticate, isAuthenticated }) {
  const challengeCss = css`
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
      align-items: center;
      color: white;
      text-align: center;
      max-width: 800px;
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
