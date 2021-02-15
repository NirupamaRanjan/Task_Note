import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { FlatList, View, Button, Modal, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import styles from "../styles";
import ListItem from "../components/listItem";
import * as goalsAction from "../store/actions/goalsaction";
import TaskAdder from "./taskAdder";
import { useEffect } from "react";

export default MakeListScreen = (props) => {
  const [isAddMode, setIsAddMode] = useState(false);
  const goalsList = useSelector((state) => state.goals.goals);

  const dispatch = useDispatch();

  const addGoalHandler = (newTask) => {
    dispatch(goalsAction.addGoal(Math.random().toString(), newTask));
    setIsAddMode(false);
    dispatch(goalsAction.loadGoals());
  };

  useEffect(() => {
    dispatch(goalsAction.loadGoals());
  }, [dispatch]);

  const deleteItemHandler = (itemKey) => {
    dispatch(goalsAction.deleteGoal(itemKey));
  };

  return (
    <View style={styles.screen}>
      <Button title="Add new task" onPress={() => setIsAddMode(true)} />
      <TaskAdder
        onAddPress={addGoalHandler}
        onCancel={() => setIsAddMode(false)}
        visible={isAddMode}
      />
      <FlatList
        data={goalsList}
        renderItem={(task) => (
          <ListItem
            onDelete={deleteItemHandler}
            itemName={task.item.goal}
            itemkey={task.item.key}
          />
        )}
      />
    </View>
  );
};
