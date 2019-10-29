import React, { Component } from "react";

import "./add-panel.css";

export default class AddPanel extends Component {
  state = {
    text: ""
  };

  onChange = el => {
    this.setState({
      text: el.target.value
    });
  };

  handleAdd = el => {
    el.preventDefault();
    if (this.state.text.length > 2) {
      this.props.addItem(this.state.text);
      this.setState({
        text: ""
      });
    }
  };

  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.handleAdd}>
        <input
          type="text"
          className="text-input form-control search-input"
          placeholder="type to add new thing"
          onChange={this.onChange}
          value={this.state.text}
        />{" "}
        <button className="btn btn-info"> Add new </button>{" "}
      </form>
    );
  }
}
