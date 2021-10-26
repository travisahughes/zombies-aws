/** @jsxImportSource @emotion/react */

import MintLink from './Components/MintLink'
import Info from './Components/Info'
import Gallery from './Components/Gallery'
import Mission from './Components/Mission'
import Roadmap from './Components/Roadmap'
import Team from './Components/Team'
import HowTo from './Components/HowTo'
import Faq from './Components/Faq'
import Footer from './Components/Footer'

function App() {
  return (
    <div  className="Home">
      <div className="body">
          <MintLink />
          <Info />
          <Gallery />
          <Mission />
          <Roadmap />
          <Team />
          <HowTo />
          <Faq />
          <Footer />
      </div>
    </div>
  );
}

export default App;
