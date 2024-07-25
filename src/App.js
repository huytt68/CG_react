import './App.css';
import ClassSample from "./component/ClassSample";
import HienMang from "./component/HienMang";
import Calculator from "./component/Calculator";
import Product from "./component/Product";
import PersonList from "./component/PersonList";
import Covid from "./component/Covid";
import {TestFuncComponent} from "./component/TestFuncComponent";

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
		</>
	);
}

export default App;
