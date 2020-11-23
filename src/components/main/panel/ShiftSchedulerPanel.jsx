import {useDispatch, useSelector, useStore} from "react-redux";

import React, {useState} from "react";
import {BackArrow, NextArrow} from "../arrows and sliders/Arrows";
import TextareaAutosize from "react-autosize-textarea";
import {SubTitle} from "../title/Title";
import Avatar from "@material-ui/core/Avatar";
import {isSelected} from "../../../logic/shifts/scheduler";
import {getCurrentTimestamp} from "../../../logic/shifts/currentView";
import Department from "./Department";
import {uniqueDepartmentsFilter, uniqueDepartmentsReducer} from "../../../reducers/shiftSchedulerReducer";

function InputList(props) {
    let dispatch = useDispatch();
    var currentDepartmentId = 91354565;//useSelector(state => state.shiftReducer.schedulerSubHeaderDepartmentId);
    var currentPlaceId = 84486565;//useSelector(state => state.shiftReducer.selectedPlaceId);

  //  console.log("SEL DEP ID: "+currentDepartmentId);


    if (props.hover.index > props.list.length - 1) props.hover.setIndex(0);
    return <ul className="shift-scheduler-input-ul">
        {props.list.map((e, i) => {
            let style = props.hover.index === i ? {backgroundColor: "rgb(238, 238, 238)"} : null
            return <li
                onClick={() => dispatch({type: "SCHEDULER_EMPLOYEE_ADD",
                    employeeId: e.id,
                    selectedPlaceId: currentPlaceId,
                    selectedDepartmentId: currentDepartmentId
                }) }
                key={e.id}
                className="shift-scheduler-input-li"
                style={style}
            >{e.name}</li>
        })}
    </ul>
}

function schedulerInputFilter(list, placeId, input) {
    return list
        .filter(e => e.place.id === placeId)
        .filter(e => {
            return e.name.toLowerCase().indexOf(input.toLowerCase()) !== -1
        });
}


export default function ShiftSchedulerPanel(props) {

    const [input, setInput] = useState("");
    var selectedPlaceId = 84486565;//useSelector(state => state.shiftReducer.selectedPlaceId)
    var scheduler = useSelector(state => state.shiftSchedulerReducer)
    var dispatch = useDispatch();
    var [inputListHoverIndex, setInputListHoverIndex] = useState(-1);
    var filteredEmployeeList = schedulerInputFilter(scheduler.employees, selectedPlaceId, input);

    //console.log("SEL PLACE ID: "+selectedPlaceId);
    //var change = useEffect(() => setInputListHoverIndex(-1), filteredEmployeeList)


    /*   scheduler.selectedDays.forEach(e => {
           console.log("SELECTED DAY: "+e);})
       console.log("____________________________")

       console.log("input list hover index je: "+inputListHoverIndex)*/


    /*  let avatarStyle = props.comment.avatarImg && isBase64(props.comment.avatarImg, {allowMime: true})
          ? {backgroundImage: props.comment.avatarImg} : {backgroundColor: props.comment.avatarColor};
  */
    function mapDateToDays(date) {

        //return new Date(year, month, 0).getDate();
        let numberOfDays = date.getDate();
        var days = ['Nedeľa', 'Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok', 'Sobota']; //todo fetch translation from redux
        // var dayDate;
        var array = [];
        for (let x = 1; x <= numberOfDays; x++) {
            let dayDate = new Date(date.getFullYear(), date.getMonth(), x)
            let selected = isSelected(scheduler.selectedDays, dayDate.getTime());
            let selectedStyle = selected ? {
                backgroundColor: "rgba(9, 132, 226, 0.8)",
                border: "2px solid rgb(9,132,226)",
                borderRadius: "3px"
            } : null;

            array.push(
                <li className="shift-scheduler-calendar-li"
                    style={selectedStyle}
                    key={dayDate.getTime()}
                    onClick={() => {
                        dispatch({type: "CALENDAR_DATE_CLICK", dayTimestamp: dayDate.getTime()})
                    }}
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
        let months = ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"]
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
            }}
            timeout={450}
        />

        <div className="shift-scheduler-calendar">
            <div className="shift-scheduler-calendar-header">
                <h2>{getMonthName(scheduler.currentMonth.getMonth()) + " " + scheduler.currentMonth.getFullYear()}</h2>
            </div>
            <ul className="shift-scheduler-calendar-ul">

                {mapDateToDays(scheduler.currentMonth)}

            </ul>
        </div>


        {/* SEARCH BAR*/}
        <div>
            <TextareaAutosize
                onChange={(event) => {
                    setInput(event.target.value)
                }}
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

            {scheduler.selected.map(place => {
                return <div key={place.id}>
                    <SubTitle text={place.name}/>
                    {/*{place.employees.map(e => <Department department={dep}/>)}*/}
                    {place.employees
                        //.filter(uniqueDepartmentsFilter)
                        .reduce(uniqueDepartmentsReducer, [])
                        .map((e,i,a) =>
                            <Department key={e.departmentId}
                                        name={e.departmentName}
                                        employees={place.employees}
                                        id={e.departmentId}
                            />)}
                </div>
            })}

        </div>













        {/*ARROW */}
        <BackArrow
            style={{top: "200px"}}
            onClick={() => {
                dispatch({type: "SHIFT_SCHEDULER_ARROW_BACK_CLICK"})
            }}
            timeout={450}
        />

    </div>
}


/*
TIME CHANGE


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
*/


































































