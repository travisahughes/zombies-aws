/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from 'axios';
import { useState } from 'react';

let TraitChecker = (props) => {
  const [zombieId, setZombieId] = useState(null);
  const [finalMetadata, setFinalMetadata] = useState(null);

  const handleChange = (e) => {
    setZombieId(e.target.value);
  };

  const loadNFZTraits = (e) => {
    if (zombieId && zombieId > 0 && zombieId <= 6666) {
      console.log(`load traits for ${zombieId}`);
      const token_uri = `https://api.nicefunzombies.io/metadata/${zombieId}`;
      axios.get(token_uri).then((response) => {
        console.log('Manually setting NFZ metadata', response.data);
        setFinalMetadata(response.data);
      });
    }
  };

  const traitchecker = css`
    font-family: overpassmono;
    color: white;
    background-color: #101010;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: white;
    padding: 20px 20px;
    min-height: 200px;

    h1 {
      font-family: teko;
      font-size: 45px;
      font-weight: 400;
      text-transform: uppercase;
      line-height: 45px;
    }

    .header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 960px) {
        flex-direction: column;
        margin-bottom: 20px;
      }

      #search-box {
        max-width: 200px;
        height: 24px;
        border: 1px solid #101010;
        border-radius: 4px;
        margin-right: 10px;
        padding: 5px;

        &:focus {
          outline-width: 0;
          height: 22px;
        }

        @media (max-width: 960px) {
          max-width: 100px;
        }
      }

      #search {
        font-family: overpassmono;
        font-weight: 700;
        font-size: 14px;
        line-height: 21px;
        border: 3px solid #ab19ef;
        background: black;
        color: white;
        padding: 5px 15px;
        cursor: pointer;
        @media (max-width: 960px) {
          font-size: 12px;
          padding: 3px 10px;
        }
      }
    }

    .zombie-data {
      display: flex;
      flex-direction: row;
      width: 100%;
      min-width: 700px;
      @media (max-width: 960px) {
        flex-direction: column;
        align-items: center;
        min-width: auto;
      }

      .zombie-img {
        width: 30%;
        @media (max-width: 960px) {
          width: 100%;
        }

        img {
          width: 100%;
          min-width: 220px;
          height: auto;
          transition: src 2s;
          @media (max-width: 960px) {
            max-width: 300px;
          }
        }
      }

      .zombie-traits {
        width: 70%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-left: 20px;
        @media (max-width: 960px) {
          margin: 20px auto;
          justify-content: center;
          width: 100%;
        }

        .trait {
          width: 25%;
          max-width: 150px;
          height: 60px;
          background: #000000;
          color: white;
          padding: 10px 10px 10px 20px;
          margin: 0 10px 10px 0;
          text-transform: uppercase;
          text-align: left;
          font-size: 14px;
          line-height: 21px;
          @media (max-width: 1300px) {
            width: 20%;
          }
          @media (max-width: 960px) {
            width: 30%;
          }

          .trait-type {
            padding-top: 5px;
          }

          .value {
            font-weight: 700;
          }
        }
      }
    }
  `;

  return (
    <div css={traitchecker}>
      <div className="header">
        <h1>Trait Checker</h1>
        <div>
          <input
            type={'text'}
            id="search-box"
            name="zombie-id"
            placeholder="Zombie ID"
            onChange={handleChange}
          />
          <button id="search" onClick={loadNFZTraits}>
            Search
          </button>
        </div>
      </div>
      {finalMetadata && (
        <div className="zombie-data">
          <div className="zombie-img">
            <img src={finalMetadata?.image} alt="NFZ Image" />
          </div>
          <div className="zombie-traits">
            {finalMetadata?.attributes &&
              finalMetadata?.attributes.map((item, index) => {
                return (
                  <div className="trait" key={index}>
                    <div className="trait-type">{item.trait_type}</div>
                    <div className="value">{item.value}</div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default TraitChecker;
