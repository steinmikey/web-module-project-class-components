import React from "react";

const TodoForm = (props) => {
  return (
    <div className="todoForm">
      <input type="text" onChange={props.handleChange} value={props.value} />
      <button onClick={props.handleAddTask}>Add ToDo</button>
      <button onClick={props.handleClearCompleted}>Clear Completed</button>
    </div>
  );
};

export default TodoForm;
