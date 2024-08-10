import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles["footer"]}>
            <p style={{fontSize: 20}}>Footer</p>
            <div>
                <p>© 2024 Tgoaty</p>
                <p></p>
            </div>

        </footer>
    );
};

export default Footer;