import React, { useState } from "react";
import { View, TextInput, Button, Modal } from "react-native";

import styles from "../styles";

const TaskAdder = (props) => {
  const [newTask, setNewTask] = useState("");

  const newTaskHandler = (enteredTask) => {
    setNewTask(enteredTask);
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.taskAdder}>
        <TextInput
          style={styles.blank}
          placeholder="Enter the task"
          onChangeText={newTaskHandler}
          value={newTask}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add"
              onPress={props.onAddPress.bind(this, newTask)}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TaskAdder;
