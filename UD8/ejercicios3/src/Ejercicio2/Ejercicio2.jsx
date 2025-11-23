function Ejercicio2({ nombre, edad, isOnline, imagenUrl }) {
  const indicadorStyle = {
    display: 'inline-block',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: isOnline ? 'green' : 'red',
    marginRight: '5px',
  };
  const imagenStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    filter: isOnline ? 'none' : 'grayscale(100%)',
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '150px', textAlign: 'center' }}>
      <img src={imagenUrl} alt={nombre} style={imagenStyle} />
      <h3>{nombre}</h3>
      <p>Edad: {edad}</p>
      <p>
        <span style={indicadorStyle}></span>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}

export default Ejercicio2;
