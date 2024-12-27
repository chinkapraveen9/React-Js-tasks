import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Praveen from "./react1"
// import Karthik from"./reactpr"
// import Dhoni from "./fake"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import BasicExample from './accordian/accordian1';
// import Parent from "./accordian/parent"
// import render from './accordian/child';
// import Home from './cards/home/home';
// import Sample from './task1';
// import Toggleswitch from './toggleswitch';
// import Counter from './Counter';
// import Form from './sampleform.js/form';
// import Unique from './functoncomponents';
// import Adding from './functoncomponents';
// import App from './projectr/code';
import Timetable from './reacttask2/reacttask2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* { <Praveen/>} */}
    
      {/* // <Karthik/>} */}
    {/* <Dhoni/> */}
    {/* <BasicExample/> */}
    {/* <Parent/> */}
    {/* <Home/> */}
    {/* <Sample/> */}
    {/* <Toggleswitch/> */}
    {/* <Counter/>    */}
    {/* <Unique/> */}
    {/* <Adding//> */}
  {/* <App/> */}
  <Timetable/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
