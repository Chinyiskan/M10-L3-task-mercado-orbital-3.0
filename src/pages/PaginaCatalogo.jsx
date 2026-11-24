import Catalogo from "../components/Catalogo.jsx";
import PanelPruebas from "../components/PanelPruebas.jsx";

// Ya viene lista. Recibe del padre lo mismo que recibía Catalogo y se lo pasa.
// url y onCambiarUrl son opcionales: solo se usan si hiciste el Extra de la semana pasada (PanelPruebas).
function PaginaCatalogo({ productos, cargando, error, onReintentar, onAgregar, onVerFicha, url, onCambiarUrl }) {
    return (
        <section>
            <h2 className="titulo-pagina">Catálogo de repuestos</h2>

            {onCambiarUrl !== undefined && <PanelPruebas url={url} onCambiarUrl={onCambiarUrl} />}

            <Catalogo
                productos={productos}
                cargando={cargando}
                error={error}
                onReintentar={onReintentar}
                onAgregar={onAgregar}
                onVerFicha={onVerFicha}
            />
        </section>
    );
}

export default PaginaCatalogo;
