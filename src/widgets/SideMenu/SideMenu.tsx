import {useState} from 'react';
import {Drawer} from 'antd';
import ChangeThemeBtn from "../../features/changeTheme/ChangeThemeBtn.tsx";
import {MenuOutlined} from '@ant-design/icons';
import styles from "./SideMenu.module.css";

const SideMenu = () => {
    const [open, setOpen] = useState<boolean>(false);

    const showDrawer = (): void => {
        setOpen(true);
    };

    const onClose = (): void => {
        setOpen(false);
    };


    return (
        <>
            <MenuOutlined className={styles["menu__icon"]} onClick={showDrawer}/>
            <Drawer placement="left" title="Меню" onClose={onClose} open={open} extra={<ChangeThemeBtn/>}>
                <h1>Sorry. Empty</h1>
            </Drawer>

        </>
    );
};

export default SideMenu;
