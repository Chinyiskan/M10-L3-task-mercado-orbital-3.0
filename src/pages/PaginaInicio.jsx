import { Link } from "react-router";
import OfertaRelampago from "../components/OfertaRelampago.jsx";
import Catalogo from "../components/Catalogo.jsx";

// Ya viene lista. Es la portada de la tienda: bienvenida de Nova, oferta relámpago y los primeros cuatro repuestos.
// Recibe las mismas props que Catalogo y se las pasa. El catálogo completo está en /catalogo.
function PaginaInicio({ productos, cargando, error, onReintentar, onAgregar, onVerFicha }) {
    return (
        <>
            <section className="bienvenida">
                <img src="/img/nova-tienda.png" alt="Nova en el mostrador del Mercado Orbital" width="110" height="110" fetchPriority="high" />
                <div>
                    <h2>Bienvenido al puesto de Nova</h2>
                    <p>Repuestos revisados uno por uno en el hangar. Si algo falla, Kuma lo arregla.</p>
                </div>
            </section>

            {/* L1, Tarea, Ticket 1 */}
            <OfertaRelampago />

            <section>
                <h2 className="titulo-pagina">Repuestos destacados</h2>

                <Catalogo
                    productos={productos.slice(0, 4)}
                    cargando={cargando}
                    error={error}
                    onReintentar={onReintentar}
                    onAgregar={onAgregar}
                    onVerFicha={onVerFicha}
                />

                <Link to="/catalogo" className="enlace-catalogo">Ver catálogo completo</Link>
            </section>
        </>
    );
}

export default PaginaInicio;
