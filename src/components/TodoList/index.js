const TodoList = ({ list, handleTodo }) => {
  return (
    <div>
      <ul>
        {list.map((element, index) => {
          return (
            <li className="list" key={index}>
              <p>{element}</p>
              <button className="button" onClick={() => handleTodo(element)}>
                Concluído
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
