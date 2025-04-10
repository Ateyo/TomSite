// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';
import perfectionist from 'eslint-plugin-perfectionist';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default tseslint.config(
  {
    plugins: {
      eslintPluginPrettier,
      perfectionist
    },
    rules: {
      'perfectionist/sort-interfaces': ['error'],
      'perfectionist/sort-named-imports': [
        'error',
        {
          type: 'alphabetical',
          order: 'asc',
          fallbackSort: { type: 'unsorted' },
          ignoreAlias: false,
          ignoreCase: true,
          specialCharacters: 'keep',
          groupKind: 'mixed',
          partitionByNewLine: false,
          partitionByComment: false,
          newlinesBetween: 'ignore',
          groups: [],
          customGroups: []
        }
      ],
      'perfectionist/sort-objects': [
        'error',
        {
          type: 'alphabetical'
        }
      ]
    },
    settings: {
      perfectionist: {
        partitionByComment: true,
        type: 'line-length'
      }
    }
  },
  {
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended
    ],
    files: ['**/*.ts'],
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case'
        }
      ],
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase'
        }
      ]
    }
  },
  {
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility
    ],
    files: ['**/*.html'],
    rules: {}
  }
);
