import React from 'react';
import {Row, Spin} from "antd";

const contentStyle: React.CSSProperties = {
    padding: 50,
    background: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 4,
};

const content = <div style={contentStyle}/>;


const Loader = () => {
    return (
        <Row style={{marginTop: 300}} justify={"center"}>
            <Spin tip="Загрузка" size="large">
                {content}
            </Spin>
        </Row>
    );
};

export default Loader;