// eslint.config.js
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const path = require("path");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*"],
    plugins: {
      import: require("eslint-plugin-import"),
    },
    rules: {
      // optional: stricter import sorting/checks
      "import/no-unresolved": "error",
      "import/order": ["warn", { "newlines-between": "always" }],
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: path.resolve(__dirname, "tsconfig.json"),
        },
      },
    },
  },
]);
