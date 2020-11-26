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

    let dayStarts = props.employees.filter(e => e.departmentId === props.id);

    return <div /*style={{marginBottom: "15px"}}*/>
        <h5>{props.name}:</h5>


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

                        .map(e => {

                        return <div
                        key={e.id}
                        >
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

                    }/> {/*todo filte addr*/}
                        </div>
                    })}

                </div>
            })}


    </div>
}