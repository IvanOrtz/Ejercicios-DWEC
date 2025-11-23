import { useState } from 'react'
import './App.css'
import Cabecera from './Cabecera.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <Cabecera/>
      <h1>Prueba de Uso de React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Esto es un parrafo
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
