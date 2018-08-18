import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement('p', undefined, 'This is my React element');

ReactDOM.render(element, document.getElementById('app'));
