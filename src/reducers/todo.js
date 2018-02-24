import { ADD_TODO, TOGGLE_TODO } from "../actions/actions";

const todo = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        text: action.text,
        id: action.id,
        completed: false
      };
    case TOGGLE_TODO:
      if (state.id !== action.id) return state;
      return { ...state, completed: !state.completed };
    default:
      return state;
  }
};

export default todo;
