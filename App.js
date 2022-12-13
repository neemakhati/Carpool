import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen"
import MapScreen from "./src/screens/MapScreen"


const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    SignUp: SignUpScreen,
    Home: HomeScreen,
    Search: SearchScreen,
    Map: MapScreen,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerShown:false,
      cardStyle: { backgroundColor: '#FFFFFF' }
    },
    
  }
)

export default createAppContainer(navigator);