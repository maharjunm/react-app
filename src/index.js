import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  React.createElement('h1', {'className': 'heading', 'name': 'heading'}, React.createElement('p', null, 'Paragraph')),
  document.getElementById('root')
);
