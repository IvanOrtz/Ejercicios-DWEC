import Producto from "./Producto";

function ListaProductos({ productos }) {
  return (
    <>
        <h1>Lista de Productos</h1>
        <ul>
        {productos.map((producto) => (
            <Producto
            key={producto.id}
            nombre={producto.nombre}
            precio={producto.precio}
            />
        ))}
        </ul>
    </>
  );
}

export default ListaProductos;
