import { ReactComponent as MenuIcon } from 'src/assets/icons/menu.svg';
import { ReactComponent as InfoIcon } from 'src/assets/icons/info.svg';
import { ReactComponent as LogoutIcon } from 'src/assets/icons/logout.svg';
import 'src/styles/Header.scss';

function Header() {
  return (
    <div className="header">
        <MenuIcon />
        Header
        <div className="rightMenu">
            <InfoIcon />
            <LogoutIcon />
        </div>
    </div>
  );
}

export default Header;