import React from "react";
import Avatar from "@material-ui/core/Avatar";
import isBase64 from "is-base64";
import {useDispatch, useSelector} from "react-redux";
import {isEmpty} from "../../../reducers/shiftSchedulerReducer";


export default function EmployeesList(props) {
    let selectedEmployees = useSelector(state => state.shiftSchedulerReducer.selectedEmployees);
    let dispatch = useDispatch();

    console.log("SELECTED EMPLOYEES: " + selectedEmployees)

    function mapEmployees(employee, selectedEmployees) {
        let avatarStyle = employee.avatarImg && isBase64(employee.avatarImg, {allowMime: true})
            ? {backgroundImage: employee.avatarImg} : {backgroundColor: employee.avatarColor};

        let filteredSelectedEmp = selectedEmployees.filter(trackId => trackId === employee.trackId);

        let employeeStyle = filteredSelectedEmp.length > 0 ? {border: "3px solid black"} : null;


        return <li key={employee.id}
                   style={{...employeeStyle}}
                   className="selected-item">
            <div
                //className="shift-element"
                 style={{display: "inline-block", marginTop: "0"}}
                 onClick={() => {
                     dispatch({type: "SELECTED_CLICK", employee: employee})
                 }}
            >
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
                <h2 className="shift-element-header" style={{marginLeft: "5px", marginRight: "15px", top: "2px"}}>
                    {employee.name}
                </h2>

            </div>

            <div className="scheduler-delete-button"
                 onClick={() => {
                     dispatch({type: "SELECTED_REMOVE", employee: employee})
                 }}
            >x
            </div>


        </li>
    }


    return <ul style={{textAlign: "center"}}
    >
        {props.employees.map((e) => mapEmployees(e, selectedEmployees))}
    </ul>
}