import { actionTypes } from "./constants";
const initialState = {
  tasksData: [],
  inputVal: "",
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TASKS_DATA:
      return {
        tasksData: [...state.tasksData, action.payload],
        inputVal: "",
      };
    case actionTypes.SET_INPUT_VAL:
      return {
        ...state,
        inputVal: action.payload,
      };
    case actionTypes.DELETE_TASK:
      return {
        ...state,
        tasksData: state.tasksData.filter((item, itemIndex) => {
          return itemIndex !== action.payload;
        }),
      };
    case actionTypes.DELETE_TASK_ALL:
      return {
        ...state,
        tasksData: [],
      };
    default:
      return state;
  }
};

export default todoReducer;