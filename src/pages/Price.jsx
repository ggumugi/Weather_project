import Menu from '../components/Menu'
import '../styles/common.css'
import { Main, Wrap } from '../styles/StyledComponent'
import Footer from '../components/Footer'
import ThemeText from '../components/ThemeText'

function Price() {
   return (
      <Wrap>
         <Menu />
         <Main>
            <p style={{ marginTop: '150px' }}>price</p>
         </Main>
         <Footer />
      </Wrap>
   )
}

export default Price
