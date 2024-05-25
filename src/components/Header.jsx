import { ReactComponent as MenuIcon } from 'src/assets/icons/menu.svg';
import { ReactComponent as InfoIcon } from 'src/assets/icons/info.svg';
import { ReactComponent as LogoutIcon } from 'src/assets/icons/logout.svg';
import 'src/styles/Header.scss';
import { useDispatch } from 'react-redux';
import { logout } from 'src/store/modules/user';
import { useNavigate } from 'react-router-dom';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    dispatch(logout());
    navigate("/login");
  }
  return (
    <div className="header">
        <MenuIcon />
        Header
        <div className="rightMenu">
            <InfoIcon />
            <LogoutIcon onClick={handleLogout}/>
        </div>
    </div>
  );
}

export default Header;