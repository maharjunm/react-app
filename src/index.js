import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const add = (a,b) => {
    return a+b;
}
ReactDOM.render(
 <h1>Hello world, 2+2 = {add(1,2)}</h1>,
  document.getElementById('root')
);
