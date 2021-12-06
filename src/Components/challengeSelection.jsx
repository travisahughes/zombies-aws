import React from 'react';
import checkbox from '../assets/game/check.png';
import '../../src/pages/Challenge/Game.css';
import theif from '../assets/game/theif.png';
const ChallengeSelection = (props) => {
  const { divClassName, headerText, subHeaderText, defaultImage } = props.box;
  const { final, alone } = props;
  const { image } = props.box.zombie;

  const cn = alone ? `${divClassName} ${alone}` : divClassName;

  return (
    <div
      className={cn}
      onClick={props.onClick ? () => props.onClick(props.box) : null}
    >
      <div className="preview-section-image">
        <img
          src={image || require(`../assets/game/${defaultImage}.png`).default}
        />
        {/* <img className="checkbox" src={checkbox} alt="" /> */}
      </div>
      <div className="preview-section-text">
        <div className="preview-section-text-header">
          {!final ? headerText : ''}
        </div>
        <div className="preview-section-text-sub-header">
          {!final ? subHeaderText : ''}
        </div>
      </div>
    </div>
  );
};

export default ChallengeSelection;
