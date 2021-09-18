/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'


let Info = props => {
    const info = css`
        background-color: #282c34;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        padding: 20px 200px;

        p {
            font-weight: 700;
            font-size: 24px;
        }
    `

    return (
        <div css={info}>
            <p>
                Enter the universe of Nice Fun Zombies<br />
                [LOGO]<br />
                An Undying NFT Art Project & Community
            </p>
       </div>
    );
}

export default Info;