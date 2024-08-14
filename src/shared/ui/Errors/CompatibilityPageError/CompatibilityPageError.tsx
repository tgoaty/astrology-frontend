import styles from "../NatalPageError/NatalPageError.module.css"
import {Button} from "antd";
import {useNavigate} from "react-router-dom";

const CompatibilityPageError = () => {
    const navigate = useNavigate()
    const goForm = () => {
        navigate("/", {replace: true})
    }
    return (
        <div className={styles["box"]}>
            <div className={styles["code"]}>500</div>
            <div className={styles["text__box"]}>
                <h3 className={styles["title"]}>Ошибка сервера, пожалуйста повторите попытку.</h3>
                <Button type={"dashed"} onClick={goForm} className={styles["button"]}>Вернуться в меню</Button>
            </div>
        </div>
    );
};

export default CompatibilityPageError;