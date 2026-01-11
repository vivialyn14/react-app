import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
      <br />
      <footer>
        <p>
          Hosted on <a href="https://github.com/vivialyn14/react-app">GitHub</a>{" "}
          and Netlify
        </p>
      </footer>
    </div>
  );
}
