import {Component} from "react";

export default class Calculator extends Component {
	constructor() {
		super();
		this.state = {
			num1: '',
			num2: '',
			operator: '',
			result: '',
		}
	}

	handleClickEqual = () => {
		const {num1, num2, operator} = this.state;
		switch (operator) {
			case '+':
				this.setState({result: parseFloat(num1) + parseFloat(num2)});
				break;
			case '-':
				this.setState({result: parseFloat(num1) - parseFloat(num2)});
				break;
			case 'x':
				this.setState({result: parseFloat(num1) * parseFloat(num2)});
				break;
			case ':':
				if (num2 === '0') {
					this.setState({result: 'Cannot div by 0'});
				} else {
					this.setState({result: parseFloat(num1) / parseFloat(num2)});
				}
				break;
			default:
				this.setState({result: 'Please choose a operator'});
		}
	}

	render() {
		const {num1, num2, operator, result} = this.state;
		return (
			<>
				<h1 style={{color: "red"}}>./component/Calculator</h1>
				<input
					type='number'
					value={num1}
					onChange={e => {
						this.setState({num1: e.target.value});
					}}/>
				<span> {operator} </span>
				<input
					type='number'
					value={num2}
					onChange={e => {
						this.setState({num2: e.target.value});
					}}/>
				<button onClick={this.handleClickEqual}>=</button>
				<span> {result} </span>
				<div>
					<button onClick={() => {
						this.setState({operator: '+'});
					}}>+
					</button>
					<button onClick={() => {
						this.setState({operator: '-'});
					}}>-
					</button>
					<button onClick={() => {
						this.setState({operator: 'x'});
					}}>x
					</button>
					<button onClick={() => {
						this.setState({operator: ':'});
					}}>:
					</button>
				</div>
				<div>
					<button onClick={() => {
						this.setState({num1: '', num2: '', operator: '', result: ''});
					}}>CLEAR
					</button>
				</div>
			</>
		)
	}
}