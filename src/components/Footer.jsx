import './css/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import YouTubeIcon from '@mui/icons-material/YouTube'

function Footer() {
   return (
      <footer>
         <p>
            웨더월드 주식회사 | 인천시 어쩌구 어디로 111번 길 <br />
            전화 : 111-1111 | 사업자 등록번호 : 111-11-11111 | 대표자 : 박날씨
         </p>
         <div>
            <a href="https://www.instagram.com/" className="icon">
               <InstagramIcon className="iconf" />
            </a>
            <a href="https://www.facebook.com/" className="icon">
               <FacebookOutlinedIcon className="iconf" />
            </a>
            <a href="https://www.youtube.com/" className="icon">
               <YouTubeIcon className="iconf" />
            </a>
         </div>
      </footer>
   )
}

export default Footer
