import React, { Component } from "react";
import classNames from "classnames";

import "./todo-list-item.css";

export default class TodoListItem extends Component {  
  onDelete = () => {
      this.props.onDel(this.props.id);
  };

  onDone = () => {
    this.props.onDone(this.props.id);
  };

  onImportant = () => {
    this.props.onImportant(this.props.id);
  };

  render() {

    const { done, important, label } = this.props;

    return (
      <span className={classNames('todo-list-item', { "done": done, 'important': important })}>
        <span className="todo-list-item-label" onClick={this.onDone}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={this.onDelete}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
