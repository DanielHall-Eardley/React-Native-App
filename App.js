import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from "./components/HomeScreen.js"
import VideoScreen from "./components/Video.js"

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Video: VideoScreen,
    
  },
  {
  initialRouteName: "Home",
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
  }
)

export default class App extends React.Component {
render() {
    return <RootStack/>
  }
}

