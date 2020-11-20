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
                        <h3 className="scheduler-control-panel-time">
                            {/*6.8.2020&nbsp;&nbsp;*/}
                            16:58
                        </h3>

                        <span className="scheduler-control-panel-arrow">⯈</span>
                    </div>
                </div>

                <div className="scheduler-control-panel-line">
                    <h3 className="scheduler-control-panel-header">Koniec:</h3>
                    <div className="scheduler-control-panel-wrapper">
                        <span className="scheduler-control-panel-arrow">⯇</span>

                        <h3 className="scheduler-control-panel-time">
                            {/*6.8.2020&nbsp;&nbsp;*/}
                            18:58
                        </h3>

                        <span className="scheduler-control-panel-arrow">⯈</span>
                    </div>
                </div>

                <div className="scheduler-control-panel-line"
                     style={{width: "100%", marginTop: "20px", position: "relative"}}>
                    <h3 style={{minWidth: "114px", paddingBottom: "5px"}}
                        className="scheduler-control-panel-header">Zamestnanec:</h3>
                    <TextareaAutosize
                        // onChange={(event) => {}}
                        // onKeyDown={}
                        className={"shift-scheduler-textarea"}

                        placeholder="Hľadať zamestnanca..."
                        // value=""
                    ></TextareaAutosize>


                    {/*<ul className="shift-scheduler-input-ul">
                        <li className="shift-scheduler-input-li">Ahahahahah</li>

                    </ul>*/}

                    <div className="shift-scheduler-calendar">
                        <div className="shift-scheduler-calendar-header"><h2>August</h2></div>
                        <ul className="shift-scheduler-calendar-ul">
                            <li className="shift-scheduler-calendar-li">
                                <h2 style={{
                                    textAlign: "center",
                                    fontSize: "2rem"
                                }}>2.</h2>
                                <p style={{
                                    textAlign: "center",
                                    fontSize: "0.8rem"
                                }}>Streda</p>

                            </li>


                            {/*          <li className="shift-scheduler-calendar-li">Ahahhah</li>
                            <li className="shift-scheduler-calendar-li">Ahahhah</li>
                            <li className="shift-scheduler-calendar-li">Ahahhah</li>
                            <li className="shift-scheduler-calendar-li">Ahahhah</li>
                            <li className="shift-scheduler-calendar-li">Ahahhah</li>
                            <li className="shift-scheduler-calendar-li">Ahahhah</li>
                            <li className="shift-scheduler-calendar-li">Ahahhah</li>
                            <li className="shift-scheduler-calendar-li">Ahahhah</li>
                            <li className="shift-scheduler-calendar-li">Ahahhah</li>
                            <li className="shift-scheduler-calendar-li">Ahahhah</li>
                            <li className="shift-scheduler-calendar-li">Ahahhah</li>
                            <li className="shift-scheduler-calendar-li">Ahahhah</li>
                            <li className="shift-scheduler-calendar-li">Ahahhah</li>
                            <li className="shift-scheduler-calendar-li">Ahahhah</li>
                            <li className="shift-scheduler-calendar-li">Ahahhah</li>
                            <li className="shift-scheduler-calendar-li">Ahahhah</li>
                            <li className="shift-scheduler-calendar-li">Ahahhah</li>
                            <li className="shift-scheduler-calendar-li">Ahahhah</li>
                            <li className="shift-scheduler-calendar-li">Ahahhah</li>
                            <li className="shift-scheduler-calendar-li">Ahahhah</li>
                            <li className="shift-scheduler-calendar-li">Ahahhah</li>
                            <li className="shift-scheduler-calendar-li">Ahahhah</li>
                            <li className="shift-scheduler-calendar-li">Ahahhah</li>
                            <li className="shift-scheduler-calendar-li">Ahahhah</li>
                            <li className="shift-scheduler-calendar-li">Ahahhah</li>
                            <li className="shift-scheduler-calendar-li">Ahahhah</li>
                            <li className="shift-scheduler-calendar-li">Ahahhah</li>
                            <li className="shift-scheduler-calendar-li">Ahahhah</li>
                            <li className="shift-scheduler-calendar-li">Ahahhah</li>
                            <li className="shift-scheduler-calendar-li">Ahahhah</li>
                            <li className="shift-scheduler-calendar-li">Ahahhah</li>
                            <li className="shift-scheduler-calendar-li">Ahahhah</li>
                            <li className="shift-scheduler-calendar-li">Ahahhah</li>
                            <li className="shift-scheduler-calendar-li">Ahahhah</li>
*/}


                        </ul>
                    </div>


                </div>


            </div>
        </div>


        {/*ARROW */}
        <BackArrow onClick={() => {
            store.dispatch({type: "SHIFT_SCHEDULER_ARROW_BACK_CLICK"})
        }}/>

    </div>
}