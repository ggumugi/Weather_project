import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchWeatherData, fetchCurrentWeather } from '../api/weatherApi'

// 날씨 예보 데이터 가져오기
export const fetchWeather = createAsyncThunk('weather/fetchWeather', async (city = 'incheon') => {
   const data = await fetchWeatherData(city)
   return data
})

// 현재 날씨 데이터 가져오기
export const fetchWeather_now = createAsyncThunk('weather/fetchWeather_now', async (city = 'incheon') => {
   const data = await fetchCurrentWeather(city)
   return data
})

// 날씨 슬라이스
const weatherSlice = createSlice({
   name: 'weather',
   initialState: {
      weather: null,
      loading: false,
      error: null,
      weather_now: null,
      loading_now: false,
      error_now: null,
      theme: '',
      cityName: '',
   },
   reducers: {
      setTheme: (state, action) => {
         state.theme = action.payload
      },
      setCityName: (state, action) => {
         state.cityName = action.payload
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchWeather.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchWeather.fulfilled, (state, action) => {
            state.weather = action.payload
            state.loading = false
         })
         .addCase(fetchWeather.rejected, (state, action) => {
            state.error = action.error.message
            state.loading = false
         })
         .addCase(fetchWeather_now.pending, (state) => {
            state.loading_now = true
            state.error_now = null
         })
         .addCase(fetchWeather_now.fulfilled, (state, action) => {
            state.weather_now = action.payload
            state.loading_now = false
         })
         .addCase(fetchWeather_now.rejected, (state, action) => {
            state.error_now = action.error.message
            state.loading_now = false
         })
   },
})

export const { setTheme, setCityName } = weatherSlice.actions
export default weatherSlice.reducer
