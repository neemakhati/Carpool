import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import HomeScreen from "./src/screens/HomeScreen";
import MapScreen from "./src/screens/MapScreen";
import ProfileInfoScreen from "./src/screens/ProfileInfoScreen";
import RequestScreen from "./src/screens/RequestScreen";

const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    SignUp: SignUpScreen,
    Home: HomeScreen,
    Map: MapScreen,
    Profile: ProfileInfoScreen,
    Request: RequestScreen,
  },
  {
    initialRouteName: 'Map',
    defaultNavigationOptions: {
      headerShown:false,
      cardStyle: { backgroundColor: '#FFFFFF' }
    },
    
  }
)

export default createAppContainer(navigator);