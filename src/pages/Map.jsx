import Menu from '../components/Menu'
import '../styles/common.css'
import { Main, Wrap } from '../styles/StyledComponent'
import Footer from '../components/Footer'
import ComeMap from '../components/ComeMap'

function Map() {
   return (
      <Wrap>
         <Menu />
         <Main>
            <ComeMap />
         </Main>
         <Footer />
      </Wrap>
   )
}

export default Map
