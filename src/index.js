/** @jsxImportSource @emotion/react */

import React from 'react';
import ReactDOM from 'react-dom';
import { css } from '@emotion/react'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Thing from './pages/Thing';
import Hero from './Components/Hero'
import headerimg from './assets/bg.jpg'
import spacemono from './assets/fonts/SpaceMono-Regular.ttf'
import overpassmono from './assets/fonts/OverpassMono-Regular.ttf'
import teko from './assets/fonts/Teko-Regular.ttf'

const herobg = css`
  width: 100%;
  background-image: url("${headerimg}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const appStyles = css`
  @font-face {
    font-family: spacemono;
    src: url(${spacemono});
  }

  @font-face {
    font-family: overpassmono;
    src: url(${overpassmono});
  }

  @font-face {
    font-family: teko;
    src: url(${teko});
  }

  font-family: overpassmono;
  background-color: #000000;
  color: #FFFFFF;

  .common-padding {
    margin: 60px auto 20px auto;
    padding: 0 20px;
    max-width: 1310px;

    @media (max-width: 960px) {
        max-width: 940px;
        padding: 0 20px;
        margin: 60px auto 20px auto;
    }
    @media (max-width: 640px) {
      max-width: 620px;
      padding: 0 10px;
      margin: 60px auto 20px auto;
    }
 }
`

const Routing = () => {
  return (
    <Router >
      <div css={appStyles}>
        <div className='content-section' css={herobg} >
          <Hero />
        </div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/thing" component={Thing} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
