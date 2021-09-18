/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Header from './Components/Header'
import Mint from './Components/Mint'
import Roadmap from './Components/Roadmap'
import Info from './Components/Info'

// Update with the contract address logged out to the CLI when it was deployed 
const greeterAddress = "your-contract-address"

function App() {
  const appStyles = css`
    background-color: #000000;
    color: #FFFFFF;
  `

  return (
    <div css={appStyles} className="App">
      <Header />
      <div className="body">
        <div className='content-section'>
          <Info />
        </div>
        <div className='content-section'>
          <Mint />
        </div>
        <div className='content-section'>
          <Roadmap />
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
