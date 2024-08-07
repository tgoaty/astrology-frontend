import Routing from "../pages";
import {ConfigProvider, theme} from "antd";


const App = () => {
    return (
        <ConfigProvider
            theme={{
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
            }}>
            <Routing/>
        </ConfigProvider>
    );
};

export default App;