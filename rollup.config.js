export default [
  {
    input: './node_modules/fetch-mock/dist/es5/client-bundle.js',
    output: {
      file: './fetchMock.js',
      format: 'es',
    },
    plugins: [
      {
        transform: (code) => {
          let result = code;
          result = result.replace('var fetchMock =\n', 'export default\n');
          return result;
        },
      },
    ],
  },
];
