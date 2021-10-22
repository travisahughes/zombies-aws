/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import spacemono from './assets/fonts/SpaceMono-Regular.ttf'
import overpassmono from './assets/fonts/OverpassMono-Regular.ttf'
import teko from './assets/fonts/Teko-Regular.ttf'
import headerimg from './assets/bg.jpg'
import Hero from './Components/Hero'
import MintLink from './Components/MintLink'
import Info from './Components/Info'
import Gallery from './Components/Gallery'
import Mission from './Components/Mission'
import Roadmap from './Components/Roadmap'
import Team from './Components/Team'
import HowTo from './Components/HowTo'
import Faq from './Components/Faq'
import Footer from './Components/Footer'

// Update with the contract address logged out to the CLI when it was deployed 
const greeterAddress = "your-contract-address"

function App() {
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

  const herobg = css`
    width: 100%;
    background-image: url("${headerimg}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  `

  return (
    <div css={appStyles} className="App">
      <div className="body">
        <div className='content-section' css={herobg} >
          <Hero />
        </div>
        <div className='content-section'>
          <MintLink />
        </div>
        <div className='content-section'>
          <Info />
        </div>
        <div className='content-section'>
          <Gallery />
        </div>
        <div className='content-section'>
          <Mission />
        </div>
        <div className='content-section'>
          <Roadmap />
        </div>
        <div className='content-section'>
          <Team />
        </div>
        <div className='content-section'>
          <HowTo />
        </div>
        <div className='content-section'>
          <Faq />
        </div>
        <div className='content-section'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
