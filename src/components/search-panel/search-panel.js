import React from 'react';

import './search-panel.css';

export default class SearchPanel extends React.Component{
  state ={
    value:''
  };
  handleChange = (event) => {
    event.preventDefault();
    this.setState({value: event.target.value});
    this.props.searchTodo(event.target.value.toLowerCase());
  };
  render() {
     return(
          <input type="text"
                 className="form-control search-input"
                 placeholder="type to search" value={this.state.value} onChange={this.handleChange}/>
     )
  }
};
