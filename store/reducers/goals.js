import { ADD_GOAL, DELETE_GOAL } from "../actions/goalsaction";
import goalsModel from "../../model/goalsModel";

const initialState = {
  goals: [],
};

const goalsReducer = (state = initialState, action) => {
  if (action.type === "SET_GOALS") {
    return {
      goals: action.goals.map((task) => new goalsModel(task.key, task.goal)),
    };
  }
  if (action.type === "ADD_GOAL") {
    const newGoal = new goalsModel(action.newgoal.key, action.newgoal.goal);
    if (newGoal.goal != "") {
      state.goals.concat(newGoal);
    }
    return {
      goals: state.goals.concat(newGoal),
    };
  }
  if (action.type === "DELETE_GOAL") {
    return {
      goals: state.goals.filter(
        (eachTask) => eachTask.key !== action.toBeDeleted
      ),
    };
  }

  return state;
};

export default goalsReducer;
