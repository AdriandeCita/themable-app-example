module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "prettier"
  ],
  "plugins": [
    "react",
    "react-hooks",
    "jsx-a11y",
    "import",
    "prettier"
  ],
  "env": {
    "browser": true,
    "es6": true,
    "jest": true
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
    "react/jsx-indent": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-indent-props": [
      "error",
      "tab"
    ],
    "react/forbid-prop-types": "off",
    "react/prop-types": "off",
    "react/prefer-stateless-function": "off",
    "react/jsx-props-no-spreading": "off",
    "linebreak-style":"off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-wrap-multilines": ["error", {"declaration": false, "assignment": false}]
  }
};
