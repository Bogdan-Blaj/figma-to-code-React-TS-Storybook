import React, { useState } from "react";
import "./App.css";
import { ButtonGroup } from "./components/ButtonGroup/ButtonGroup";

const options = [
  { value: "Leading", content: "Leading" },
  { value: "Middle", content: "Middle" },
  { value: "Trailing", content: "Trailing" },
];

function App() {
  const [activeItem, setActiveItem] = useState(options[1].value);
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <ButtonGroup
        active={activeItem}
        options={options}
        setActive={setActiveItem}
      />
    </div>
  );
}

export default App;
