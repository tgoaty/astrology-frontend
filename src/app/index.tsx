import Routing from "../pages";
import {ConfigProvider, theme} from "antd";

const App = () => {
    return (
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
                components: {
                    Form: {
                        // itemMarginBottom: 36,
                        labelFontSize: 16,
                        labelRequiredMarkColor: '#929292'
                    },
                },
                token: {
                    colorPrimary: "white",
                    borderRadius: 10
                },
            }}>
            <Routing/>
        </ConfigProvider>
    );
};

export default App;