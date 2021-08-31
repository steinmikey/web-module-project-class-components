// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className="todoList">
      {props.todoList.map((item) => (
        <Todo key={item.id} item={item} handleToggleComplete={props.handleToggleComplete} />
      ))}
    </div>
  );
};

export default TodoList;
