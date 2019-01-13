import React, { Component } from "react";
import Todoitem from './Todoitem';
//make Todos props required
import PropTypes from 'prop-types';

class Todos extends Component {

  render() {
    return this.props.todos.map((todo) => (
      //without a key we will get a console warning.
      <Todoitem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
    ));
  }
}

// Make Todos props required - good practice
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default Todos;
