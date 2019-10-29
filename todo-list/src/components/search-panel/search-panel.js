import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

  state = {
    term: ''
  };

  setTerm = (el) => {
    this.setState({
        term: el.target.value
    });
    this.props.search(el.target.value.toLowerCase());
  };

  render() {
      return (
          <input type="text"
                 className="form-control search-input"
                 placeholder="type to search"
                 value={this.state.term}
                 onChange={this.setTerm}/>
      );
  }
}

