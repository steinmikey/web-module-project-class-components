import React from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const initialToDos = [
  {
    task: "shopping",
    id: 123,
    completed: false
  },
  {
    task: "buy stock",
    id: 234,
    completed: false
  },
  {
    task: "sell civic",
    id: 345,
    completed: false
  },
  {
    task: "buy coke",
    id: 456,
    completed: false
  },
  {
    task: "water plants",
    id: 567,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = { todoList: initialToDos, taskInput: "" };
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      taskInput: e.target.value
    });
  };

  handleAddTask = (_e) => {
    const newTask = {
      task: this.state.taskInput,
      id: Date.now(),
      completed: false
    };
    this.setState({
      ...this.state,
      todoList: [...this.state.todoList, newTask],
      taskInput: ""
    });
  };

  handleToggleComplete = (id) => {
    this.setState({
      ...this.state,
      todoList: this.state.todoList.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  };

  handleClearCompleted = () => {
    this.setState({
      ...this.state,
      todoList: this.state.todoList.filter((item) => {
        return item.completed === false;
      })
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="appContainer">
        <h2>My To-Do's</h2>
        <TodoList todoList={this.state.todoList} handleToggleComplete={this.handleToggleComplete} />
        <TodoForm
          handleAddTask={this.handleAddTask}
          handleChange={this.handleChange}
          value={this.state.taskInput}
          handleClearCompleted={this.handleClearCompleted}
        />
      </div>
    );
  }
}

export default App;
