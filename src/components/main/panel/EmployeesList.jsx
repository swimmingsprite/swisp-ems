import React from "react";
import Avatar from "@material-ui/core/Avatar";
import isBase64 from "is-base64";
import {useDispatch, useSelector} from "react-redux";
import {isEmpty} from "../../../reducers/shiftSchedulerReducer";


export default function EmployeesList(props) {
    let selectedEmployees = useSelector(state => state.shiftSchedulerReducer.selectedEmployees);
    let dispatch = useDispatch();

    console.log("SELECTED EMPLOYEES: "+selectedEmployees)

    function mapEmployees(employee, selectedEmployees) {
        let avatarStyle = employee.avatarImg && isBase64(employee.avatarImg, {allowMime: true})
            ? {backgroundImage: employee.avatarImg} : {backgroundColor: employee.avatarColor};

        let filteredSelectedEmp = selectedEmployees.filter(trackId => trackId === employee.trackId);
        console.log("filtered selected emp length: "+filteredSelectedEmp.length)
        console.log("employee track id: "+employee.trackId)
        console.log("employee name: "+employee.name)
        console.log("_____________________________");
        let employeeStyle = filteredSelectedEmp.length > 0 ? {border: "3px solid black"} : null;


        return <li key={employee.id} className="selected-item">
            <div className="shift-element" style={{display: "inline-block", ...employeeStyle}}>
                <Avatar className="post-avatar" style={
                    {
                        height: "20px",
                        width: "20px",
                        backgroundColor: avatarStyle.backgroundColor,
                        fontSize: "0.85rem",
                        marginRight: 0,
                        marginLeft: "5px",
                    }}
                        src={avatarStyle.backgroundImage}
                >
                    {employee.name.charAt(0)}
                </Avatar>
                <h2 className="shift-element-header" style={{margin: "5px", marginRight: "15px"}}>
                    {employee.name}
                </h2>
                <span className="scheduler-delete-button"
                      //onClick={}
                >x</span>
            </div>


        </li>
    }





    return <ul style={{textAlign: "center"}}
    >
        {props.employees.map((e) => mapEmployees(e, selectedEmployees))}
    </ul>
}