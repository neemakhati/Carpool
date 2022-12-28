// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
// import LoginScreen from "./src/screens/LoginScreen";
// import SignUpScreen from "./src/screens/SignUpScreen";
// import HomeScreen from "./src/screens/HomeScreen";
// import MapScreen from "./src/screens/MapScreen";
// import ProfileInfoScreen from "./src/screens/ProfileInfoScreen";
// import RequestScreen from "./src/screens/RequestScreen";

// const navigator = createStackNavigator(
//   {
//     Login: LoginScreen,
//     SignUp: SignUpScreen,
//     Home: HomeScreen,
//     Map: MapScreen,
//     Profile: ProfileInfoScreen,
//     Request: RequestScreen,
//   },
//   {
//     initialRouteName: 'Map',
//     defaultNavigationOptions: {
//       headerShown:false,
//       cardStyle: { backgroundColor: '#FFFFFF' }
//     },
    
//   }
// )

// export default createAppContainer(navigator);

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import HomeScreen from "./src/screens/HomeScreen";
import MapScreen from "./src/screens/MapScreen";
import ProfileInfoScreen from "./src/screens/ProfileInfoScreen";
import RequestScreen from "./src/screens/RequestScreen";
import { Provider } from 'react-redux';
import store from './src/store';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Map'
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#FFFFFF' },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="Profile" component={ProfileInfoScreen} />
      <Stack.Screen name="Request" component={RequestScreen} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  )
}