import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class addItemForm extends Component {

    renderInput = (props) => {
        // console.log("render input args: ", props);
        return (
            <div className={`col ${props.size || 's12'}`}>
                <div className="input-field">
                    <input {...props.input} type="text" autoComplete={"off"}/>
                    <label>{props.label}</label>
                </div>
                <p className={"red-text text-darken-2"}>{props.meta.touched  && props.meta.error}</p>
            </div>
        )
    };

    handleAddItem = (values) => {
        console.log("add item form values", values);
        this.props.reset();
    };

    render() {
        // console.log("add item form props: ", this.props);
        const {handleSubmit, reset} = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleAddItem)}>
                <div className="row">
                    <Field name="title" size={"s12 m8 offset-m2"} component={this.renderInput} id="title" label={"Title"}/>
                </div>
                <div className="row">
                    <Field name={"details"} size={"s12 m8 offset-m2"} component={this.renderInput} id={"details"} label={"Details"}/>
                </div>
                <div className="row">
                    <div className="col s6 center">
                        <button onClick={reset} type={"button"} className="btn red darken-2">clear</button>
                    </div>
                    <div className="col s6 center">
                        <button className="btn grey darken-2">add Item</button>
                    </div>
                </div>
            </form>
        );
    }
}

function validate(values) {
    const {title, details} = values;
    const errors = {};
    if(!title) {
        errors.title = 'please enter a title';// has to be the same keyname as the name of the field
    }

    if(!details) {
        errors.details = "please enter some details";
    }
    return errors;
}

export default reduxForm({
    form: 'add-item-form',
    validate: validate, //collapse when doing it in the final project
    // initialValues: {
    //     title: 'this is the default for title',                this is the easiest way to set default values, but DON'T do it this way
    //     details: "Enter your details here"
    // }
})(addItemForm)