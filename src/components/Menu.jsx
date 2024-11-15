import './css/Menu.css'
import { NavLink } from 'react-router-dom'

function Menu() {
   return (
      <header>
         <nav>
            <ul>
               <li className="logo">
                  <NavLink to="/">
                     <img src="/images/logo.png" alt="로고" width="150px" />
                  </NavLink>
               </li>
               <li className="kind">
                  <NavLink to="/theme">테마</NavLink>
               </li>
               <li className="kind">
                  <NavLink to="/price">요금/이용안내</NavLink>
               </li>
               <li className="kind">
                  <NavLink to="/map">오시는 길</NavLink>
               </li>
               <li className="kind">
                  <NavLink to="/announce">공지사항</NavLink>
               </li>
               <li className="login">
                  <NavLink to="/login">로그인</NavLink>
               </li>
            </ul>
         </nav>
      </header>
   )
}

export default Menu
