module.exports = {
  'parser': 'babel-eslint',
  'extends': 'eslint:recommended',
  'plugins': [
    'flowtype',
    'jest'
  ],
  'rules': {
    'no-console': 'off',
    'quotes': ['error', 'single'],
    'object-shorthand': ['error', 'always'],
    'prefer-template': 2,
    'template-curly-spacing': 2,
    'no-useless-escape': 2,
    'prefer-rest-params': 2,
    'no-new-func': 2,
    'space-before-blocks': 2,
    'prefer-arrow-callback': 2,
    'arrow-spacing': 2,
    'arrow-parens': 2,
    'no-confusing-arrow': 2,
    'no-useless-constructor': 2,
    'no-dupe-class-members': 2,
    'prefer-const': 2,
    'space-infix-ops': 2,
    'space-in-parens': 2,
    'array-bracket-spacing': 2,
    'object-curly-spacing': 2,
    'comma-spacing': 2,
    'computed-property-spacing': 2,
    'func-call-spacing': 2,
    'key-spacing': 2,
    'no-trailing-spaces': 2,
    'new-cap': 2,
    'no-underscore-dangle': 2,
    'no-restricted-globals': 2,
    'comma-style': 2,
    'semi': 2,
    'camelcase': 2,
    'eol-last': 2,
    'eqeqeq': 2,
    'brace-style': 2,
    'no-else-return': 2,
    'no-nested-ternary': 2,
    'no-unneeded-ternary': 2,
    'one-var': 0,
    'no-multi-assign': 2,
    'no-duplicate-imports': 2,
    'no-iterator': 2,
    'arrow-body-style': 2,
    'no-param-reassign': 2,
    'no-array-constructor': 2,
    'prefer-destructuring': 2,
    'flowtype/boolean-style': [
      2,
      'boolean'
    ],
    'flowtype/define-flow-type': 1,
    'flowtype/delimiter-dangle': [
      2,
      'never'
    ],
    'flowtype/generic-spacing': [
      2,
      'never'
    ],
    'flowtype/no-primitive-constructor-types': 2,
    'flowtype/no-types-missing-file-annotation': 2,
    'flowtype/no-weak-types': 2,
    'flowtype/object-type-delimiter': [
      2,
      'comma'
    ],
    'flowtype/require-return-type': [
      2,
      'always',
      {
        'annotateUndefined': 'never'
      }
    ],
    'flowtype/require-valid-file-annotation': 2,
    'flowtype/semi': [
      2,
      'always'
    ],
    'flowtype/space-after-type-colon': [
      2,
      'always'
    ],
    'flowtype/space-before-generic-bracket': [
      2,
      'never'
    ],
    'flowtype/space-before-type-colon': [
      2,
      'never'
    ],
    'flowtype/type-id-match': [
      2,
      '^([A-Z][a-z0-9]*)'
    ],
    'flowtype/union-intersection-spacing': [
      2,
      'always'
    ],
    'flowtype/use-flow-type': 1,
    'flowtype/valid-syntax': 1,
    'flowtype/newline-after-flow-annotation': [
      2,
      'always'
    ],
    'flowtype/no-dupe-keys': 2,
    'flowtype/require-parameter-type': 2,
    'flowtype/require-variable-type': 2,
    'flowtype/semi': [2, 'always'],
    'flowtype/space-after-type-colon': [2, 'always', { 'allowLineBreak': false }]
  },
  "env": {
    "node": true,
    "jest": true,
    "jest/globals": true
  },
  'settings': {
    'flowtype': {
      'onlyFilesWithFlowAnnotation': true
    }
  }
};