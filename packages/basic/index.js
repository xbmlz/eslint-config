const { defineConfig } =  require('eslint-define-config')

module.exports = defineConfig({
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:yml/standard',
    'plugin:markdown/recommended',
  ],
  ignorePatterns: [
    '*.min.*',
    'CHANGELOG.md',
    'dist',
    'LICENSE*',
    'output',
    'coverage',
    'temp',
    'packages-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    'fixtures',
    '__snapshots__',
    '!.github',
    '!.vitepress',
    '!.vscode',
  ],
  plugins: ['import', 'html', 'unicorn'],
  settings: {
    // https://github.com/import-js/eslint-plugin-import#importextensions
    'import/resolver': {
      node: {
        extensions: ['.js', '.mjs', '.ts', '.d.ts']
      }
    }
  },
  overrides: [
    // json https://ota-meshi.github.io/eslint-plugin-jsonc/rules
    {
      files: ['*.json', '*.json5', '*.jsonc', '*rc'],
      parser: 'jsonc-eslint-parser',
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'publisher',
              'name',
              'displayName',
              'type',
              'version',
              'private',
              'packageManager',
              'description',
              'author',
              'license',
              'funding',
              'homepage',
              'repository',
              'bugs',
              'keywords',
              'categories',
              'sideEffects',
              'exports',
              'main',
              'module',
              'unpkg',
              'jsdelivr',
              'types',
              'typesVersions',
              'bin',
              'icon',
              'files',
              'engines',
              'activationEvents',
              'contributes',
              'scripts',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'optionalDependencies',
              'devDependencies',
              'pnpm',
              'overrides',
              'resolutions',
              'husky',
              'simple-git-hooks',
              'lint-staged',
              'eslintConfig',
            ],
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' },
          },
          {
            pathPattern: '^exports.*$',
            order: [
              'types',
              'require',
              'import',
            ],
          },
        ]
      },
    },
    // js ts
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-duplicates': 'off',
      },
    },
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['scripts/**/*.*', 'cli.*'],
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: ['*.test.ts', '*.test.js', '*.spec.ts', '*.spec.js'],
      rules: {
        'no-unused-expressions': 'off',
      },
    },
    // markdown https://github.com/eslint/eslint-plugin-markdown
    {
      // Code blocks
      files: ['**/*.md/*.*'],
      rules: {
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        'import/no-unresolved': 'off',
        'no-alert': 'off',
        'no-console': 'off',
        'no-restricted-imports': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
      },
    },
  ],
  rules: {
    // import https://github.com/import-js/eslint-plugin-import
    'import/order': 'error',
    'import/first': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unresolved': 'off',
    'import/no-absolute-path': 'off',

    // common https://eslint.bootcss.com/docs/xxx
    // 分号
    'semi': ['error', 'never'],
    // 未使用过的变量
    'no-unused-vars': 'warn',
    // 使用单引号 https://eslint.bootcss.com/docs/rules/quotes#single
    'quotes': ['error', 'single'],
    // 对象属性名根据需要保持一致 https://eslint.bootcss.com/docs/rules/quote-props#consistent-as-needed
    'quote-props': ['error', 'consistent-as-needed'],
    // 代码块空格
    'block-spacing': ['error', 'always'],
    // 禁止在条件中使用常量表达式
    'no-constant-condition': 'warn',
    'no-debugger': 'error',
    // 禁止使用console，允许使用 warn 和 error
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    // 当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，要求使用拖尾逗号；当在 同一行时，禁止使用拖尾逗号。
    'comma-dangle': ['error', 'always-multiline'],
    // 禁止使用特定的语法
    'no-restricted-syntax': [
      'error',
      'DebuggerStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    // 禁用不必要的 return await
    'no-return-await': 'warn',
    // 最多允许一个空行
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],

    // es6
  },
})
