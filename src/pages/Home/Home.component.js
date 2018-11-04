// @flow

import React, { Component } from 'react';
import { Text, View, StyleSheet, Picker, Button } from 'react-native';

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
    this.state = {
      initialTime,
      timeLeft: startTime,
      chosenDate: new Date(),
      chosenSeconds: 0,
      chosenMinutes: 0,
    };
    this.secondsList = this.initSecondsList();
    setInterval(this.updateTimer, 1000);
  }
  props: PropsType;
  state: StateType;

  updateTimer = () => {
    const timeDifferenceInMilliseconds = Date.now() - this.state.initialTime;
    const timeDifferenceInSeconds = Math.floor(timeDifferenceInMilliseconds / 1000);
    this.setState({ timeLeft: timeDifferenceInSeconds });
  };

  setDate = date => this.setState({ chosenDate: date });

  setMinutes = minutes => this.setState({ chosenMinutes: minutes });
  setSeconds = seconds => this.setState({ chosenSeconds: seconds });

  initSecondsList = () => {
    const secondsArray = [];
    for (var i = 0; i < 60; i++) {
      secondsArray.push(<Picker.Item key={i} label={String(i)} value={i} />);
    }
    return secondsArray;
  };

  render() {
    return (
      <Page>
        <View style={styles.container}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexGrow: 1 }}>
              <Picker selectedValue={this.state.chosenMinutes} onValueChange={this.setMinutes}>
                {this.secondsList}
              </Picker>
            </View>
            <View style={{ flexGrow: 1 }}>
              <Picker selectedValue={this.state.chosenSeconds} onValueChange={this.setSeconds}>
                {this.secondsList}
              </Picker>
            </View>
          </View>
          <Button title="OK" onPress={this.setTimer} />
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
    // alignItems: 'center',
  },
  welcome: {
    ...theme.fonts.header,
    textAlign: 'center',
    margin: theme.grid.x1,
  },
});
