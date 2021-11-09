/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

import Card from '../../Components/Card';

function Game() {
  const containerCss = css`
    margin: 20px;
    display: flex;
    flex-direction: column;
    margin: 0 auto 20px auto;
    padding: 0 20px;

    .content-section {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-self: center;
      color: white;
      text-align: center;
      max-width: 800px;

      h1 {
        font-family: teko;
        text-transform: uppercase;
        font-size: 45px;
        line-height: 45px;
        font-weight: 400;
        color: #ffffff;
      }
    }
  `;

  return (
    <div css={containerCss}>
      <div className="content-section">
        <h1>Your NFZ Crew Requirements</h1>
      </div>
      <div className="content-section">
        <p>
          Your NFZ Challenge Requirements Assemble a team of 3 NFZs with at
          least 1 of the following traits
        </p>
      </div>
      <div className="content-section">
        <Card subtitle="orange background" />
        <Card subtitle="eyepatch" />
        <Card subtitle="mohawk" />
      </div>
      <div className="content-section">
        <h2>Your Collection</h2>
        <p>Choose who to send</p>
      </div>
    </div>
  );
}

export default Game;
