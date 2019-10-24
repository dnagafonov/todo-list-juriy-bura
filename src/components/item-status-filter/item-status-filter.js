import React, { Component } from 'react';

import './item-status-filter.css';


export default class ItemStatusFilter extends Component {
    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'important', label: 'Important'},
        {name: 'done', label: 'Done'},
    ]
    render() {
        const {filter, filterSwitched} = this.props;
        const buttons = this.buttons.map(button => {
            const activeButton = button.name === filter;
            const style = activeButton ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button className={`btn ${style}`}
                        type='button'
                        onClick={() => {filterSwitched(button.name)}}>{button.label}</button>
            )
        })
        return(
            <div className='btn-group'>
                {buttons}
            </div>
        )
    }
}
