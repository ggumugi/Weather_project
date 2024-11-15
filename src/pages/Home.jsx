import Menu from '../components/Menu'
import '../styles/common.css'
import { Main, Wrap } from '../styles/StyledComponent'
import BannerSlider from '../components/slider/BannerSlider'
import Grid from '@mui/material/Grid2'
import Footer from '../components/Footer'
import { WeatherTheme } from '../components/WeatherTheme'

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
                  <p>테마별탈것</p>
               </Grid>
               <Grid size={4}>탈것사진</Grid>
            </Grid>
         </Main>
         <Footer />
      </Wrap>
   )
}

export default Home
