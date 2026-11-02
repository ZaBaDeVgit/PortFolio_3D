# ZaBaDeV · Portfolio 3D

Portfolio de **Juan José Zabala Ríos**, desarrollador Full Stack y formador online. Una experiencia oscura con acentos lima, tipografía local y una escultura 3D interactiva construida con Three.js. Todo el sitio se exporta a HTML estático: no necesita un servidor de Next.js en producción.

## Desarrollo local

Requisitos: **Node.js 22+** y npm.

```bash
npm ci
npm run dev
```

Abre `http://localhost:3000`. El servidor escucha en `0.0.0.0` y permite previsualizaciones de Arena. No se necesitan claves, descargas de fuentes ni servicios externos para ver el portfolio.

## Qué incluye

- Portada con geometría 3D real, iluminación y rotación mediante arrastre.
- Pausa manual, respeto por `prefers-reduced-motion` y renderizado en reposo al salir de pantalla o cambiar de pestaña.
- Ilustración alternativa si WebGL no está disponible; la carga del motor 3D es diferida y solo se utiliza en la portada.
- Páginas de presentación, trayectoria, proyectos, stack y contacto, con URLs estables.
- Cuatro proyectos presentes en los datos originales, con demos y código fuente; filtros por categoría, búsqueda y estados vacíos.
- Menú móvil con Escape, navegación por teclado, enlace para saltar al contenido, estados de foco y contraste revisado.
- Fuentes variables autoalojadas, metadatos sociales, favicon y página 404.
- Exportación portable: raíz, dominio propio o prefijo de repositorio, sin URLs de recursos escritas a mano.
- Pruebas de navegador y accesibilidad sobre la **exportación de producción**, no solo sobre el servidor de desarrollo.

## GitHub Pages: por qué antes no mostraba la web correcta

Durante la revisión, Pages estaba configurado como **Deploy from a branch → master → /** (`build_type: legacy`). Esa opción no compila una aplicación Next.js: sirve los archivos fuente en lugar de la exportación de `out/`.

### Publicar esta versión

1. Integra los cambios de esta rama en `master` mediante una pull request.
2. En **Settings → Pages → Build and deployment → Source**, selecciona **GitHub Actions**.
3. El workflow `.github/workflows/deploy.yml` valida y publica `out/` en cada push a `master`. Si el push ocurrió antes de cambiar la configuración, ejecuta **Actions → Validate & deploy portfolio → Run workflow**, seleccionando `master`.
4. La URL prevista es **https://zabadevgit.github.io/PortFolio_3D/**.

El workflow configura automáticamente `NEXT_PUBLIC_BASE_PATH` a partir del nombre del repositorio. Las pull requests solo validan; **no publican ni reemplazan la web en producción**. La carpeta `out/` y los informes de pruebas no se versionan. `public/.nojekyll` permite servir los recursos `_next` si se usa otro sistema de publicación estática.

> Los cambios locales no modifican por sí solos la página pública ni los ajustes remotos de Pages.

### Comprobar exactamente la versión de Pages

```bash
NEXT_PUBLIC_BASE_PATH=/PortFolio_3D npm run build
NEXT_PUBLIC_BASE_PATH=/PortFolio_3D npm run preview
```

Abre `http://localhost:4173/PortFolio_3D/`. Mantén el mismo prefijo durante la compilación y la previsualización. En PowerShell, establece antes `$env:NEXT_PUBLIC_BASE_PATH='/PortFolio_3D'`.

Para un dominio propio o alojamiento en la raíz:

```bash
npm run build
npm run preview
```

Abre `http://localhost:4173`. `npm run preview` sirve exclusivamente la exportación estática; no es `next start`, que no es compatible con `output: 'export'`.

## Contacto: comportamiento explícito, sin envíos ficticios

**Por defecto no se envían correos.** El formulario prepara un borrador local que el visitante puede copiar y enviar por LinkedIn. Los datos no se guardan ni se envían a un servidor.

Para habilitar EmailJS:

1. Copia `.env.example` a `.env.local` y configura los tres identificadores públicos de EmailJS.
2. En la plantilla usa `name`, `email`, `reply_to` y `message`.
3. En EmailJS, restringe los orígenes permitidos al dominio del portfolio y configura sus controles antiabuso.
4. Para GitHub Actions, crea las tres variables `NEXT_PUBLIC_EMAILJS_*` en **Settings → Secrets and variables → Actions → Variables**. Vuelve a compilar/publicar para aplicar los cambios.

No introduzcas una clave privada en variables `NEXT_PUBLIC_*`: su contenido llega al navegador. El formulario solo confirma un envío cuando EmailJS responde correctamente; conserva los campos si falla. Incluye honeypot y limitación de frecuencia del cliente, que **no sustituyen** los límites del servicio.

## Calidad y pruebas

```bash
npm run lint
npm run typecheck
npm run format:check
npm run build
npx playwright install --with-deps chromium
npm test
npm audit --omit=dev
```

`npm test` arranca el servidor estático si no existe uno en el puerto 4173. Si compilas con un prefijo, pásalo también al comando de test. Las pruebas comprueban:

- Las cinco rutas, recursos locales y ausencia de errores JavaScript.
- Accesibilidad WCAG A/AA con axe en escritorio y móvil.
- Filtros, búsqueda, limpieza de filtros y borrador de contacto.
- Carga y pausa de la escena 3D, movimiento reducido y menú móvil.
- Página 404 y ausencia de scroll horizontal a 320, 375, 768 y 1024 px.

Se puede proporcionar `PLAYWRIGHT_EXECUTABLE_PATH` para usar un Chromium instalado. La CI instala el navegador oficial. Los tests no envían correos reales.

La auditoría de dependencias **de producción** no detectaba vulnerabilidades en la validación de noviembre de 2026. La cadena de ESLint contiene avisos moderados transitivos de `minimatch`; no se ha aplicado un `audit fix --force` que retrocedería a versiones incompatibles. Revisa `npm audit` periódicamente; las auditorías no sustituyen una revisión de seguridad.

## Personalización

| Archivo                           | Contenido                                                                |
| --------------------------------- | ------------------------------------------------------------------------ |
| `data.tsx`                        | Identidad, perfiles, navegación, proyectos, trayectoria y tecnologías    |
| `app/globals.css`                 | Tokens visuales, composición y breakpoints                               |
| `components/sculpture-canvas.tsx` | Geometría, material, iluminación y controles                             |
| `components/hero-art.tsx`         | Carga diferida, pausa, visibilidad y alternativa WebGL                   |
| `app/layout.tsx`                  | Metadatos, fuentes, cabecera y pie                                       |
| `public/`                         | Solo recursos usados por el portfolio                                    |
| `scripts/social-image.mjs`        | Regeneración local de `og-image.png` con `node scripts/social-image.mjs` |

Los números arbitrarios de dominio de tecnologías, testimonios de plantilla y enlaces `#!` se han eliminado. No se han añadido clientes, certificaciones, proyectos ni estadísticas inventados. Las demos externas se conservan de los datos originales; su disponibilidad depende de sus respectivos repositorios.

## Docker

```bash
docker build -t zabadev-portfolio .
docker run --rm -p 8080:80 zabadev-portfolio
```

Sirve la exportación estática con Nginx en `http://localhost:8080`. La imagen usa Node 22 para compilar y no incluye el servidor de desarrollo ni dependencias de Node en la imagen final. El Dockerfile está pensado para servir desde la raíz.
