import '../styles/common.css'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import React, { useCallback, useState } from 'react'

function Choice() {
   const [city, setCity] = useState('')
   const navigate = useNavigate()
   const handleClick = (e) => {
      setCity(e.target.value)
   }
   const handleChoice = useCallback(
      (e) => {
         e.preventDefault()
         if (city.trim()) {
            navigate(`/home?query=${city}`)
         }
      },
      [city, navigate]
   )
   return (
      <div className="first">
         <h1 className="choice">지점을 선택하신 후 들어가기를 눌러주세요</h1>
         <form onSubmit={handleChoice}>
            <div className="selec">
               <Button variant="outlined" value="incheon" onClick={handleClick}>
                  인천 지점
               </Button>
               <Button variant="outlined" value="busan" onClick={handleClick}>
                  부산 지점
               </Button>
            </div>
            <div className="sub">
               <Button variant="contained" type="submit" disabled={city ? false : true}>
                  들어가기
               </Button>
            </div>
         </form>
      </div>
   )
}

export default Choice
