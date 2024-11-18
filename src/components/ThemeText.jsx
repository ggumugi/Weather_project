import './css/ThemeText.css'
import { useState, useCallback, useEffect } from 'react'

function ThemeText() {
   const [choice, setChoice] = useState('맑음')
   const onClick = useCallback((e) => {
      setChoice(e.target.innerText)
   }, [])
   if (choice === '맑음') {
      return (
         <div className="all_theme_sunny">
            <div className="tab_menu">
               <ul className="sidetab">
                  <li onClick={onClick} className={choice === '맑음' ? 'selected margm' : ''}>
                     맑음
                  </li>
                  <li onClick={onClick} className={choice === '비' ? 'selected bee' : ''}>
                     비
                  </li>
                  <li onClick={onClick} className={choice === '눈' ? 'selected noon' : ''}>
                     눈
                  </li>
               </ul>
            </div>
            <div className="theme_card_sunny">
               <div className="card_attr_sunny">
                  <img src="./images/sunny_attr1.png" alt="맑음_어트랙션1" />
                  <div className="card_text_sunny">
                     <h2>스카이 트램펄린 (Sky Trampoline)</h2>
                     <p>
                        고공 트램펄린에서 뛰어오르며 하늘 가까이 다가가는 스릴을 느낄 수 있는 어트랙션입니다. 뛰어오를 때마다 아래 펼쳐진 테마파크 전경을 감상할 수 있어, 하늘을 나는 듯한 자유로움과 시원함을 즐길 수 있습니다. 특히 맑은 날씨에는 푸른 하늘과 멀리 보이는 경치가 함께 어우러져, 탑승자에게
                        특별한 기분을 선사합니다.
                     </p>
                  </div>
               </div>
               <div className="card_attr_sunny">
                  <img src="./images/sunny_attr2.png" alt="맑음_어트랙션2" />
                  <div className="card_text_sunny">
                     <h2>선샤인 윙즈 (Sunshine Wings)</h2>
                     <p>
                        작은 비행기를 타고 하늘을 날며 회전하는 글라이더형 어트랙션으로, 푸른 하늘 속에서 비행하는 느낌을 만끽할 수 있습니다. 기구가 바람을 가르며 날아오를 때 반짝이는 햇빛이 탑승자를 감싸, 마치 하늘의 일부가 된 듯한 몰입감을 줍니다. 맑은 날씨에 빛나는 전경과 함께 잊지 못할 비행
                        경험을 선사합니다.
                     </p>
                  </div>
               </div>
               <div className="card_attr_sunny">
                  <img src="./images/sunny_attr3.png" alt="맑음_어트랙션3" />
                  <div className="card_text_sunny">
                     <h2>클라우드 드리프트 (Cloud Drift)</h2>
                     <p>
                        구름처럼 생긴 의자에 앉아 공중을 부드럽게 떠다니는 듯한 느낌을 주는 어트랙션입니다. 맑은 날씨에 하늘을 배경으로 하여 구름 사이를 미끄러지듯 유영하며 시원한 바람을 얼굴에 맞으며 평화로움을 느낄 수 있습니다. 마치 하늘 위에서 구름 사이를 떠다니는 꿈같은 경험을 즐기기에
                        안성맞춤입니다.
                     </p>
                  </div>
               </div>
               <div className="card_fest_sunny">
                  <div className="card_text_sunny">
                     <h2>선샤인 페스티벌 (Sunshine Festival)</h2>
                     <p>
                        반짝이는 황금빛 의상을 입은 퍼포머들이 태양의 활기와 밝은 에너지를 표현하는 화려한 퍼레이드입니다. 맑은 날씨에 빛나는 퍼레이드 마차와 퍼포머들이 테마파크 전체를 밝고 생동감 있게 물들이며, 보는 사람들에게 기쁨과 활력을 전달합니다. 이 퍼레이드는 오직 화창한 날에만 열려 더욱
                        특별한 감동을 선사합니다.
                     </p>
                  </div>
                  <img src="./images/sunny_fest.png" alt="맑음_페스티벌1" />
               </div>
            </div>
         </div>
      )
   } else if (choice === '비') {
      return (
         <div className="all_theme_rainy">
            <div className="tab_menu">
               <ul className="sidetab">
                  <li onClick={onClick} className={choice === '맑음' ? 'selected margm' : ''}>
                     맑음
                  </li>
                  <li onClick={onClick} className={choice === '비' ? 'selected bee' : ''}>
                     비
                  </li>
                  <li onClick={onClick} className={choice === '눈' ? 'selected noon' : ''}>
                     눈
                  </li>
               </ul>
            </div>
            <div className="theme_card_rainy">
               <div className="card_attr_rainy">
                  <img src="./images/rainy_attr1.png" alt="비_어트랙션1" />
                  <div className="card_text_rainy">
                     <h2>워터 슬라이드 (Water Slide)</h2>
                     <p>
                        높이 솟은 타워에서 출발해 회전과 낙하 구간이 연이어 있는 긴 슬라이드로 내려가며 짜릿한 스릴을 만끽할 수 있습니다. 속도를 높여 빠르게 내려오는 과정에서 바람과 물보라를 느낄 수 있어 흥미를 더합니다. 마지막에는 큰 물웅덩이로 착지해 온몸이 물에 젖는 시원한 피날레가 기다리고
                        있습니다.
                     </p>
                  </div>
               </div>
               <div className="card_attr_rainy">
                  <img src="./images/rainy_attr2.png" alt="비_어트랙션2" />
                  <div className="card_text_rainy">
                     <h2>워터 바이킹 (Water viking)</h2>
                     <p>
                        바이킹 선박 테마의 튼튼한 보트에 탑승해, 격렬한 물살을 타고 급류를 내려가는 스릴 넘치는 어트랙션입니다. 길을 막는 장애물과 급격히 돌아가는 구간을 통과하며 긴장감을 유지하고, 폭포수 아래를 지나는 구간에서는 물줄기가 쏟아져 아찔함을 느낄 수 있습니다. 마지막에는 대형 물보라와
                        함께 보트가 튕겨져 나가며 흥미진진한 모험을 마무리합니다.
                     </p>
                  </div>
               </div>
               <div className="card_attr_rainy">
                  <img src="./images/rainy_attr3.png" alt="비_어트랙션3" />
                  <div className="card_text_rainy">
                     <h2>워터 열차 (Water Train)</h2>
                     <p>
                        수로를 따라 이동하는 열차에 앉아 주변의 열대 정글과 인공 폭포, 다양한 테마 경관을 여유롭게 감상하는 물길 탐험 코스입니다. 중간에 물줄기가 터져 나와 시원하게 적셔주며, 무더운 날씨에 쾌적함을 더해줍니다. 빠르지 않은 속도로 이동해 모든 연령대가 즐길 수 있는 편안한 여정으로,
                        피크닉 느낌의 휴식을 제공합니다.
                     </p>
                  </div>
               </div>
               <div className="card_fest_rainy">
                  <div className="card_text_rainy">
                     <h2>워터 페스티벌 (Water Festival)</h2>
                     <p>
                        찝찝한 빗물을 모두 날려버릴 수 있는 대규모 물 축제로, 물총 싸움, 워터 슬라이드 경기 등 액티비티가 준비된 축제입니다. 음악과 함께 물놀이를 즐길 수 있는 DJ 공연과 야간 레이저 쇼가 열려 신나는 분위기를 더합니다. 누구나 물놀이 용품을 들고 참여해 하루 종일 물속에서 놀며 즐기는
                        축제입니다.
                     </p>
                  </div>
                  <img src="./images/rainy_fest.png" alt="비_페스티벌1" />
               </div>
            </div>
         </div>
      )
   } else {
      return (
         <div className="all_theme_snow">
            <div className="tab_menu">
               <ul className="sidetab">
                  <li onClick={onClick} className={choice === '맑음' ? 'selected margm' : ''}>
                     맑음
                  </li>
                  <li onClick={onClick} className={choice === '비' ? 'selected bee' : ''}>
                     비
                  </li>
                  <li onClick={onClick} className={choice === '눈' ? 'selected noon' : ''}>
                     눈
                  </li>
               </ul>
            </div>
            <div className="theme_card_snow">
               <div className="card_attr_snow">
                  <img src="./images/snow_attr1.png" alt="눈_어트랙션1" />
                  <div className="card_text_snow">
                     <h2>스카이 트램펄린</h2>
                     <p>
                        고공 트램펄린에서 뛰어오르며 하늘 가까이 다가가는 스릴을 느낄 수 있는 어트랙션입니다. 뛰어오를 때마다 아래 펼쳐진 테마파크 전경을 감상할 수 있어, 하늘을 나는 듯한 자유로움과 시원함을 즐길 수 있습니다. 특히 맑은 날씨에는 푸른 하늘과 멀리 보이는 경치가 함께 어우러져, 탑승자에게
                        특별한 기분을 선사합니다.
                     </p>
                  </div>
               </div>
               <div className="card_attr_snow">
                  <img src="./images/snow_attr2.png" alt="눈_어트랙션2" />
                  <div className="card_text_snow">
                     <h2>선샤인 윙즈 (Sunshine Wings)</h2>
                     <p>
                        작은 비행기를 타고 하늘을 날며 회전하는 글라이더형 어트랙션으로, 푸른 하늘 속에서 비행하는 느낌을 만끽할 수 있습니다. 기구가 바람을 가르며 날아오를 때 반짝이는 햇빛이 탑승자를 감싸, 마치 하늘의 일부가 된 듯한 몰입감을 줍니다. 맑은 날씨에 빛나는 전경과 함께 잊지 못할 비행
                        경험을 선사합니다.
                     </p>
                  </div>
               </div>
               <div className="card_attr_snow">
                  <img src="./images/snow_attr3.png" alt="눈_어트랙션3" />
                  <div className="card_text_snow">
                     <h2>클라우드 드리프트</h2>
                     <p>
                        구름처럼 생긴 의자에 앉아 공중을 부드럽게 떠다니는 듯한 느낌을 주는 어트랙션입니다. 맑은 날씨에 하늘을 배경으로 하여 구름 사이를 미끄러지듯 유영하며 시원한 바람을 얼굴에 맞으며 평화로움을 느낄 수 있습니다. 마치 하늘 위에서 구름 사이를 떠다니는 꿈같은 경험을 즐기기에
                        안성맞춤입니다.
                     </p>
                  </div>
               </div>
               <div className="card_fest_snow">
                  <div className="card_text_snow">
                     <h2>선샤인 페스티벌 (Sunshine Festival)</h2>
                     <p>
                        반짝이는 황금빛 의상을 입은 퍼포머들이 태양의 활기와 밝은 에너지를 표현하는 화려한 퍼레이드입니다. 맑은 날씨에 빛나는 퍼레이드 마차와 퍼포머들이 테마파크 전체를 밝고 생동감 있게 물들이며, 보는 사람들에게 기쁨과 활력을 전달합니다. 이 퍼레이드는 오직 화창한 날에만 열려 더욱
                        특별한 감동을 선사합니다.
                     </p>
                  </div>
                  <img src="./images/snow_fest.png" alt="눈_페스티벌1" />
               </div>
            </div>
         </div>
      )
   }
}

export default ThemeText
