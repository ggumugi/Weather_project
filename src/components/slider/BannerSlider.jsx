// 영화 포스터 슬라이더

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import '../css/BannerSlider.css'

// import required modules
import { Pagination, Autoplay } from 'swiper/modules'

function BannerSlider() {
   return (
      <>
         <Swiper
            autoplay={{
               delay: 5000,
               disableOnInteraction: false,
            }}
            pagination={{
               clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
         >
            <SwiperSlide>
               <img src="./images/banner5.png" alt="배너5" />
            </SwiperSlide>
            <SwiperSlide>
               <img src="./images/banner2.png" alt="배너2" />
            </SwiperSlide>
            <SwiperSlide>
               <img src="./images/banner3.png" alt="배너3" />
            </SwiperSlide>
            <SwiperSlide>
               <img src="./images/banner4.png" alt="배너4" />
            </SwiperSlide>
            <SwiperSlide>
               <img src="./images/banner1.png" alt="배너1" />
            </SwiperSlide>
            <SwiperSlide>
               <img src="./images/banner6.png" alt="배너6" />
            </SwiperSlide>
         </Swiper>
      </>
   )
}

export default BannerSlider
