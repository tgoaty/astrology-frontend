import React from 'react';
import NatalParagraph from "../../entities/NatalParagraph/NatalParagraph.tsx";
import styles from "./NatalSection.module.css"

interface NatalSectionProps {
    header: string,
    arrays: [string, string][];
}

const NatalSection: React.FC<NatalSectionProps> = ({header, arrays}) => {
    console.log(header, arrays)
    return (
        <div className={styles["natal__section__box"]}>
            <h2 className={styles["natal__section__title"]}>{header}</h2>
            {arrays.map((array, index) => <div key={index}><NatalParagraph array={array}/></div>)}
        </div>
    );
};

export default NatalSection;