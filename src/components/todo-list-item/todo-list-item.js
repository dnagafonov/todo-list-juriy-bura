import React, { Component } from 'react';
import './todo-list-item.css';
export default class TodoListItem extends Component {

  render() {
    const { label, onDeleted, onDone, onImportant} = this.props;

    return (
        <div className='todo-list-item'>
          <span>
            {label}
          </span>
          <button type="button"
                  className="btn btn-outline-danger btn-sm float-right"
                  onClick={onDeleted}>
            <i className="fa fa-trash-o"/>
          </button>
          <button type="button"
                  className="btn btn-outline-warning btn-sm float-right"
                  onClick={onImportant}>
            <i className="fa fa-exclamation" />
          </button>
          <button type="button"
                  className="btn btn-outline-success btn-sm float-right"
                  onClick={onDone}>
            <i className="fa fa-check-square"/>
          </button>
        </div>
    );
  };
}

