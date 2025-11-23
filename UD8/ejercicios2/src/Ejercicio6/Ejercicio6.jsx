import { useState } from "react";

function Ejercicio6() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const [userData, setUserData] = useState(null); 
  let contenido = "";
  const manejarEnvio = (e) => {
    e.preventDefault();

    const datos = { nombre, email };
    setUserData(datos);

    setIsSubmitted(true);
  };
  if(!isSubmitted){
  contenido=<form onSubmit={manejarEnvio}>
          <div>
            <label>Nombre: </label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div>
            <label>Email: </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit">Enviar</button>
        </form>
  }else{
    contenido=<p>
          Usuario registrado: Nombre: {userData.nombre}, Email: {userData.email}
        </p>
  }
  return (
    <div>
      {contenido}
    </div>
  );
}

export default Ejercicio6;
