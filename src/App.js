/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

import Hero from './Components/Hero';
import ReactModal from 'react-modal';
import MintLink from './Components/MintLink';
import Info from './Components/Info';
import Gallery from './Components/Gallery';
import Mission from './Components/Mission';
import Roadmap from './Components/Roadmap';
import Team from './Components/Team';
import HowTo from './Components/HowTo';
import Faq from './Components/Faq';
import Footer from './Components/Footer';

import headerimg from './assets/bg.jpg';

// Update with the contract address logged out to the CLI when it was deployed
// const greeterAddress = "your-contract-address"
ReactModal.setAppElement('#root');

function App() {
  const herobg = css`
    width: 100%;
    background-image: url('${headerimg}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  `;

  return (
    <div className="App">
      <div className="body">
        <div className="content-section" css={herobg}>
          <Hero />
        </div>
        <MintLink />
        <Info />
        <Gallery />
        <Roadmap />
        <Team />
        <Mission />
        <HowTo />
        <Faq />
        <Footer />
      </div>
    </div>
  );
}

export default App;
