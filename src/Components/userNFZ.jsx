/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import checkbox from '../assets/game/check.png';
const UserNFZ = (props) => {
  const { metadata: md } = props.nfz;
  const { selectedIds } = props;
  const metadata = JSON.parse(md);
  const [finalMetadata, setFinalMetadata] = useState(metadata);

  useEffect(() => {
    const { token_id } = props.nfz;
    //console.log('use effect token id', token_id);
    console.log('getting token id', token_id);
    const token_uri = `https://bnpoulp3kk.execute-api.us-west-2.amazonaws.com/main/metadata/${token_id}`;
    axios.get(token_uri).then((response) => {
      console.log('Manually setting NFZ metadata', response.data);
      console.log('token id', token_id);
      setFinalMetadata(response.data);
    });
  }, [md]);

  // if (!finalMetadata && props.nfz?.token_id) {
  //   const { token_id } = props.nfz;
  //   //const token_uri = `https://api.nicefunzombies.io/metadata/${token_id}`;
  //   const token_uri = `https://bnpoulp3kk.execute-api.us-west-2.amazonaws.com/main/metadata/${token_id}`;
  //   axios.get(token_uri).then((response) => {
  //     console.log('Manually setting NFZ metadata', response.data);
  //     console.log('token id', token_id);
  //     setFinalMetadata(response.data);
  //   });
  // }

  const selected = selectedIds.includes(finalMetadata?.zombieId)
    ? 'selected'
    : '';

  const nfzCss = css`
    .selected {
      opacity: 0.5;
    }
    .checkbox {
      opacity: 0;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%);
    }
    .selected.checkbox {
      opacity: 1;
    }

    .located {
      display: none;
    }
    .zombie-id {
      text-align: center;
      margin: 0;
      font-size: 14px;
      font-weight: bold;
      opacity: 0.8;
    }
  `;

  const location = finalMetadata?.attributes.find(
    (item) => item.trait_type === 'Location'
  )?.value;

  return (
    <div css={nfzCss}>
      <div
        onClick={() => {
          if (location) return;
          props.onClick ? props.onClick(finalMetadata, props.id) : '';
        }}
        className={`nft-container ${
          finalMetadata?.attributes.find(
            (item) => item.trait_type === 'Group' && item.value === 'Genesis'
          )
            ? 'genesis'
            : ''
        } ${selected}`}
      >
        <img src={finalMetadata?.image} className="nft-img" />
        <img className={`${selected} checkbox`} src={checkbox} alt="" />
        {location && <div className="located">In {location}</div>}
        <p className="zombie-id">
          {'#'}
          {props.nfz?.token_id}
        </p>
      </div>
    </div>
  );
};
export default UserNFZ;
