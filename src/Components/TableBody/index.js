import React from "react";

function TableBody(props) {
    return (
        <tbody>
            {props.employees.map(employee => (
                <tr>
                    <td>{employee.name.first}</td>
                    <td>{employee.name.last}</td>
                    <td>{employee.location.country}</td>
                    <td>{employee.dob.age}</td>
                </tr>
            ))}
        </tbody>
    );
}

export default TableBody;