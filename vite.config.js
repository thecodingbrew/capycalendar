export default {
    build: {
      lib: {
        entry: './index.js',
        name: 'capycalendar',
        formats: ['umd', 'es'],
        fileName: (format) => `capycalendar.${format}.js`
      },
      rollupOptions: {
        // Make sure to externalize dependencies that shouldn't be bundled
        external: [],
        output: {
          // Provide global variables to use in the UMD build
          globals: {capy: 'capytest'},
        },
      },
    },
  };
  