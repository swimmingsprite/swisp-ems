import React from "react";
import EmployeesList from "./EmployeesList";
import {getDayRangeWithDayOfWeek, timestampToShortTime} from "../../../logic/time/timeUtils";

export default function Department(props) {
    return <div style={{marginBottom: "15px"}}>
        <h5>{props.department.name}:</h5>

        {props.department.days.map((day) => {
            return <div>
                <h2 className="scheduler-date">{getDayRangeWithDayOfWeek(new Date(day.start), new Date(day.end))}</h2>

                {day.times.map(time => {
                    return <div>
                        <p style={{fontSize: "0.9rem", marginTop: "15px", textAlign: "center", marginBottom: "2px"}}>
                            {timestampToShortTime(time.start)}
                            &nbsp;-&nbsp;
                            {timestampToShortTime(time.end)}</p>
                        <EmployeesList employees={time.employees}/>
                    </div>
                })}

            </div>
        })}


    </div>
}