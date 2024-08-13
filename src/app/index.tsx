import Routing from "../pages";
import {ConfigProvider, theme} from "antd";
import {themeMode} from "../shared/types/types.ts";
import {useUserInfoStore} from "./store/store.ts";
import {useEffect} from "react";


const App = () => {
    const {themeColor} = useUserInfoStore()
    useEffect(() => {
        document.querySelector('body')?.setAttribute('theme', themeColor)
    }, [themeColor]);
    return (
        <ConfigProvider
            theme={themeColor === themeMode.light
                ? {
                    algorithm: theme.defaultAlgorithm,
                    components: {
                        Form: {
                            labelFontSize: 16,
                            labelRequiredMarkColor: '#252525'
                        },
                    },
                    token: {
                        colorPrimary: '#1e1e1e',
                        borderRadius: 10,
                        fontFamily: "Comic Sans MS"
                    },
                } : {
                    algorithm: theme.darkAlgorithm,
                    components: {
                        Form: {
                            labelFontSize: 16,
                            labelRequiredMarkColor: '#929292'
                        },
                    },
                    token: {
                        colorPrimary: "white",
                        borderRadius: 10,
                        fontFamily: "Comic Sans MS"
                    },
                }

            }>
            {/*// TODO Delete this p*/}
            <p style={{color: "rgba(93,93,93,0.5)", fontSize: 12, left: 0, height: 0}}>Beta version, anything can
                happen!</p>
            <Routing/>
        </ConfigProvider>
    );
};

export default App;