import { Link } from 'react-router-dom';
import 'src/styles/App.scss';
import 'src/styles/Login.scss';

function Login() {
  return (
    <div className="container">
      <div className='logo'>로고</div>
      <div className="loginBox">
        <input type="text" placeholder="아이디"/>
        <input type="password" placeholder="비밀번호"/>
      </div>
      <div className="authBox">
        <Link to={"/"}>비밀번호 초기화</Link>
        <span className="divider">|</span>
        <Link to={"/"}>회원가입</Link>
      </div>
      <input type="submit" value={"로그인"}/>
    </div>
  );
}

export default Login;