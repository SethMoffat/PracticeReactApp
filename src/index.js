import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

console.log(document)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// let ReactDom = {
// render: (arg1,arg2) => {}

// }
// ReactDom.render(

//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')

// )