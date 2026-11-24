import Cargando from "./Cargando.jsx";
import ErrorCatalogo from "./ErrorCatalogo.jsx";
import CatalogoVacio from "./CatalogoVacio.jsx";
import TarjetaProducto from "./TarjetaProducto.jsx";

// Pinta uno de los cuatro estados del catálogo: cargando, error, vacío o éxito.
// Los tres return tempranos van en este orden. Si uno gana, la función termina ahí
// y el map de abajo no corre.
// L2, Tarea, Ticket 1: recibe onVerFicha y se la pasa a cada tarjeta
function Catalogo({ productos, cargando, error, onReintentar, onAgregar, onVerFicha }) {
    // ===== INICIO · L2, Ticket 2 =====
    if (cargando) return <Cargando />;
    // ===== FIN · L2, Ticket 2 =====

    // ===== INICIO · L2, Ticket 3 =====
    if (error !== "") return <ErrorCatalogo mensaje={error} onReintentar={onReintentar} />;
    // ===== FIN · L2, Ticket 3 =====

    // ===== INICIO · L2, Ticket 4 =====
    // Va después del error: con error, productos también está en [] y ganaría el mensaje equivocado
    if (productos.length === 0) return <CatalogoVacio />;
    // ===== FIN · L2, Ticket 4 =====

    // Éxito: el mismo map que tenían en App.jsx la semana pasada
    return (
        <main className="catalogo">
            {productos.map((producto) => (
                <TarjetaProducto
                    key={producto.id}
                    producto={producto}
                    onAgregar={onAgregar}
                    onVerFicha={onVerFicha}
                />
            ))}
        </main>
    );
}

export default Catalogo;
