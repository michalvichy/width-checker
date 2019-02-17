# Width checker

### Instalation

```
yarn add width-checker
```

or

```
npm install width-checker
```

### Usage

```js
<WidthChecker widthUp={650} widthBelow={1200}>
  {({ display }) =>
    display && <p>Something you want to show between 650px and 1200px of screen wide</p>
  }
</WidthChecker>
```

### Props

- wait - time in miliseconds to wait between each debounce tick
- widthUp - bottom range
- widthBelow - upper range
