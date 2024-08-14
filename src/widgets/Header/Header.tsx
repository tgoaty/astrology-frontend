import {Avatar, Button} from "antd";
import {UserOutlined} from '@ant-design/icons';
import styles from "./Header.module.css"
import SideMenu from "../SideMenu/SideMenu.tsx";
import {useNavigate} from "react-router-dom";
import {useUserInfoStore} from "../../app/store/store.ts";

const Header = () => {
    const {username} = useUserInfoStore()
    const navigate = useNavigate()
    const pUsername = username || "{username}"
    const openProfile = () => {
        navigate('/profile')
    }
    return (
        <header className={styles["header"]}>
            <SideMenu/>
            <div className={styles["user__info"]}>
                <Button type="text" className={styles["username"]} onClick={openProfile}>{pUsername}</Button>
                <Avatar className={styles["avatar"]} onClick={openProfile} size={44} icon={<UserOutlined/>}/>
            </div>
        </header>
    );
};

export default Header;