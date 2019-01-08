import React, {Component} from 'react';
import {getAllItems} from '../actions'
import {connect} from 'react-redux';

class List extends Component {
    componentDidMount() {
        this.props.getAllItems();
    }

    renderList() {
        const {todos} = this.props;

        if(!todos) {
            return <h1 className={"center"}>LOADING.........</h1>;
        }

        if(!todos.length) {
            return <h5 className={"center"}>No to do items</h5>
        }

        const listElements = todos.map(item => {
            return <li className={"collection-item"} key={item._id}>{item.title}</li>;
        });

        return (
            <ul className={"collection"}>
                {listElements}
            </ul>
        )
    }

    render() {
        return(
            <div>
                <div className="center">
                    <h1>To Do List</h1>
                    <h5 className={"grey-text"}>now with Redux!</h5>
                    {this.renderList()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.list.all
    }
};

export default connect(mapStateToProps, {
    getAllItems: getAllItems
})(List);