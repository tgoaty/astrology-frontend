import {Button} from "antd";
import {useUserInfoStore} from "../../app/store/store.ts";
import {themeMode} from "../../shared/types/types.ts";

const ChangeThemeBtn = () => {
    const {themeColor, setThemeColor} = useUserInfoStore()

    const toggleCurrentTheme = () => {
        const newThemeColor = themeColor === themeMode.dark ? themeMode.light : themeMode.dark;
        setThemeColor(newThemeColor);
        localStorage.setItem("theme", newThemeColor);
    }
    return (
        <Button onClick={toggleCurrentTheme}>
            поменять тему
        </Button>
    );
};

export default ChangeThemeBtn;