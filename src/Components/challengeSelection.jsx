import React from 'react';
import checkbox from '../assets/game/check.png';
import '../../src/pages/Challenge/Game.css';
import theif from '../assets/game/theif.png';
const ChallengeSelection = (props) => {
  const { divClassName, headerText, subHeaderText, defaultImage } = props.box;
  const { final } = props;
  const { image } = props.box.zombie;
  const x = 'theif';
  return (
    <div className={divClassName} onClick={() => props.onClick(props.box)}>
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
