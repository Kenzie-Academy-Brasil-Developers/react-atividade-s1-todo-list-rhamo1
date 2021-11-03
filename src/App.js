import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [list, setList] = useState([]);

  const addTodo = (newTodo) => {
    setList([...list, newTodo]);
  };

  const handleTodo = (filterTodo) => {
    const filtered = list.filter((item) => item !== filterTodo);
    setList(filtered);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Form addTodo={addTodo} />
          <TodoList list={list} handleTodo={handleTodo} />
        </div>
      </header>
    </div>
  );
}

export default App;
