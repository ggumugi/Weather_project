import Menu from '../components/Menu'
import '../styles/common.css'
import { Main, Wrap } from '../styles/StyledComponent'
import Footer from '../components/Footer'
import ThemeText from '../components/ThemeText'

function Theme({}) {
   return (
      <Wrap>
         <Menu />
         <Main $width="100%">
            <ThemeText />
         </Main>
         <Footer />
      </Wrap>
   )
}

export default Theme
