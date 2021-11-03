import { useState } from "react";

const Form = ({ addTodo }) => {
  const [inputText, setInputText] = useState("");
  return (
    <div>
      <input
        className="input"
        inputText={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />
      <div></div>
      <button className="button" onClick={() => addTodo(inputText)}>
        Adicionar tarefa
      </button>
    </div>
  );
};

export default Form;
