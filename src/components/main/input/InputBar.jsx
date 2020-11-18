import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import {textEmojisToUnicode} from "../../../logic/emojis/emojis";

export default function InputBar(props) {
    const [statusInput, setStatusInput] = React.useState([]);

    function handleKeyDown(event) {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            console.log("STATUS INPUT JE:" + statusInput + ":")
            if ((" " + statusInput).trim() !== "" && statusInput.trim().length > 1) {
                props.onNewStatus(statusInput);
                setStatusInput("");
            }
        }


    }

    return (

        <TextareaAutosize
            onChange={(event) => {
                // setStatusInput(event.target.value)}}
                setStatusInput(textEmojisToUnicode(event.target.value))
            }}
            onKeyDown={handleKeyDown}
            className={props.isComment ? "input-bar input-bar-comment" : "input-bar"}

            style={{
                fontSize: "1rem",
                fontFamily: "'Montserrat', sans-serif",
                width: "calc(100% - 75px)"

            }}
            placeholder={props.text}
            value={statusInput}
        >

        </TextareaAutosize>

    );
}