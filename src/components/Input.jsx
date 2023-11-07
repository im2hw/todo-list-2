import React from "react";
import { useState } from "react";
import uuid from "react-uuid";

export default function Input({ todos, setTodos }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function submitHandle(event) {
    event.preventDefault();
    const newTodo = {
      id: uuid(),
      title: title,
      body: body,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
  }

  function changeTitle(event) {
    setTitle(event.target.value);
  }

  function changeBody(event) {
    setBody(event.target.value);
  }

  function submitHandle(event) {
    event.preventDefault();
    const newTodo = {
      id: uuid(),
      title: title,
      body: body,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
  }

  function changeTitle(event) {
    setTitle(event.target.value);
  }

  function changeBody(event) {
    setBody(event.target.value);
  }
  return (
    <div>
      <nav>
        <form onSubmit={submitHandle}>
          <input
            type="text"
            onChange={changeTitle}
            value={title}
            placeholder="할 일을 적어주세요!"
          />
          <button className="add-btn">추가</button>
        </form>
      </nav>
    </div>
  );
}
