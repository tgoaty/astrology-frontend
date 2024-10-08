import {Button} from "antd";
import {FC} from "react";
import {useNavigate} from "react-router-dom";
import styles from "./GoToPageBtn.module.css"

interface goToPageBtnProps {
    text: string,
    route: string,
    disabled: boolean
}

const GoToPageBtn: FC<goToPageBtnProps> = ({text, route, disabled}) => {
    const navigate = useNavigate();
    const goToPage = () => {
        return navigate(route);
    }
    return (
        <Button className={styles["button"]} onClick={goToPage} disabled={disabled}>
            {text}
        </Button>
    );
};

export default GoToPageBtn;
