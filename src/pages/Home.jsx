import Menu from '../components/Menu'
import '../styles/common.css'
import { Main, Wrap } from '../styles/StyledComponent'
import BannerSlider from '../components/slider/BannerSlider'
import Grid from '@mui/material/Grid2'
import Footer from '../components/Footer'
import { WeatherTheme } from '../components/WeatherTheme'
import { SmallAttraction1, SmallAttraction2 } from '../components/SmallAttraction'

function Home() {
   return (
      <Wrap>
         <Menu />
         <Main>
            <BannerSlider />
            <Grid container spacing={3}>
               <Grid size={4}>
                  <WeatherTheme />
               </Grid>
               <Grid size={4}>
                  <SmallAttraction1 />
               </Grid>
               <Grid size={4}>
                  <SmallAttraction2 />
               </Grid>
            </Grid>
         </Main>
         <Footer />
      </Wrap>
   )
}

export default Home
