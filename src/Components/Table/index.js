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
            <table className="table">
                <TableHeader />
                <TableBody employees={this.state.employees}/>
                
            </table>
        );
    }

}

export default Table;