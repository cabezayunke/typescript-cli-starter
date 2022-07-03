module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: ['prettier', 'import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  rules: {
    'import/no-unresolved': ['error'],
    'import/prefer-default-export': ['off'],
    'prefer-destructuring': ['error'],
    'max-classes-per-file': ['error', 1],
    'lines-between-class-members': ['off'],
    '@typescript-eslint/ban-types': ['error'],
    '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],
    '@typescript-eslint/no-floating-promises': ['error'],
    '@typescript-eslint/no-inferrable-types': ['error'],
    '@typescript-eslint/no-misused-promises': ['error'],
    '@typescript-eslint/no-unnecessary-type-assertion': ['error'],
    '@typescript-eslint/no-unsafe-assignment': ['warn'],
    '@typescript-eslint/no-unsafe-call': ['warn'],
    '@typescript-eslint/no-unsafe-member-access': ['warn'],
    '@typescript-eslint/no-unsafe-return': ['warn'],
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/no-var-requires': ['warn'],
    '@typescript-eslint/require-await': ['warn'],
    '@typescript-eslint/restrict-plus-operands': ['warn'],
    '@typescript-eslint/restrict-template-expressions': ['warn'],
    '@typescript-eslint/unbound-method': ['warn'],
    '@typescript-eslint/no-for-in-array': ['warn'],
    '@typescript-eslint/prefer-regexp-exec': ['warn'],
    'array-callback-return': ['warn'],
    camelcase: ['warn', { ignoreImports: true, properties: 'never' }],
    'class-methods-use-this': ['off'],
    'consistent-return': ['warn'],
    'dot-notation': ['off'],
    'max-len': ['warn', { code: 120, ignorePattern: '^import\\s.+\\sfrom\\s.+;$' }],
    'no-await-in-loop': ['warn'],
    'no-empty': ['warn'],
    'no-param-reassign': ['warn'],
    'no-restricted-syntax': ['warn'],
    'no-return-await': ['warn'],
    'no-shadow': ['warn'],
    'no-underscore-dangle': ['warn'],
    'no-use-before-define': ['warn'],
    'no-useless-constructor': ['off'],
    'prefer-const': ['warn'],
    'import/default': ['warn'],
    'import/no-cycle': ['warn'],
    'import/no-useless-path-segments': ['warn'],
    'prettier/prettier': ['warn'],
    '@typescript-eslint/no-explicit-any': ['error'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts']
      }
    }
  }
};
