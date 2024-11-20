import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Theme from './pages/Theme'
import Price from './pages/Price'
import Map from './pages/Map'
import Announce from './pages/Announce'
import NotFound from './pages/NotFound'
import Choice from './pages/Choice'
import Login from './pages/Login'
import Weather from './pages/Weather'

function App() {
   return (
      <Routes>
         <Route path="/" element={<Choice />} />
         <Route path="/home" element={<Home />} />
         <Route path="/theme" element={<Theme />} />
         <Route path="/price" element={<Price />} />
         {/* <Route path="/map" element={<Map use="come" />} />
         <Route path="/weather" element={<Map use="weather" />} /> */}
         <Route path="/map" element={<Map />} />
         <Route path="/weather" element={<Weather />} />
         <Route path="/announce" element={<Announce />} />
         <Route path="/login" element={<Login />} />
         <Route path="/*" element={<NotFound />} />
      </Routes>
   )
}

export default App
