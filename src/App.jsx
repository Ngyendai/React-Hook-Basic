import logo from "./logo.svg";
import "./App.css";
import Nav from "./component/nav/Nav";
import { useState } from "react";
import Todo from "./component/nav/Todo";
import Covid from "./component/nav/Covid";

function App() {
  //let name = "Dai";
  let number = 2022;
  let obj = { name: "Dai", chanel: "IT" };
  let link =
    "https://www.youtube.com/watch?v=Y9gTouaZJ5s&list=PLncHg6Kn2JT4xzJyhXfmJ53dzwVbq-S_E&index=9";

  let [name, setName] = useState("DaiDong");
  const [address, setAddress] = useState("");

  const [todos, setTodos] = useState([
    { id: "todo1", title: "NguyenDai", type: "IT" },
    { id: "todo2", title: "NguyenDong", type: "IT" },
    { id: "todo2", title: "YenTran", type: "Design" },
  ]);
  const handleEventClick = event => {
    if (!address) {
      alert("empty input");
      return;
    }
    let newTodo = {
      id: Math.floor(Math.random() * 100) + 1,
      title: address,
      typeo: "IT",
    };
    setTodos([...todos, newTodo]);
    setAddress("");
  };

  const handleOnchangeInput = event => {
    setAddress(event.target.value);
    console.log(event.target.value);
  };

  const deleteDataTodo = id => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter(item => item.id !== id);
    setTodos(currentTodos);
  };
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Hello Wrold React {name} and {number}
        </h2>
        <p>{JSON.stringify(obj)}</p>
        <h2>{obj.chanel}</h2>
        <a href={link}></a>
        <Todo
          todos={todos}
          title={"All todo"}
          deleteDataTodo={deleteDataTodo}
        />
        <Todo
          todos={todos.filter(item => item.type === "IT")}
          title={"All IT"}
          deleteDataTodo={deleteDataTodo}
        />
        <input
          type="text"
          value={address}
          onChange={event => handleOnchangeInput(event)}
        />
        <button type="button" onClick={event => handleEventClick(event)}>
          Click me!
        </button>
        <Covid />
      </header>{" "}
    </div>
  );
}

export default App;
