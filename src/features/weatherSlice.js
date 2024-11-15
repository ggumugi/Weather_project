import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// 날씨 데이터를 비동기적으로 가져오는 async thunk
export const fetchWeather = createAsyncThunk('weather/fetchWeather', async (city = 'incheon') => {
   // api를 받아오는 별도의 파일 없이 slice 파일에서 간단하게 가져오기
   const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=bd90d59ccfa381163f41fd531da28aac&units=metric&lang=kr`)
   return response.data
})

export const fetchWeather_now = createAsyncThunk('weather/fetchWeather_now', async (city = 'incheon') => {
   // api를 받아오는 별도의 파일 없이 slice 파일에서 간단하게 가져오기
   const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bd90d59ccfa381163f41fd531da28aac&units=metric&lang=kr`)
   return response.data
})

// 슬라이스 생성
const weatherSlice = createSlice({
   name: 'weather',
   initialState: {
      weather: null,
      loading: false,
      error: null,
      weather_now: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchWeather.pending, (state) => {
            state.loading = true
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
            state.loading = true
         })
         .addCase(fetchWeather_now.fulfilled, (state, action) => {
            state.weather_now = action.payload
            state.loading = false
         })
         .addCase(fetchWeather_now.rejected, (state, action) => {
            state.error = action.error.message
            state.loading = false
         })
   },
})

export default weatherSlice.reducer
