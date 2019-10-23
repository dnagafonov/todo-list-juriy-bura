import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {
maxId = 0;

state = {
  todoData: [
    { label: 'Drink Coffee', important: false, done:false, id: 1 },
    { label: 'Make Awesome App', important: true, done: false, id: 2 },
    { label: 'Have a lunch', important: false, done: false, id: 3 }
  ]
};
deleteItem = (id) => {

};
addItem = (text) => {

};
onImportant = () => {

};
onDone = () => {

}
render() {
  return (
      <div className="todo-app">
          <AppHeader toDo={1} done={3} />
          <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
          </div>

          <TodoList
            todos={this.state.todoData}
            onDeleted={ this.deleteItem }/>

          <ItemAddForm addItem={this.addItem}
                       onImportant={this.onImportant}
                       onDone={this.onDone}/>
      </div>
    );
  }
};
