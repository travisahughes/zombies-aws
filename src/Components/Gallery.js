/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import zombie1 from '../assets/gallery/zombie1.png';
import zombie2 from '../assets/gallery/zombie2.png';
import zombie3 from '../assets/gallery/zombie3.png';
import zombie4 from '../assets/gallery/zombie4.png';
import zombie5 from '../assets/gallery/zombie5.png';
import zombie6 from '../assets/gallery/zombie6.png';
import zombie7 from '../assets/gallery/zombie7.png';
import zombie8 from '../assets/gallery/zombie8.png';

let Gallery = (props) => {
  const gallery = css`
    background-color: #151515;
    color: white;
    padding: 30px 0;

    p {
      font-weight: 700;
      font-size: 24px;
    }

    @keyframes sliding {
      0% {
        transform: translateX(0);
      }

      100% {
        transform: translateX(calc(-240px * 8));
      }
    }
  `;

  const imageRow = css`
    width: 100%;
    overflow-x: hidden;

    #overflow {
      width: calc(225px * 8);
      display: flex;

      img {
        padding: 10px;
        width: 225px;
        animation: sliding 90s linear infinite;
      }
    }
  `;

  return (
    <div css={gallery}>
      <div css={imageRow}>
        <div id="overflow">
          <img className="zombie" src={zombie1} alt="zombie!" />
          <img className="zombie" src={zombie2} alt="zombie!" />
          <img className="zombie" src={zombie3} alt="zombie!" />
          <img className="zombie" src={zombie4} alt="zombie!" />
          <img className="zombie" src={zombie5} alt="zombie!" />
          <img className="zombie" src={zombie6} alt="zombie!" />
          <img className="zombie" src={zombie7} alt="zombie!" />
          <img className="zombie" src={zombie8} alt="zombie!" />

          <img className="zombie" src={zombie1} alt="zombie!" />
          <img className="zombie" src={zombie2} alt="zombie!" />
          <img className="zombie" src={zombie3} alt="zombie!" />
          <img className="zombie" src={zombie4} alt="zombie!" />
          <img className="zombie" src={zombie5} alt="zombie!" />
          <img className="zombie" src={zombie6} alt="zombie!" />
          <img className="zombie" src={zombie7} alt="zombie!" />
          <img className="zombie" src={zombie8} alt="zombie!" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
