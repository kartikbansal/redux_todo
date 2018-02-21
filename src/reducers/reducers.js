import { combineReducers } from 'redux';
import {
  ADD_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO,
  VisibilityFilters
} from '../actions/actions';
const { SHOW_ALL } = VisibilityFilters;

const todos = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state, 
        {
          text: action.text, 
          id: action.id,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map(todo => {
        if(todo.id === action.id)
          return {...todo, completed: !todo.completed};
        return todo;
      });
    default:
      return state;
  }
};

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;