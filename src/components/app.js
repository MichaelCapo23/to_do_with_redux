import React from 'react';
import '../assets/css/app.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min'
import logo from '../assets/images/logo.svg';
import {Route} from 'react-router-dom';
import List from './list';
import AddItem from './add_item';

const App = () => (
    <div className={"container"}>
        <Route exact path={'/'} component={List}/>
        <Route path={"/add-item"} component={AddItem}/>
    </div>
);

export default App;
