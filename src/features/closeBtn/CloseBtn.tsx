import styles from "./CloseBtn.module.css";
import {CloseOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import {CSSProperties, FC} from "react";

interface closeBtnProps {
    style?: CSSProperties
}

const CloseBtn: FC<closeBtnProps> = ({style}) => {
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    return (
        <CloseOutlined style={style} className={styles["close"]} onClick={goBack}/>
    );
};

export default CloseBtn;