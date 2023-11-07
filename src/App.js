import React from "react";
import { useState } from "react";

function App() {
  return (
    <>
    <Header />
    </>
  );
}
function Header() {
  return (
    <>
      <header
        style={{
          backgroundColor: "green",
          padding: "10px",
        }}
      >
        <p>todo list</p>
      </header>
      <Input />
    </>
  );
}

function Input() {
  const initialState = [
    {
      id: 1,
      title: "",
      contents: "",
      isDone: false,
    }, {
      id: 2,
      title: "",
      contents: "",
      isDone: false
    }
  ];

  const [todos, setTodos] = useState(initialState);
  
  const [title, setTitle] = useState('');

  function onChangeTitle (event) {
    setTitle(event.target.value);
  }

  const [content, setContent] = useState('');

  function onChangeContents (event) {
    setContent(event.target.value);
  }
 function clickBtnHandler(event){
  event.preventDefault();
 
 }

  return (
    <>
      <div
        style={{
          backgroundColor: "pink",
          padding: "10px",
        }}
      > 
        <input type="text" onChange={onChangeTitle} value={title} placeholder="제목"/>
        <input type="text" onChange={onChangeContents} value={content} placeholder="내용" />
        <button onClick={() => clickBtnHandler}>추가</button>
      </div>
      <Main todos = {todos} title={title} content={content} />
    </>
  );
}
function Main({todos}) { 

  return (
    <>
      <div
        style={{
          backgroundColor: "orange",
          padding: "10px",
        }}
      >
        메인
        {todos.map(function(todo){
            return (
             <div>
               <h3>{todo.title}</h3>
               <h3>{todo.contents}</h3>
               <h3>{todo.isDone}</h3>
             </div>
            )
           })
        }
        
      </div>
    </>
  );
}

export default App;
