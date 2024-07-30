import {useEffect, useState} from "react";
import axios from "axios";

// Bài tập: Hiện danh sách, tìm kiếm theo tên gần đúng, sắp xếp theo điểm

const Student = () => {
	const [students, setStudents] = useState([]);
	const [nameSearch, setNameSearch] = useState("");
	const api = 'http://localhost:5000/students';

	const getAllStudents = async () => {
		axios.get(api).then(res => {
			setStudents(res.data);
		})
	}
	useEffect(() => {
		getAllStudents();
	}, []);

	const onChangeSearchByName = (e) => {
		setNameSearch(e.target.value);
		if (e.target.value === '') {
			getAllStudents();
		} else {
			const filterStudents = students.filter(student =>
				student.name.toLowerCase().includes(e.target.value.toLowerCase()));
			setStudents(filterStudents);
		}
	}
	const sortScoreAscending = () => {
		const sortedStudents = students.sort((a, b) => a.score - b.score);
		setStudents([...sortedStudents]);
	}
	const sortScoreDescending = () => {
		const sortedStudents = students.sort((a, b) => -a.score + b.score);
		setStudents([...sortedStudents]);
	}

	return (
		<>
			<h1 style={{color: 'red'}}>./Components/Students</h1>
			<h4 style={{color: 'yellow'}}>Run api-students-module-5/app.js before </h4>
			{/*Search*/}
			<div>
				<input
					placeholder={'Name'}
					value={nameSearch}
					onChange={e => onChangeSearchByName(e)}/>
			</div>
			{/*Sort by score*/}
			<button onClick={sortScoreAscending}>Sort by score ↑</button>
			<button onClick={sortScoreDescending}>Sort by score ↓</button>
			<table>
				<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Description</th>
					<th>Action</th>
					<th>Score</th>
				</tr>
				</thead>
				<tbody>
				{students.map((student) => (
					<tr>
						<td>{student.id}</td>
						<td>{student.name}</td>
						<td>{student.description}</td>
						<td>{student.action}</td>
						<td>{student.score}</td>
					</tr>
				))}
				</tbody>
			</table>
		</>
	)
}
export default Student;