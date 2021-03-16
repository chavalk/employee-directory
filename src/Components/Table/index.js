import React, { Component } from "react";
import API from "../../utils/API";
import TableHeader from "../TableHeader/index";
import TableBody from "../TableBody/index";
import SortButton from "../SortButton/index";

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
            <SortButton />
            <table className="table">
                <TableHeader />
                <TableBody employees={this.state.employees}/>
                
            </table>
            </div>
        );
    }

}

export default Table;