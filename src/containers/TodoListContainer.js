import { connect } from "react-redux";
import { withRouter } from "react-router";
import TodoList from "../components/TodoList";
import { toggleTodo } from "../actions/actions";
import { getVisibleTodos } from "../reducers/index";

const mapStateToProps = (state, { match }) => {
  return {
    todos: getVisibleTodos(state, match.params.filter || "all")
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    }
  };
};

const TodoListContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TodoList)
);
export default TodoListContainer;
