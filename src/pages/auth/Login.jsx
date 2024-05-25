import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "src/utils/axios";
import { Link, useNavigate } from 'react-router-dom';
import { authUser } from 'src/store/modules/user';
import 'src/styles/App.scss';
import 'src/styles/Login.scss';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const response = await axios.post(`/api/member/login?id=${email}&pw=${password}`);
    let memberCode = response.data.memberCd;
    dispatch(authUser(memberCode));
    if (memberCode < 12) {
      navigate("/");
    } else {
      navigate("/mypage");
    }
  }

  return (
    <div className="container">
      <div className='logo'>로고</div>
      <div className="loginBox">
        <input type="text" placeholder="아이디" value={email}
          onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="비밀번호" value={password}
          onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div className="authBox">
        <Link to={"/"}>비밀번호 초기화</Link>
        <span className="divider">|</span>
        <Link to={"/"}>회원가입</Link>
      </div>
      <button className="loginBtn" onClick={handleLogin}>로그인</button>
    </div>
  );
}

export default Login;