import { useState } from "react";
import Unit from "./components/Unit";

function App() {
  const [units] = useState([
    {
      id: 1,
      label: "UNIT 1",
      coordinates: {
        x: 48,
        y: 44.5,
      },
      color: "#f2f213",
      size: "65m2",
    },
    {
      id: 2,
      label: "UNIT 2",
      coordinates: {
        x: 289,
        y: 44.5,
      },
      color: "#00ff00",
      size: "75m2",
    },
    {
      id: 3,
      label: "UNIT 3",
      coordinates: {
        x: 530,
        y: 44.5,
      },
      color: "#0000bf",
      size: "70m2",
    },
    {
      id: 4,
      label: "UNIT 4",
      coordinates: {
        x: 48,
        y: 311.5,
      },
      color: "#ff0000",
      size: "80m2",
    },
    {
      id: 5,
      label: "UNIT 5",
      coordinates: {
        x: 289,
        y: 311.5,
      },
      color: "#ffaa56",
      size: "75m2",
    },
  ]);
  const [selectedUnit, setSelectedUnit] = useState(units[0]);

  const handleLogData = () => {
    console.log(selectedUnit);
  };

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
        <g>
          <title>Unit</title>
          <path
            id="svg_15"
            d="m36,37.5l708,0l0,485l-708,0l0,-485z"
            opacity="undefined"
            stroke="#000"
            fill="none"
          />
          {units.map((unit) => (
            <Unit key={unit.id} unit={unit} setSelectedUnit={setSelectedUnit} />
          ))}
        </g>
      </svg>
      <button onClick={handleLogData}>Log data</button>
      <aside>
        <p>
          <strong>Selected unit:</strong> {selectedUnit.label}
        </p>
        <p>
          <strong>Unit size:</strong>
          {selectedUnit.size}
        </p>
      </aside>
    </>
  );
}

export default App;
