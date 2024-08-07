import React from "react";
import styles from "./NatalParagraph.module.css"
import {getSvgURL} from "../../shared/utils/svg-utils.ts";

interface NatalParagraphProps {
    array: [string, string];
}

const NatalParagraph: React.FC<NatalParagraphProps> = ({ array }) => {
    const sign = array[0].split(' ')[0]


    return (
        <div className={styles["natal__paragraph__box"]}>
            <div className={styles["natal__paragraph__title__block"]}>
                <img className={styles["natal__paragraph__icon"]} src={getSvgURL(sign)} alt={sign}/>
                <h3 className={styles["natal__paragraph__title"]}>{array[0]}</h3>
            </div>

            <p className={styles["natal__paragraph__text"]}>{array[1]}</p>
        </div>
    );
};

export default NatalParagraph;