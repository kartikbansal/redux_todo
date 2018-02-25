import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { fetchTodos } from "../api/index";
import TodoList from "../components/TodoList";
import { toggleTodo, receiveTodos } from "../actions/actions";
import { getVisibleTodos } from "../reducers/index";

class TodoListContainer extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.filter !== this.props.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, receiveTodos } = this.props;
    fetchTodos(filter).then(todos => {
      //console.log(todos);
      return receiveTodos(filter, todos);
    });
    // debugger;
    //console.log(fetchTodos(filter));
  }

  render() {
    return <TodoList {...this.props} />;
  }
}

const mapStateToProps = (state, { match }) => {
  return {
    todos: getVisibleTodos(state, match.params.filter || "all"),
    filter: match.params.filter || "all"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    },
    receiveTodos: (filter, todos) => {
      dispatch(receiveTodos(filter, todos));
    }
  };
};

TodoListContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TodoListContainer)
);
export default TodoListContainer;
