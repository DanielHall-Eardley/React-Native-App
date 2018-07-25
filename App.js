import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen.js';
import Video from "./components/Video.js"

const RootStack = createStackNavigator(
  {
    screen: HomeScreen,
    screan: Video,
    
  },
  {
  initialRouteName: "Home",
  }
)

export default class App extends React.Component {
render() {
    return <RootStack/>
  }
}

