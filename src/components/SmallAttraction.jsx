import { useSelector } from 'react-redux'
import './css/SmallAttraction.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export function SmallAttraction1() {
   const { theme } = useSelector((state) => state.weather)
   if (theme === '맑음') {
      return (
         <div className="sunny">
            <h2 className="attr">다양하고 즐거운 어트랙션</h2>
            <ul className="attr_list">
               <li>스카이 트램펄린</li>
               <li>선샤인 윙즈</li>
               <li>클라우드 드리프트</li>
            </ul>
            <h2 className="fest">퍼레이드</h2>
            <ul className="fest_list">
               <li>선샤인 퍼레이드</li>
            </ul>
         </div>
      )
   } else if (theme === '비') {
      return (
         <div className="rainy">
            <h2 className="attr">다양하고 즐거운 어트랙션</h2>
            <ul className="attr_list">
               <li>워터 슬라이드</li>
               <li>워터 바이킹</li>
               <li>워터 열차</li>
            </ul>
            <h2 className="fest">퍼레이드</h2>
            <ul className="fest_list">
               <li>워터 퍼레이드</li>
            </ul>
         </div>
      )
   } else {
      return (
         <div className="snow">
            <h2 className="attr">다양하고 즐거운 어트랙션</h2>
            <ul className="attr_list">
               <li>아이스 슬라이드</li>
               <li>눈꽃 회전목마</li>
               <li>윈터 스케이트</li>
            </ul>
            <h2 className="fest">퍼레이드</h2>
            <ul className="fest_list">
               <li>윈터 원더 페스티벌</li>
            </ul>
         </div>
      )
   }
}
export function SmallAttraction2() {
   const { theme } = useSelector((state) => state.weather)
   if (theme === '맑음') {
      return (
         <div className="small_slider">
            <Swiper
               autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
               }}
               direction={'vertical'}
               pagination={{
                  clickable: true,
               }}
               modules={[Pagination, Autoplay]}
               className="mySwiper"
            >
               <SwiperSlide>
                  <img src="./images/sunny_attr1.png" alt="맑음_어트랙션1" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="./images/sunny_attr2.png" alt="맑음_어트랙션2" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="./images/sunny_attr3.png" alt="맑음_어트랙션3" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="./images/sunny_fest.png" alt="맑음_페스티벌1" />
               </SwiperSlide>
            </Swiper>
         </div>
      )
   } else if (theme === '비') {
      return (
         <div className="small_slider">
            <Swiper
               autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
               }}
               direction={'vertical'}
               pagination={{
                  clickable: true,
               }}
               modules={[Pagination, Autoplay]}
               className="mySwiper"
            >
               <SwiperSlide>
                  <img src="./images/rainy_attr1.png" alt="비_어트랙션1" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="./images/rainy_attr2.png" alt="비_어트랙션2" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="./images/rainy_attr3.png" alt="비_어트랙션3" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="./images/rainy_fest.png" alt="비_페스티벌1" />
               </SwiperSlide>
            </Swiper>
         </div>
      )
   } else {
      return (
         <div className="small_slider">
            <Swiper
               autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
               }}
               direction={'vertical'}
               pagination={{
                  clickable: true,
               }}
               modules={[Pagination, Autoplay]}
               className="mySwiper"
            >
               <SwiperSlide>
                  <img src="./images/snow_attr1.png" alt="눈_어트랙션1" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="./images/snow_attr2.png" alt="눈_어트랙션2" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="./images/snow_attr3.png" alt="눈_어트랙션3" />
               </SwiperSlide>
               <SwiperSlide>
                  <img src="./images/snow_fest.png" alt="눈_페스티벌1" />
               </SwiperSlide>
            </Swiper>
         </div>
      )
   }
}
