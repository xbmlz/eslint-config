const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  reportUnusedDisableDirectives: true,
  extends: [
    './standard',
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
        extensions: ['.js', '.mjs', '.ts', '.d.ts'],
      },
    },
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
            order: ['types', 'require', 'import'],
          },
        ],
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
    // https://eslint.bootcss.com/docs/rules/xxx
    'import/order': 'error',
    'import/first': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unresolved': 'off',
    'import/no-absolute-path': 'off',

    // 分号
    semi: ['error', 'never'],
    // 未使用过的变量
    'no-unused-vars': 'warn',
    // 使用单引号 https://eslint.bootcss.com/docs/rules/quotes#single
    quotes: ['error', 'single'],
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
    // 禁止使用var
    'no-var': 'error',
    // 建议使用const
    'prefer-const': [
      'warn',
      {
        // 在解构中，所有变量都应该是const，该规则将发出警告。否则，忽略它们
        destructuring: 'all',
        ignoreReadBeforeAssign: true,
      },
    ],
    // 要求使用箭头函数作为回调
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    // 要求对象字面量简写语法
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    // 建议使用剩余参数代替 arguments
    'prefer-rest-params': 'error',
    // 建议使用扩展语法而非.apply()
    'prefer-spread': 'error',
    // 建议使用模板字面量而非字符串连接
    'prefer-template': 'error',
    // 强制模板字符串中空格的使用
    'template-curly-spacing': 'error',
    // 禁止使用不带 await 表达式的 async 函数
    'require-await': 'error',
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['/', '#'],
        },
        block: {
          markers: ['!'],
          exceptions: ['*'],
          balanced: true,
        },
      },
    ],

    // best-practice
    // 强制数组方法的回调函数中有 return 语句
    'array-callback-return': 'error',
    // 把 var 语句看作是在块级作用域范围之内
    'block-scoped-var': 'error',
    // 要求使用 === 和 !==
    eqeqeq: ['error', 'smart'],
    // 禁用 Alert
    'no-alert': 'warn',
    // 禁止在 case 或 default 子句中出现词法声明
    'no-case-declarations': 'error',
    // 禁止 case 语句落空
    'no-fallthrough': ['warn', { commentPattern: 'break[\\s\\w]*omitted' }],
    // 禁止多行字符串
    'no-multi-str': 'error',
    // 禁用 with 语句
    'no-with': 'error',
    // 禁止使用void操作符
    'no-void': 'error',
    // 禁止 if 语句作为唯一语句出现在 else 语句块中
    'no-lonely-if': 'error',
    // 要求将变量声明放在它们作用域的顶部
    'vars-on-top': 'error',
    // 强制操作符使用一致的换行符风格
    'operator-linebreak': ['error', 'before'],

    // unicorns
    'unicorn/better-regex': 'error',
    'unicorn/custom-error-definition': 'error',
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/explicit-length-check': 'error',
    'unicorn/import-index': 'error',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-array-callback-reference': 'error',
    'unicorn/no-array-method-this-argument': 'error',
    'unicorn/no-array-push-push': 'error',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-invalid-remove-event-listener': 'error',
    'unicorn/no-lonely-if': 'error',
    'unicorn/no-new-array': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-unsafe-regex': 'off',
    'unicorn/number-literal-case': 'error',
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-array-flat-map': 'error',
    'unicorn/prefer-array-index-of': 'error',
    'unicorn/prefer-array-some': 'error',
    'unicorn/prefer-date-now': 'error',
    'unicorn/prefer-dom-node-append': 'error',
    'unicorn/prefer-dom-node-dataset': 'error',
    'unicorn/prefer-dom-node-remove': 'error',
    'unicorn/prefer-dom-node-text-content': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-keyboard-event-key': 'error',
    'unicorn/prefer-math-trunc': 'error',
    'unicorn/prefer-modern-dom-apis': 'error',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-node-protocol': 'error',
    'unicorn/prefer-number-properties': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/prefer-prototype-methods': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-reflect-apply': 'error',
    'unicorn/prefer-string-replace-all': 'error',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-string-starts-ends-with': 'error',
    'unicorn/prefer-string-trim-start-end': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/throw-new-error': 'error',

    'eslint-comments/disable-enable-pair': 'off',

    'jsonc/quote-props': 'off',
    'jsonc/quotes': 'off',

    'yml/no-empty-mapping-value': 'off',
  },
})
