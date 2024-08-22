import antfu from '@antfu/eslint-config';
import stylistic from '@stylistic/eslint-plugin';

export default antfu({
  plugins: {
    '@stylistic': stylistic,
  },
  stylistic: {
    semi: true,
    quotes: 'single',
    indent: 'tab',
    overrides: {
      'no-return-await': ['error'],
      'node/prefer-global/process': ['error', 'always'],
      'style/indent': ['off'],
    },
  },
  typescript: true,
});

// module.exports = {
//   root: true,
//   extends: [
//     'eslint:recommended',
//     'plugin:vue/vue3-essential',
//     '@vue/eslint-config-typescript',
//     '@antfu',
//   ],
//   plugins: [
//     '@stylistic'
//   ],
//   parserOptions: {
//     ecmaVersion: 'latest',
//   },
//   rules: {
//     '@stylistic/indent': ['error', 2],
//     '@stylistic/quotes': ['error', 'single'],
//     '@stylistic/semi': ['error', 'always'],
//     '@stylistic/max-len': ['error', {
//       code: 80,
//       ignoreStrings: true,
//       ignoreTemplateLiterals: true,
//     }],
//   },
// };
