# Alpha DS

A user-friendly, open-source design system based on Bulma.io, focused on a clean interface and looking for the best web accessibility.

## Installation

Clone it and get dependencies:

```bash
git clone git@github.com:codebundleio/alpha.git
```

Then install the npm dependencies with:

```bash
npm install
```

## Getting started

To start the development server, run:

```bash
npm start
```

You can now access your styleguide at [localhost:4321](http://localhost:4321).

You’re all set, start to:

- Create components as `.nunj` (Nunjucks) files inside the `components` directory
- Write some style inside `assets/scss/base.scss`
- Write JavaScript inside `assets/scripts/base.js`
- Put some `*.svg` icons in the `assets/icons` directory
- Write documentation as `.md` (Markdown) files inside the `docs` directory.

## Build

You can build a static version of the styleguide to deploy it wherever you like by running:

```
npm run build
```

The generated files go to the `dist` directory.

## Misc

### Browsers support

The browsers support is defined in the `package.json`, in the `browserslist` entry. It’s used both by Autoprefixer for the CSS and by babel-preset-env for the JavaScript.

Check [browserslist’s documentation](https://github.com/ai/browserslist) to change the browser support.

----------------------------

This project is part of the [CodeBundle.io](https://github.com/codebundleio) organization.
This means that it adheres to its [core values](https://github.com/codebundleio/base/blob/master/files/VALUES.md), [code of conduct](https://github.com/codebundleio/base/blob/master/files/CODE_OF_CONDUCT.md) and
[contributing guidelines](https://github.com/codebundleio/base/blob/master/files/CONTRIBUTING.md), and uses an equivalent [license](https://github.com/codebundleio/base/blob/master/files/LICENSE).
