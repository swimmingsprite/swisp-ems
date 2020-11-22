import React from "react";
import {SubTitle} from "../title/Title";
import Avatar from "@material-ui/core/Avatar";
import EmployeesList from "./EmployeesList";

export default function Department(props) {
    return <div>


        <h5>{props.department.name}:</h5>

        {props.department.days.map((day) =>{
            return <div>
                <h2 className="scheduler-date">{new Date(day.start).getDate()}{/*28.12.2020, Utorok*/}</h2>
                {day.times.map(time => {
                    return <div>
                        <p style={{fontSize: "0.9rem", marginTop: "15px"}}>{new Date(time.start).toLocaleTimeString()}
                        - {new Date(time.end).toLocaleTimeString()}</p>
                        <EmployeesList employees={time.employees}/>
                    </div>
                })}
            </div>
            })}



    </div>
}