import Menu from '../components/Menu'
import '../styles/common.css'
import { Main, Wrap } from '../styles/StyledComponent'
import Footer from '../components/Footer'
import LoginUi from '../components/LoginUi'

function Login() {
   return (
      <Wrap>
         <Menu />
         <Main>
            <LoginUi />
         </Main>
         <Footer />
      </Wrap>
   )
}

export default Login
