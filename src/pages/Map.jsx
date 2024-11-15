import Menu from '../components/Menu'
import '../styles/common.css'
import { Main, Wrap } from '../styles/StyledComponent'
import Footer from '../components/Footer'

function Map() {
   return (
      <Wrap>
         <Menu />
         <Main>
            <p style={{ marginTop: '150px' }}>map</p>
         </Main>
         <Footer />
      </Wrap>
   )
}

export default Map
