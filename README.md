# Tu profe de idiomas

Tutor de idiomas web: evaluación inicial, plan de estudio personalizado, una lección por día con práctica corregida, examen semanal, simulacros Cambridge (B2+), vocabulario con tarjetas, estadísticas y racha. Cada usuario tiene su cuenta y su progreso se guarda en Supabase.

Es una página estática (HTML, CSS y JavaScript sin compilación). El login y la base de datos los pone Supabase; el alojamiento, Vercel. Las dos cosas son gratis.

## Archivos

| Archivo | Qué contiene |
|---|---|
| `index.html` | Estructura de la página |
| `styles.css` | Estilos (modo claro y oscuro) |
| `content.js` | Temario, 60 lecciones de inglés (A1–C2), con lectura y escucha, prueba de nivel y banco Cambridge |
| `app.js` | Lógica: login, onboarding, lecciones, exámenes, progreso, guardado |
| `config.js` | URL y anon key de Supabase |
| `supabase/schema.sql` | Tabla `progress` con sus reglas de seguridad |

## Puesta en marcha

### 1. Supabase
1. En el proyecto, abre **SQL Editor → New query**, pega el contenido de `supabase/schema.sql` y pulsa **Run**.
2. En **Project Settings → API** copia la **Project URL** y la **anon public key** a `config.js`.
3. En **Authentication → URL Configuration** pon como **Site URL** la dirección de tu web en Vercel (por ejemplo `https://tu-profe-de-idiomas.vercel.app`) y añádela también en **Redirect URLs**. Así funcionan los enlaces de confirmación de cuenta y de recuperar contraseña.
4. (Opcional) En **Authentication → Providers → Email** puedes desactivar "Confirm email" para que las cuentas funcionen sin confirmar el correo.

### 2. Vercel
1. Entra en [vercel.com](https://vercel.com) con tu cuenta de GitHub.
2. **Add New → Project**, elige este repositorio y pulsa **Deploy** (no hace falta configurar nada: es un sitio estático).
3. Cada cambio que se suba a la rama principal se publica solo.

### Probar en tu computadora
Abre la carpeta con cualquier servidor estático, por ejemplo `npx serve .`, y entra en la dirección que muestra. Sin `config.js` configurado, la app funciona igual pero guarda el progreso solo en el navegador.

## Notas
- La anon key es pública por diseño: la seguridad la dan las reglas RLS de `schema.sql`, que solo dejan a cada usuario leer y escribir su propia fila.
- En el plan gratuito, Supabase pausa el proyecto tras una semana sin actividad; se reactiva desde su panel.
- Los idiomas distintos del inglés y las lecciones a medida necesitan generación con IA, que aún no está conectada en esta versión.
