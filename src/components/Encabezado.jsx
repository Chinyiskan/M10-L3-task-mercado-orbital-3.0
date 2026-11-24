import RelojEstacion from "./RelojEstacion.jsx";
// TODO 2.1 · Importa NavLink desde "react-router"

// Recibe cuántas unidades hay en el carrito y qué hacer al tocar el botón.
function Encabezado({ totalUnidades, onAbrirCarrito }) {
    return (
        <header className="encabezado">
            <div className="marca">
                <img src="/img/logo-mercado.png" alt="Logo del Mercado Orbital" className="logo" />
                <div>
                    <h1>Mercado Orbital</h1>
                    <p className="subtitulo">Repuestos del hangar de Nova · Estación Umbral</p>
                    {/* L1, Tarea, Ticket 2 */}
                    <RelojEstacion />
                </div>
            </div>

            {/* TODO 2.2 · Aquí va el menú: <nav className="navegacion"> con tres NavLink */}
            {/*   Inicio -> "/"   Catálogo -> "/catalogo"   Taller -> "/taller" */}

            <button className="boton-carrito" onClick={onAbrirCarrito}>
                Carrito <span className="contador">{totalUnidades}</span>
            </button>
        </header>
    );
}

export default Encabezado;
