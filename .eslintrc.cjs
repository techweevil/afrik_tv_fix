module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "root": true,
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "prettier"
  ],
  "rules": {
  }
}
