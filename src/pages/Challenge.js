/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import Nav from '../Components/Nav';

function Challenge() {
  const containerCss = css`
    margin: 20px;
  `;

  const challengeCss = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin: 30px auto 20px auto;
    padding: 0 20px;
    max-width: 1310px;
    height: calc(100vh - 200px);

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

  const test = () => {
    alert('test');
  };

  return (
    <div css={containerCss}>
      <Nav />
      <div css={challengeCss} className="Challenge">
        <div className="body">
          <div className="content-section">
            <h1>Welcome to the nice fun Challenge!</h1>
          </div>
          <div className="content-section">
            <p>
              The key to any great team is to build one that works great
              together. So we’re challenging you to assemble a horde with a very
              particular set of skills.
            </p>
          </div>
          <div className="content-section">
            <p>
              Rise to the challenge to win something cool, before: xx/xx xxPM SG
              / xxAM ET - xx/xx xxPM SG / xxAM ET
            </p>
          </div>
          <div className="content-section">
            {/* conditinoally show one or the other */}
            <div class="btn" onClick={() => test()}>
              Connect Your Wallet
            </div>
            <div class="btn" onClick={() => test()}>
              Face Your Challenge
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Challenge;
