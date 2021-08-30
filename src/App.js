import React from "react";

import TodoList from "./components/TodoList";

const initialToDos = [
  {
    task: "shopping",
    id: Date.now(),
    completed: false
  },
  {
    task: "buy stock",
    id: Date.now(),
    completed: false
  },
  {
    task: "sell civic",
    id: Date.now(),
    completed: false
  },
  {
    task: "buy coke",
    id: Date.now(),
    completed: false
  },
  {
    task: "water favorite plants",
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = { todoList: initialToDos };
  }

  handleAddTask = () => {
    console.log("adding");
  };

  handleToggleComplete = () => {
    console.log("toggling complete");
  };

  handleClearCompleted = () => {
    console.log("clearing completed tasks");
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoItems={this.state.todoList} />
      </div>
    );
  }
}

export default App;
