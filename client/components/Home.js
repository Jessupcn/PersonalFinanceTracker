import React, { Component } from 'react'
/**
 * COMPONENT
 */

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { email } = this.props

    return (
      <div>
        <h3>Hello { email }!</h3>
      </div>
    )
  }
}
