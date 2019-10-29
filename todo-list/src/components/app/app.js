import React, { Component }from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import AddPanel from '../add-panel';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

export default class App extends Component {
    maxId = 100;

    state = {
        todoData: [
            this.createItem('Drink Coffee'),
            this.createItem('Make Awesome App'),
            this.createItem('Have a lunch'),
        ],
        term: '',
        filter: 'all',
    };

    addItem = (text) => {
        const newItem = this.createItem(text);

        this.setState(({todoData}) => {
            let newData = [...todoData, newItem];
            return {
                todoData: newData
            }
        });
    };

    createItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        };
    };

    delItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArr = [...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)];
            return {
                todoData: newArr,
            };
        });
    };

    changeStatus = (id, param) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[idx];
            const newItem = {...oldItem, [param]: !oldItem[param]};
            const newArray = [...todoData.slice(0, idx),
                newItem, ...todoData.slice(idx + 1)];
            return {
                todoData: newArray,
            }
        });
    };

    onDone = (id) => this.changeStatus(id, 'done');

    onImportant = (id) => this.changeStatus(id, 'important');

    searchItems = (items, elem) => {
        if (elem.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(elem) > -1;
        });
    };

    setTerm = (term) => {
        this.setState({ term });
    };

    filter = (items, filter) => {

        switch (filter) {
            case 'all': return items;
            case  'active': return items.filter((item) => !item.done);
            case  'done': return items.filter((item) => item.done);
            default: return items;
        }
    };

    onChangeFilter = (filter) => {
        this.setState({ filter });
    };

    render() {

        const { todoData, term, filter } = this.state;

        const visibleItems = this.filter(
            this.searchItems(todoData, term), filter);

        let doneItem = todoData.filter((el) => {
            return el.done === true;
        }).length;

        let mustDone = todoData.length - doneItem;

        return (
            <div className="todo-app">
                <AppHeader toDo={mustDone} done={doneItem}/>
                <div className="top-panel d-flex">
                    <SearchPanel
                        search={this.setTerm}/>
                    <ItemStatusFilter
                        filter={filter}
                        onChangeFilter={this.onChangeFilter}/>
                </div>

                <TodoList
                    todos={visibleItems}
                    onDel={this.delItem}
                    onImportant={this.onImportant}
                    onDone={this.onDone}
                />
                <AddPanel todos={this.state.todoData}
                          addItem={this.addItem}/>
            </div>
        );
    }
}