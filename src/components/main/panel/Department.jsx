import React, {useMemo, useState} from "react";
import EmployeesList from "./EmployeesList";
import {getDayRangeWithDayOfWeek, isSameDate, timestampToShortTime} from "../../../logic/time/timeUtils";
import {
    isSameDateRange,
    uniqueDateReducer,
    uniqueDateTimeReducer,
    uniqueDayReducer,
    uniqueDayStarts,
    uniqueTimeReducer
} from "../../../reducers/shiftSchedulerReducer";
import {useDispatch, useSelector} from "react-redux";

let intervalId = null;
let timeValue = 60000 * 5;
let slideCount = 0;



function startSlide(dispatchFunc) {
    dispatchFunc(timeValue);
    intervalId = setInterval(() => {
        slideCount++;

        if (slideCount > 30) endSlide();
        if (slideCount > 8) timeValue = 60000 * 180;
        else if (slideCount > 5) timeValue = 60000 * 60;
        else if (slideCount > 2) timeValue = 60000 * 15;
        dispatchFunc(timeValue);
    }, 200);
}

function endSlide() {
    clearInterval(intervalId);
    intervalId = null;
    timeValue = 60000 * 5;
    slideCount = 0;
}

export default function Department(props) {

    let isEmployeesSelected = useSelector(state => state.shiftSchedulerReducer.selectedEmployees).length > 0;
    let dayStarts = props.employees.filter(e => e.departmentId === props.id);
    let dispatch = useDispatch();
    let [selectedDepartments, setSelectedDepartments] = useState(new Map());
   // let getSelected = useMemo(() => allSelected, [allSelected]);
    var dispatchedAll = false;

    return <div /*style={{marginBottom: "15px"}}*/ style={{position: "relative"}}>
        <h5>{props.name}:</h5>
        <input
             onChange={(event) => {
                 if (event.target.checked) {
                     console.log("selecting");
                     selectedDepartments.set(props.id, false)
                     setSelectedDepartments(new Map(selectedDepartments));
                 }
                 else {
                     selectedDepartments.delete(props.id);
                     //dispatch
                     setSelectedDepartments(new Map(selectedDepartments))
                 }
             }}
            style={{top: 0, right: "15px", position: "absolute"}}
            type={"checkbox"} />


        {dayStarts

            .reduce(uniqueDateReducer, [])

            .map((day) => {

                return <div key={Math.random()}>
                    <h2 className="scheduler-date">{getDayRangeWithDayOfWeek(new Date(day.shiftStart), new Date(day.shiftEnd))}</h2>

                    {dayStarts
                        .filter(d => {
                            //zaciatok a koniec smeny su rovnaky den
                            if (isSameDate(new Date(day.shiftStart), new Date(day.shiftEnd))) {
                                if (isSameDate(new Date(d.shiftStart), new Date(day.shiftStart))
                                    && isSameDate(new Date(d.shiftEnd), new Date(day.shiftEnd))
                                ) return true;
                                return false;
                            }

                            //zaciatok a koniec smeny nie su rovnaky den
                            else {

                                if (!isSameDate(new Date(d.shiftStart), new Date(d.shiftEnd))
                                    && d.shiftEnd <= day.shiftEnd && d.shiftStart >= day.shiftStart
                                ) return true

                                return false;
                            }

                        })


                        //distinct
                        .reduce(uniqueTimeReducer, [])

                        .map((e,i, a) => {
                            //todo if all selected is true add to selected


                            return <div
                                key={e.id}
                            >
                                {isEmployeesSelected ?
                                <div className="scheduler-date" style={{userSelect: "none"}}>
                                    <span className="scheduler-arrow"
                                          onMouseDown={() => {startSlide(() => dispatch({type: "SHIFT_START_BACK_CLICK"
                                              , value: timeValue}))}}
                                          onMouseUp={() => {endSlide()}}
                                          onTouchStart={() => {startSlide(() => dispatch({type: "SHIFT_START_BACK_CLICK"
                                              , value: timeValue}))}}
                                          onTouchEnd={() => {endSlide()}}
                                          onMouseOut={() => endSlide()}
                                    >⯇</span>
                                    <span >{timestampToShortTime(e.shiftStart)}</span>
                                    <span className="scheduler-arrow"
                                          onMouseDown={() => {startSlide(() => dispatch({type: "SHIFT_START_NEXT_CLICK"
                                              , value: timeValue}))}}
                                          onMouseUp={() => {endSlide()}}
                                          onTouchStart={() => {startSlide(() => dispatch({type: "SHIFT_START_NEXT_CLICK"
                                              , value: timeValue}))}}
                                          onTouchEnd={() => {endSlide()}}
                                          onMouseOut={() => endSlide()}
                                    >⯈</span>
                                    <span style={{transform: "translateY(-2px)", display: "inline-block"}}>-</span>
                                    <span className="scheduler-arrow"
                                          onMouseDown={() => {startSlide(() => dispatch({type: "SHIFT_END_BACK_CLICK"
                                              , value: timeValue}))}}
                                          onMouseUp={() => {endSlide()}}
                                          onTouchStart={() => {startSlide(() => dispatch({type: "SHIFT_END_BACK_CLICK"
                                              , value: timeValue}))}}
                                          onTouchEnd={() => {endSlide()}}
                                          onMouseOut={() => endSlide()}
                                    >⯇</span>
                                    <span >{timestampToShortTime(e.shiftEnd)}</span>
                                    <span className="scheduler-arrow"
                                          onMouseDown={() => {startSlide(() => dispatch({type: "SHIFT_END_NEXT_CLICK"
                                              , value: timeValue}))}}
                                          onMouseUp={() => {endSlide()}}
                                          onTouchStart={() => {startSlide(() => dispatch({type: "SHIFT_END_NEXT_CLICK"
                                              , value: timeValue}))}}
                                          onTouchEnd={() => {endSlide()}}
                                          onMouseOut={() => endSlide()}
                                    >⯈</span>
                                </div>
                                :
                                <p style={{
                                    fontSize: "0.9rem",
                                    marginTop: "15px",
                                    textAlign: "center",
                                    marginBottom: "2px"
                                }}>
                                    {timestampToShortTime(e.shiftStart)}
                                    &nbsp;-&nbsp;
                                    {timestampToShortTime(e.shiftEnd)}</p>}

                                <EmployeesList
                                    employees={
                                        dayStarts
                                            .map((e, i, a) => {
                                                if (selectedDepartments.has(props.id) && !selectedDepartments.get(props.id)) {
                                                    console.log("SELECTED JE TRUE");
                                                    dispatch({type: "MULTIPLE_SELECTED", employees: a});
                                                    selectedDepartments.set(props.id, true);
                                                }
                                                return e
                                            })
                                            .filter(d => {
                                            return d.shiftStart === e.shiftStart && d.shiftEnd === e.shiftEnd
                                        })


                                    }/> {/*todo filte addr*/}
                            </div>
                        })}

                </div>
            })}


    </div>
}