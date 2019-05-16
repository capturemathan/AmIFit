import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeScreen'
import Content from './screens/Content'
const Navigation = createStackNavigator(
  {
    Home:{screen:HomeScreen},
    Content:{screen:Content}
  }
);
const App = createAppContainer(Navigation);
export default App;