import {useSelector, useStore} from "react-redux";

import React from "react";
import {BackArrow, NextArrow} from "../arrows and sliders/Arrows";
import InputBar from "../input/InputBar";
import {textEmojisToUnicode} from "../../../logic/emojis/emojis";
import TextareaAutosize from "react-autosize-textarea";

export default function ShiftSchedulerPanel(props) {

    var store = useStore();


    return <div className="post-status-bar"
                style={{width: "100%", minWidth: "440px", position: "relative"}}>

        {/*ARROW */}


        <NextArrow onClick={() => {
            store.dispatch({type: "SHIFT_SCHEDULER_ARROW_NEXT_CLICK"})
        }}/>


        {/*MAIN CONTENT */}
        <div className="shift-content scheduler-content">
            <div className="scheduler-control-panel">
                <div className="scheduler-control-panel-line">
                    <h3 className="scheduler-control-panel-header">Začiatok:</h3>
                    <div className="scheduler-control-panel-wrapper">
                        <span className="scheduler-control-panel-arrow">⯇</span>
                        &nbsp;
                        <h3 className="scheduler-control-panel-time">
                            {/*6.8.2020&nbsp;&nbsp;*/}
                            &nbsp;16:58&nbsp;
                        </h3>
                        &nbsp;
                        <span className="scheduler-control-panel-arrow">⯈</span>
                    </div>
                </div>

                <div className="scheduler-control-panel-line">
                    <h3 className="scheduler-control-panel-header">Koniec:</h3>
                    <div className="scheduler-control-panel-wrapper">
                        <span className="scheduler-control-panel-arrow">⯇</span>
                        &nbsp;
                        <h3 className="scheduler-control-panel-time">
                            {/*6.8.2020&nbsp;&nbsp;*/}
                            &nbsp;18:58&nbsp;
                        </h3>
                        &nbsp;
                        <span className="scheduler-control-panel-arrow">⯈</span>
                    </div>
                </div>

                <div className="scheduler-control-panel-line" style={{width: "100%", marginTop: "20px", position: "relative"}}>
                    <h3 style={{minWidth: "114px", paddingBottom: "5px"}} className="scheduler-control-panel-header">Zamestnanec:</h3>
                    <TextareaAutosize
                        // onChange={(event) => {}}
                        // onKeyDown={}
                        // className={"input-bar"}

                        style={{
                            fontSize: "0.9rem",
                            fontFamily: "'Montserrat', sans-serif",
                            width: "100%",
                            border: "1px solid black",
                            outline: "none",
                            resize: "vertical",
                            // marginLeft: "15px",
                            borderRadius: "10px",
                            padding: "7px",
                            position: "relative",
                            //top: "-6px",
                            right: "0",
                            display: "block"
                        }}
                        placeholder="Napíšte meno zamestnanca..."
                        // value=""
                    >

                    </TextareaAutosize>
                    <ul style={{position: "absolute"}}>
                        <li>Ahahahahah</li>
                        <li>Ahahahahah</li>
                        <li>Ahahahahah</li>
                        <li>Ahahahahah</li>
                    </ul>
                </div>


            </div>
        </div>


        {/*ARROW */}
        <BackArrow onClick={() => {
            store.dispatch({type: "SHIFT_SCHEDULER_ARROW_BACK_CLICK"})
        }}/>

    </div>
}