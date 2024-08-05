import React from "react";

interface NatalParagraphProps {
    array: [string, string];
}

const NatalParagraph: React.FC<NatalParagraphProps> = ({ array }) => {
    return (
        <div>
            <h3>{array[0]}</h3>
            <p>{array[1]}</p>
        </div>
    );
};

export default NatalParagraph;