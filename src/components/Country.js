import {useEffect, useState} from "react";
import axios from "axios";

const Country = () => {
	const [countries, setCountries] = useState([]);
	const [filteredCountries, setFilteredCountries] = useState([]);
	const [inpSearch, setInpSearch] = useState("");
	const [areaRange, setAreaRange] = useState({min: '', max: ''});
	const [popRange, setPopRange] = useState({min: '', max: ''});
	const [noFilter, setNoFilter] = useState(true);
	const [alert, setAlert] = useState(false);
	const [option, setOption] = useState('')

	useEffect(() => {
		axios.get(`https://restcountries.com/v3.1/all?fields=name,area,population,flags,capital,region`).then((response) => {
			setCountries(response.data)
		})
	}, []);

	const onClickSearchByArea = () => {
		const {min, max} = areaRange;
		let filtered = [];
		if (min === '' && max === '') {
			setAlert(true);
		} else {
			if (min === '' && max !== '') {
				filtered = countries.filter(e => e.area <= max);
			} else if (min !== '' && max === '') {
				filtered = countries.filter(e => e.area >= min);
			} else {
				filtered = countries.filter(e => e.area <= max && e.area >= min)
			}
			console.log(filtered);
			filtered = filtered.sort((a, b) => a.area - b.area);
			console.log(filtered);
			setFilteredCountries(filtered);
			setNoFilter(false);
			setAlert(false);
		}
	}

	const onClickSearchByPop = () => {
		const {min, max} = popRange;
		let filtered = [];
		if (min === '' && max === '') {
			setAlert(true);
		} else {
			if (min === '' && max !== '') {
				filtered = countries.filter(e => e.population <= max);
			} else if (min !== '' && max === '') {
				filtered = countries.filter(e => e.population >= min);
			} else {
				filtered = countries.filter(e => e.population <= max && e.population >= min)
			}
			console.log(filtered);
			filtered = filtered.sort((a, b) => a.population - b.population);
			console.log(filtered);
			setFilteredCountries(filtered);
			setNoFilter(false);
			setAlert(false);
		}
	}

	const onClickClearFilter = () => {
		setNoFilter(true);
		setAreaRange({min: '', max: ''})
		setPopRange({min: '', max: ''})
		setAlert(false)
	}

	return (
		<>
			<h1 style={{color: 'red'}}>./components/Country</h1>
			<div>
				<span style={{color: 'blue'}}>Search by area:</span>
				<input
					value={inpSearch}
					onChange={e => {
						setInpSearch(e.target.value);
					}}
					placeholder={'Name'}/>
			</div>
			{/*Seach by population*/}
			<div>
				<span style={{color: 'blue'}}>Search by area:</span>
				<input
					type={'number'}
					value={areaRange.min}
					onChange={e => {
						setAreaRange({...areaRange, min: e.target.value.trim()});
					}}
					placeholder={'From'}
				/>
				<input
					type={'number'}
					value={areaRange.max}
					onChange={e => {
						setAreaRange({...areaRange, max: e.target.value.trim()});
					}}
					placeholder={'to'}
				/>
				<button onClick={onClickSearchByArea}>Search</button>
			</div>
			{/*Seach by population*/}
			<div>
				<span style={{color: 'blue'}}>Search by population:</span>
				<input
					type={'number'}
					value={popRange.min}
					onChange={e => {
						setPopRange({...popRange, min: e.target.value.trim()});
					}}
					placeholder={'From'}
				/>
				<input
					type={'number'}
					value={popRange.max}
					onChange={e => {
						setPopRange({...popRange, max: e.target.value.trim()});
					}}
					placeholder={'to'}
				/>
				<button onClick={onClickSearchByPop}>Search</button>
			</div>
			<button onClick={onClickClearFilter}>Clear filter</button>
			{alert && <span style={{color: 'red'}}>'Please enter min / max'</span>}
			<div>
				<span style={{color: 'blue'}}>Option:</span>
				<select onChange={e => setOption(e.target.value)}>
					<option></option>
					<option value="1">Capital</option>
					<option value="2">Region</option>
				</select>
			</div>

			<h2 style={{color: 'blue'}}>Table of country</h2>
			<table>
				<thead>
				<tr key={'header'}>
					<th>Index</th>
					<th>Flag</th>
					<th>Name</th>
					<th>Area</th>
					<th>Population</th>
					{option === '1' && <th>Capital</th>}
					{option === '2' && <th>Region</th>}
				</tr>
				</thead>
				<tbody>
				{noFilter && countries.filter(e => e.name.common.toLowerCase().includes(inpSearch.toLowerCase()))
					.map((e, index) => (
						<tr key={index}>
							<td>{index}</td>
							<td><img height={50} src={e.flags.svg} alt={e.flags.alt}/></td>
							<td>{e.name.common}</td>
							<td>{e.area}</td>
							<td>{e.population}</td>
							{option === '1' && <td>{e.capital[0]}</td>}
							{option === '2' && <td>{e.region}</td>}

						</tr>
					))}

				{!noFilter && filteredCountries.filter(e => e.name.common.toLowerCase().includes(inpSearch.toLowerCase()))
					.map((e, index) => (
						<tr key={index}>
							<td>{index}</td>
							<td><img height={50} src={e.flags.svg} alt={e.flags.alt}/></td>
							<td>{e.name.common}</td>
							<td>{e.area}</td>
							<td>{e.population}</td>
							{option === '1' && <td>{e.capital[0]}</td>}
							{option === '2' && <td>{e.region}</td>}
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}

export default Country;