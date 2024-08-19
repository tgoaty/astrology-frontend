import React from "react";
import styles from "./NatalParagraph.module.css"
import {getSvgURL} from "../../shared/utils/svg-utils.ts";

interface NatalParagraphProps {
    object: {title: string, text: string};
    icon?: boolean
}

const NatalParagraph: React.FC<NatalParagraphProps> = ({object: object, icon}) => {
    const sign = object.title.split(' ')[0]


    return (
        <div className={styles["natal__paragraph__box"]}>
            <div className={styles["natal__paragraph__title__block"]}>
                {icon && <img className={styles["natal__paragraph__icon"]} src={getSvgURL(sign)} alt={sign}/>}
                <h3 className={styles["natal__paragraph__title"]}>{object.title}</h3>
            </div>

            <p className={styles["natal__paragraph__text"]}>{object.text}</p>
        </div>
    );
};

export default NatalParagraph;