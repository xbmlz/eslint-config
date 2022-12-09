# @xbmlz/eslint-config

[![npm](https://img.shields.io/npm/v/@xbmlz/eslint-config?color=a1b858&label=)](https://npmjs.com/package/@xbmlz/eslint-config)

ESLint config for JavaScript, TypeScript, Vue 2, Vue 3, Prettier.

Forked from [antfu/eslint-config](https://github.com/antfu/eslint-config)


## Usage

### Install

```bash
pnpm add -D eslint @xbmlz/eslint-config # JavaScript, TypeScript, Vue 2/3 and Prettier

# Or yarn add -D / npm install -D
pnpm i -D eslint @xbmlz/eslint-config-ts       # JavaScript and TypeScript
pnpm i -D eslint @xbmlz/eslint-config-vue      # JavaScript, TypeScript and Vue 2/3 (Auto detect)
pnpm i -D eslint @xbmlz/eslint-config-prettier # Prettier only
pnpm i -D eslint @xbmlz/eslint-config-solid    # Solid, TypeScript
pnpm i -D eslint @xbmlz/eslint-config-react    # React, TypeScript
```
### Config `.eslintrc`

```json
{
  "extends": "@xbmlz"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Config .prettierrc

For example:

```json
{
  "semi": false,
  "singleQuote": true
}
```

### Recommended Config .gitattributes

For example:

```txt
* text=auto eol=lf
```

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config VS Code auto fix

Create .vscode/settings.json

```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## License

[MIT](./LICENSE) License &copy; 2022-PRESENT [xbmlz](https://github.com/xbmlz)
