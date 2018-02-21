import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <form
      onSubmit={e => {
        if(!input.value.trim()) {
          return;
        }
        e.preventDefault();
        dispatch(addTodo(input.value));
        input.value = '';
      }}
    >
      <input ref={node => {
        input = node;
      }} />
      <button type="Submit">Add Todo</button>
    </form>
  );
}

AddTodo = connect()(AddTodo);

export default AddTodo;