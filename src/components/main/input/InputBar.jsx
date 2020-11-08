import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import Home from "../sections/Home";

export default function InputBar(props) {
    console.log("INPUT BAR props: " + typeof props.handleChange)
    const [statusInput, setStatusInput] = React.useState([]);

    function handleKeyDown(event) {
        console.log("event: "+event.key);
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            /*spell check*/
            props.onNewStatus(statusInput);
            setStatusInput("");
            console.log("ENTER STLAčENY")
        }
        console.log("ENTER NEBOL STLAčENY")

    }

    return (

        <TextareaAutosize
            onChange={(event) => {setStatusInput(event.target.value)}}
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