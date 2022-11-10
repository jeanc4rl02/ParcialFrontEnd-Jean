import React, { useState } from "react";
import Estatus from "./components/Estatus";
import Posteos from "./components/Posteos";

// El componente App es el padre de:
// - Estatus
// - Posteos
// ESTADO: App debe manejar en su estado un número para contabilizar el total de likes.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Post.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos para que manipulen o lean su estado.

function App() {
  const [estado, setEstado] = useState(0);

  const contadorGeneral = (cantidadLikes) => {
    setEstado(estado + cantidadLikes);
  };
  return (
    <div className="App">
      <Estatus estado={estado} />
      <Posteos estado={contadorGeneral} />
    </div>
  );
}

export default App;
