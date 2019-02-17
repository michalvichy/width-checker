# Width checker

### Instalation

```
yarn add react-width-checker
```

or

```
npm install react-width-checker
```

### Usage

```js
import { WidthChecker } from 'react-width-checker
```

```js
<WidthChecker widthUp={650} widthBelow={1200}>
  {({ display }) =>
    display && <p>Something you want to show between 650px and 1200px of screen wide</p>
  }
</WidthChecker>
```

### Props

- wait - (default 200) time in miliseconds to wait between each debounce tick
- widthUp - (number) bottom range
- widthBelow - (number) upper range
- ssr - (optional, boolean) if you want to render component on server set it to true
