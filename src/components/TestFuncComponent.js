import {useState} from "react";

export function TestFuncComponent() {
	let [num1, setNum1] = useState('');
	let [num2, setNum2] = useState('');
	let [operator, setOperator] = useState('');
	let [result, setResult] = useState('');

	let handleClickEqual = () => {
		switch (operator) {
			case '+':
				setResult(parseFloat(num1) + parseFloat(num2));
				break;
			case '-':
				setResult(parseFloat(num1) - parseFloat(num2));
				break;
			case 'x':
				setResult(parseFloat(num1) * parseFloat(num2));
				break;
			case ':':
				if (num2 === '0') {
					setResult('Cannot div by 0');
				} else {
					setResult(parseFloat(num1) / parseFloat(num2));
				}
				break;
			default:
				setResult('Please choose a operator');
		}
	}

	return (
		<>
			<h1 style={{color: "red"}}>./components/TestFuncComponent</h1>
			<input
				type='number'
				value={num1}
				onChange={e => {
					setNum1(e.target.value);
				}}/>
			<span> {operator} </span>
			<input
				type='number'
				value={num2}
				onChange={e => {
					setNum2(e.target.value);
				}}/>
			<button onClick={handleClickEqual}>=</button>
			<span> {result} </span>
			<div>
				<button onClick={() => {
					setOperator('+');
				}}>+
				</button>
				<button onClick={() => {
					setOperator('-');
				}}>-
				</button>
				<button onClick={() => {
					setOperator('x');
				}}>x
				</button>
				<button onClick={() => {
					setOperator(':');
				}}>:
				</button>
			</div>
			<div>
				<button onClick={() => {
					setNum1('');
					setNum2('');
					setOperator('');
					setResult('');
				}}>CLEAR
				</button>
			</div>
		</>
	)
};