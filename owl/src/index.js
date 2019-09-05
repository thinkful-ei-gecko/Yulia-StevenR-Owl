import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import participants from './Store';
import chatEvents from './Chatdata';

ReactDOM.render(
    <App participants={participants} chatEvents={chatEvents}/>,
     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

