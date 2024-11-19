import './css/LoginUi.css'
import Button from '@mui/material/Button'
function LoginUi() {
   return (
      <div className="login_all">
         <div className="login_form">
            <h4>아이디</h4>
            <input type="text" />
            <h4>비밀번호</h4>
            <input type="password" />
            <div className="login_button">
               <Button variant="contained" sx={{ marginTop: '30px', width: '120px' }}>
                  로그인
               </Button>
               <Button variant="outlined" sx={{ marginTop: '30px', width: '120px' }}>
                  회원가입
               </Button>
            </div>
         </div>
      </div>
   )
}

export default LoginUi
