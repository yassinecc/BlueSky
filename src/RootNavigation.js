// @flow

import React from 'react';
import { connect } from 'react-redux';

import { createStackNavigator } from 'react-navigation';

import * as Pages from 'BlueSky/src/pages';

export const AppNavigator = createStackNavigator({
  home: {
    screen: Pages.Home,
  },
});

class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export default AppWithNavigationState;
