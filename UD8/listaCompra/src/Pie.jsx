function Pie({onBotonBorrarTodo}){
    return(
        <>
            <button id="borrar" type="button" onClick={onBotonBorrarTodo} >Clear Items</button>
        </>
    );
}
export default Pie;