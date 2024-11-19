import Menu from '../components/Menu'
import '../styles/common.css'
import { Main, Wrap } from '../styles/StyledComponent'
import Footer from '../components/Footer'
import TableList from '../components/TableList'

function Announce() {
   return (
      <Wrap>
         <Menu />
         <Main>
            <TableList />
         </Main>
         <Footer />
      </Wrap>
   )
}

export default Announce
