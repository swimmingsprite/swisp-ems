import React from 'react';

export default function Paragraph(props) {

    return (
        <p className={props.paragraphClass}>{props.text}</p>
    );
}