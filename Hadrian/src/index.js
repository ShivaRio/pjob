import React from "react";
import "./assets/scss/style.scss";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from "history";
import {
  Route,
  Routes,
  HashRouter,
  BrowserRouter
} from "react-router-dom";
// import Components from "./views/components/components.jsx";
import CustomComponents from "./views/custom-components/custom-components.jsx";
import Home from "./Home.js";
import "./App.css";
// import About from "./main/components/About.js";
import DCA from "./DCA.js";
import Desktop from "./Desktop.js";
import Software_development from "./Software_development.js";
import Web_designing from "./Web_designing.js";
import Advanced_python from "./Advanced_python.js";
import Hardware_networking from "./Hardware_networking.js";
import Courses from "./Courses.js";
// import Login from "./main/components/Login.js";
// import Contact from "./main/components/Contact.js";
import Header from "./Header.js";
import Training from "./Training.js";
import Videos from "./Videos.js";
import MS_OFFICE from "./MS_OFFICE.js";
import Gallery from "./Gallery.js";
import Tuition from "./Tuition.js";
import A1_Maths from "./A1_Maths.js";
import Physics from "./Physics.js";
import Chemistry from "./Chemistry.js";
import French from "./French.js";
import Computer_science from "./Computer_science.js";
import Accountancy from "./Accountancy.js";
import Photoshop from "./Photoshop.js";
import Coreldraw from "./Coreldraw.js";
import Tallyprime from "./Tallyprime.js";
import Mathematics from "./Mathematics.js";
import Spoken_english from "./Spoken_english.js";
import Spoken_hindi from "./Spoken_hindi.js";
import Learn_french from "./Learn_french.js";
import HTML from "./HTML.js";
import CSS from "./CSS.js";
import Javascript from "./Javascript.js";
import PHP from "./PHP.js";
import SQL from "./SQL.js";
import ReactJs from "./ReactJs.js";
import Bootstrap from "./Bootstrap.js";
import MongoDB from "./MongoDB.js";
import NodeJS from "./NodeJS.js";
import Typescript from "./Typescript.js";
import Angular from "./Angular.js";
import Sass from "./Sass.js";






const root = ReactDOM.createRoot(document.getElementById('root'));

var hist = createBrowserHistory();
root.render(
  <BrowserRouter basename="/pjoptechnologies">
  {/* <HashRouter history={hist}> */}
  
    <Routes>
       {/* <Route path="/" element={<Home />} />
      <Route path='/' element={<About />} />  */}
      <Route path='/' element={<Home />} />
      <Route path='/dca' element={<DCA />} />
      <Route path='/desktop' element={<Desktop />} />
      <Route path='/software_development' element={<Software_development />} />
      <Route path='/web_designing' element={<Web_designing />} />
      <Route path='/Advanced_python' element={<Advanced_python />} />
      <Route path='/Hardware_networking' element={<Hardware_networking />} />
      <Route path='/courses' element={<Courses />} />
      {/* <Route path='/login' element={<Login />} /> */}
      {/* <Route path='/contact' element={<Contact />} /> */}
      <Route path='/header' element={<Header />} />
      <Route path='/training' element={<Training />} />
      <Route path='/videos' element={<Videos />} />
      <Route path='/ms_office' element={<MS_OFFICE />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/tuition' element={<Tuition />} />
      <Route path='/maths' element={<A1_Maths />} />
      <Route path='/physics' element={<Physics />} />
      <Route path='/chemistry' element={<Chemistry />} />
      <Route path='/french' element={<French />} />
      <Route path='/computer' element={<Computer_science />} />
      <Route path='/accountancy' element={<Accountancy />} />
      <Route path='/photoshop' element={<Photoshop />} />
      <Route path='/coreldraw' element={<Coreldraw />} />
      <Route path='/tallyprime' element={<Tallyprime />} />
      <Route path='/mathematics' element={<Mathematics />} />
      <Route path='/spoken_english' element={<Spoken_english />} />
      <Route path='/spoken_hindi' element={<Spoken_hindi />} />
      <Route path='/learn_french' element={<Learn_french />} />
      <Route path='/html' element={<HTML />} />
      <Route path='/css' element={<CSS />} />
      <Route path='/javascript' element={<Javascript />} />
      <Route path='/php' element={<PHP />} />
      <Route path='/sql' element={<SQL />} />
      <Route path='/reactjs' element={<ReactJs />} />
      <Route path='/bootstrap' element={<Bootstrap />} />
      <Route path='/mongodb' element={<MongoDB />} />
      <Route path='/nodejs' element={<NodeJS />} />
      <Route path='/typescript' element={<Typescript />} />
      <Route path='/angular' element={<Angular />} />
      <Route path='/sass' element={<Sass />} />      
      <Route path="/custom-components" element={<CustomComponents />} />

    </Routes>
    {/* </HashRouter> */}
    </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
