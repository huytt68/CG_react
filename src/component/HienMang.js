import {Component} from "react";

export default class HienMang extends Component {
	constructor() {
		super();
		this.state= {
			element: '',
			arr:[1,2,3],
		}
	}

	render() {
		return (
			<>
				<h1>
					MẢNG: [{this.state.arr.map(e => (<span>{e}, </span>))}]
				</h1>

				<input value={this.state.element} onChange={(e) => {
					this.setState({element: e.target.value});
				}}/>

				<button onClick={(e) => {
					this.setState({element: '', arr: [...this.state.arr, this.state.element], inputArr:''});
				}}>Add Element</button>
			</>
		)
	}
}