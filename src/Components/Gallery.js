/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import zombie1 from '../assets/gallery/zombie1.png'
import zombie2 from '../assets/gallery/zombie2.png'
import zombie3 from '../assets/gallery/zombie3.png'
import zombie4 from '../assets/gallery/zombie4.png'
import zombie5 from '../assets/gallery/zombie5.png'


let Gallery = props => {
    const gallery = css`
        background-color: #151515;
        color: white;
        padding: 30px 190px;
        @media (max-width: 960px) {
            padding: 30px 80px 20px 80px;
        }
        @media (max-width: 640px) {
            padding: 30px 40px 20px 40px;
        }

        p {
            font-weight: 700;
            font-size: 24px;
        }

    `

    const imageRow = css`
        clear: both;
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(225px, 1fr));
        
        .zombie {
            padding: 10px;
            
            img {
                width: 225px;
            }
        }
    `

    return (
        <div css={gallery}>
            <div css={imageRow}>
                <div className="zombie">
                    <img className="zombiex" src={zombie1} alt="zombie!" />
                </div>
                <div className="zombie">
                    <img className="zombiex" src={zombie2} alt="zombie!" />
                </div>
                <div className="zombie">
                    <img className="zombiex" src={zombie3} alt="zombie!" />
                </div>
                <div className="zombie">
                    <img className="zombiex" src={zombie4} alt="zombie!" />
                </div>
                <div className="zombie">
                    <img className="zombixe" src={zombie5} alt="zombie!" />
                </div>
                
                
                
                
                
            </div>
       </div>
    );
}

export default Gallery;