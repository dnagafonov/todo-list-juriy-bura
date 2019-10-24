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
  ],
  search:''
};
onDeleted = (id) => {
  const items = this.state.todoData.filter(el => el.id !== id);
  this.setState({todoData: [...items]})
};
addItem = (text) => {
  const todos = this.state.todoData;
  this.setState({todoData:[...todos,{label:text, important: false, done: false, id: this.maxId++}]})
};
onImportant = (id) => {
  this.setState(({todoData}) => {
    const index = todoData.findIndex(el => el.id === id);
    const oldItem = todoData[index];
    const newItem = {...oldItem, important: !oldItem.important}
    return {todoData:[...todoData.slice(0,index), newItem, ...todoData.slice(index + 1)]}
  })
};
onDone = (id) => {
  this.setState(({todoData}) => {
    const index = todoData.findIndex(el => el.id === id);
    const oldItem = todoData[index];
    const newItem = {...oldItem, done: !oldItem.done};
    return {todoData:[...todoData.slice(0,index), newItem, ...todoData.slice(index + 1)]}
  })
};
countDone = () => {
  return this.state.todoData.filter(el => el.done === true).length
};
countActive = () => {
  const done = this.state.todoData.filter(el => el.done === true).length;
  const all = this.state.todoData.length;
  return all-done;
};
onSearchChange = (search) => {
  this.setState({search})
}
searchTodo = (todoData, searchInput) => {
  if(searchInput.length === 0){
    return todoData
  }
  return  todoData.filter(el => el.label.includes(searchInput) ? todoData[el.id]:'');
};
  render() {
    const { todoData, search} = this.state;
    const visibleItems = this.searchTodo(todoData, search);
  return (
      <div className="todo-app">
          <AppHeader toDo={this.countActive()} done={this.countDone()} />
          <div className="top-panel d-flex">
            <SearchPanel searchTodo = {this.onSearchChange}/>
            <ItemStatusFilter />
          </div>

          <TodoList
            todos={visibleItems}
            onDeleted={this.onDeleted}
            onImportant={this.onImportant}
            onDone={this.onDone}/>

          <ItemAddForm addItem={this.addItem}/>
      </div>
    );
  }
};
