import React, {Component} from 'react';
import {View, Text} from 'react-native';

export class Screen2 extends Component {

  static navigationOptions = {
    title: 'Screen 2'
  };

  render() {
    return (
      <View>
        <Text>Hello! I am Screen 2!</Text>
      </View>
    );
  }

}
