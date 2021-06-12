# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and is written in `Typescript`.

Tools and libraries used:

- `ESlint` - static code analysis tool that includes code quality and stylistic rules to makes sure all code follows the rules and conventions setup for the project. These rules are specified in `.eslintrc.js` in the root of the project,
- `Prettier` is used for code formatting and takes most of the rules from the `eslint` configuration,
- `npm` is a package manager and build tool for installing dependencies and running scripts from `package.json`.

## Configuration

- `.eslintrc.js` includes eslint configuration:

  - in order to integrate it with typescript it uses `typescript` parser specified in `parser` under `.eslintrc.js`,
  - all rules regarding code style and conventions are defined under `rules`

- `.prettierc` has code formatting configuration rules, but takes most of the formatting rules from the `eslint` configuration,

- `tsconfig.json` specifies root files and compiler options, see [docs](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) for more details,

- `project.code-workspace` defines a vscode workspace, which will activate vscode settings under `.vscode/settings.json`

## Setup

Running locally:

- install LTS version of [`nodejs`](https://nodejs.org/en/download/),
- install `vscode`,
- `vscode` extensions `eslint` and `prettier`.

The project should be opened as a workspace in `vscode` from `project.code-workspace`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
