import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteScreen from './Screens/WriteStoryScreen';
import ReadScreen from './Screens/ReadStoryScreen';
import LoginScreen from './Screens/LoginScreen';

export default class App extends React.Component{
  render(){
    return(
        <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  WRITING: {screen: WriteScreen},
  READING: {screen: ReadScreen}
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      if(routeName == "READING"){
      return(
        <Image
         source = {require('./assets/read.png')}
         style = {{width: 40, height: 40}}
        />
      )
    }
    else if(routeName == "WRITING"){
      return(
        <Image
         source = {require('./assets/write.png')}
         style = {{width: 40, height: 40}}
        />
      )
    }
   }
  })
}
)
const SwitchNavigator = createSwitchNavigator({
  LoginScreen : LoginScreen,
  TabNavigator : TabNavigator
})

const AppContainer = createAppContainer(SwitchNavigator);