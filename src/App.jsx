import { useState, useEffect } from "react";
// TODO 1.2 · Importa Routes y Route desde "react-router" y las páginas de src/pages/:
//   import { Routes, Route } from "react-router";
//   import PaginaInicio from "./pages/PaginaInicio.jsx";
//   import PaginaCatalogo from "./pages/PaginaCatalogo.jsx";
//   import PaginaTaller from "./pages/PaginaTaller.jsx";
// TODO 3.3 · (Ticket 3) Importa LayoutTienda desde "./components/LayoutTienda.jsx".
// TODO 4.1 · (Ticket 4) Importa PaginaNoEncontrada desde "./pages/PaginaNoEncontrada.jsx".
import Encabezado from "./components/Encabezado.jsx";
import Catalogo from "./components/Catalogo.jsx";
import PanelCarrito from "./components/PanelCarrito.jsx";
import Aviso from "./components/Aviso.jsx";
import OfertaRelampago from "./components/OfertaRelampago.jsx";
import PanelPruebas from "./components/PanelPruebas.jsx";
import FichaProducto from "./components/FichaProducto.jsx";

// El catálogo lo publica el servidor de la estación en esta URL.
// Para probar error y vacío, cámbiala por "/api/productos-roto.json" o "/api/productos-vacio.json".
const URL_CATALOGO = "/api/productos.json";

function App() {
    // Estado de la tienda. Todo el estado sigue en App: las páginas lo reciben por props.
    const [carrito, setCarrito] = useState([]);
    const [aviso, setAviso] = useState("");
    const [carritoAbierto, setCarritoAbierto] = useState(false);

    // ===== INICIO · L2, Ticket 1 =====
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");
    // ===== FIN · L2, Ticket 1 =====

    // ===== INICIO · L2, Extra =====
    const [url, setUrl] = useState(URL_CATALOGO);
    // ===== FIN · L2, Extra =====

    // ===== INICIO · L2, Tarea, Ticket 1 =====
    const [fichaId, setFichaId] = useState(null);
    // ===== FIN · L2, Tarea, Ticket 1 =====

    // ===== INICIO · L2, Ticket 1 =====
    // Pide el catálogo al servidor de la estación (con cargando, error y response.ok de los Tickets 2 y 3)
    async function cargarCatalogo() {
        setCargando(true);
        setError("");

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`El servidor respondió ${response.status}`);
            }

            const datos = await response.json();
            setProductos(datos);
        } catch (e) {
            setError(e.message);
        } finally {
            setCargando(false);
        }
    }

    // El pedido sale cada vez que cambia la url (Extra)
    useEffect(() => {
        cargarCatalogo();
    }, [url]);
    // ===== FIN · L2, Ticket 1 =====

    // Valores calculados a partir del carrito
    const totalUnidades = carrito.reduce((suma, item) => suma + item.cantidad, 0);
    const totalPrecio = carrito.reduce((suma, item) => suma + item.precio * item.cantidad, 0);

    // Si el producto ya está en el carrito, le sube la cantidad; si no, lo agrega con cantidad 1
    function agregarAlCarrito(producto) {
        const yaEsta = carrito.some((item) => item.id === producto.id);

        if (yaEsta) {
            setCarrito(carrito.map((item) =>
                item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
            ));
        } else {
            setCarrito([...carrito, { ...producto, cantidad: 1 }]);
        }

        setAviso(`Agregaste ${producto.nombre} al carrito`);
    }

    function quitarDelCarrito(id) {
        setCarrito(carrito.filter((item) => item.id !== id));
    }

    // ===== INICIO · L1, Ticket 1 =====
    // La pestaña muestra cuántas unidades hay en el carrito
    useEffect(() => {
        document.title = `(${totalUnidades}) Mercado Orbital`;
    }, [totalUnidades]);
    // ===== FIN · L1, Ticket 1 =====

    // ===== INICIO · L1, Ticket 2 =====
    // El aviso se borra solo a los 2,5 segundos
    useEffect(() => {
        if (aviso === "") return;

        const id = setTimeout(() => {
            setAviso("");
        }, 2500);

        return () => clearTimeout(id);
    }, [aviso]);
    // ===== FIN · L1, Ticket 2 =====

    // ===== INICIO · L1, Ticket 3 =====
    // La tecla Escape cierra el panel del carrito
    useEffect(() => {
        function manejarTecla(e) {
            if (e.key === "Escape") {
                setCarritoAbierto(false);
            }
        }

        window.addEventListener("keydown", manejarTecla);

        return () => window.removeEventListener("keydown", manejarTecla);
    }, []);
    // ===== FIN · L1, Ticket 3 =====

    // ===== INICIO · L1, Extra =====
    // La tecla C abre y cierra el carrito. Lee carritoAbierto, así que va en el arreglo
    useEffect(() => {
        function alternarConC(e) {
            if (e.key === "c" || e.key === "C") {
                setCarritoAbierto(!carritoAbierto);
            }
        }

        window.addEventListener("keydown", alternarConC);

        return () => window.removeEventListener("keydown", alternarConC);
    }, [carritoAbierto]);
    // ===== FIN · L1, Extra =====

    return (
        <div className="app">
            <Encabezado
                totalUnidades={totalUnidades}
                onAbrirCarrito={() => setCarritoAbierto(true)}
            />

            {/* TODO 1.3 · Ticket 1. Todo lo que hay entre este comentario y el siguiente se mueve a las páginas. */}
            {/* Bórralo y escribe en su lugar <Routes> con tres <Route> (mira la sección 1 de la teoría y el README). */}
            {/* Después borra los imports de Catalogo, OfertaRelampago y PanelPruebas: ya no se usan aquí. */}
            <section className="bienvenida">
                <img src="/img/nova-tienda.png" alt="Nova en el mostrador del Mercado Orbital" />
                <div>
                    <h2>Bienvenido al puesto de Nova</h2>
                    <p>Repuestos revisados uno por uno en el hangar. Si algo falla, Kuma lo arregla.</p>
                </div>
            </section>

            {/* L1, Tarea, Ticket 1 */}
            <OfertaRelampago />

            {/* L2, Extra */}
            <PanelPruebas url={url} onCambiarUrl={setUrl} />

            <Catalogo
                productos={productos}
                cargando={cargando}
                error={error}
                onReintentar={cargarCatalogo}
                onAgregar={agregarAlCarrito}
                onVerFicha={setFichaId}
            />
            {/* Aquí termina lo que se mueve a las páginas. */}

            {/* TODO 3.4 · Ticket 3. Aquí envolverás las rutas en una <Route> sin path con element={<LayoutTienda ... />}. */}
            {/* TODO 3.5 · Ticket 3. Cuando el layout pinte el encabezado, quita <Encabezado /> y su import, y cambia el <div className="app"> de este return por un fragmento <>...</>. */}
            {/* TODO 4.2 · Ticket 4. Al final de las rutas, dentro del layout, va la ruta path="*". */}


            <Aviso mensaje={aviso} />

            {carritoAbierto && (
                <PanelCarrito
                    items={carrito}
                    total={totalPrecio}
                    onCerrar={() => setCarritoAbierto(false)}
                    onQuitar={quitarDelCarrito}
                />
            )}

            {/* ===== INICIO · L2, Tarea, Ticket 1 ===== */}
            {fichaId !== null && (
                <FichaProducto
                    id={fichaId}
                    onCerrar={() => setFichaId(null)}
                    onAgregar={agregarAlCarrito}
                    producto={productos.find((p) => p.id === fichaId)}
                />
            )}
            {/* ===== FIN · L2, Tarea, Ticket 1 ===== */}
        </div>
    );
}

export default App;
