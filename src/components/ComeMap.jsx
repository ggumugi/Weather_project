import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './css/ComeMap.css'

function ComeMap() {
   const { cityName } = useSelector((state) => state.weather)
   useEffect(() => {
      if (window.kakao) {
         const { kakao } = window
         const container = document.getElementById('map')

         if (cityName === 'incheon') {
            const options = {
               center: new kakao.maps.LatLng(37.47583, 126.61667),
               level: 3,
            }
            const map = new kakao.maps.Map(container, options)
         } else {
            const options = {
               center: new kakao.maps.LatLng(35.1795543, 129.0756416),
               level: 3,
            }
            const map = new kakao.maps.Map(container, options)
         }
      }
   }, [])
   return (
      <div className="map_main">
         <div className="map_map" id="map" style={{ width: '600px', height: '500px' }}></div>
      </div>
   )
}

export default ComeMap
