/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';
import caret from '../assets/icons/caret.png';

let FaqItem = (props) => {
  const faq = css`
    width: 100%;
    margin-bottom: 15px;

    .header {
      font-size: 18px;
      padding: 15px 15px;
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
      color: #e5e5e5;
      font-size: 14px;
      line-height: 24.5px;
      padding: 10px 15px;
    }

    .content.hide {
      display: none;
    }

    a {
      color: #50e6ff;
    }
  `;

  const { title, content } = props;
  const [toggleState, setToggleState] = useState(false);
  const [headerClass, setHeaderClassState] = useState('header');
  const [contentClass, setContentClassState] = useState('content hide');

  const toggleItem = (e) => {
    if (toggleState) {
      setHeaderClassState('header');
      setContentClassState('content hide');
    } else {
      setHeaderClassState('header open');
      setContentClassState('content');
    }

    setToggleState(!toggleState);
  };

  return (
    <div css={faq}>
      <div className={headerClass} onClick={toggleItem}>
        {title}
        <img src={caret} alt="caret" />
      </div>
      <div className={contentClass}>{content}</div>
    </div>
  );
};

export default FaqItem;
