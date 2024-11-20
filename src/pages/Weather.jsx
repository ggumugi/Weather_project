import Menu from '../components/Menu'
import '../styles/common.css'
import { Main, Wrap } from '../styles/StyledComponent'
import Footer from '../components/Footer'
import ComeMap from '../components/ComeMap'
import WeatherMap from '../components/WeatherMap'

function Weather() {
   return (
      <Wrap>
         <Menu />
         <Main>
            <WeatherMap />
         </Main>
         <Footer />
      </Wrap>
   )
}

export default Weather
