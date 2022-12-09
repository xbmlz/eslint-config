const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    '@xbmlz/eslint-config-ts',
  ],
  settings: {
    react: {
      version: '17.0',
    },
  },
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'react/react-in-jsx-scope': 'off',
  },
})
