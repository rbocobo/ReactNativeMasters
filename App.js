/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform} from 'react-native';
import { createStackNavigator } from  'react-navigation';
import HomeScreen from './src/components/HomeScreen';
import DetailScreen from './src/components/DetailScreen';
import RegistrationScreen from './src/components/RegistrationScreen';
import RegistrationMain from './src/components/RegistrationMain';
import RegistrationConfirmationScreen from './src/components/RegistrationConfirmationScreen';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: "Home Screen"
    })
  },
  Detail: {
    screen: DetailScreen
  },
  Registration: {
    screen: createStackNavigator({
      Main: {
        screen: RegistrationScreen
      },
      Confirm: {
          screen: RegistrationConfirmationScreen
      }
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
  ),
    navigationOptions: () => ({
      title: "Registration"
    })
  }
})


export default class App extends Component {

  render() {
    return <RootStack />;
  }
}
