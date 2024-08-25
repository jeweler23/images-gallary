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
