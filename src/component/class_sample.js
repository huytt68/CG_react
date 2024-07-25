import { Component } from 'react';

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
				Demo Class Component
				<h1>S: {this.state.s}</h1>
				<button
					onClick={() => {
						let newS = this.state.s + 1;
						this.setState({ s: newS });
					}}
				>
					S+=1
				</button>
			</>
		);
	}
}
