import React, { useState } from "react";
import "./Ejercicio7.css"
function Ejercicio7() {
  const [fName, setFName] = useState("");
  const [sName, setSName] = useState("");
  const submit = (e) => {
    if (!fName.trim() && !sName.trim()) {
      alert("Please enter at least one name.");
      return;
    }
    alert(`Hello ${fName} ${sName}!`);
  };

  return (
    <>
      <form onSubmit={submit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={fName}
          onChange={(e) => setFName(e.target.value)}
        />
        <input
          type="text"
          name="secondName"
          placeholder="Second Name"
          value={sName}
          onChange={(e) => setSName(e.target.value)}
        />
        <button type="submit">GREET ME</button>
      </form>
    </>
  );
}

export default Ejercicio7;