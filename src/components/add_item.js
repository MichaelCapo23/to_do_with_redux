import React, {Component} from 'react';
import NavButton from './nav_button'
import {Field, reduxForm} from 'redux-form'

class AddItem extends Component {
    render() {
        return (
            <div>
                <h1 className="center">Add Item</h1>
                <NavButton color={"pink black-text"} to={'/'}>Back to list</NavButton>
            </div>
        );
    }
}

export default reduxForm({
    form: 'add-item' //form has to be the key every-time, you make up the name here as the value
})(AddItem);