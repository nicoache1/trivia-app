# Trickty

## Table of contents

- [Description](#description)
- [Developer Setup](#developer-setup)
  - [Install Required Dependencies](#install-required-dependencies)
  - [Install Environment Variables](#install-environment-variables)
  - [Start Expo](#start-expo)
  - [Visual Studio Code Configuration](#visual-studio-code-configuration)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
  - [Unit and Acceptance Tests](#unit-and-acceptance-tests)
  - [Component folder structure](#component-folder-structure)
- [Styleguide](#styleguide)
- [Third Party Services](#third-party-services)
- [Languages Management](#languages-management)
  - [Translations](#translations)
    - [Update translation file](#update-translation-file)
    - [Add New language to the application](#add-new-language-to-the-application)

## Description

This app was made to meet the requirements to join the G2i community.
It's a trivia app based in [Open TB](https://opentdb.com/) and Expo. Below you could see a gif of the app functionality en behavior.

<img src="./assets/video/app.gif" width="200" height="450"  />
<br></br>

## Developer Setup

### Install Required Dependencies

- [Node](https://nodejs.org/en/download/): Node 14 LTS version or higher
- [Expo-cli](https://reactnative.dev/docs/environment-setup): Expo command line tools.

If you want to run in some physical devices thats all, because Expo allows to run in physical devices without setting up a development environment, if you want to use simulators/emulators we need some extra things.

- [OpenJDK distribution called Azul Zulu](https://reactnative.dev/docs/environment-setup): Java Development Kit
- [Android Studio](https://developer.android.com/studio/index.html)
- [Xcode](https://developer.apple.com/xcode)

### Install Environment Variables

This project has some environment variables, you will need to create a `.env` equal to `.env.SAMPLE` and put the required dependencies here.

### Start Expo

In the project root, run

```bash
$ npm start
```

### Visual Studio Code Configuration

[Visual Studio Code](https://code.visualstudio.com/) is the recommended text editor for this project. The following extensions are useful:

- Prettier - code formatter
- ESLint - TypeScript linter

## Tech Stack

- [Expo](https://expo.dev) framework to create apps in React Native in the easy way, also comes with a lot of helpers.
- [TypeScript](https://www.typescriptlang.org)
- [React Native](https://facebook.github.io/react-native)
- [Hooks](https://reactjs.org/docs/hooks-intro.html) They let you use state and other React features without writing a class.
- [Redux Toolkit](https://redux-toolkit.js.org) library with helpers and tools like RTK query, createSlice to make redux more easier.
- [React-Redux](https://github.com/reduxjs/react-redux) React bindings for Redux.
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) API solution with cache management and state management.
- [React-Navigation](https://reactnavigation.org) JavaScript library for navigation.
- [React-Hook-Form](https://react-hook-form.comre) library to create forms more easily
- [React-Native-Paper](https://callstack.github.io/react-native-paper/) UI material components by Callstack.
- [Expo localization](https://docs.expo.dev/versions/latest/sdk/localization/) multi language support.
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) library to make animations in React Native.
- [Lottie](https://github.com/lottie-react-native/lottie-react-native) After Effects UI animations for React Native.
- [Lodash](https://github.com/lodash/lodash) general utility helper
- [Jest](https://jestjs.io) for unit testing
- [React Native Testing Library](https://github.com/callstack/react-native-testing-library) Simple and complete React Native testing utilities that encourage good testing practices.

## Project Structure

### Unit and Acceptance Tests

Inside the folder `__tests__` this project has unit tests oriented to behavior and also some snapshots of the components, they all work the same way. Run all tests once:

```bash
$ npm run test
```

#### Component folder structure

This template follows the next structure:

- `assets`: Contains every asset used in the application (images, audio, video, etc)
- `localization`: Contains the logic related to support multiple languages
- `utils`: Test utils
- `src`: Main container of all the code inside the application.
  - `components`: Contains every component that is widely used throughout the project.
  - `styles`: Contains the Theme with the global styles, fonts, colors used throughout the codebase
  - `common`: Contains common logic and functions.
  - `navigation`: Every related to navigation should be here.
  - `types`: Interfaces, model entities.
  - `store`: Contains all logic related to data storage and API logic because we use RTK query as we mention before.
  - `scenes`: Every flow in the application should be here inside a corresponding folder, with its component, styles and such.
    - `index.tsx`: Contains a scene where it has the components and the logic.
    - `types.ts`: Whenever we need some types constrained to this scene
    - `styles.ts`: styles constrained to this scene

## Styleguide

When coding a new React-Native application we will follow the Community guidelines with some extra tweaks

Also to help to maintain a good quality in our code we use the next extensions

- [ESLint](https://eslint.org/) for linting and code quality
- [Prettier](https://prettier.io) an opinionated code formatter

## Languages Management

### Translations

Inside the folder localization in the root dir you will see two things:

- Languages folder: Contains all the translations file of languages that are supported by the app, for example `en.ts`
- `index.tsx` file with the logic for the translations.

#### Update translation file

1. Add a new key with his corresponding translation to the files inside the languages folder.

#### Add New language to the application

1. Add a new file with all the keys and his translations, for example `fr.ts` will be the french one.
2. Go to `index.tsx` and update available languages and translations getters.
