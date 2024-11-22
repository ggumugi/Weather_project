import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchWeather_now } from '../features/weatherSlice'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import './css/ComeMap.css'

function WeatherMap() {
   const { cityName, weather_now, loading_now, error_now } = useSelector((state) => state.weather)
   const [search, setSearch] = useState('')
   const dispatch = useDispatch()
   const region = cityName === 'incheon' ? '인천' : '부산'
   const [searchCity, setSearchCity] = useState(region)

   function createData(name, ename, lati, long) {
      return { name, ename, lati, long }
   }

   const cities = [
      createData('서울', 'seoul', 37.5665, 126.978),
      createData('부산', 'busan', 35.1796, 129.0756),
      createData('인천', 'incheon', 37.4563, 126.7052),
      createData('대구', 'daegu', 35.8722, 128.6014),
      createData('대전', 'daejeon', 36.3504, 127.3845),
      createData('광주', 'gwangju', 35.1595, 126.8526),
      createData('수원', 'suwon', 37.2636, 127.0286),
      createData('울산', 'ulsan', 35.5384, 129.3114),
      createData('창원', 'changwon', 35.2286, 128.6811),
      createData('성남', 'seongnam', 37.42, 127.1265),
      createData('고양', 'goyang', 37.6584, 126.832),
      createData('용인', 'yongin', 37.2411, 127.1776),
      createData('청주', 'cheongju', 36.6424, 127.489),
      createData('안산', 'ansan', 37.3219, 126.8309),
      createData('전주', 'jeonju', 35.8242, 127.148),
      createData('천안', 'cheonan', 36.8151, 127.1139),
      createData('남양주', 'namyangju', 37.6367, 127.2165),
      createData('안양', 'anyang', 37.3943, 126.9568),
      createData('김해', 'gimhae', 35.2285, 128.889),
      createData('포항', 'pohang', 36.019, 129.3435),
      createData('평택', 'pyeongtaek', 36.9922, 127.1129),
      createData('의정부', 'uijeongbu', 37.7381, 127.0337),
   ]

   const onChange = useCallback((e) => {
      setSearch(e.target.value)
   }, [])
   const onClick = useCallback(() => {
      setSearchCity(search)
   }, [search])

   useEffect(() => {
      if (window.kakao) {
         const { kakao } = window
         const container = document.getElementById('map')
         const dosi = cities.filter((city) => city.name === searchCity)
         if (!dosi[0]) {
            alert('해당 도시를 찾을 수 없습니다.')
            return
         }

         dispatch(fetchWeather_now(dosi[0].ename))

         // 지도 옵션 및 위치 설정
         try {
            const options = {
               center: new kakao.maps.LatLng(dosi[0].lati, dosi[0].long),
               level: 3,
            }
            const markerPosition = new kakao.maps.LatLng(dosi[0].lati, dosi[0].long)

            // 지도 생성
            const map = new kakao.maps.Map(container, options)

            // 마커 생성 및 지도에 추가
            const marker = new kakao.maps.Marker({
               position: markerPosition,
            })
            marker.setMap(map)
         } catch (e) {
            alert('도시를 찾을 수 없습니다.')
         }
      }
   }, [searchCity, dispatch])
   return (
      <div className="map_main_1">
         <div className="map_search">
            <TextField
               id="outlined-basic"
               label="시 검색"
               variant="outlined"
               sx={{
                  backgroundColor: 'white',
               }}
               value={search}
               onChange={onChange}
            />
            <Button
               variant="outlined"
               sx={{
                  width: '80px',
                  height: '56px',
                  backgroundColor: 'white',
               }}
               onClick={onClick}
            >
               검색
            </Button>
         </div>

         <div className="map_map_1" id="map" style={{ width: '800px', height: '400px' }}></div>

         {error_now === null ? (
            <div className="map_text_1">
               <h1>현재 기온 : {weather_now.main.temp}℃</h1>
               <h1>상태 : {weather_now.weather[0].description}</h1>
               <h1>풍속 : {weather_now.wind.speed} m/s</h1>
            </div>
         ) : (
            <div className="map_text_1">
               <h1>현재 기온 : 정보 없음</h1>
               <h1>상태 : 정보 없음</h1>
               <h1>풍속 : 정보 없음</h1>
            </div>
         )}
      </div>
   )
}

export default WeatherMap
