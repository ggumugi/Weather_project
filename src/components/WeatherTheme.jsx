import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather, fetchWeather_now, setTheme } from '../features/weatherSlice'
import './css/WeatherTheme.css'

export function WeatherTheme() {
   const [searchParams] = useSearchParams()
   const query = searchParams.get('query')
   const [theme2, setTheme2] = useState('')
   const [theme3, setTheme3] = useState('')
   const dispatch = useDispatch()
   const { weather, loading, error, weather_now, loading_now, error_now, theme } = useSelector((state) => state.weather)
   const tod = new Date()

   useEffect(() => {
      dispatch(fetchWeather(query))
      dispatch(fetchWeather_now(query))
   }, [query, dispatch])

   useEffect(() => {
      // yyyy-mm-dd 형식으로 대입
      const today = new Date().toISOString().split('T')[0]
      if (weather === null) {
         return
      } else {
         for (var i = 0; i < weather.list.length; i++) {
            if (weather.list[i].dt_txt === `${today} 12:00:00`) {
               const weatherData = (code) => {
                  const num = Math.floor(code / 100)
                  if (num === 2 || num === 5) {
                     return '비'
                  } else if (num === 6) {
                     return '눈'
                  } else {
                     return '맑음'
                  }
               }
               // 다른 컴포넌트에서도 theme 값을 사용하기 위해 store에 업데이트
               dispatch(setTheme({ theme: weatherData(weather.list[i].weather[0].id) }))
               // 3시간 기준이라 +8은 24시간 후 -> 다음 날 테마
               var num2 = weather.list[i + 8].weather[0].id
               num2 = Math.floor(num2 / 100)
               if (num2 === 2 || num2 === 5) {
                  setTheme2('비')
               } else if (num2 === 6) {
                  setTheme2('눈')
               } else {
                  setTheme2('맑음')
               }
               // 3시간 기준이라 +16은 48시간 후 -> 이틀 뒤 테마
               var num3 = weather.list[i + 16].weather[0].id
               num3 = Math.floor(num3 / 100)
               if (num3 === 2 || num3 === 5) {
                  setTheme3('비')
               } else if (num3 === 6) {
                  setTheme3('눈')
               } else {
                  setTheme3('맑음')
               }
               break
            }
         }
      }
   }, [weather, dispatch])
   if (loading || loading_now) return <p>Loading...</p>
   if (error || error_now) return <p>Error : {error ? error : error_now}</p>

   return (
      <div>
         {weather && weather_now && (
            <div className="all">
               <p className="today">Today Theme : {theme}</p>
               <div className="card">
                  <div className="pic">
                     <img src={`https://openweathermap.org/img/wn/${weather_now.weather[0].icon}@4x.png`} alt="날씨그림" />
                  </div>
                  <div className="card_text">
                     <p className="card_title">현재 기온</p>
                     <p className="now">{Math.round(weather_now.main.temp)} ℃</p>
                     {/* 실제 최고, 최저기온이 아닌 실시간 중 최고, 최저 기온 인듯함 */}
                     <p className="most">
                        최고기온: {Math.round(weather_now.main.temp_max)}&nbsp; 최저기온: {Math.round(weather_now.main.temp_min)}
                     </p>
                     <p className="day">
                        {tod.getMonth() + 1} / {tod.getDate()}
                     </p>
                  </div>
               </div>
               <div className="tommorow">
                  <p>
                     {tod.getMonth() + 1} / {tod.getDate() + 1} Theme : {theme2}
                  </p>
                  <p>
                     {tod.getMonth() + 1} / {tod.getDate() + 2} Theme : {theme3}
                  </p>
               </div>
            </div>
         )}
      </div>
   )
}
