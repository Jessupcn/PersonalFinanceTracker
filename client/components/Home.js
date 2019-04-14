import React, { Component } from 'react'

/**
 * COMPONENT
 */

 class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      showForm: false,
    }
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

export default Home;
