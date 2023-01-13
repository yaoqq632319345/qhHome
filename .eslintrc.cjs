/**
 * @type { import('eslint').Linter.Config }
 */
module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'prettier', // 自动修复
    'plugin:prettier/recommended',
    'plugin:vue/vue3-essential',
    // 'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    // 解构props
    'vue/no-setup-props-destructure': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // 组件名称
    'vue/multi-word-component-names': 'off',
    'vue/no-v-model-argument': 'off'
  }
};
