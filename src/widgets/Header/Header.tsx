import {Avatar, Button} from "antd";
import {UserOutlined} from '@ant-design/icons';
import styles from "./Header.module.css"
import SideMenu from "../SideMenu/SideMenu.tsx";

const Header = () => {
    const username = "{username}"
    const openProfile = () => {

    }
    return (
        <header className={styles["header"]}>
            <SideMenu/>
            <div className={styles["user__info"]}>
                <Button type="text" className={styles["username"]}>{username}</Button>
                <Avatar className={styles["avatar"]} onClick={openProfile} size={44} icon={<UserOutlined/>}/>
            </div>
        </header>
    );
};

export default Header;