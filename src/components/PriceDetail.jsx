import './css/PriceDetail.css'
function PriceDetail() {
   return (
      <div className="price_main">
         <h1 className="price_title1">요금</h1>
         <div className="price_deck">
            <div className="price_card">
               <h2 className="price_card_title">종일권</h2>
               <ul className="price_detail">
                  <li>어 른 30,000 원</li>
                  <li>청소년 20,000 원(중학생~고등학생)</li>
                  <li>어린이 12,000 원(36개월~초등학생)</li>
               </ul>
            </div>
            <div className="price_card">
               <h2 className="price_card_title">평일 오후권/휴일 야간권</h2>
               <ul className="price_detail">
                  <li>어 른 23,000 원</li>
                  <li>청소년 14,000 원(중학생~고등학생)</li>
                  <li>어린이 9,000 원(36개월~초등학생)</li>
               </ul>
            </div>
            <div className="price_card">
               <h2 className="price_card_title">우대할인</h2>
               <ul className="price_detail">
                  <li>국가유공자 : 종일권 50%[동반 1인]</li>
                  <li>장애인 : 종일권 50%[동반 1인]</li>
                  <li>경로 : 65세 이상 종일권 15,000원</li>
                  <li>임신부(임산부와 혼동 유의) : 종일권 15,000원</li>
               </ul>
            </div>
         </div>
         <h1 className="price_title2">이용안내</h1>
         <ul className="use_detail">
            <li>웨더월드는 이용권 없이 입장이 불가합니다.</li>
            <li>종일권 기준으로 할인이 적용되며, 오후권 및 야간권은 할인이 적용되지 않습니다.</li>
            <li>노약자, 음주자, 임산부, 어린이 및 몸이 불편하신 분은 시설 이용 시 안전상의 문제로 제한되는 기종이 발생될 수 있으니 이용에 참고하시기 바랍니다.</li>
            <li>우박, 천둥 등 기상상황 악화 시, 혹은 웨더월드 사정상 예고 없이 어트랙션 운행이 중단될 수 있습니다.</li>
            <li>본 요금은 사전 예고 없이 변동 될 수 있으니 고객 여러분의 많은 양해 부탁드립니다.</li>
         </ul>
      </div>
   )
}

export default PriceDetail
