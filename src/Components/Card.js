/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

function Card({ subtitle }) {
  const cardCss = css`
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
  `;

  return (
    <div css={cardCss}>
      <div className="card-portrait"></div>
      <div className="card-text">{subtitle}</div>
    </div>
  );
}

export default Card;
