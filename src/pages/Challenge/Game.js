/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

import Card from '../../Components/Card';

function Game() {
  const containerCss = css`
    margin: 20px;

    .content-section {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      color: white;
      text-align: center;
      max-width: 800px;
    }

    .card {
      margin: 38px;
      &:first-of-type {
        margin-left: 0px;
      }
      &:last-of-type {
        margin-right: 0px;
      }
      .card-portrait {
        width: 216px;
        height: 216px;
        background-color: #c4c4c4;
      }
      .card-text {
        margin-top: 22px;
      }
    }
  `;

  return (
    <div css={containerCss}>
      <div className="content-section">
        <h1>Welcome to the nice fun Challenge!</h1>
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
    </div>
  );
}

export default Game;
