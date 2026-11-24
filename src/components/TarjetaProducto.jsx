// Ya viene listo. Pinta un producto y avisa al padre cuando lo agregan.
// ===== INICIO · L2, Tarea, Ticket 1 =====
// Recibe también onVerFicha y avisa con el id del producto
function TarjetaProducto({ producto, onAgregar, onVerFicha }) {
    return (
        <article className="tarjeta">
            <img src={producto.imagen} alt={producto.nombre} className="tarjeta-imagen" />
            <span className="etiqueta">{producto.categoria}</span>
            <h3>{producto.nombre}</h3>
            <p className="precio">{producto.precio} cr</p>
            <button className="boton-ficha" onClick={() => onVerFicha(producto.id)}>
                Ver ficha
            </button>
            <button className="boton-agregar" onClick={() => onAgregar(producto)}>
                Agregar al carrito
            </button>
        </article>
    );
}
// ===== FIN · L2, Tarea, Ticket 1 =====

export default TarjetaProducto;
