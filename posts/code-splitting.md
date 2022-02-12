---
title: 'Code Splitting'
date: '2021-11-09'
---

Code-Splitting is a feature supported by bundlers like [Webpack](https://webpack.js.org/guides/code-splitting/) , [Rollup](https://rollupjs.org/guide/en/#code-splitting) and Browserify (via [factor-bundle](https://github.com/browserify/factor-bundle) ) which can create multiple bundles that can be dynamically loaded at runtime.

**Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user**, which can dramatically improve the performance of your app. While you haven’t reduced the overall amount of code in your app,
**you’ve avoided loading code that the user may never need, and reduced the amount of code needed during the initial load.**

## Dynamic import

[dynamic import](https://javascript.info/modules-dynamic-imports)

```js
import('./math').then((math) => {
  console.log(math.add(16, 26));
});
```

When Webpack comes across this syntax, it automatically starts code-splitting your app. If you’re using Create React App, this is **already configured for you** and you can [start using it](https://create-react-app.dev/docs/code-splitting/).

## React.lazy

React.lazy and Suspense are not yet available for server-side rendering.
The `React.lazy` function lets you render a dynamic import as a regular component.

```js
const OtherComponent = React.lazy(() => import('./OtherComponent'));
```

This will automatically load the bundle containing the OtherComponent when this component is first rendered.
`React.lazy` takes a function that must call a dynamic import(). This must return a Promise which resolves to a module with a default export containing a React component.
The lazy component should then be rendered inside a Suspense component, which allows us to show some `fallback` content (such as a loading indicator) while we’re waiting for the lazy component to load.

**Route-based code splitting example**

```js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Suspense>
  </Router>
);
```

## Code splitting in Nextjs

Next.js has built-in support for [Code Splitting](https://reactrouter.com/web/guides/code-splitting) .
Each file inside your `pages/` directory will be code split into its own JavaScript bundle during the build process.
Next.js [also supports](https://nextjs.org/docs/basic-features/supported-browsers-features#javascript-language-features) ES2020 dynamic import() for JavaScript. With it you can import JavaScript modules dynamically and work with them. They also work with SSR.
**code example**

```js
import dynamic from 'next/dynamic';
const MusicPlayer = dynamic(
  () => {
    return import('../components/MusicPlayer/MusicPlayer');
  },
  { ssr: false }
);
```

`react`
