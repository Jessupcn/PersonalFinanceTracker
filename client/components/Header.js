import React, { Component } from 'react'
/**
 * COMPONENT
 */

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div id="header">
        <h3>Finance Tracker</h3>
        <button>Add</button>
      </div>
    )
  }
}

export default Header;
