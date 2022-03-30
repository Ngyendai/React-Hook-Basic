const Todo = props => {
  //property
  const { todos, title, deleteDataTodo } = props;

  const handleDelete = id => {
    deleteDataTodo(id);
  };

  return (
    <div className="todo-container">
      <div className="title">{props.title}</div>
      {todos.map(todo => {
        console.log("list todo: ", todo);
        return (
          <li className="todo-child" key={todo.id}>
            {todo.title} &nbsp;
            <span onClick={() => handleDelete(todo.id)}>X</span>
          </li>
        );
      })}
      <hr></hr>
    </div>
  );
};
export default Todo;
