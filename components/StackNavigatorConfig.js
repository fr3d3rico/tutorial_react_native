import React from 'react';
import {StackNavigator} from 'react-navigation';

import {HomeScreen} from './HomeScreen';
import {Screen1} from './Screen1';
import {Screen2} from './Screen2';

export const StackNavigatorConfig = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  Screen1: { screen: Screen1 },
  Screen2: { screen: Screen2 }
});
