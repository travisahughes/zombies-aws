/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import React, { useState } from 'react';
import axios from 'axios';
import checkbox from '../assets/game/check.png';
const UserNFZ = (props) => {
  const { metadata: md } = props.nfz;
  const { selectedIds } = props;
  const metadata = JSON.parse(md);

  const [finalMetadata, setFinalMetadata] = useState(metadata);

  if (!finalMetadata && props.nfz?.token_uri) {
    axios.get(props.nfz?.token_uri).then((response) => {
      console.log('Manually setting NFZ metadata', response.data);
      setFinalMetadata(response.data);
    });
  }

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
  `;
  return (
    <div css={nfzCss}>
      <div
        onClick={
          props.onClick ? () => props.onClick(finalMetadata, props.id) : ''
        }
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
        <div className="genesis-text">Genesis</div>
      </div>
    </div>
  );
};
export default UserNFZ;
