import React, { Component } from "react";
import API from "../../utils/API";
import TableHeader from "../TableHeader/index";
import TableBody from "../TableBody/index";
import "./style.css";

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            search: ""
        };
        this.compareBy.bind(this);
        this.sortBy.bind(this);
        this.handleSearchChange.bind(this);
    }

    handleSearchChange = event => {
        this.setState({ search: event.target.value });
        this.setState({
            employees: this.state.employees.filter(
                emp => (emp.name.first.toLowerCase()).includes(this.state.search.toLowerCase())
            )
        });
    }

    compareBy() {
        return function (a, b) {
            const firstName = a.name.first;
            const secondName = b.name.first;

            if (firstName < secondName) return -1;
            if (firstName > secondName) return 1;
            return 0;
        };
    }

    sortBy() {
        let arrayCopy = [...this.state.employees];
        arrayCopy.sort(this.compareBy());
        this.setState({ employees: arrayCopy });
    }

    componentDidMount() {
        API.getRandomEmployee()
            .then(res => this.setState({ employees: res.data.results }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <button onClick={() => this.sortBy()} type="button" className="btn btn-dark mt-3 ml-3 mb-4">Sort By First Name</button>
                <input
                    value={this.state.search}
                    type="search"
                    class="form-control ml-3"
                    placeholder="Search By First Name"
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                    onChange={this.handleSearchChange}
                />
                <table className="table">
                    <TableHeader />
                    <TableBody employees={this.state.employees} />

                </table>
            </div>
        );
    }

}

export default Table;