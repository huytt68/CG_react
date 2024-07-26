import './App.css';
import ClassSample from "./components/ClassSample";
import HienMang from "./components/HienMang";
import Calculator from "./components/Calculator";
import Product from "./components/Product";
import PersonList from "./components/PersonList";
import Covid from "./components/Covid";
import {TestFuncComponent} from "./components/TestFuncComponent";
import FProduct from "./components/FProduct";

function App() {
	return (
		<>
			<ClassSample/>
			<HienMang/>
			<PersonList/>
			<Calculator/>
			<Product/>
			<Covid/>
			<TestFuncComponent/>
			<FProduct/>
		</>
	);
}

export default App;
