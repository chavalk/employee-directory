import React, { Component } from "react";
import API from "../../utils/API";
import TableHeader from "../TableHeader/index";

class Table extends Component {
    state = {
        employees: []
    };

    componentDidMount() {
        API.getRandomEmployee()
            .then(res => this.setState({ employees: res.data.results }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <table className="table">
                <TableHeader />
                <tbody>
                    {this.state.employees.map(result => (
                        <tr>
                            <td>{result.name.first}</td>
                            <td>{result.name.last}</td>
                            <td>{result.location.country}</td>
                            <td>{result.dob.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

}

export default Table;