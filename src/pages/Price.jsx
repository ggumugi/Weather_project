import Menu from '../components/Menu'
import '../styles/common.css'
import { Main, Wrap } from '../styles/StyledComponent'
import Footer from '../components/Footer'
import PriceDetail from '../components/PriceDetail'
function Price() {
   return (
      <Wrap>
         <Menu />
         <Main>
            <PriceDetail />
         </Main>
         <Footer />
      </Wrap>
   )
}

export default Price
