module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'standard',
    'prettier',
    'prettier/standard',

    // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors.
    // Make sure this is always the last configuration in the extends array.
    'plugin:prettier/recommended',
    'plugin:security/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      svelte: true,
    },
  },
  plugins: ['svelte3', 'prettier', 'standard', 'jest', 'security'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  rules: {
    'jest/no-focused-tests': 'error',
    'import/default': 2,
    'import/no-named-default': 'off',
    camelcase: 'off',
    'max-len': [
      'off',
      {
        code: 100,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'prettier/prettier': 'error',
    'svelte3/lint-template': 2,
    'standard/no-callback-literal': 'off',
    'no-unexpected-multiline': 'off',
    'node/no-deprecated-api': 'off',
    'new-cap': 'off',
    'lines-between-class-members': 'off',
    'sort-imports': ['error', { ignoreCase: true }],

    // Security specific
    'security/detect-non-literal-fs-filename': 'off',

    // TypeScript-specific
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    '@typescript-eslint/no-angle-bracket-type-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'security/detect-object-injection': 'off',
  },
  env: {
    'jest/globals': true,
    browser: true,
    es6: true,
  },
  globals: {
    fetch: false,
  },
}
