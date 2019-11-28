module.exports = {
  "extends": [
    "airbnb",
    "prettier"
  ],
  "plugins": [
    "prettier"
  ],
  "env": {
    "browser": true,
    "es6": true
  },
  "rules": {
    "prettier/prettier": [
      "warn",
      {
        "singleQuote": true,
        "trailingComma": "all",
        "useTabs": true,
        "tabWidth": 4
      }
    ],
    "import/no-extraneous-dependencies": 0,
    "indent": "off",
    "no-tabs": "off",
    "class-methods-use-this": "off",
    "linebreak-style":"off"
  }
};
