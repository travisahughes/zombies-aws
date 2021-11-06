/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { css } from '@emotion/react';

import Nav from '../../Components/Nav';
import Welcome from './Welcome';
import Game from './Game';
import Results from './Results';

function Challenge() {
  const [activePage, setActivePage] = useState('welcome');

  const containerCss = css`
    margin: 20px;
  `;

  const challengeCss = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin: 30px auto 20px auto;
    padding: 0 20px;
    max-width: 1310px;
    height: calc(100vh - 200px);
  `;

  let activePageComponent;
  switch (activePage) {
    case 'game':
      activePageComponent = <Game setActivePage={setActivePage} />;
      break;
    case 'results':
      activePageComponent = <Results setActivePage={setActivePage} />;
      break;
    default:
      activePageComponent = <Welcome setActivePage={setActivePage} />;
  }

  return (
    <div css={containerCss}>
      <Nav />
      <div css={challengeCss} className="Challenge">
        <div className="body">{activePageComponent}</div>
      </div>
    </div>
  );
}

export default Challenge;
