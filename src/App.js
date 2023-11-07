import React, { useState } from "react";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import uuid from "react-uuid";

import "./App.css";

export default function App() {
  const initialState = [
    {
      id: uuid(),
      title: "todo",
      isDone: false,
    },
    {
      id: uuid(),
      title: "todo",
      isDone: false,
    },
    {
      id: uuid(),
      title: "todo",
      isDone: true,
    },
  ];

  const [todos, setTodos] = useState(initialState);

  return (
    <div className="container">

      <header>
        <h1>Todo List</h1>
      </header>

     <main>
     <Input todos={todos} setTodos={setTodos} />
     <TodoList todos={todos} setTodos={setTodos} listIsDone={false}/>
     <TodoList todos={todos} setTodos={setTodos} listIsDone={true}/>
     </main>

      <footer>
        <p>@Made by im2hw</p>
      </footer>

    </div>
  );
}
