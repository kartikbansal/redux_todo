import { v4 } from "node-uuid";

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const RECEIVE_TODOS = "RECEIVE_TODOS";

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
    id: v4()
  };
}

export function toggleTodo(id) {
  return { type: TOGGLE_TODO, id };
}

export function receiveTodos(filter, response) {
  //console.log(response);
  return {
    type: RECEIVE_TODOS,
    filter,
    response
  };
}

// export function fetchData
