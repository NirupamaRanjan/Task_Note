import react from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 20,
    padding: 30,
  },
  taskAdder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  blank: {
    width: "80%",
    borderBottomWidth: 1,
    fontSize: 25,
  },
  listViewer: {
    marginTop: 20,
    padding: 10,

    backgroundColor: "#eef",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 4,
  },

  task: {
    fontSize: 25,
    color: "black",
    textAlign: "center",
  },

  buttonContainer: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  button: {
    width: "40%",
  },
  cardStyle: {
    margin: 30,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formControl: {
    width: "100%",
  },
  label: {
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    color: "red",
    fontSize: 13,
  },
});
export default styles;
