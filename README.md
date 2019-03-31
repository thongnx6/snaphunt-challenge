# react-weather-forecast

React's weather forecast application using OpenWeatherMap API.
[Demo](http://tom-snaphunt-challenge.surge.sh/)

## Getting started

Instructions for running and using the application.

### Prerequisites

You need to install (example of software that I used).

- node
- npm

Tested in browsers: Chrome, Mozilla, Edge, Safari.

### Installing and start

```
  npm i
  npm start
```

Application will run on `0.0.0.0:3000` for testing on other device. Should be replaced by `localhost:3000`.

### Production

```
  npm run build
```

Build will be located in the directory `./static`.

## Mockup

### My thought process

1) I spend 8 hours  on the test.
2) If you are given 14 more days, what further improvements or enhancements would you implement:
   - Implement Unit Test, e2e Test, apply CI/CD.
   - Enhance optimisation (i.e. File size, lazy loading).
   - Use eslint and configuration linter strict mode for coding styles and format code auto with prettier.
3) Which parts of your work are you most proud of?
   - Mobile responsive.
   - Applied HOC as transforms a component into another component.
   - Apply React.lazy to render a dynamic import as a regular component, Suspense component to show some fallback content while we’re waiting for it to load - such as a loading indicator.
   - Use Redux architecture revolves around a strict unidirectional data flow.
   - Work with a Remote API using Redux Saga, easier to manage, more efficient to execute, simple to test, and better at handling failures.
4) Which parts of the challenge do you spend the most time on?
   - Setup Base-code, define structure and libraries will be used.
