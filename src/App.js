import logo from './logo.svg';
import './App.css';
import axios from "axios";
import ClassSample from "./component/class_sample";
import HienMang from "./component/HienMang";
import TinhToan from "./component/TinhToan";
import Product from "./component/Product";
import TestLifeCycle from "./component/test_life_cycle";

function App() {
  return (
    <>
      {/*<ClassSample />*/}
      {/*<HienMang />*/}
      {/*<TinhToan />*/}
      {/*  <Product />*/}
        <TestLifeCycle />
    </>
  );
}

export default App;
