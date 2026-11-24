<div align="center">

# 🛰️ Mercado Orbital 3.0

### 🎫 Ticket MO-301 · Operación Mercado Orbital 3.0: la tienda tiene páginas

![React Router](https://img.shields.io/badge/React%20Router-v7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![NavLink](https://img.shields.io/badge/Link-NavLink-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Layout](https://img.shields.io/badge/layout-Outlet-8A2BE2?style=for-the-badge)
![pnpm](https://img.shields.io/badge/pnpm-dev-F69220?style=for-the-badge&logo=pnpm&logoColor=white)

<img src="assets/nova-taller.webp" width="360" alt="Nova arregla un motor con su llave inglesa mientras Kuma le alumbra con una linterna">

</div>

---

## 🚀 Misión

> 👩‍🚀 **Nova:** Mi tienda es una sola pantalla larga y los clientes no pueden mandarse el link del catálogo. Quiero una dirección para cada cosa: inicio, catálogo y el taller de Kuma. El carrito no se me puede vaciar al cambiar de página.

Hoy el Mercado Orbital pinta todo en `App`: bienvenida, oferta y catálogo, uno debajo del otro, siempre en `localhost:5173/`. Con React Router cada página tiene su propia dirección y el encabezado se queda fijo.

| 🏠 Inicio | 📦 Catálogo | 🔧 Taller | 🚫 No existe |
| --- | --- | --- | --- |
| `/` | `/catalogo` | `/taller` | cualquier otra dirección |
| `PaginaInicio` | `PaginaCatalogo` | `PaginaTaller` | `PaginaNoEncontrada` |

---

## 🧰 Cómo instalar el kit

1. 📂 Abre tu proyecto **Mercado Orbital 2.0**, el de la semana pasada con los tickets MO-201 y MO-202 resueltos.
2. 💾 Guarda tu avance de la semana pasada: `git add .` y `git commit -m "MO-202 listo"`.
3. 📋 Copia las carpetas `src/` y `public/` de este kit **sobre** las de tu proyecto. Cuando pregunte, **reemplaza** los archivos que ya existen.
4. ▶️ Corre `pnpm dev` y abre la app. Debe verse como tu 2.0: encabezado, bienvenida, oferta y catálogo en una sola pantalla, ahora con cuatro repuestos nuevos al final del catálogo.

> [!NOTE]
> Si no terminaste la tarea de la ficha, no pasa nada: el kit trae `Catalogo.jsx`, `TarjetaProducto.jsx` y `FichaProducto.jsx` ya resueltos, y el botón "Ver ficha" funciona. Si te faltan `OfertaRelampago.jsx` o `RelojEstacion.jsx` (tarea de la Misión 38), pídeselos al profe.

> [!WARNING]
> `src/App.jsx` se reemplaza por el del kit, que ya trae toda la solución de la semana pasada. Si habías hecho cambios propios en `App.jsx`, el commit del paso 2 los guarda.

## 📦 Qué trae el kit

- 📝 `src/main.jsx`, `src/App.jsx`, `src/components/Encabezado.jsx` y `src/components/LayoutTienda.jsx`: los cuatro archivos con TODO. Es lo único que tocas en los tickets; el Extra toca `PanelCarrito.jsx`.
- 📄 `src/pages/`: `PaginaInicio`, `PaginaCatalogo`, `PaginaTaller` y `PaginaNoEncontrada`, ya listas. `PaginaInicio` trae la bienvenida, la oferta, los primeros cuatro repuestos y un `Link` "Ver catálogo completo".
- 🧩 `src/components/Catalogo.jsx`, `TarjetaProducto.jsx` y `FichaProducto.jsx`: la solución de la semana pasada.
- 💅 `src/App.css`: los estilos de 2.0 más los del menú, el taller y la página 404.
- 🗂️ `src/data/reparaciones.js`: datos que se usan en la tarea.
- 🖼️ `public/`: cuatro repuestos nuevos con su imagen animada (cañón de pulsos, giroscopio estabilizador, tanque de combustible y panel solar plegable), sus fichas, el `productos.json` actualizado y las imágenes de la zona del hangar de la tarea.

> [!TIP]
> Busca `TODO` en el editor: cada uno trae su número (1.1, 1.2...) y te lleva al lugar exacto. Deja abierta la barra de direcciones del navegador: es lo que más cambia hoy.

---

## 🎫 Tickets

### 1️⃣ Ticket 1 · Una URL para cada página

📄 Archivos: terminal, `src/main.jsx` y `src/App.jsx`.

1. Detén `pnpm dev` con Ctrl+C, instala el paquete con `pnpm add react-router@7` y vuelve a arrancar `pnpm dev`.
2. **TODO 1.1** (`main.jsx`): importa `BrowserRouter` desde `"react-router"` y envuelve `<App />` con él, dentro de `StrictMode`.
3. **TODO 1.2** (`App.jsx`): descomenta los imports de `Routes`, `Route` y las tres páginas.
4. **TODO 1.3** (`App.jsx`): borra el bloque que va de la bienvenida al `<Catalogo />` y escribe en su lugar un `<Routes>` con tres `<Route>`:
   - `path="/"` pinta `<PaginaInicio />` con las mismas seis props del catálogo: `productos`, `cargando`, `error`, `onReintentar={cargarCatalogo}`, `onAgregar={agregarAlCarrito}` y `onVerFicha={setFichaId}`. Esta no usa `url` ni `onCambiarUrl`.
   - `path="/catalogo"` pinta `<PaginaCatalogo />` con las props `productos`, `cargando`, `error`, `onReintentar={cargarCatalogo}`, `onAgregar={agregarAlCarrito}` y `onVerFicha={setFichaId}`. Si quieres conservar el selector de servidor de la semana pasada, agrega también `url={url}` y `onCambiarUrl={setUrl}`.
   - `path="/taller"` pinta `<PaginaTaller />`.
5. Por ahora `<Encabezado />` sigue en `App`, encima de `<Routes>`. Los imports de `Catalogo`, `OfertaRelampago` y `PanelPruebas` quedan sin uso en `App`: bórralos.
6. Escribe cada dirección en la barra del navegador: `/`, `/catalogo` y `/taller`.

**🏁 Listo cuando:**

- [ ] En `localhost:5173/` se ve la bienvenida, la oferta y cuatro repuestos destacados.
- [ ] En `localhost:5173/catalogo` se ve el catálogo con sus 12 tarjetas.
- [ ] En `localhost:5173/taller` se ve la página del taller.
- [ ] En la página de inicio, el botón "Ver catálogo completo" cambia la dirección a `/catalogo`.

> [!WARNING]
> Si la pantalla queda en blanco y la consola dice `useRoutes() may be used only in the context of a <Router> component`, falta `BrowserRouter` en `main.jsx`.

### 2️⃣ Ticket 2 · Menú con NavLink

📄 Archivo: `src/components/Encabezado.jsx`.

1. **TODO 2.1**: importa `NavLink` desde `"react-router"`.
2. **TODO 2.2**: entre `.marca` y el botón del carrito, escribe un `<nav className="navegacion">` con tres `NavLink`: Inicio (`to="/"`), Catálogo (`to="/catalogo"`) y Taller (`to="/taller"`).
3. Haz clic en cada pestaña y mira la barra de direcciones.
4. Abre las herramientas del navegador, pestaña Elements, y busca el `<a>` de la página actual.

**🏁 Listo cuando:**

- [ ] El encabezado muestra Inicio, Catálogo y Taller, y cada clic cambia la dirección sin recargar.
- [ ] La pestaña de la página actual se ve resaltada. En Elements, ese `<a>` tiene `class="active"` y `aria-current="page"`.
- [ ] En `/catalogo`, la pestaña Inicio no está resaltada.
- [ ] Agrega dos repuestos al carrito y pasa a Taller con el menú: el contador sigue en 2.

> [!IMPORTANT]
> Prueba qué pasa con un `<a href>`: cambia un momento el `NavLink` de Taller por `<a href="/taller">Taller</a>`, agrega dos repuestos y haz clic. La página recarga y el contador vuelve a 0. Deja el `NavLink` como estaba.

### 3️⃣ Ticket 3 · LayoutTienda con Outlet

📄 Archivos: `src/components/LayoutTienda.jsx` y `src/App.jsx`.

1. **TODO 3.1** y **3.2** (`LayoutTienda.jsx`): importa `Outlet` y escríbelo debajo de `<Encabezado />`.
2. **TODO 3.3** (`App.jsx`): importa `LayoutTienda`.
3. **TODO 3.4**: envuelve las tres rutas en una `<Route>` sin `path` y con `element={<LayoutTienda totalUnidades={totalUnidades} onAbrirCarrito={() => setCarritoAbierto(true)} />}`. Las hijas pasan a rutas relativas, sin `/` al inicio: `index` para el inicio, `path="catalogo"` y `path="taller"`.
4. **TODO 3.5**: quita `<Encabezado />` de `App` y su `import`. El `return` de `App` pasa a un fragmento `<>...</>`: `Routes`, `Aviso`, el panel del carrito y `FichaProducto` quedan como hermanos.

**🏁 Listo cuando:**

- [ ] El encabezado aparece una sola vez en `/`, `/catalogo` y `/taller`.
- [ ] El menú cambia de página y el carrito conserva lo agregado.
- [ ] Al pasar de Catálogo a Taller y volver, en la pestaña Network no sale un pedido nuevo a `productos.json`: el `fetch` sigue en `App`.
- [ ] Agrega un repuesto y pasa enseguida a Taller: el aviso "Agregaste..." sigue visible, y el botón Carrito abre el panel en las tres páginas.

> [!WARNING]
> Si el encabezado aparece pero la página no, falta `<Outlet />` en el layout. La consola no muestra ningún error. Si ves dos encabezados, quedó un `<Encabezado />` en `App`.

### 4️⃣ Ticket 4 · Página 404

📄 Archivo: `src/App.jsx`.

1. Antes de empezar, escribe en la barra `localhost:5173/repuestos-gratis`. La pantalla queda en blanco, sin encabezado, y la consola avisa en amarillo `No routes matched location "/repuestos-gratis"` (puede salir repetido: StrictMode renderiza dos veces).
2. **TODO 4.1**: importa `PaginaNoEncontrada`.
3. **TODO 4.2**: como última hija del layout, agrega `<Route path="*" element={<PaginaNoEncontrada />} />`.
4. Vuelve a abrir `/repuestos-gratis`.

**🏁 Listo cuando:**

- [ ] `/repuestos-gratis` muestra "Esta sección no existe en la estación" con el encabezado arriba.
- [ ] El enlace "Volver al inicio" lleva a `/`.
- [ ] `/`, `/catalogo` y `/taller` siguen mostrando sus páginas: `*` solo se usa cuando ninguna otra ruta coincide.
- [ ] Con `/catalogo` abierto, recarga el navegador (F5): el catálogo sigue ahí.

> [!NOTE]
> La advertencia amarilla de la consola desaparece al agregar la ruta `*`.

---

## 🌟 Extra para curiosos

El panel del carrito tapa la página. Nova quiere un enlace "Seguir comprando" que cierre el panel y lleve al catálogo.

1. En `src/components/PanelCarrito.jsx`, importa `Link` desde `"react-router"`.
2. Antes de `<p className="total">`, agrega `<Link to="/catalogo" className="seguir-comprando" onClick={onCerrar}>Seguir comprando</Link>`. La clase `seguir-comprando` ya está en `App.css`.

**🏁 Listo cuando:**

- [ ] Estando en `/taller`, abres el carrito y haces clic en "Seguir comprando": el panel se cierra, la dirección es `/catalogo` y el carrito conserva sus repuestos.

> [!TIP]
> `PanelCarrito` se pinta fuera de `Routes`, pero dentro de `BrowserRouter`, y por eso `Link` le funciona.

---

## 📤 Entrega

Sube los cambios a tu repositorio de GitHub (el mismo del Mercado Orbital) y pega el link en Notion. Usa este mensaje de commit: `MO-301 la tienda tiene páginas`.

