import { useState, useEffect } from "react";

// ===== INICIO · L2, Tarea, Ticket 2 =====
// Ficha técnica de un producto. Pide sus datos a /api/fichas/<id>.json cuando aparece
// o cuando cambia el id. Tiene sus propios estados de cargando y error (Ticket 3).
function FichaProducto({ id, onCerrar, producto, onAgregar }) {
    const [ficha, setFicha] = useState(null);
    // ===== INICIO · L2, Tarea, Ticket 3 =====
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");
    // ===== FIN · L2, Tarea, Ticket 3 =====

    async function cargarFicha() {
        // ===== INICIO · L2, Tarea, Ticket 3 =====
        setCargando(true);
        setError("");

        try {
            const response = await fetch(`/api/fichas/${id}.json`);

            if (!response.ok) {
                throw new Error(`El servidor respondió ${response.status}`);
            }

            const datos = await response.json();
            setFicha(datos);
        } catch (e) {
            setError(e.message);
        } finally {
            setCargando(false);
        }
        // ===== FIN · L2, Tarea, Ticket 3 =====
    }

    useEffect(() => {
        cargarFicha();
    }, [id]);

    return (
        <div className="fondo-panel" onClick={onCerrar}>
            <article className="panel ficha" onClick={(e) => e.stopPropagation()}>
                <div className="ficha-cabeza">
                    <h2>Ficha técnica</h2>
                    <button className="boton-cerrar" onClick={onCerrar}>Cerrar</button>
                </div>

                {/* ===== INICIO · L2, Tarea, Ticket 3 ===== */}
                {cargando && <p className="ficha-estado">Cargando ficha...</p>}
                {!cargando && error !== "" && <p className="ficha-estado">{error}</p>}
                {/* ===== FIN · L2, Tarea, Ticket 3 ===== */}

                {!cargando && error === "" && ficha !== null && (
                    <>
                        <h3>{ficha.nombre}</h3>

                        <div className="ficha-dato">
                            <strong>Fabricante</strong>
                            <span>{ficha.fabricante}</span>
                        </div>

                        <div className="ficha-dato">
                            <strong>Descripción</strong>
                            <span>{ficha.descripcion}</span>
                        </div>

                        <div className="ficha-dato">
                            <strong>Compatibilidad</strong>
                            <ul>
                                {ficha.compatibilidad.map((nave) => (
                                    <li key={nave}>{nave}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="ficha-dato">
                            <strong>Stock</strong>
                            <span>{ficha.stock} unidades</span>
                        </div>

                        {/* ===== INICIO · L2, Tarea, Extra ===== */}
                        {ficha.stock === 0 && <span className="agotado">Agotado</span>}
                        <button
                            className="boton-agregar"
                            disabled={ficha.stock === 0}
                            onClick={() => onAgregar(producto)}
                        >
                            Agregar al carrito
                        </button>
                        {/* ===== FIN · L2, Tarea, Extra ===== */}
                    </>
                )}
            </article>
        </div>
    );
}
// ===== FIN · L2, Tarea, Ticket 2 =====

export default FichaProducto;
