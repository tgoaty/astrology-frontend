import { useState } from 'react';
import { Drawer } from 'antd';
import ChangeThemeBtn from "../../features/changeTheme/ChangeThemeBtn.tsx";
import { MenuOutlined } from '@ant-design/icons';
import {useSwipeable, SwipeableHandlers, SwipeableProps} from 'react-swipeable';
import styles from "./SideMenu.module.css";

const SideMenu: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);

    const showDrawer = (): void => {
        setOpen(true);
    };

    const onClose = (): void => {
        setOpen(false);
    };

    const handlers: SwipeableHandlers = useSwipeable({
        onSwipedLeft: onClose,
        onSwipedRight: showDrawer,
        preventDefaultTouchmoveEvent: true,
        trackTouch: true,
    } as SwipeableProps);

    return (
        <>
            <MenuOutlined className={styles["menu__icon"]} onClick={showDrawer} />
            <div {...handlers}>
                <Drawer placement="left" title="Меню" onClose={onClose} open={open} extra={<ChangeThemeBtn />}>
                    <h1>Sorry. Empty</h1>
                </Drawer>
            </div>
        </>
    );
};

export default SideMenu;
