module.exports = {
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': ['standard', 'standard-react'],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    "react/prop-types": 1
  }
}
