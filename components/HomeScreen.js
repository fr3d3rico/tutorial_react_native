import React, {Component} from 'react';
import {View, Button} from 'react-native';

export class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Home Screen'
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View>
        <Button onPress={() => navigate('Screen1')} title="Open Screen 1" />
        <Button onPress={() => navigate('Screen2')} title="Open Screen 2" />
      </View>
    );
  }

}
