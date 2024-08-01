import './App.css';
import ClassSample from "./components/ClassSample";
import HienMang from "./components/HienMang";
import Calculator from "./components/Calculator";
import Product from "./components/Product";
import PersonList from "./components/PersonList";
import Covid from "./components/Covid";
import {TestFuncComponent} from "./components/TestFuncComponent";
import FProduct from "./components/FProduct";
import Country from "./components/Country";
import Student from "./components/Student";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
	return (
		<>
			<Navbar/>
			<Routes>
				<Route path={'/student'} element={<Student/>}/>
				<Route path={'/country'} element={<Country/>}/>
				<Route path={'/fproduct'} element={<FProduct/>}/>
				<Route path={'/testfunccomponent'} element={<TestFuncComponent/>}/>
				<Route path={'/covid'} element={<Covid/>}/>
				<Route path={'/product'} element={<Product/>}/>
				<Route path={'/calculator'} element={<Calculator/>}/>
				<Route path={'/personlist'} element={<PersonList/>}/>
				<Route path={'/hienmang'} element={<HienMang/>}/>
				<Route path={'/classsample'} element={<ClassSample/>}/>
			</Routes>
		</>
	);
}

export default App;
