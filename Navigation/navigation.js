import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import AuthScreen from "../Screens/userAuth";
import MakeListScreen from "../Screens/MakeListScreen";

const MainNavigator = createSwitchNavigator({
  Auth: AuthScreen,
  List: MakeListScreen,
});

export default createAppContainer(MainNavigator);
