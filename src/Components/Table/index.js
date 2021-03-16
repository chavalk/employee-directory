import React, { Component } from "react";
import API from "../../utils/API";
import TableHeader from "../TableHeader/index";
import TableBody from "../TableBody/index";


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
            <div>
                <button type="button" className="btn btn-dark ml-3 mb-4">Sort By First Name</button>
                <table className="table">
                    <TableHeader />
                    <TableBody employees={this.state.employees} />

                </table>
            </div>
        );
    }

}

export default Table;