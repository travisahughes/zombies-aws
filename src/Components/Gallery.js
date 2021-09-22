/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import zombie1 from '../assets/zombie1.png'
import zombie2 from '../assets/zombie2.png'
import zombie3 from '../assets/zombie3.png'
import zombie4 from '../assets/zombie4.png'
import zombie5 from '../assets/zombie5.png'


let Gallery = props => {
    const gallery = css`
        background-color: #151515;
        color: white;
        padding: 40px 190px;

        p {
            font-weight: 700;
            font-size: 24px;
        }

    `

    const imageRow = css`
        clear: both;
        display: flex;
        justify-content: space-between;
        
        
    `

    return (
        <div css={gallery}>
            <div css={imageRow}>
                <img className="zombie" src={zombie1} alt="zombie!" />
                <img className="zombie" src={zombie2} alt="zombie!" />
                <img className="zombie" src={zombie3} alt="zombie!" />
                <img className="zombie" src={zombie4} alt="zombie!" />
                <img className="zombie" src={zombie5} alt="zombie!" />
            </div>
       </div>
    );
}

export default Gallery;