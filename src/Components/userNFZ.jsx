import React from 'react';
import checkbox from '../assets/game/check.png';
const UserNFZ = (props) => {
  const { metadata: md } = props.nfz;
  const metadata = JSON.parse(md);
  return (
    <div
      onClick={() => props.onClick(metadata, props.id)}
      className={`nft-container ${
        metadata.attributes.find(
          (item) => item.trait_type === 'Group' && item.value === 'Genesis'
        )
          ? 'genesis'
          : ''
      }`}
    >
      <img src={metadata.image} className="nft-img" />
      <img className="checkbox" src={checkbox} alt="" />
      <div className="genesis-text">Genesis</div>
    </div>
  );
};
export default UserNFZ;
