import React, { useState, useEffect } from "react";
import Header from './components/Header';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import TodoForm from "./components/TodoForm";
import Todolist from "./components/Todolist";

const App = () => {

  const initialState = JSON.parse(localStorage.getItem('todo')) || [];
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <div className="main">
      <h2 className='todo-main'>ToDo List</h2>
      <div className='container'>
        <div className='app-wrapper'>
          <div>
            <Header />
          </div>
          <div>
            <TodoForm
              input={input}
              setInput={setInput}
              todo={todo}
              setTodo={setTodo}
              editTodo={editTodo}
              setEditTodo={setEditTodo}
            />
          </div>
          <div>
            <Todolist todo={todo}
              setTodo={setTodo}
              setEditTodo={setEditTodo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
