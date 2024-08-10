import {Button} from "antd";
import {useUserInfoStore} from "../../app/store/store.ts";
import {themeMode} from "../../shared/types/types.ts";
import {MoonOutlined, SunOutlined} from "@ant-design/icons"

const ChangeThemeBtn = () => {
    const {themeColor, setThemeColor} = useUserInfoStore()

    const toggleCurrentTheme = () => {
        const newThemeColor = themeColor === themeMode.dark ? themeMode.light : themeMode.dark;
        setThemeColor(newThemeColor);
        localStorage.setItem("theme", newThemeColor);
    }
    return (
        <Button onClick={toggleCurrentTheme}>
            {themeColor === themeMode.light ? <MoonOutlined style={{fontSize: 20}} /> : <SunOutlined style={{fontSize: 20}}/>}
        </Button>
    );
};

export default ChangeThemeBtn;