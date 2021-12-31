import logo from './logo.svg';
import './App.css';
import Car, { Greet } from './component/Car'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Car1 from './component/Car1'
// import { Greet } from './component/Car';
import {ExJSX} from './component/ExJSX'
import State from './component/State';
import PreState from './component/PreState'
import { Navbar } from './component/Navbar';
import {Shop} from './component/Shop.js';
import { Hooks } from './component/Hooks';
import {NoPage} from './component/NoPage';
// import Layout from './component/Layout';
import LoginControl from './component/LoginControl';
import NameForm from './component/NameForm';
import {FunNameForm} from './component/FunNameForm';
import RegisterForm from './component/RegisterForm';
import Lifecycle from './component/Lifecycle';
import { Effect } from './component/Effect';
import { EffectChange } from './component/EffectChange';
import {GETAPI} from './component/GETAPI';
import {GetWithVal} from './component/GetWithVal';
import { PostForm } from './component/PostForm';

function App() {
  let obj={
    name:"abc",
    age:23
  }
  
  return (
   <div>
     {/* <Car1 obj1 = {obj} name="Harshada" />
     <Car />
     <Greet name="Harshada2"  bool={false}/>
     <ExJSX /> */}
     {/* <State /> */}
     {/* <PreState /> */}
     {/* <Navbar />
     <Shop /> */}
     {/* <Hooks /> */}
     {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route path="car" element={<Car />} />
          <Route path="car1" element={<Car1 />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
    {/* <LoginControl /> */}
    {/* <NameForm /> */}
    {/* <FunNameForm /> */}
    {/* <RegisterForm /> */}
    {/* <Lifecycle /> */}
    {/* <Effect /> */}
    {/* <EffectChange /> */}
    {/* <GETAPI /> */}
    <GetWithVal />
    {/* <PostForm /> */}
   </div>
  );
}


export default App;
