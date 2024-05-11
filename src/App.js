import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Login from 'src/pages/auth/Login';
import Raid from 'src/pages/raid';
import MyPage from 'src/pages/mypage';

const history = createBrowserHistory();

const App = () => {

  return (
    <BrowserRouter>
		<Routes>
			<Route path="/" element={<Raid />}></Route>
			<Route path="/login" element={<Login />}></Route>
			<Route path="/mypage" element={<MyPage />}></Route>
		</Routes>
	</BrowserRouter>
  );
};

export default App;
