/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import { css } from '@emotion/react'
import caret from '../assets/icons/caret.png'

let FaqItem = props => {
    const faq = css`
        width: 100%;
        margin-bottom: 10px;

        .header {
            font-size: 18px;
            padding: 10px 10px;
            background-color: #151515;
            cursor: pointer;

            img {
                float: right;
                width: 21px;
                padding-top: 3px;
                transition: rotate 0.5s ease-in;
            }
        }

        .header.open img {
            transform: rotate(180deg);
            transition: rotate 0.5s ease-in;
        }

        .content {
            background-color: #151515;
            font-size: 14px;
            padding: 10px 10px;
        }

        .content.hide {
            display: none;
        }
    `

    const { title, content } = props
    const [toggleState, setToggleState] = useState(false)
    const [headerClass, setHeaderClassState] = useState('header')
    const [contentClass, setContentClassState] = useState('content hide')

    const toggleItem = (e) => {
        if (toggleState) {
            setHeaderClassState('header')
            setContentClassState('content hide')
        } else {
            setHeaderClassState('header open')
            setContentClassState('content')
        }

        setToggleState(!toggleState)
    }

    return (
        <div css={faq}>
            <div className={headerClass} onClick={toggleItem}>
                { title }
                <img src={caret} alt="caret" />
            </div>
            <div className={contentClass}>
                { content }
            </div>
        </div>
    );
}

export default FaqItem;
