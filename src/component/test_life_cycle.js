import {Component} from "react";
import axios from "axios";

export default class TestLifeCycle extends Component {
    constructor() {
        super();
        this.state = {
            provinces: []
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
                <h1>Danh sach</h1>

                <button onClick={() => {
                    console.log(this.state.provinces)
                }}>log
                </button>

                <button onClick={() => {
                    let sortedProvinces = this.state.provinces.sort((a, b) => a.cases - b.cases);
                    this.setState({provinces: sortedProvinces});
                }}>Sap xep a-z
                </button>

                {this.state.provinces.map(e => (
                    <h3>{e.name}- {e.cases}-{e.deaths}-{e.newcases}</h3>
                ))}

            </>
        )
    }

}