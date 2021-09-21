/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import headerimg from './assets/bg.jpg'
import Info from './Components/Info'
import Mission from './Components/Mission'
import Roadmap from './Components/Roadmap'
import Hero from './Components/Hero'

// Update with the contract address logged out to the CLI when it was deployed 
const greeterAddress = "your-contract-address"

function App() {
  const appStyles = css`
    background-color: #000000;
    color: #FFFFFF;
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
          <Info />
        </div>
        <div className='content-section'>
          <Mission />
        </div>
        <div className='content-section'>
          Roadmap
        </div>
        <div className='content-section'>
          Team bios
        </div>
        <div className='content-section'>
          FAQ
        </div>
        <div className='content-section'>
          Social Links
        </div>
      </div>
    </div>
  );
}

export default App;
