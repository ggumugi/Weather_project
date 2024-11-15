import Menu from '../components/Menu'
import '../styles/common.css'
import { Main, Wrap } from '../styles/StyledComponent'
import Footer from '../components/Footer'

function Theme() {
   return (
      <Wrap>
         <Menu />
         <Main>
            <p style={{ marginTop: '150px' }}>theme</p>
         </Main>
         <Footer />
      </Wrap>
   )
}

export default Theme
