import React from "react";

export default function Main({ todos, setTodos, listIsDone }) {
  return (
    <>
      <div className="working">
        <h3>{listIsDone ? '완료' : '할 일'}</h3>
        {todos
          .filter((todo) => todo.isDone === listIsDone)
          .map((todo) => {
            return (
              <div key={todo.id} className="wrap">
                  <ul className="contents">
                  <li data-icon="🐻">{todo.title}</li>```
                  </ul>
                  <div className="btn-box">
                    <button className="list-btn"
                      onClick={(item) => {
                        const newTodos = todos.map((item) => {
                          if (item.id === todo.id) {
                            return {
                              ...item,
                              isDone: !item.isDone,
                            };
                          } else {
                            return item;
                          }
                        });
                        setTodos(newTodos);
                      }}
                    >
                      {listIsDone ? '취소' : '완료'}
                    </button>

                    <button className="list-btn"
                      onClick={() => {
                        const deletedTodos = todos.filter((item) => {
                          return item.id !== todo.id;
                        });
                        setTodos(deletedTodos);
                      }}
                    >
                      삭제
                    </button>
                  </div>
                
              </div>
            );
          })}
      </div>
    </>
  );
}
