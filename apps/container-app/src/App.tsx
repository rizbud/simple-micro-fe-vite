import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import CounterApp from "counter-app/src/App";
import PopupApp from "popup-app/src/App";

import "./App.css";

function App() {
  return (
    <>
      <div
        style={{
          position: "relative",
        }}
      >
        <PopupApp />
      </div>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <CounterApp />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
