import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export class Screen1 extends Component {

  static navigationOptions = {
    title: 'Screen 1'
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>Hello! I am Screen 1!</Text>
        <Button
          onPress={() => navigate('Screen2')}
          title="Open Screen 2"
        />
      </View>
    );
  }

}
