import { createAppContainer, createStackNavigator } from 'react-navigation'

import SplashScreen from 'App/Screens/SplashScreen/SplashScreen'
import HomeScreen from 'App/Screens/Home/HomeScreen'

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    SplashScreen: SplashScreen,
    MainScreen: HomeScreen,
  },
  {
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    // By default the application will show the splash screen
    initialRouteName: 'MainScreen',
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
    headerMode: 'none',
  }
)

const RootNavigator = createStackNavigator(
  {
    Main: {
      screen: StackNavigator,
    },
  }, {
    mode: 'modal',
    headerMode: 'none',
    transparentCard: true,
  }
)

export default createAppContainer(RootNavigator)
