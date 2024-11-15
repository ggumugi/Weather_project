import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from '../features/weatherSlice'

export function WeatherTheme() {
   const { city } = useParams()
   const [theme, setTheme] = useState('')
   const dispatch = useDispatch()
   const { weather, loading, error } = useSelector((state) => state.weather)

   useEffect(() => {
      const cityname = city.substring(5)
      dispatch(fetchWeather(cityname))
   }, [city, dispatch])

   useEffect(() => {
      // yyyy-mm-dd 형식으로 대입
      const today = new Date().toISOString().split('T')[0]
      if (weather === null) {
         return
      } else {
         for (var i = 0; i < weather.list.length; i++) {
            if (weather.list[i].dt_txt === `${today} 12:00:00`) {
               var num = weather.list[i].weather[0].id
               num = Math.floor(num / 100)
               if (num == 2 || num == 5) {
                  setTheme('비')
               } else if (num == 6) {
                  setTheme('눈')
               } else {
                  setTheme('맑음')
               }
            }
         }
      }
   }, [weather])
   if (loading) return <p>Loading...</p>
   if (error) return <p>Error : {error}</p>

   return (
      <div>
         {weather && (
            <div>
               <p className="today">Today Theme : {theme}</p>
               <div>
                  <div>
                     <img src={`https://openweathermap.org/img/wn/${weather.list}@4x.png`} alt="" />
                  </div>
               </div>
            </div>
         )}
      </div>
   )
}
