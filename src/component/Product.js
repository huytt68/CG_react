import {Component} from 'react';

export default class Product extends Component {
	constructor() {
		super();
		this.state = {
			products: [
				{id: '1', name: 'television', price: 2000000},
				{id: '2', name: 'fan', price: 300000},
				{id: '3', name: 'table', price: 400000},
			],
			newProduct: {
				id: '',
				name: '',
				price: '',
			},
			inpSearch: '',
		};
	}

	render() {
		return (
			<>
				<h1 style={{color: "red"}}>./component/Product</h1>
				{/*Them san pham*/}
				<div>Them san pham</div>
				<input
					value={this.state.newProduct.id}
					onChange={(e) => {
						this.setState({
							newProduct: {...this.state.newProduct, id: e.target.value},
						});
					}}
					placeholder={'ID san pham'}
				/>
				<input
					value={this.state.newProduct.name}
					onChange={(e) => {
						this.setState({
							newProduct: {...this.state.newProduct, name: e.target.value},
						});
					}}
					placeholder={'Ten san pham'}
				/>
				<input
					type="number"
					value={this.state.newProduct.price}
					onChange={(e) => {
						this.setState({
							newProduct: {...this.state.newProduct, price: e.target.value},
						});
					}}
					placeholder={'Gia san pham'}
				/>
				<button
					onClick={() => {
						this.setState({
							products: [...this.state.products, this.state.newProduct],
							newProduct: {id: '', name: '', price: ''},
						});
					}}
				>
					Them
				</button>

				{/*Tim kiem*/}
				<div>Tim kiem san pham</div>
				<input
					value={this.state.inpSearch}
					onChange={(e) => {
						this.setState({inpSearch: e.target.value});
					}}
				/>

				{/*Sap xep san pham*/}
				<div>
					<button
						onClick={() => {
							let sortedProducts = this.state.products.sort(
								(a, b) => a.price - b.price
							);
							this.setState({products: sortedProducts});
						}}
					>
						Sap xep a-z
					</button>

					<button
						onClick={() => {
							let sortedProducts = this.state.products.sort(
								(a, b) => b.price - a.price
							);
							this.setState({products: sortedProducts});
						}}
					>
						Sap xep z-a
					</button>
				</div>

				{/*Danh sach san pham*/}
				<h2 style={{color: 'blue'}}>DANH SÁCH SẢN PHẨM</h2>
				{this.state.products
					.filter((e) => e.name.includes(this.state.inpSearch))
					.map((e) => (
						<div>
							<h2>
								{e.name} : {e.price}
							</h2>
						</div>
					))}
			</>
		);
	}
}
