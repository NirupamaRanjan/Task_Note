const ADD_GOAL = "ADD_GOAL";
const DELETE_GOAL = "DELETE_GOAL";
const SET_GOALS = "SET_GOALS";
import * as FileSystem from "expo-file-system";

import { insertGoals, fetchGoals, deleteGoals } from "../../database/db";

export const addGoal = (key, goal) => {
  return async (dispatch) => {
    try {
      const dbResult = await insertGoals(key, goal);
      console.log(dbResult);
    } catch (err) {
      console.log(err);
      throw err;
    }

    dispatch({
      type: ADD_GOAL,
      newgoal: { key: key, goal: goal },
    });
  };
};

export const loadGoals = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchGoals();
      console.log(dbResult);
      dispatch({ type: SET_GOALS, goals: dbResult.rows._array });
    } catch (err) {
      throw err;
    }
  };
};

export const deleteGoal = (key) => {
  return async (dispatch) => {
    try {
      const dbResult = await deleteGoals(key);
      console.log(dbResult);
      dispatch({ type: DELETE_GOAL, toBeDeleted: key });
    } catch (err) {
      throw err;
    }

    dispatch({
      type: DELETE_GOAL,
      toBeDeleted: key,
    });
  };
};
