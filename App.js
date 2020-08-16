import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ImagesScreen from './src/screens/ImagesScreen';
import ImageDetails from './src/Components/ImageDetails';
import ListScreen from './src/screens/ListScreen';




const navigator = createStackNavigator(
  {
    Home: HomeScreen ,
    ImagesScreen: ImagesScreen,
    ImageDetails: ImageDetails,
    ListScreen: ListScreen
   

  },
  {
    initialRouteName:'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);

 
