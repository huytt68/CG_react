import {useState} from "react";

const FProduct = () => {
	const [products, setProducts] = useState([
		{id: '1', name: 'TV', price: 200000},
		{id: '2', name: 'fan', price: 100000},
		{id: '3', name: 'table', price: 150000},
	]);
	const [inpSearch, setInpSearch] = useState('');
	const [inpID, setInpID] = useState('');
	const [inpName, setInpName] = useState('');
	const [inpPrice, setInpPrice] = useState('');
	const [alert, setAlert] = useState(false);

	const onClickAddProduct = () => {
		if (inpID !== '' && inpName !== '' && inpPrice !== '') {
			const newProduct = {id: inpID, name: inpName, price: parseFloat(inpPrice)};
			setProducts([...products, newProduct]);
			setInpID('');
			setInpName('');
			setInpPrice('');
			setAlert(false);
			console.log(products);
		} else {
			setAlert(true)
		}
	}

	return (
		<>
			<h1 style={{color: 'red'}}>./components/FProduct</h1>
			<input
				value={inpSearch}
				placeholder={'Search by name'}
				onChange={e => setInpSearch(e.target.value)}
			/>
			<div>
				<input
					value={inpID}
					placeholder={'ID'}
					onChange={e => setInpID(e.target.value)}/>
				<input
					value={inpName}
					placeholder={'Name'}
					onChange={e => setInpName(e.target.value)}/>
				<input
					type={'number'}
					value={inpPrice}
					placeholder={'Price'}
					onChange={e => setInpPrice(e.target.value)}/>
				<button onClick={onClickAddProduct}>Add</button>
				{alert && <span>Please complete the form!</span>}
			</div>

			<h2 style={{color: 'blue'}}>List Products</h2>
			<h4 style={{color: 'blue'}}>id - name : price</h4>
			{products.filter(e => e.name.toLowerCase().includes(inpSearch.toLowerCase()))
				.map(product => (
					<div>{product.id} - {product.name} : {product.price}</div>
				))}
		</>
	)
}

export default FProduct;