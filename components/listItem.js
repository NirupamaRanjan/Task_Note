import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import styles from "../styles";
import React from "react";

const ListItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.itemkey)}>
      <View style={styles.listViewer}>
        <Text style={styles.task}>{props.itemName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
