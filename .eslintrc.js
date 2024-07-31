import eslintRecommended from 'eslint:recommended';
import typescriptEslintRecommended from 'plugin:@typescript-eslint/recommended';
import reactHooksRecommended from 'plugin:react-hooks/recommended';
import typescriptEslintParser from '@typescript-eslint/parser';
import reactRefresh from 'react-refresh';

export default {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    eslintRecommended,
    typescriptEslintRecommended,
    reactHooksRecommended,
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: typescriptEslintParser,
  plugins: [reactRefresh],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
