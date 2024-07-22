import logo from './logo.svg';
import './App.css';
import axios from "axios";
import ClassSample from "./component/class_sample";
import HienMang from "./component/HienMang";
import TinhToan from "./component/TinhToan";

function App() {
  return (
    <>
      <ClassSample />
      <HienMang />
      <TinhToan />
    </>
  );
}

export default App;
