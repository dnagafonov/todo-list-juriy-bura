import React, { Component } from 'react';
import './todo-list-item.css';
export default class TodoListItem extends Component {

  render() {
    const { done, important, label, onDeleted, onDone, onImportant} = this.props;

    let classNames = 'todo-list-item';
    if(done){
      classNames += ' done'
    }
    if(important){
      classNames += ' important'
    }
    return (
        <span className={classNames}>
          <span className="todo-list-item-label">{label}</span>
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
        </span>
    );
  };
}

