import {Component} from "react";
import axios from "axios";

// Tìm kiếm theo tên tỉnh
// Nút hiện 5 tỉnh có cases cao nhất
// Nút hiện 5 tỉnh có deaths cao nhất
// Nút sắp xếp theo cases tăng dần, giảm dần
// Nút sắp xếp theo deaths tăng dần, giảm dần

export default class TestLifeCycle extends Component {
    constructor() {
        super();
        this.state = {
            provinces: [],
            filterProvinces: [],
            inpSearch: '',
            noFilter: 1,
        }
    }

    componentDidMount() {
        axios.get('https://api-kent.netlify.app/.netlify/functions/api/vn').then(x => {
            let arr = [];
            for (const key in x.data.detail) {
                arr.push(x.data.detail[key]);
            }
            this.setState({provinces: arr});
        })
    }

    render() {
        return (
            <>
                <div>Search by name</div>
                <input
                    value={this.state.inpSearch}
                    onChange={(e) => {
                        this.setState({inpSearch: e.target.value});
                    }}
                />

                <div>
                    <button onClick={() => {
                        let sortedProvinces = this.state.provinces.sort((a, b) =>
                            - parseFloat(a.cases.replaceAll('.', '')) + parseFloat(b.cases.replaceAll('.', '')));
                        let maxCases = sortedProvinces.slice(0, 5);
                        this.setState({filterProvinces: maxCases, noFilter: false})
                    }}>Max 5 cases
                    </button>
                </div>

                <div>
                    <button onClick={() => {
                        let sortedProvinces = this.state.provinces.sort((a, b) =>
                            - parseFloat(a.deaths.replaceAll('.', '')) + parseFloat(b.deaths.replaceAll('.', '')));
                        let maxDeaths = sortedProvinces.slice(0, 5);
                        this.setState({filterProvinces: maxDeaths, noFilter: false})
                    }}>Max 5 deaths
                    </button>
                </div>

                <div>
                    <button onClick={() => {
                        let sortedProvinces = this.state.provinces.sort((a, b) =>
                            parseFloat(a.cases.replaceAll('.', '')) - parseFloat(b.cases.replaceAll('.', '')));
                        this.setState({provinces: sortedProvinces, noFilter: true});
                    }}>Sort by cases ↑
                    </button>
                    <button onClick={() => {
                        let sortedProvinces = this.state.provinces.sort((a, b) =>
                            - parseFloat(a.cases.replaceAll('.', '')) + parseFloat(b.cases.replaceAll('.', '')));
                        this.setState({provinces: sortedProvinces, noFilter: true});
                    }}>Sort by cases ↓
                    </button>
                </div>

                <div>
                    <button onClick={() => {
                        let sortedProvinces = this.state.provinces.sort((a, b) =>
                            parseFloat(a.deaths.replaceAll('.', '')) - parseFloat(b.deaths.replaceAll('.', '')));
                        this.setState({provinces: sortedProvinces, noFilter: true});
                    }}>Sort by deaths ↑
                    </button>
                    <button onClick={() => {
                        let sortedProvinces = this.state.provinces.sort((a, b) =>
                            - parseFloat(a.deaths.replaceAll('.', '')) + parseFloat(b.deaths.replaceAll('.', '')));
                        this.setState({provinces: sortedProvinces, noFilter: true});
                    }}>Sort by deaths ↓
                    </button>
                </div>

                <h1>Danh sach</h1>
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Cases</th>
                        <th>Deaths</th>
                        <th>New cases</th>
                    </thead>
                    <tbody>
                        {this.state.noFilter && this.state.provinces
                            .filter((e) => e.name.includes(this.state.inpSearch))
                            .map(e => (
                            <tr>
                                <td>{e.name}</td>
                                <td>{e.cases}</td>
                                <td>{e.deaths}</td>
                                <td>{e.newcases}</td>
                            </tr>
                        ))}

                        {!this.state.noFilter && this.state.filterProvinces
                            .filter((e) => e.name.includes(this.state.inpSearch))
                            .map(e => (
                                <tr>
                                    <td>{e.name}</td>
                                    <td>{e.cases}</td>
                                    <td>{e.deaths}</td>
                                    <td>{e.newcases}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>

            </>
        )
    }

}