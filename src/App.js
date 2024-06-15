import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import 'src/styles/reset.scss';
import Login from 'src/pages/auth/Login';
import Raid from 'src/pages/raid';
import MyPage from 'src/pages/mypage';
import SiteSetting from 'src/pages/settings/Site';
import RaidSetting from 'src/pages/settings/Raid';
import MemberSetting from 'src/pages/settings/Member';
import SkillSetting from 'src/pages/settings/Skill';
import StatSetting from 'src/pages/settings/Stat';

const history = createBrowserHistory();

const App = () => {

  return (
    <BrowserRouter>
		<Routes>
			<Route path="/" element={<Raid />}></Route>
			<Route path="/login" element={<Login />}></Route>
			<Route path="/mypage" element={<MyPage />}></Route>
			<Route path="/settings/site" element={<SiteSetting />}></Route>
			<Route path="/settings/raid" element={<RaidSetting />}></Route>
			<Route path="/settings/member" element={<MemberSetting />}></Route>
			<Route path="/settings/skill" element={<SkillSetting />}></Route>
			<Route path="/settings/stat" element={<StatSetting />}></Route>
		</Routes>
	</BrowserRouter>
  );
};

export default App;
