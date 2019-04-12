import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route component={ Home } />
      </Switch>
    );
  }
}
