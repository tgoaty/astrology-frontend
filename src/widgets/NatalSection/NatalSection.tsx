import React from 'react';
import NatalParagraph from "../../entities/NatalParagraph/NatalParagraph.tsx";

interface NatalSectionProps {
    header: string,
    arrays: [string, string][];
}

const NatalSection: React.FC<NatalSectionProps> = ({header, arrays}) => {
    return (
        <div>
            <h2>{header}</h2>
            {arrays.map((array, index) => <div key={index}><NatalParagraph array={array}/></div>)}
        </div>
    );
};

export default NatalSection;