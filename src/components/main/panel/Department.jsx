import React from "react";
import {SubTitle} from "../title/Title";
import Avatar from "@material-ui/core/Avatar";
import EmployeesList from "./EmployeesList";

export default function Department(props) {
    return <div>

        <SubTitle text="Kaufland Stredočeská"/>
        <h5>oddelenie záhrad:</h5>

        {props.department.days.map((day) =>{
            return <div>
                <h2 className="scheduler-date">day.start{/*28.12.2020, Utorok*/}</h2>
                {day.times.map(time => {
                    return <div>
                        <p style={{fontSize: "0.9rem", marginTop: "15px"}}>{time.start.toLocaleTimeString()} - {time.end.toLocaleTimeString()}</p>
                        <EmployeesList employees={time.employees}/>
                    </div>
                })}
            </div>
            })}



    </div>
}