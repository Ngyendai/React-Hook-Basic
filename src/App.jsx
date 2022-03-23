import logo from "./logo.svg";
import "./App.css";
import Nav from "./component/nav/Nav";

function App() {
  let name = "Dai";
  let number = 2022;
  let obj = { name: "Dai", chanel: "IT" };
  let link =
    "https://www.youtube.com/watch?v=Y9gTouaZJ5s&list=PLncHg6Kn2JT4xzJyhXfmJ53dzwVbq-S_E&index=9";
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
      </header>{" "}
    </div>
  );
}

export default App;
