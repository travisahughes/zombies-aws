/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import React from 'react';
import checkbox from '../assets/game/check.png';
const UserNFZ = (props) => {
  const { metadata: md } = props.nfz;
  const { selectedIds } = props;
  const metadata = JSON.parse(md);

  const selected = selectedIds.includes(metadata.zombieId) ? 'selected' : '';
  console.log('selected', selected);
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
        onClick={props.onClick ? () => props.onClick(metadata, props.id) : ''}
        className={`nft-container ${
          metadata.attributes.find(
            (item) => item.trait_type === 'Group' && item.value === 'Genesis'
          )
            ? 'genesis'
            : ''
        } ${selected}`}
      >
        <img src={metadata.image} className="nft-img" />
        <img className={`${selected} checkbox`} src={checkbox} alt="" />
        <div className="genesis-text">Genesis</div>
      </div>
    </div>
  );
};
export default UserNFZ;
