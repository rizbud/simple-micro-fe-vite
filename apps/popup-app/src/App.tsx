import { useState } from "react";

import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return isOpen ? (
    <div
      style={{
        position: "absolute",
        width: "100%",
        padding: "1rem",
        borderRadius: "0.5rem",
        backgroundColor: "blueviolet",
        zIndex: 9999,
      }}
    >
      <h1>Popup App</h1>
      <p>This is a popup app</p>

      <button onClick={() => setIsOpen(false)}>Close</button>
    </div>
  ) : null;
}

export default App;
