import Menu from '../components/Menu'
import '../styles/common.css'
import { Main, Wrap } from '../styles/StyledComponent'
import Footer from '../components/Footer'

function Announce() {
   return (
      <Wrap>
         <Menu />
         <Main>
            <p style={{ marginTop: '150px' }}>announce</p>
         </Main>
         <Footer />
      </Wrap>
   )
}

export default Announce
