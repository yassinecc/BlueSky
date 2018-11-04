// @flow

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Page } from 'BlueSky/src/components';

import theme from 'BlueSky/src/theme';

export default class Home extends Component<StateType> {
  static navigationOptions = {
    title: 'Home',
  };
  constructor() {
    super();
    const initialTime = Date.now();
    const startTime = 0;
    this.state = { initialTime, timeLeft: startTime };
    setInterval(this.updateTimer, 1000);
  }
  props: PropsType;
  state: StateType;

  updateTimer = () => {
    const timeDifferenceInMilliseconds = Date.now() - this.state.initialTime;
    const timeDifferenceInSeconds = Math.floor(timeDifferenceInMilliseconds / 1000);
    this.setState({ timeLeft: timeDifferenceInSeconds });
  };

  render() {
    return (
      <Page>
        <View style={styles.container}>
          <Text style={styles.welcome}>{this.state.timeLeft}</Text>
        </View>
      </Page>
    );
  }
}

type PropsType = {
  navigation: any,
};

type StateType = {
  initialTime: Date,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    ...theme.fonts.header,
    textAlign: 'center',
    margin: theme.grid.x1,
  },
});
