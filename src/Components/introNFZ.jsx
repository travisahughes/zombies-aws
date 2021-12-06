import react from 'react';
import wildcardImage from '../assets/game/theif.png';

const IntroNFZ = (props) => {
  const { divClassName, headerText, subHeaderText, defaultImage } = props.box;

  const cn = `${divClassName} alone`;
  console.log(cn);
  console.log(defaultImage);
  return (
    <div className="shadow preview-section alone">
      <img src={wildcardImage} alt="" />
      <div className="preview-section-text">
        <div className="preview-section-text-header">The Shadow</div>
        <div className="preview-section-text-sub-header">
          (Charcoal Background)
        </div>
      </div>
    </div>
  );
};

export default IntroNFZ;
