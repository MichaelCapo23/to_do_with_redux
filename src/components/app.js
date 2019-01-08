import React from 'react';
import '../assets/css/app.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min'
import logo from '../assets/images/logo.svg';

const App = () => (
    <div className={"container"}>
        <div className="center">
            <h1>To Do List</h1>
            <h5 className={"grey-text"}>now with Redux!</h5>
        </div>
    </div>
);

export default App;
