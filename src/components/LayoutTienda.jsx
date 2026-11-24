// TODO 3.1 · Importa Outlet desde "react-router"
import Encabezado from "./Encabezado.jsx";

// Lo que se repite en todas las páginas de la tienda: el encabezado.
// La página de cada ruta se pinta en el hueco de <Outlet />.
function LayoutTienda({ totalUnidades, onAbrirCarrito }) {
    return (
        <div className="app">
            <Encabezado totalUnidades={totalUnidades} onAbrirCarrito={onAbrirCarrito} />
            {/* TODO 3.2 · Aquí va <Outlet />: el hueco donde se pinta la página de cada ruta */}
        </div>
    );
}

export default LayoutTienda;
