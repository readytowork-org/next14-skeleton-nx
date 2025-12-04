import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import js from '@eslint/js';
import nxEslintPlugin from '@nx/eslint-plugin';
import reactHooks from 'eslint-plugin-react-hooks';

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
  recommendedConfig: js.configs.recommended
});

export default [
  {
    ignores: ['**/dist', '**/out-tsc']
  },
  {
    plugins: {
      '@nx': nxEslintPlugin,
      'react-hooks': reactHooks
    }
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*']
            }
          ]
        }
      ]
    }
  },
  ...compat
    .config({
      extends: ['plugin:@nx/typescript']
    })
    .map((config) => ({
      ...config,
      files: ['**/*.ts', '**/*.tsx', '**/*.cts', '**/*.mts'],
      rules: {
        ...config.rules,
        'no-console': 'error',
        'no-alert': 'error',
        'no-restricted-globals': ['error', 'event', 'name'], // Example: restricting 'event' and 'name' but allowing 'location'
        'react/jsx-no-useless-fragment': 0,
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/no-explicit-any': 1,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            args: 'all',
            argsIgnorePattern: '^_',
            caughtErrors: 'all',
            caughtErrorsIgnorePattern: '^_',
            destructuredArrayIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            ignoreRestSiblings: true
          }
        ],
        'react-hooks/set-state-in-effect': 'off'
      }
    })),
  ...compat
    .config({
      extends: ['plugin:@nx/javascript']
    })
    .map((config) => ({
      ...config,
      files: ['**/*.js', '**/*.jsx', '**/*.cjs', '**/*.mjs'],
      rules: {
        ...config.rules,
        '@typescript-eslint/no-require-imports': 0,
        'react-hooks/set-state-in-effect': 'off'
      }
    }))
];
