import React from "react";
import EmployeesList from "./EmployeesList";
import {getDayRangeWithDayOfWeek, timestampToShortTime} from "../../../logic/time/timeUtils";
import {uniqueDayStarts} from "../../../reducers/shiftSchedulerReducer";

export default function Department(props) {

    props.employees.forEach(e => console.log("EMPLOYEE: "+e.name+" id: "+e.id+" depId: "+e.departmentId))
    console.log("_____________")

    let dayStarts = props.employees.filter(e=> e.departmentId === props.id);

    return <div style={{marginBottom: "15px"}}>
        <h5>{props.name}:</h5>


        {/*vsetky employee.dayStart dni pre ktore plati že em.depId = props.depId */}



        {dayStarts
            .map(e => {return {start: e.dayStart, end: e.dayEnd}})
            .map((day) => {
            return <div key={Math.random()}>
                <h2 className="scheduler-date">{getDayRangeWithDayOfWeek(new Date(day.start), new Date(day.end))}</h2>

                {dayStarts
                    .filter(d => d.dayStart === day.start && d.dayEnd === day.end)
                    //distinct
                    .map(d => {return {start: d.shiftStart, end: d.shiftEnd}})
                    .map(time => {
                    return <div>
                        <p style={{fontSize: "0.9rem", marginTop: "15px", textAlign: "center", marginBottom: "2px"}}>
                            {timestampToShortTime(time.start)}
                            &nbsp;-&nbsp;
                            {timestampToShortTime(time.end)}</p>
                        {/*<EmployeesList employees={time.employees}/>*/}
                    </div>
                })}

            </div>
        })}


    </div>
}