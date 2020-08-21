import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ImagesScreen from './src/screens/ImagesScreen';
import ImageDetails from './src/Components/ImageDetails';
import ListScreen from './src/screens/ListScreen';
import StateScreen from './src/screens/StateScreen';
import DataScreen from './src/screens/DataScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUp from './src/screens/SignUp';



const navigator = createStackNavigator(
  {
    Home: HomeScreen ,
    ImagesScreen: ImagesScreen,
    ImageDetails: ImageDetails,
    ListScreen: ListScreen,
    StateScreen: StateScreen,
    DataScreen: DataScreen,
    LoginScreen:LoginScreen,
    SignUp:SignUp
   

  },
  {
    initialRouteName:'LoginScreen',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);

 
