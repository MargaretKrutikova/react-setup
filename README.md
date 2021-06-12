# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and is written in `Typescript`.

Tools and libraries used:

- `ESlint` is a static code analysis tool that is used only for enforcing code quality (and not formatting) rules. These rules are specified in `.eslintrc.js` in the root of the project,
- `Prettier` is an opinionated code formatter with very few configuration options and this project uses very few overrides,
- `npm` is a package manager and build tool for installing dependencies and running scripts from `package.json`.

## Configuration

- `.eslintrc.js` includes eslint configuration, it extends the default `create-react-app` config (`react-app` in `extends`) and overrides/adds some more useful rules (e.g. only named exports, prefer arrow functions etc.),

- `.prettierignore` is like `.gitignore` but for `prettier`,

- `.prettierrc` includes code formatting configuration,

- `package-lock.json` stores the exact dependency tree every time there is a modification of `node_modules` to ensure consistent behavior when building the project in different environments,

- `package.json` stores the project's metadata - dependencies with versions, build scripts, version etc.,

- `project.code-workspace` defines a vscode workspace, which will activate vscode settings under `.vscode/settings.json`

- `tsconfig.json` specifies root files and TS compiler options, see [docs](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) for more details,

## Setup

Running locally:

- install LTS version of [`nodejs`](https://nodejs.org/en/download/),
- install `vscode`,
- `vscode` extensions `eslint` and `prettier`.

The project should be opened as a workspace in `vscode` from `project.code-workspace`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

### `npm run lint`

Runs `eslint` linting rules and treats warnings as errors.
