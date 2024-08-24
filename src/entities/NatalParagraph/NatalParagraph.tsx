import React from "react";
import styles from "./NatalParagraph.module.css"
import {getSvgURL} from "../../shared/utils/svg-utils.ts";
import Typewriter from "../../shared/ui/Typewriter.tsx";

interface NatalParagraphProps {
    object: { title: string, text: string };
    icon?: boolean
    typewriter? : boolean
}

const NatalParagraph: React.FC<NatalParagraphProps> = ({object: object, icon, typewriter}) => {
    const sign = object.title.split(' ')[0]
    const delay = sign === "Асцендент" ? 1 : 5

    return (
        <div className={styles["natal__paragraph__box"]}>
            <div className={styles["natal__paragraph__title__block"]}>
                {icon && <img className={styles["natal__paragraph__icon"]} src={getSvgURL(sign)} alt={sign}/>}
                <h3 className={styles["natal__paragraph__title"]}>{typewriter ? <Typewriter text={object.title} delay={delay * 6}/> : object.title}</h3>
            </div>

            <p className={styles["natal__paragraph__text"]}>{typewriter ? <Typewriter text={object.text} delay={delay}/> : object.text}</p>
        </div>
    );
};

export default NatalParagraph;