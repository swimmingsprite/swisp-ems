import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';


export default function InputBar(props) {
    console.log("INPUT BAR props: "+typeof props.handleChange)

    return (
        // <textarea className="textarea-bar" placeholder="Napíšte status..." />
        <TextareaAutosize onChange={()=>{props.handleChange()}}
        className={props.isComment ? "input-bar input-bar-comment": "input-bar"} 
        contentEditable="true"
        data-text={props.text}
        style={{fontSize: "1rem",
            fontFamily: "'Montserrat', sans-serif",
            width: "calc(100% - 75px)"

        }}
        >

        </TextareaAutosize>
/*
<div onChange={props.handleChange}
        className={props.isComment ? "input-bar input-bar-comment": "input-bar"}
        contentEditable="true"
        data-text={props.text}
        ></div>
*/
    );
}