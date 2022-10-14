import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import ResultsShowScreen from "./src/screens/ResultsShowScreen";
import SearchScreen from "./src/screens/SearchScreen";

const navigator= createStackNavigator(
    {
      Search: SearchScreen,
      ResultShow: ResultsShowScreen,
    },
    {
      initialRouteName:'Search',//the initial screen
      defaultNavigationOptions:{
          title:    'Resto-Search'
      },
    
});


export default createAppContainer(navigator);
