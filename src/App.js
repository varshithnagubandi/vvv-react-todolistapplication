import React, { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  const [task, setTask] = useState("");

  //to store entered data in the form of list
  const [todos, setTodos] = useState([]);

  const changeHandler = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodos = [...todos, task];
    setTodos(newTodos);
    setTask(""); //it will make list empty after clicking ADD
  };

  // we are going to delete using index
  const deleteHandler = (indexValue) => {
    const newTodos = todos.filter((todo, index) => index !== indexValue);
    setTodos(newTodos);
  };

  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h3 className="title">TODO MANAGEMENT APPLICATION</h3>
            <form onSubmit={submitHandler}>
              <input
                type="text"
                size="30"
                name="task"
                value={task}
                onChange={changeHandler}
              />
              &nbsp;&nbsp;
              <input type="submit" value="ADD" name="Add" />
            </form>
            <br />
            <TodoList dataenter={todos} deletes={deleteHandler} />
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;
