import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  // JS recommended config
  js.configs.recommended,
  
  // TypeScript config
  ...tseslint.configs.recommended,
  
  // Custom config
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    ignores: ['node_modules/**', 'dist/**'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        console: true,
        process: true,
      },
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json'
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin
    },
    rules: {
      'no-unused-vars': 'error',
      'no-unused-expressions': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'warn'
    }
  }
];
