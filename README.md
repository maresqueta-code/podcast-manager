## Podcast Manager App v1.0.0

### Author: Marcos Luis Aresqueta

`git@github.com:maresqueta-code/podcast-manager.git`

## Languages

- [English version](README.md)
- [Spanish version](README.es.md)

## Table of Contents

- [Description](#description)
- [Local Deployment](#local-deployment)
- [Tests](#tests)
- [Build for Production & Serve](#build-for-production--serve)
- [License](#license)

## Description

### Project

The Podcast Manager App (MVP) is a working app that follows the specification and UI design provided in the pdf file with the [Technical Assessment](prueba-tecnica-front-end-marketplaces.pdf) applying some of the Clean Architecture principles.

### Compatibility

Although the project was tested using `node version >= 20` and `yarn`, it should work with `npm`, `pnpm`, or other package managers as well. Just replace `yarn` by the manager of your choice when running the scripts.

### Future improvements

Even though there is still room for improvement, due to time constraints, I think the project is in a decent state now to be sent to you for demo purposes.
I'd be glad to get your feedback. Let me know in case there is anything missing in this README.md or something needs further clarification.

### Stack

#### React 18

It offers significant enhancements in performance, user experience, and developer productivity through concurrent rendering, automatic batching, and new hooks to the already known ones. The version 18 of `React` automatically catches more errors during rendering, providing better error boundaries and more resilient applications.

#### @tanstack/react-query 5

The App was integrated to `react-query` in an effort to improve the performance and the interaction between the App and the REST API, and so on. It leverages a powerful set of tools for managing server state, improving data fetching efficiency, and enhancing the overall user experience. `react-query` provides features like automatic caching, background synchronization, and robust error handling.
When defining the `queryClient` the necessary setup is provided to leverage a 24 hours cache for each request with a different key and thus considerably improve the performance of the application.

#### zustand

It was used to manage the states to provide the filtering feature. `zustand` is a library based on hooks that provides a minimal and straightforward API for state management with no boilerplate. It offers flexibility since it can be used alongside other state management solutions or on its own, offering in managing application state. It provides efficient state updates with minimal re-renders which improves app performance. It scales well with application size, allowing you to manage global, shared, and local states effortlessly.

#### react-router-dom 6

This library adds and enhances the routing capabilities of React apps by offering a declarative, flexible, and robust routing solution. Its features like dynamic and nested routing, URL parameter handling, and seamless integration with React hooks make it a powerful tool for managing navigation in Single Page Apps like this app.

#### msw

Mock Service Worker is a versatile API mocking library for browser and Node.js environments. It intercepts HTTP requests at the network level, providing a flexible and powerful way to mock APIs during development and testing. Even though it's not absolutely stable yet it's plenty of potential to fully mock APIs in the near future.

#### Vite

The core build tool.

#### Tailwind 3.4

A utility-first CSS framework that provides low-level, reusable utility classes to build custom designs without leaving HTML, JSX or TSX. It allows to apply styles directly in the markup by using predefined classes for layout, spacing, typography, colors, and so on.

#### PostCSS

For handling CSS transformations.

#### Autoprefixer

A `PostCSS` plugin to add browser vendor prefixes.

### CSS Minifier

`Vite` uses `esbuild` for minification out of the box, but you can configure additional CSS optimization if needed.

### Typescript

To improve the Javascript codebase with types, and so on.

### Browser Local Storage

The `react-query`state cache is persisted in the browser `localstorage` so it's keeped after closing the browser and reloaded when opening it again. This local storage is overriden when `react-query` cached queries gets invalidated (after 24 hs) and fresh data is gotten.
To manually delete the cache persisted in `localstorage` go to `devtools` -> `Application` tab -> `Storage` section and manually delete the key-value pair (`podcasts-cache`) for `Local storage` in the App domain.

## Local Deployment

Since there's no API key in .env files, they were commited to the project to make easier to run it without adding any setup.

### 1.a) Clone the repository from GitHub `git@github.com:maresqueta-code/podcast-manager.git`:

```bash
git clone https://github.com/maresqueta-code/podcast-manager.git
```

### 1.b) Otherwise go to https://github.com/maresqueta-code/podcast-manager , download and unzip it.

### 2. Once you have the repository, move into the project folder:

```bash
cd podcast-manager
```

### 3. Install the project dependencies

From now on, the scripts are provided in `package.json` to continue. To install the libs and their dependencies run:

```bash
yarn install
```

or

```
npm install
```

or

```
pnpm install
```

### 4. Start the App

To start the App at localhost, open a new terminal and run:

```bash
yarn dev
```

or

```bash
yarn run dev
```

The server with the App should be started at (the port could be different if 5173 already being used):

#### http://localhost:5173/

## Tests

### 1. Run the tests once

The tests developed to add coverage to the App use:

- Vitest, a testing framework that integrates well with Vite;
- React Testing Library, a light-weight API to test React functional components.

To execute the tests just once and get the coverage report in terminal, open a new terminal and run:

```bash
yarn test
```

or

```bash
yarn run test
```

The current coverage report for the project is the following (there's still room for improvement, and to add more coverage as well):

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

To execute the tests in watch mode and get the coverage report in the terminal, run:

```bash
yarn test:watch
```

or

```bash
yarn run test:watch
```

### 3. Tests in Vitest UI

To execute the tests in watch mode, and start the local server with Vitest UI to manage the tests, get the coverage details, see stack error output as it is shown in the terminal, and even to have the source code available, run:

```bash
yarn test:ui
```

or

```bash
yarn run test:ui
```

## Eslint and Prettier

### 1. ESLint

To run ESLint in the current path and lint the `.ts` and `.tsx`files and fail the linting process if there are any warnings, execute:

```bash
yarn lint
```

or

```bash
yarn run lint
```

### 2. Prettier

The following script formats all supported files in your project according to Prettier's rules:

```bash
yarn format
```

or

```bash
yarn run format
```

### 3. All checks together

The following script is a way to run all your quality checks in a go. This script will ensure that your code is linted, formatted, and all the developed tests pass before proceeding. By combining these tasks into a single command, you can enforce a consistent code quality standard across the project:

#### If your package manager is `yarn` then run:

```bash
yarn run checks
```

#### If your package manager is `npm` then run:

```bash
yarn run checks:npm
```

## Build for Production & Serve

### 1. Build

Running the following script builds a Vite-based SPA for `Production`:

```bash
yarn build
```

or

```bash
yarn run build
```

The production-ready bundle by default is located in the `dist` directory including CSS minification and browser vendor-prefix handling, and so on.

### 2. Serve

Once the build is done, in order to serve the static files from the `dist` directory using a local web server run:

```bash
yarn serve
```

or

```bash
yarn run serve
```

After that the App served from the static files will be accessible at:

#### http://localhost:4173/

This script serves the built production files locally. This is useful e.g. to test the final build before deploying it to a `Production` environment.

## License

podcast-manager-app is distributed as it is under the [MIT License](LICENSE).
