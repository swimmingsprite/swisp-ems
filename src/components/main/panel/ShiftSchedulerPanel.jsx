import {useSelector, useStore} from "react-redux";

import React from "react";
import {BackArrow, NextArrow} from "../arrows and sliders/Arrows";
import InputBar from "../input/InputBar";
import {textEmojisToUnicode} from "../../../logic/emojis/emojis";
import TextareaAutosize from "react-autosize-textarea";
import Title, {SubTitle} from "../title/Title";
import Avatar from "@material-ui/core/Avatar";
import isBase64 from "is-base64";

export default function ShiftSchedulerPanel(props) {

    var store = useStore();

    /*  let avatarStyle = props.comment.avatarImg && isBase64(props.comment.avatarImg, {allowMime: true})
          ? {backgroundImage: props.comment.avatarImg} : {backgroundColor: props.comment.avatarColor};
  */

    return <div className="post-status-bar"
                style={{width: "100%", minWidth: "440px", position: "relative"}}>

        {/*ARROW */}


        <NextArrow onClick={() => {
            store.dispatch({type: "SHIFT_SCHEDULER_ARROW_NEXT_CLICK"})
        }}/>


        {/*SEARCH BAR*/}
        <div>
            <TextareaAutosize
                // onChange={(event) => {}}
                // onKeyDown={}
                className={"shift-scheduler-textarea"}

                placeholder="Hľadať zamestnanca..."
                // value=""
            ></TextareaAutosize>


        </div>

        <ul className="shift-scheduler-input-ul">
            <li className="shift-scheduler-input-li">Ahahahahah</li>
            <li className="shift-scheduler-input-li">Ahahahahah</li>
            <li className="shift-scheduler-input-li">Ahahahahah</li>
            <li className="shift-scheduler-input-li">Ahahahahah</li>

        </ul>

        {/*MAIN CONTENT */}


        <div className="scheduler-content" style={{minHeight: 0}}>

            <SubTitle text="Kaufland Stredočeská"/>
            <h8>oddelenie záhrad:</h8>
            <h2 className="scheduler-date">28.12.2020, Utorok</h2>
            <p style={{fontSize: "0.9rem"}}>16:58 - 18:58:</p>
            <ul style={{marginTop: "0px"}}>
                <li className="selected-item">
                    <div className="shift-element" style={{display: "inline-block"}}>
                        <Avatar className="post-avatar" style={
                            {
                                height: "20px",
                                width: "20px",
                                backgroundColor: "red",//avatarStyle.backgroundColor,
                                fontSize: "0.85rem",
                                marginRight: 0,
                                marginLeft: "5px",
                            }}
                            // src={avatarStyle.backgroundImage}
                        >
                            J
                        </Avatar>
                        <h2 className="shift-element-header" style={{margin: "5px", marginRight: "0px"}}>John
                            Barney</h2>
                        <span className="scheduler-delete-button">x</span>
                    </div>


                </li>


                <li className="selected-item">
                    <div className="shift-element" style={{display: "inline-block"}}>
                        <Avatar className="post-avatar" style={
                            {
                                height: "20px",
                                width: "20px",
                                backgroundColor: "red",//avatarStyle.backgroundColor,
                                fontSize: "0.85rem",
                                marginRight: 0,
                                marginLeft: "5px",
                            }}
                            // src={avatarStyle.backgroundImage}
                        >
                            J
                        </Avatar>
                        <h2 className="shift-element-header" style={{margin: "5px", marginRight: "0px"}}>John
                            Barney</h2>
                        <span className="scheduler-delete-button">x</span>
                    </div>
                </li>

            </ul>

            {/*TIME CHANGE*/}
            <p style={{display: "block", textAlign: "center"}}>

                    <span className="scheduler-arrow">⯇</span>
                    16:58
                    <span className="scheduler-arrow">⯈</span>

                <span style={{transform: "translateY(-2px)", display: "inline-block"}}>&nbsp;-&nbsp;</span>
                    <span className="scheduler-arrow">⯇</span>
                    18:58
                    <span className="scheduler-arrow">⯈</span>
            </p>

        </div>

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
                {/*todo bude zoznam zamestnancov z daneho miesta a z neho sa iba bude filtrovať*/}
                {/* <li className="shift-scheduler-calendar-li">Ahahhah</li>
                    <li className="shift-scheduler-calendar-li">Ahahhah</li>
                    <li className="shift-scheduler-calendar-li">Ahahhah</li>
                    <li className="shift-scheduler-calendar-li">Ahahhah</li>
                    <li className="shift-scheduler-calendar-li">Ahahhah</li>
                    <li className="shift-scheduler-calendar-li">Ahahhah</li>
                    <li className="shift-scheduler-calendar-li">Ahahhah</li>
                    <li className="shift-scheduler-calendar-li">Ahahhah</li>
                    <li className="shift-scheduler-calendar-li">Ahahhah</li>
                    <li className="shift-scheduler-calendar-li">Ahahhah</li>
                    <li className="shift-scheduler-calendar-li">Ahahhah</li>*/}
            </ul>
        </div>


        {/*ARROW */}
        <BackArrow onClick={() => {
            store.dispatch({type: "SHIFT_SCHEDULER_ARROW_BACK_CLICK"})
        }}/>

    </div>
}