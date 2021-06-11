const { resolve } = require("path");

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "01_main.html"),
        // nested: resolve(__dirname, "nested/index.html"),
      },
    },
  },
};
