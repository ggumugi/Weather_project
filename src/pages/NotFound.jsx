import '../styles/common.css'
import { Link } from 'react-router-dom'

function NotFound() {
   return (
      <div>
         <h1>Error Code : 404</h1>
         <p>죄송합니다. 페이지를 찾을 수 없습니다.</p>
         <p>주소가 잘못되었거나, 페이지가 삭제되었습니다.</p>
         <Link to="/">처음으로 돌아가기</Link>
      </div>
   )
}

export default NotFound
