import {useDispatch, useSelector, useStore} from "react-redux";

import React, {useEffect, useState} from "react";
import {BackArrow, NextArrow} from "../arrows and sliders/Arrows";
import InputBar from "../input/InputBar";
import {textEmojisToUnicode} from "../../../logic/emojis/emojis";
import TextareaAutosize from "react-autosize-textarea";
import Title, {SubTitle} from "../title/Title";
import Avatar from "@material-ui/core/Avatar";
import isBase64 from "is-base64";
import {isSelected} from "../../../logic/shifts/scheduler";
import {AvatarGroup} from "@material-ui/lab";

function InputList(props) {
    if (props.hover.index > props.list.length-1) props.hover.setIndex(0);
    return <ul className="shift-scheduler-input-ul">
        {props.list.map((e, i) => {
            let style = props.hover.index === i ? {backgroundColor: "rgba(238, 238, 238, 0.4)"} : null
            return <li
                key={e.id}
                className="shift-scheduler-input-li"
                style={style}
            >{e.name}</li>
        })}
    </ul>
}

function schedulerInputFilter(list, placeId, input) {
/*    console.log("list: "+list);
    console.log("placeId: "+placeId);*/
    return list
        .filter(e => e.place.id === placeId)
        .filter(e => {
            return e.name.toLowerCase().indexOf(input.toLowerCase()) !== -1
        });
}


export default function ShiftSchedulerPanel(props) {

    var store = useStore();
    const [input, setInput] = useState("");
    var selectedPlaceId = useSelector(state => state.shiftReducer.selectedPlaceId)
    var scheduler = useSelector(state => state.shiftSchedulerReducer)
    var dispatch = useDispatch();
    var [inputListHoverIndex, setInputListHoverIndex] = useState(-1);
    var filteredEmployeeList = schedulerInputFilter(scheduler.employees, selectedPlaceId, input);

    //var change = useEffect(() => setInputListHoverIndex(-1), filteredEmployeeList)



 /*   scheduler.selectedDays.forEach(e => {
        console.log("SELECTED DAY: "+e);})
    console.log("____________________________")

    console.log("input list hover index je: "+inputListHoverIndex)*/


    var currentDate = new Date(2020, 11, 0);
    /*  let avatarStyle = props.comment.avatarImg && isBase64(props.comment.avatarImg, {allowMime: true})
          ? {backgroundImage: props.comment.avatarImg} : {backgroundColor: props.comment.avatarColor};
  */
    function mapDateToCalendar(date) {

        //return new Date(year, month, 0).getDate();
        let numberOfDays = date.getDate();
        var days = ['Nedeľa', 'Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok', 'Sobota']; //todo fetch translation from redux
        // var dayDate;
        var array = [];
        for (let x = 1; x <= numberOfDays ; x++) {
            let dayDate = new Date(date.getFullYear(), date.getMonth(), x)
            let selected = isSelected(scheduler.selectedDays, dayDate.getTime());
            let selectedStyle = selected ? {
                backgroundColor: "rgba(9, 132, 226, 0.8)",
                border: "2px solid rgb(9,132,226)",
                borderRadius: "3px"} : null;

            array.push(
                <li className="shift-scheduler-calendar-li"
                    style={selectedStyle}
                    key={dayDate.getTime()}
                    onClick={() => {dispatch({type: "CALENDAR_DATE_CLICK", dayTimestamp: dayDate.getTime()})}}
                >
                <h2 style={{
                    textAlign: "center",
                    fontSize: "2rem"
                }}>{x}.</h2>
                <p style={{
                    textAlign: "center",
                    fontSize: "0.8rem"
                }}>{days[dayDate.getDay()]}</p>
                </li>)
        }

        return array;
    }

    function getMonthName(num) {
        let months = ["Január","Február","Marec","Apríl","Máj","Jún","Júl","August","September","Október","November","December"]
        return months[num];
    }

    function handleKeyDown(event) {
        if (event.key === "ArrowDown") {
            event.preventDefault();
            setInputListHoverIndex(inputListHoverIndex + 1);
        }
        if (event.key === "ArrowUp") {
            event.preventDefault();
            if (inputListHoverIndex > -1) setInputListHoverIndex(inputListHoverIndex - 1);
        }

    }


    return <div className="post-status-bar"
                style={{width: "100%", minWidth: "440px", position: "relative"}}>

        {/*ARROW */}


        <NextArrow
            style={{top: "200px"}}
            onClick={() => {
            dispatch({type: "SHIFT_SCHEDULER_ARROW_NEXT_CLICK"})
        }}/>

        <div className="shift-scheduler-calendar">
            <div className="shift-scheduler-calendar-header">
                <h2>{getMonthName(scheduler.currentMonth.getMonth())+" "+scheduler.currentMonth.getFullYear()}</h2>
            </div>
            <ul className="shift-scheduler-calendar-ul">

                {mapDateToCalendar(scheduler.currentMonth)}


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


        {/* SEARCH BAR*/}
        <div>
            <TextareaAutosize
                onChange={(event) => {
                    setInput(event.target.value)}}
                onKeyDown={handleKeyDown}
                className={"shift-scheduler-textarea"}

                placeholder="Hľadať zamestnanca..."
                value={input}
            />


        </div>

        <InputList list={filteredEmployeeList}
                   hover={{index: inputListHoverIndex, setIndex: setInputListHoverIndex}}/>

        {/*MAIN CONTENT */}



        <div className="scheduler-content" style={{minHeight: 0}}>

            <SubTitle text="Kaufland Stredočeská"/>
            <h5>oddelenie záhrad:</h5>
            <h2 className="scheduler-date">28.12.2020, Utorok</h2>
            <p style={{fontSize: "0.9rem", marginTop: "15px"}}>16:58 - 18:58:</p>
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

            <div style={{display: "block"}}>

                <div style={{margin: "0 auto", width: "fit-content", userSelect: "none"}}>

                    <span className="scheduler-arrow">⯇</span>
                    <span className="">18:48</span>
                    <span className="scheduler-arrow">⯈</span>
                    <span style={{transform: "translateY(-2px)", display: "inline-block"}}>-</span>
                    <span className="scheduler-arrow">⯇</span>
                    <span className="">20:48</span>
                    <span className="scheduler-arrow">⯈</span>

                </div>
            </div>

                {/*..........*/}

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


            <div style={{display: "block"}}>

                <div style={{margin: "0 auto", width: "fit-content"}}>

                <span className="scheduler-arrow">⯇</span>
                <span className="">18:48</span>
                <span className="scheduler-arrow">⯈</span>
                <span style={{transform: "translateY(-2px)", display: "inline-block"}}>-</span>
                <span className="scheduler-arrow">⯇</span>
                <span className="">20:48</span>
                <span className="scheduler-arrow">⯈</span>

                </div>
            </div>

        </div>



        {/*ARROW */}
        <BackArrow
            style={{top: "200px"}}
            onClick={() => {
            dispatch({type: "SHIFT_SCHEDULER_ARROW_BACK_CLICK"})
        }}/>

    </div>
}