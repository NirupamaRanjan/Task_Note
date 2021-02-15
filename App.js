import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import MainNavigator from "./Navigation/navigation";
import goalsReducer from "./store/reducers/goals";
import { init } from "./database/db";

init()
  .then(() => {
    console.log("Initialized database");
  })
  .catch((err) => {
    console.log("Intialized db failed");
    console.log(err);
  });

const rootReducer = combineReducers({
  goals: goalsReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
