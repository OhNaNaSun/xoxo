---
title: 'CSS At-rules'
date: '2022-02-06'
read: '2'
---

**At-rules** are [CSS statements](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax#css_statements) that instruct CSS how to behave. They begin with an at sign, ‘@‘ followed by an identifier and includes everything up to the next semicolon, ‘;’ or the next [CSS block](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax#css_declarations_blocks) , whichever comes first.

- [@charset](https://developer.mozilla.org/en-US/docs/Web/CSS/@charset) — Defines the character set used by the style sheet.
- [@import](https://developer.mozilla.org/en-US/docs/Web/CSS/@import) — Tells the CSS engine to include an external style sheet.

  ```css
  /* Example: tells browser to use UTF-8 character set */
  @charset "utf-8";
  ```

- [@media](https://developer.mozilla.org/en-US/docs/Web/CSS/@media) — A conditional group rule that will apply its content if the device meets the criteria of the condition defined using a _media query_.

  ```css
  /* At the top level of your code */
  @media screen and (min-width: 900px) {
    article {
      padding: 1rem 3rem;
    }
  }
  ```

- [@supports](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports) — A conditional group rule that will apply its content if the browser meets the criteria of the given condition.

  ```css
  /* Nested within another conditional at-rule */
  @supports (display: flex) {
    @media screen and (min-width: 900px) {
      article {
        display: flex;
      }
    }
  }
  ```

- [@font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face) — Describes the aspect of an external font to be downloaded.

  ```css
  @font-face {
    font-family: 'myFont';
    src: url('webfont.eot');
    src: url('webfont.eot?#iefix') format('embedded-opentype'), url('webfont.woff2') format('woff2'),
      url('webfont.woff') format('woff'), url('webfont.ttf') format('truetype'),
      url('webfont.svg#svgFontName') format('svg');
  }
  body {
    font-family: 'MyFont', Fallback, sans-serif;
  }
  ```

- [@keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes) — Describes the aspect of intermediate steps in a CSS animation sequence.
  `@keyframes *animationname*{*keyframes-selector*{*css-styles;}*}`
  [Tryit Editor v3.7](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_keyframes2)

  ```css
  div {
    width: 100px;
    height: 100px;
    background: red;
    position: relative;
    animation: mymove 5s infinite;
  }

  @keyframes mymove {
    0% {
      top: 0px;
    }
    25% {
      top: 200px;
    }
    75% {
      top: 50px;
    }
    100% {
      top: 100px;
    }
  }
  ```

`css`
