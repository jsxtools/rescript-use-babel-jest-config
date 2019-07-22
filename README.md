# Rescript Babel Jest [<img src="https://avatars.githubusercontent.com/u/52989093" alt="" width="90" height="90" align="right">][Rescript Babel Jest]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[Rescript Babel Jest] is a [Rescripts] configuration that lets you use your own
[Babel Jest] configuration in [Create React App] without ejecting.

## Installation

Add **Rescript Babel Jest** to your project:

```sh
npm install rescript-use-babel-jest-config --save-dev
```

Next, add **Rescript Babel Jest** to your **Rescript** configuration:

```js
// .rescriptsrc.js
module.exports = [
  ['use-babel-jest-config']
]
```

## Usage

Use your own **Babel Jest** configuration:

```json
// .babelrc
{
  "presets": ["react-app"],
  "plugins": [
    ["@babel/transform-react-jsx", {
      "pragma": "createElement",
      "pragmaFrag": "Fragment"
    }],
    ["jsx-imports", {
      "pragma": "{ createElement } from react",
      "pragmaFrag": "{ Fragment } from react"
    }],
    ["module-resolver", {
      "root": ".",
      "alias": {
        "~": "./src",
        "~components": "./src/components",
      }
    }],
    ["react-html-attrs"]
  ]
}
```

[Rescript Babel Jest]: https://github.com/jsxtools/rescript-use-babel-jest-config
[Rescripts]: https://github.com/harrysolovay/rescripts
[Babel Jest]: https://github.com/facebook/jest/tree/master/packages/babel-jest
[Create React App]: https://github.com/facebook/create-react-app

[cli-img]: https://img.shields.io/travis/jsxtools/rescript-use-babel-jest-config/master.svg
[cli-url]: https://travis-ci.org/jsxtools/rescript-use-babel-jest-config
[git-img]: https://img.shields.io/github/issues/jsxtools/rescript-use-babel-jest-config.svg
[git-url]: https://github.com/jsxtools/rescript-use-babel-jest-config/issues
[npm-img]: https://img.shields.io/npm/v/rescript-use-babel-jest-config.svg
[npm-url]: https://www.npmjs.com/package/rescript-use-babel-jest-config
