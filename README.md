# fetch-mock

This is a mirror of [fetch-mock](https://www.npmjs.com/package/fetch-mock), bundled and exposed as ES module.

## Install

```
npm install @bundled-es-modules/fetch-mock
bower install bundled-es-modules/fetch-mock
```

## Use

```html
<script type="module">
  // from main file
  import { fetchMock } from 'fetch-mock';
  // or directly
  import fetchMock from 'fetch-mock/fetchMock.js';
  console.log(fetchMock);
</script>
```

Make sure you added `@bundled-es-modules` scope to the path if used via npm.
