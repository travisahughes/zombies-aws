/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

let MintLink = (props) => {
  const info = css`
    color: white;

    .green-highlight {
      color: #aff038;
    }

    p {
      font-weight: 700;
      font-size: 24px;
    }

    .mint-wrapper {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      @media (max-width: 640px) {
        flex-direction: column;
      }

      .dates {
        margin: 5px 20px 0 0;
        text-align: right;
        @media (max-width: 640px) {
          text-align: center;
        }
      }

      a {
        color: white;
        text-decoration: none;
        @media (max-width: 640px) {
          margin-top: 10px;
          align-self: center;
        }
      }

      #mint-button-link {
        width: 250px;
        border: 3px solid #24eea4;
        text-align: center;
        padding: 10px;
        text-transform: uppercase;

        &:hover {
          background-color: #24eea4;
        }
      }
    }
  `;

  return (
    <div className="common-padding" css={info}>
      <div className="mint-wrapper">
        <a
          href="https://mint.nicefunzombies.io"
          target="_blank"
          rel="noreferrer"
        >
          <div id="mint-button-link">Click to mint now!</div>
        </a>
      </div>
    </div>
  );
};

export default MintLink;
