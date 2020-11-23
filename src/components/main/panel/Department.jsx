import React from "react";
import EmployeesList from "./EmployeesList";
import {getDayRangeWithDayOfWeek, timestampToShortTime} from "../../../logic/time/timeUtils";
import {
    uniqueDateTimeReducer,
    uniqueDayReducer,
    uniqueDayStarts,
    uniqueTimeReducer
} from "../../../reducers/shiftSchedulerReducer";

export default function Department(props) {

/*    props.employees.forEach(e => console.log("EMPLOYEE: " + e.name + " id: " + e.id + " depId: " + e.departmentId))
    console.log("_____________")*/

    let dayStarts = props.employees.filter(e => e.departmentId === props.id);

    return <div /*style={{marginBottom: "15px"}}*/>
        <h5>{props.name}:</h5>


        {/*vsetky employee.dayStart dni pre ktore plati že em.depId = props.depId */}


        {dayStarts
            /*.map(e => {
                return {start: e.dayStart, end: e.dayEnd}
            })*/
            // .filter(uniqueDayStarts)

            .reduce(uniqueTimeReducer, [])
            .reduce(uniqueDateTimeReducer, [])
            .map((day) => {
                return <div key={Math.random()}>
                    {/*<h2 className="scheduler-date">{getDayRangeWithDayOfWeek(new Date(day.dayStart), new Date(day.dayEnd))}</h2>*/}
                    <h2 className="scheduler-date">{getDayRangeWithDayOfWeek(new Date(day.shiftStart), new Date(day.shiftEnd))}</h2>

                    {dayStarts
                        // .filter(d => d.dayStart === day.dayStart && d.dayEnd === day.dayEnd)
                        .filter(d => d.shiftStart === day.shiftStart && d.shiftEnd === day.shiftEnd
                            || d.shiftStart === day.shiftStart && d.shiftEnd !== day.shiftEnd
                        )
                        //distinct
                        .reduce(uniqueTimeReducer, [])

                        // .reduce(uniqueDateTimeReducer, [])
                        //.map(d => {return {start: d.shiftStart, end: d.shiftEnd, employee: d}})
                        .map(e => {
                            return <div>
                                <p style={{
                                    fontSize: "0.9rem",
                                    marginTop: "15px",
                                    textAlign: "center",
                                    marginBottom: "2px"
                                }}>
                                    {timestampToShortTime(e.shiftStart)}
                                    &nbsp;-&nbsp;
                                    {timestampToShortTime(e.shiftEnd)}</p>
                                <EmployeesList
                                    employees={dayStarts.filter(d => d.shiftStart === day.shiftStart && d.shiftEnd === day.shiftEnd)}/> {/*todo filte addr*/}
                            </div>
                        })}

                </div>
            })}


    </div>
}