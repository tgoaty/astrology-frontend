import styles from "./NatalPageError.module.css"
import {Button} from "antd";
import {useNavigate} from "react-router-dom";

const NatalPageError = () => {
    const navigate = useNavigate()
    const goForm = () => {
        navigate("/natal-form", {replace: true})
    }
    return (
        <div className={styles["box"]}>
            <div className={styles["code"]}>500</div>
            <div className={styles["text__box"]}>
                <h3 className={styles["title"]}>Ошибка сервера, пожалуйста повторите попытку.</h3>
                <p className={styles["text"]}>Попробуйте поменять город рождения на ближайший к вам крупный город.</p>
                <Button type={"dashed"} onClick={goForm} className={styles["button"]}>Вернуться к форме</Button>
            </div>
        </div>
    );
};

export default NatalPageError;