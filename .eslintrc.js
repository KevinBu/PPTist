/*
 * @Author: bukai bukai@163.com.cn
 * @Date: 2023-10-08 16:56:54
 * @LastEditors: bukai bukai@163.com.cn
 * @LastEditTime: 2023-10-09 09:48:47
 * @FilePath: \PPTist\.eslintrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// https://eslint.org/docs/rules/

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'curly': ['error', 'multi-line'],
    'eqeqeq': ['error', 'always'],
    'semi': ['error', 'always'],
    'indent': ['error', 2, {
      'SwitchCase': 1,
    }],
    // 'quotes': ['error', 'single', {
    //   'avoidEscape': true,
    //   'allowTemplateLiterals': true,
    // }],
    'key-spacing': ['error', {
      'beforeColon': false,
      'afterColon': true,
      'mode': 'strict',
    }],
    'no-empty': 'error',
    'no-else-return': 'error',
    'no-multi-spaces': 'error',
    'require-await': 'error',
    'brace-style': ['error', 'stroustrup'],
    'spaced-comment': ['error', 'always'],
    'arrow-spacing': 'error',
    'no-duplicate-imports': 'error',
    'comma-spacing': ['error', {
      'before': false,
      'after': true,
    }],
    'default-case': 'error',
    'consistent-this': ['error', '_this'],
    'max-depth': ['error', 8],
    'max-lines': ['error', 800],
    'no-multi-str': 'error',
    'space-infix-ops': 'error',
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', {
      'named': 'never',
      'anonymous': 'never',
      'asyncArrow': 'always',
    }],
    'keyword-spacing': ['error'],
    'prefer-const': 'error',
    'no-useless-return': 'error',
    'array-bracket-spacing': 'error',
    'no-useless-escape': 'off',
    'no-eval': 'error',
    'no-var': 'error',
    'no-with': 'error',
    'no-alert': isProduction ? 'error' : 'warn',
    'no-console': isProduction ? 'error' : 'warn',
    'no-debugger': isProduction ? 'error' : 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': ['error', {
      'extendDefaults': true,
      'types': {
        '{}': false,
      },
    }],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-component-names': 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true,
      },
    },
  ],
};
