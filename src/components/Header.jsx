import { ReactComponent as MenuIcon } from 'src/assets/icons/menu.svg';
import { ReactComponent as InfoIcon } from 'src/assets/icons/info.svg';
import { ReactComponent as LogoutIcon } from 'src/assets/icons/logout.svg';
import { ReactComponent as CloseIcon } from 'src/assets/icons/close.svg';
import SideBar from './SideBar';
import 'src/styles/Header.scss';
import { useDispatch } from 'react-redux';
import { logout } from 'src/store/modules/user';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [sideBar, setSideBar] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  }
  const openSideBar = () => {
    setSideBar(true);
  }

  const closeSideBar = () => {
    setSideBar(false);
  }

  return (
    <div className="header">
        {sideBar ? <CloseIcon onClick={closeSideBar}/> : <MenuIcon onClick={openSideBar}/>}
        {sideBar ? <SideBar /> : null}
        Header
        <div className="rightMenu">
            <InfoIcon />
            <LogoutIcon onClick={handleLogout}/>
        </div>
    </div>
  );
}

export default Header;