# UI Stylish

## TailwindCSS

Please for more information go to here [TailwindCSS](https://tailwindcss.com/).

### Installation

Run `npm install -D tailwindcss`

Run `npm install postcss@latest autoprefixer@latest` to install postcss and autoprefixer for bundling.

## Generate TailwindCSS Condifuration File

Move to Angular root folder and Run `npx tailwindcss init`

It will create a minimal tailwind.config.js file at the root of your Angular project.

```javascript
// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

## Modify styles.css

Add Tailwind CSS styles in Global styles.scss file

```css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
