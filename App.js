import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ImagesScreen from './src/screens/ImagesScreen';
import ImageDetails from './src/Components/ImageDetails';
import ListScreen from './src/screens/ListScreen';
import StateScreen from './src/screens/StateScreen';
import DataScreen from './src/screens/DataScreen';




const navigator = createStackNavigator(
  {
    Home: HomeScreen ,
    ImagesScreen: ImagesScreen,
    ImageDetails: ImageDetails,
    ListScreen: ListScreen,
    StateScreen: StateScreen,
    DataScreen: DataScreen
   

  },
  {
    initialRouteName:'DataScreen',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);

 
