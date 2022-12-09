const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: ['plugin:solid/recommended', '@xbmlz/eslint-config-ts'],
  rules: {
    'solid/reactivity': 'warn',
    'solid/no-destructure': 'warn',
    'solid/jsx-no-undef': 'error',
  },
})
