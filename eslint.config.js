import eslintPluginImport from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      import: eslintPluginImport,
      prettier: prettierPlugin
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error'
    }
  }
];
