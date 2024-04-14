import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Login from 'src/pages/auth/Login';
import Main from 'src/pages/main/Main';

const history = createBrowserHistory();

const App = () => {

  return (
    <BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/login" element={<Login />}></Route>
				</Routes>
			</BrowserRouter>
  );
};

export default App;
