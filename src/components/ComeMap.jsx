import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './css/ComeMap.css'

function ComeMap() {
   const { cityName } = useSelector((state) => state.weather)

   useEffect(() => {
      if (window.kakao) {
         const { kakao } = window
         const container = document.getElementById('map')

         // 지도 옵션 및 위치 설정
         let options, markerPosition
         if (cityName === 'incheon') {
            options = {
               center: new kakao.maps.LatLng(37.47583, 126.61667),
               level: 3,
            }
            markerPosition = new kakao.maps.LatLng(37.47583, 126.61667)
         } else {
            options = {
               center: new kakao.maps.LatLng(35.1795543, 129.0756416),
               level: 3,
            }
            markerPosition = new kakao.maps.LatLng(35.1795543, 129.0756416)
         }

         // 지도 생성
         const map = new kakao.maps.Map(container, options)

         // 마커 생성 및 지도에 추가
         const marker = new kakao.maps.Marker({
            position: markerPosition,
         })
         marker.setMap(map)
      }
   }, [cityName]) // cityName이 변경될 때마다 useEffect 실행

   return (
      <div className="map_main">
         <div className="map_map" id="map" style={{ width: '800px', height: '400px' }}></div>
         {cityName === 'incheon' ? (
            <div className="map_text">
               <p className="map_text_addr map_h">주소 : 인천 어쩌구 어디로 111</p>
               <p className="map_text_sub map_h">대중교통</p>
               <ul>
                  <li>인천 1호선, 2호선 웨더월드역 2번 출구 도보 5분</li>
                  <li>
                     웨더대교 정류장 하차 도보 7분
                     <br /> - 25번, 37번, 600번, 1004번, 7024B번
                  </li>
               </ul>
            </div>
         ) : (
            <div className="map_text">
               <p className="map_text_addr map_h">주소 : 부산 저쩌구 저기로 111</p>
               <p className="map_text_sub map_h">대중교통</p>
               <ul>
                  <li>부산 1호선, 부산 2호선 테마파크역 7번 출구 도보 8분</li>
                  <li>
                     웨더 해수욕장 정류장 하차 도보 10분
                     <br /> - 45번, 66번, 81번, 101번, 134번
                  </li>
               </ul>
            </div>
         )}
      </div>
   )
}

export default ComeMap
