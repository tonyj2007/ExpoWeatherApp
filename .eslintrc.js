const { jsx } = require("react/jsx-runtime")

module.exports = {
  extends: [
    'universe',
    'universe/shared/typescript-analysis',
    'plugin:react-hooks/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 2015,
      }
    }
  ],
  settings: {
    // this is used to load <rootdir>/tsconfig.json to ESLint
    'import/resolver': {
      typescript: {} 
    }
  },
  globals: {
    __dirname: true
  },
  rules: {
    'no-console': 'error'
  },
  extends: ['plugin:testing-library/react', 'plugin:jest-dom/recommended'],
  plugins: ['jest', 'testing-library']
}
