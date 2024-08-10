import Header from "../../widgets/Header/Header.tsx";
import Footer from "../../shared/ui/Footer/Footer.tsx";
import GoToPageBtn from "../../features/GoToPageBtn/GoToPageBtn.tsx";
import styles from "./index.module.css"

const MainMenu = () => {
    return (
        <>
            <Header/>
            <main className={styles["main"]}>
                <GoToPageBtn text="Натальная карта" disabled={false} route="/natal-form"/>
                <GoToPageBtn text="Узнать Совместимость" disabled={true} route="/"/>
                <GoToPageBtn text="Гадание на Таро" disabled={true} route="/"/>
            </main>
            <Footer/>
        </>
    );
};

export default MainMenu;