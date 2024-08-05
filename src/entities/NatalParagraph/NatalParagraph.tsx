import React from "react";
import styles from "./NatalParagraph.module.css"

interface NatalParagraphProps {
    array: [string, string];
}

const NatalParagraph: React.FC<NatalParagraphProps> = ({ array }) => {
    return (
        <div className={styles["natal__paragraph__box"]}>
            <h3 className={styles["natal__paragraph__title"]}>{array[0]}</h3>
            <p className={styles["natal__paragraph__text"]}>{array[1]}</p>
        </div>
    );
};

export default NatalParagraph;