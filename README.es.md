## Podcast Manager App v1.0.2

### Autor: Marcos Luis Aresqueta

`git@github.com:maresqueta-code/podcast-manager.git`

## Idiomas

- [English version](README.md)
- [Spanish version](README.es.md)

## Tabla de Contenidos

- [Description](#description)
- [Local Deployment](#local-deployment)
- [Tests](#tests)
- [Build for Production & Serve](#build-for-production--serve)
- [License](#license)

## Description

### Project

La Podcast Manager App (MVP) es una app funcional que sigue la especificación y diseño provistos en el fichero PDF [Evaluación Técnica](prueba-tecnica-front-end-marketplaces.pdf) aplicando principios de Clean Architecture.

### Compatibility

Aunque el proyecto se probó usando `node version >= 20` y `yarn`, debería funcionar con `npm`, `pnpm` u otros package managers también. Simplemente reemplazar `yarn` por el administrador de su elección cuando ejecute los scripts.

### Future improvements

Aunque aún existe margen de mejora, debido a las limitaciones de tiempo, entiendo que el proyecto ya está en un estado decente para ser liberado como demo. Quedo a espera de sus comentarios. Hacedme saber en caso que falte algún detalle en este README.md o algo requiera mayor clarificación.

### Stack

#### React 18

Ofrece mejoras significativas en el rendimiento, la experiencia de usuario y la productividad a través del concurrent rendering, batch automático y nuevos hooks además de los ya conocidos. La versión 18 de `React` detecta automáticamente más errores durante el rendering, proporcionando mejor manejo de errores y aplicaciones más confiables.

#### @tanstack/react-query 5

La aplicación se integró con `react-query` en un esfuerzo por mejorar el rendimiento y la interacción entre la aplicación y la API REST, por sólo mencionar algunos beneficios. Provee un potente conjunto de herramientas para administrar el estado del servidor, mejorar la eficiencia de la recuperación de datos y mejorar la experiencia general del usuario. `react-query` proporciona características como el almacenamiento en caché automático, la sincronización en segundo plano y el manejo robusto de errores. Es al definir el `queryClient` que se especifa la configuración necesaria para proveer una cache por 24 hs de cada request cuya clave sea diferente y asi mejorar considerablemente la performance de la aplicación.

#### zustand

Se utiliza para administrar los estados y proporcionar la función de filtrado. `zustand` es una biblioteca basada en hooks que provee una API mínima y simple para la gestión de estados exceso de código. Ofrece flexibilidad, ya que se puede utilizar tanto junto con otras soluciones de gestión del estado, como también por sí solo, pudiendo administrar por completo el estado de la aplicación. Proporciona actualizaciones de estado eficientes con re-renders mínimos que mejoran el rendimiento de la aplicación. Escala bien con el tamaño de la app, permitiendo gestionar estados globales, compartidos y locales fácilmente.

#### react-router-dom 6

Esta biblioteca agrega y mejora las posibilidades de enrutamiento de las aplicaciones React al ofrecer una solución de enrutamiento declarativa, flexible y robusta. Sus características como el enrutamiento dinámico y anidado, el manejo de parámetros de URL y la integración con los hooks de React lo convierten en una herramienta poderosa para administrar la navegación en aplicaciones SPA (apps de una sola página).

#### msw

Mock Service Worker es una biblioteca de simulación de API versátil para entornos de navegador y Node.js. Intercepta las solicitudes HTTP a nivel de red, proporcionando una forma flexible y potente de simular las API durante el desarrollo y las pruebas. A pesar de que todavía no es absolutamente estable, tiene mucho potencial para el futuro cercano.

#### Vite

La herramienta de build central.

#### Tailwind 3.4

Un framework CSS de utilidades que proporciona clases reutilizables, de bajo nivel para crear diseños personalizados sin dejar HTML, JSX o TSX. Permite aplicar estilos directamente en el markup utilizando clases predefinidas para el diseño, el espaciado, la tipografía, los colores, etc.

#### PostCSS

Para manejar las transformaciones de CSS.

#### Autoprefixer

Un complemento `PostCSS` para añadir prefijos de proveedor de navegador.

### CSS Minifier

`Vite` utiliza `esbuild` para integrar la minificación, pero permite configurar optimización CSS adicional si es necesario.

### Typescript

Para mejorar la base de código de Javascript con tipos, entre muchos otros beneficios.

### Browser Local Storage

La caché de estado de `react-query` se persiste en el `localstorage` del navegador, por lo que se mantiene después de cerrar el navegador y se vuelve a cargar cuando el mismo se abre nuevamente. Este almacenamiento local se sobreescribe cuando las consultas en caché de `react-query` se invalidan (después de 24 horas) y se obtienen datos nuevos.
Para eliminar manualmente la caché persistente en `localstorage`, ir a `devtools` -> pestaña `Application` -> sección `Storage` y eliminar manualmente el par clave-valor (`podcasts-cache`) para `Local storage` en el dominio de la aplicación.

## Local Deployment

Dado que se utiliza ninguna API key en los archivos .env, se agregaron al proyecto para facilitar su ejecución sin necesidad de agregar ninguna configuración.

### 1.a) Clonar el repositorio desde GitHub `git@github.com:maresqueta-code/podcast-manager.git`:

```bash
git clone https://github.com/maresqueta-code/podcast-manager.git
```

### 1.b) Alternativamente ir a https://github.com/maresqueta-code/podcast-manager, descargar el proyecto y descomprimirlo.

### 2. Una vez que se tiene el repositorio local, ubicarse dentro del directorio del proyecto:

```bash
cd podcast-manager
```

### 3. Instalar las dependencias del proyecto

De aquí en adelante, los scripts son provistos en el fichero `package.json`. Para instalar las dependencias ejecutar:

```bash
yarn install
```

o

```
npm install
```

o

```
pnpm install
```

### 4. Start the App

Para iniciar la App en localhost, abrir una nueva terminal y ejecutar:

```bash
yarn dev
```

o

```bash
yarn run dev
```

El servidor con la App debería iniciarse en (el puerto podría ser diferente si 5173 ya está siendo utilizado):

#### http://localhost:5173/

## Tests

### 1. Ejecutar los tests una única vez

Los tests desarrollados para agregar cobertura a la App usan:

- Vitest, un framework de pruebas que se integra bien con Vite;
- React Testing Library, una API ligera para testear los componentes funcionales de React.

Para ejecutar las pruebas sólo una vez y obtener el informe de cobertura en la terminal, abrir un nuevo terminal y ejecutar:

```bash
yarn test
```

o

```bash
yarn run test
```

The current coverage report for the project is the following (there's still room for improvement, and to add more coverage as well):
El informe de cobertura actual de éste proyecto es el siguiente (si bien aún queda margen de mejora, y posibilidades de agregar mayor cobertura):

---------------------------|---------|----------|---------|---------|-------------------
File | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
---------------------------|---------|----------|---------|---------|-------------------
All files | 96.34 | 80 | 91.3 | 96.34 |  
 **mocks** | 100 | 100 | 100 | 100 |  
 episodes.ts | 100 | 100 | 100 | 100 |  
 podcasts.ts | 100 | 100 | 100 | 100 |  
 application/hooks | 93.05 | 83.33 | 100 | 93.05 |  
 useEpisodeCount.ts | 100 | 100 | 100 | 100 |  
 useEpisodeTable.ts | 100 | 100 | 100 | 100 |  
 useGetPodcast.ts | 87.5 | 66.66 | 100 | 87.5 | 13-14  
 useGetPodcastList.ts | 86.66 | 66.66 | 100 | 86.66 | 12-13  
 usePodcastFilterInput.ts | 92.85 | 100 | 100 | 92.85 | 8  
 application/stores | 88.23 | 100 | 0 | 88.23 |  
 filterStore.ts | 88.23 | 100 | 0 | 88.23 | 14-15  
 infrastructure/api | 65.21 | 50 | 100 | 65.21 |  
 apiConstants.ts | 100 | 100 | 100 | 100 |  
 podcastRepository.ts | 58.97 | 50 | 100 | 58.97 | 12-19,30-37  
 ui/components | 99.16 | 82.6 | 100 | 99.16 |  
 EpisodeCount.tsx | 100 | 100 | 100 | 100 |  
 EpisodeDetail.tsx | 100 | 50 | 100 | 100 | 8  
 EpisodeTable.tsx | 100 | 100 | 100 | 100 |  
 Header.tsx | 100 | 100 | 100 | 100 |  
 PodcastCard.tsx | 100 | 100 | 100 | 100 |  
 PodcastCount.tsx | 100 | 100 | 100 | 100 |  
 PodcastFilterInput.tsx | 100 | 100 | 100 | 100 |  
 PodcastList.tsx | 100 | 66.66 | 100 | 100 | 12  
 PodcastSummary.tsx | 100 | 100 | 100 | 100 |  
 TextLink.tsx | 100 | 100 | 100 | 100 |  
 util.ts | 71.42 | 33.33 | 100 | 71.42 | 6-7  
 ui/routes | 100 | 100 | 100 | 100 |  
 routeConstants.ts | 100 | 100 | 100 | 100 |  
---------------------------|---------|----------|---------|---------|-------------------

### 2. Tests in watch mode

Para ejecutar las pruebas en modo watch y obtener el informe de cobertura en el terminal, ejecutar:

```bash
yarn test:watch
```

o

```bash
yarn run test:watch
```

### 3. Tests in Vitest UI

Para ejecutar las pruebas en modo watch e iniciar el servidor local con la interfaz de usuario de Vitest para gestionar las pruebas, obtener los detalles de la cobertura, y ver la salida de errores como se verían desde la terminal, e incluso visualizar el código fuente, ejecute:

```bash
yarn test:ui
```

o

```bash
yarn run test:ui
```

## Eslint and Prettier

### 1. ESLint

Para ejecutar ESLint en la ruta actual para los ficheros `.ts` y `.tsx` y falle el proceso de linting si hay alguna advertencia, ejecute:

```bash
yarn lint
```

o

```bash
yarn run lint
```

### 2. Prettier

El siguiente script formatea todos los ficheros compatibles en el proyecto de acuerdo con las reglas de Prettier:

```bash
yarn format
```

o

```bash
yarn run format
```

### 3. All checks together

El siguiente script es una forma de ejecutar todos loc chequeos de calidad de una sóla vez. Este script garantizará que su código esté formateado y que todas las pruebas desarrolladas pasen con éxito antes de continuar. Al combinar estas tareas en un solo comando, puede hacer cumplir un estándar de calidad de código consistente en todo el proyecto:

#### Si su package manager es `yarn` entonces ejecutar:

```bash
yarn run checks
```

#### Si su package manager es `npm` entonces ejecutar:

```bash
yarn run checks:npm
```

## Build for Production & Serve

### 1. Build

Al ejecutar el siguiente script se crea una SPA basada en Vite para `Production`:

```bash
yarn build
```

o

```bash
yarn run build
```

El bundle listo para Producción se ubica por defecto en el directorio `dist`, incluida la minificación de CSS y el manejo de los prefijos de proveedor de navegador.

### 2. Serve

Una vez terminada la build, para servir los ficheros estáticos desde el directorio `dist` utilizando un servidor web local, ejecutar:

```bash
yarn serve
```

o

```bash
yarn run serve
```

Después de eso, se podrá acceder a la aplicación servida desde los ficheros estáticos en:

#### http://localhost:4173/

Este script sirve localmente los ficheros de la build para `Producción`. Esto es útil, por ejemplo, para testear la compilación final antes de implementarla realmente en un entorno de `Producción`.

## License

podcast-manager-app se distribuye tal cual es bajo la licencia [MIT License](LICENSE).
