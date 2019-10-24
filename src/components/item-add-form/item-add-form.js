import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {
    state = {
        value:''
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addItem(this.state.value);
        this.setState({value:''})
    };
    handleChange = (event) => {
        this.setState({value: event.target.value})
    };
    render() {
    return (
        <form className="item-add-form d-flex" onSubmit={this.handleSubmit}>
            <input type='text' className='form-control' value={this.state.value} onChange={this.handleChange}/>
            <button className="btn btn-outline-secondary float-right">
                Add
            </button>
        </form>
        )
    }
}
