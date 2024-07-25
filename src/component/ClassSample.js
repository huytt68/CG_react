import {Component} from 'react';

export default class ClassSample extends Component {
	constructor() {
		super();
		this.state = {
			s: 10,
		};
	}

	render() {
		return (
			<>
				<h1 style={{color: "red"}}>./component/ClassSample</h1>
				<h1>S: {this.state.s}</h1>
				<button
					onClick={() => {
						let newS = this.state.s + 1;
						this.setState({s: newS});
					}}
				>
					S+=2
				</button>
			</>
		);
	}
}
