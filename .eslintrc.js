module.exports = {
  env: {
    es6: true,
  },
  extends: ['airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.js', '**/*.spec.js'] },
    ],
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "no-unused-vars": [
      "error",
      {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": false
      }
    ],
    "import/prefer-default-export": "off",
    "react-hooks/exhaustive-deps": "warn",
    "import/no-duplicates": "off",
    'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
  },
  "settings": {
    "import/resolver": {
      "javascript": {}
    }
  }
};
