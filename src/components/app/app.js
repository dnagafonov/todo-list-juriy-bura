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
    { label: 'Drink Coffee', important: false, done:false, id: this.maxId++ },
    { label: 'Make Awesome App', important: true, done: false, id: this.maxId++ },
    { label: 'Have a lunch', important: false, done: false, id: this.maxId++ }
  ]
};
onDeleted = (id) => {
  const items = this.state.todoData.filter(el => el.id !== id);
  this.setState({todoData: [...items]})
};
addItem = (text) => {
  const todos = this.state.todoData;
  this.setState({todos:[...todos,{label:text, important: false, done: false, id: this.maxId++}]})
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
            onDeleted={ this.onDeleted }
            onImportant={this.onImportant}
            onDone={this.onDone}/>

          <ItemAddForm addItem={this.addItem}/>
      </div>
    );
  }
};
