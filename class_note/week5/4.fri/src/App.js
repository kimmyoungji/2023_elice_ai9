import React, { useState } from "react";
import InsertForm from "./components/InsertForm.js";
import ListView from "./components/ListView.js";

function App() {
  const [todoList, setTodoList] = useState([]);

  const handleInsert = (value) => {
    setTodoList((cur) => {
      const newTodo = {
        key: new Date().getTime(),
        value: value,
        isCompleted: false,
      };
      return [...cur, newTodo];
    });
  };

  return (
    <div className="App">
      <ListView todoList={todoList} />
      <InsertForm onInsert={handleInsert} />
    </div>
  );
}

export default App;
