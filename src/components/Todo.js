import React from "react";

const Todo = (props) => {
  const handleClick = () => {
    props.handleToggleComplete(props.item.id);
  };

  return (
    <div onClick={handleClick} className={`todoItem ${props.item.completed ? "completed" : ""}`}>
      <p>{props.item.task}</p>
    </div>
  );
};

export default Todo;
