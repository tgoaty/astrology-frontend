import {Result, Button} from 'antd';
import {useNavigate} from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate("/", {replace: true})
    }
    return (
        <Result style={{marginTop: 200}}
                icon={''}
                title="404 Страница не найдена"
                extra={<Button onClick={goHome} type="dashed">Главная</Button>}
        />
    );
};

export default NotFoundPage;