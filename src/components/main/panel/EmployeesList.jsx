import React from "react";
import Avatar from "@material-ui/core/Avatar";
import isBase64 from "is-base64";

function mapEmployees(employee) {
    let avatarStyle = employee.avatarImg && isBase64(employee.avatarImg, {allowMime: true})
        ? {backgroundImage: employee.avatarImg} : {backgroundColor: employee.avatarColor};


    return <li className="selected-item">
        <div className="shift-element" style={{display: "inline-block"}}>
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
            <h2 className="shift-element-header" style={{margin: "5px", marginRight: "0px"}}>
                {employee.name}
            </h2>
            <span className="scheduler-delete-button">x</span>
        </div>


    </li>
}

export default function EmployeesList(props) {
    return <ul style={{marginTop: "0px"}}>
        {props.employees.map(mapEmployees)}
    </ul>
}