import "./App.css";
import Button from "./Component/Button";
import FlipIcon from "./Component/FlipIcon";
import { useState } from "react";

function App() {
  const [icono, setIcono] = useState("icono fa fa-thumbs-up");
  const cambiarIcono = function () {
    setIcono(
      icono === "icono fa fa-thumbs-up"
        ? "icono fa fa-thumbs-down"
        : "icono fa fa-thumbs-up"
    );
  };
  return (
    <div className="App">
      <FlipIcon nameIcon={icono} />
      <Button name="Cambiar Icono" funcion={cambiarIcono} />
    </div>
  );
}

export default App;
