import axios from 'axios'

const BASE_URL = 'https://api.openweathermap.org/data/2.5/'
const API_KEY = 'bd90d59ccfa381163f41fd531da28aac'

// 5일 3시간 간격 예보 데이터
export const fetchWeatherData = async (city = 'incheon') => {
   const response = await axios.get(`${BASE_URL}forecast`, {
      params: {
         q: city,
         appid: API_KEY,
         units: 'metric', // 섭씨 온도
         lang: 'kr', // 한국어
      },
   })
   return response.data
}

// 현재 날씨 데이터
export const fetchCurrentWeather = async (city = 'incheon') => {
   const response = await axios.get(`${BASE_URL}weather`, {
      params: {
         q: city,
         appid: API_KEY,
         units: 'metric', // 섭씨 온도
         lang: 'kr', // 한국어
      },
   })
   return response.data
}
