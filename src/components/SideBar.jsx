import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import 'src/styles/SideBar.scss';


function SideBar() {

    return (
        <Sidebar rootStyles={{position: "absolute", top: "55px", left: 0, height: "100vh"}}>
            <Menu
                menuItemStyles={{
                    button: {
                        [`&.active`]: {
                            backgroundColor: '#13395e',
                            color: '#b6c8d9',
                        },
                    },
                }}
            >
                <SubMenu label="일반" defaultOpen={true}>
                    <MenuItem component={<Link to="/" />}>레이드 목록</MenuItem>
                    <MenuItem component={<Link to="/character" />}>캐릭터 목록</MenuItem>
                    <MenuItem component={<Link to="/mypage" />}>마이페이지</MenuItem>
                </SubMenu>
                <SubMenu label="관리자" defaultOpen={true}>
                    <MenuItem component={<Link to="/settings/site" />}>사이트 관리</MenuItem>
                    <MenuItem component={<Link to="/settings/raid" />}>레이드 관리</MenuItem>
                    <MenuItem component={<Link to="/settings/stat" />}>스탯 관리</MenuItem>
                    <MenuItem component={<Link to="/settings/skill" />}>스킬 관리</MenuItem>
                    <MenuItem component={<Link to="/settings/member" />}>회원 관리</MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar>
    )

} 

export default SideBar;