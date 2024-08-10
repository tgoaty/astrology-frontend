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
                }:{
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
            <Routing/>
        </ConfigProvider>
    );
};

export default App;