import React from "react";
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

            // .reduce(uniqueTimeReducer, [])
            // .reduce(uniqueDateTimeReducer, [])
            .reduce(uniqueDateReducer, [])

            .map((day) => {
                //if (day.shiftStart !== day.shiftEnd) console.log("day shift start je: "+day.shiftStart+"day shift end je: "+day.shiftEnd)
                /*console.log("day shift start je: "+day.shiftStart+"day shift end je: "+day.shiftEnd)
                console.log("________________________________________________________")
*/
                return <div key={Math.random()}>
                    {/*<h2 className="scheduler-date">{getDayRangeWithDayOfWeek(new Date(day.dayStart), new Date(day.dayEnd))}</h2>*/}
                    <h2 className="scheduler-date">{getDayRangeWithDayOfWeek(new Date(day.shiftStart), new Date(day.shiftEnd))}</h2>

                    {dayStarts
                        // .filter(d => d.dayStart === day.dayStart && d.dayEnd === day.dayEnd)
                        /*.filter(d => d.shiftStart === day.shiftStart && d.shiftEnd === day.shiftEnd
                            || d.shiftStart === day.shiftStart && d.shiftEnd !== day.shiftEnd
                        )*/
                        /*.filter(d => {return isSameDateRange(day, d)}
                            /!*
                            || d.shiftStart === day.shiftStart && d.shiftEnd !== day.shiftEnd*!/
                        )
                        */
                        /* .map(e => {
                             if (e.id === 654324456454) console.log("UNIKATNE MENO________---")
                             return e;
                     })*/
                        /*.filter(d => {
                                if (d.id === 654324456454)
                                    console.log("______________------UNIKATNE MENO start: " + new Date(d.shiftStart)
                                        + " end: " + new Date(d.shiftEnd)
                                    );
                                    console.log("day start: " + new Date(day.shiftStart)
                                    + " end: " + new Date(day.shiftEnd)
                                );
                                if ((d.shiftStart >= day.shiftStart && d.shiftStart <= day.shiftEnd)
                                    && (d.shiftEnd <= day.shiftEnd && d.shiftStart >= day.shiftStart)
                                )
                                    return true
                            }
                            /!*
                            || d.shiftStart === day.shiftStart && d.shiftEnd !== day.shiftEnd*!/
                        )*/
                        .filter(d => {
                            //datumy su rovnake
                            if (isSameDate(new Date(day.shiftStart), new Date(day.shiftEnd))) {
                                if (isSameDate(new Date(d.shiftStart), new Date(day.shiftStart))
                                    && isSameDate(new Date(d.shiftEnd), new Date(day.shiftEnd))
                                ) return true;
                                return false;
                            }

                            //datumy su rozdielne
                            else {
                                if (isSameDate(new Date(d.shiftStart), new Date(day.shiftStart))
                                    && isSameDate(new Date(d.shiftEnd), new Date(day.shiftEnd))
                                ) return true;
                                /*if (isSameDate(new Date(d.shiftStart), new Date(day.shiftStart))
                                && (d.shiftEnd <= day.shiftEnd)
                                ) return true;*/
                                return true;
                            }
                            //&& d.shiftStart <= day.shiftEnd)
                            //&& (d.shiftEnd <= day.shiftEnd && d.shiftStart >= day.shiftStart)
                        })
                        //return true

                        /*
                        || d.shiftStart === day.shiftStart && d.shiftEnd !== day.shiftEnd*/


                        //distinct
                        .reduce(uniqueTimeReducer, [])
                        // .reduce(uniqueDateReducer, [])

                        //.reduce(uniqueDateTimeReducer, [])
                        //.map(d => {return {start: d.shiftStart, end: d.shiftEnd, employee: d}})
                        .map(e => {
                        /*console.log(JSON.stringify(day))
                        console.log("__________________")*/
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
                        employees={
                        dayStarts.filter(d => {
                            return d.shiftStart === e.shiftStart && d.shiftEnd === e.shiftEnd
                        })


                        //day

                        /*dayStarts.filter(d => {
                        /!*console.log("day shift start: "+day.shiftStart+" d shift start: "+d.shiftStart
                            +" day shift end: "+day.shiftEnd+" d shift end: "+d.shiftEnd
                        )*!/
                        return ((d.shiftStart === day.shiftStart && d.shiftEnd === day.shiftEnd))
                        // || (d.shiftStart === day.shiftStart && d.shiftEnd !== day.shiftEnd)
                    }

                    )*/


                    }/> {/*todo filte addr*/}
                        </div>
                    })}

                </div>
            })}


    </div>
}