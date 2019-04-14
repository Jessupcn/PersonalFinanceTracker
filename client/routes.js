import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from './components';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    // this.props.loadInitialData();
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

export default Routes;
