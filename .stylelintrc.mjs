/** @type {import('stylelint').Config} */
export default {
  extends: ['@channel.io/stylelint-config', './packages/stylelint-bezier'],
  rules: {
    'selector-class-pattern': [
      // NOTE: Allows Pascal case(components) and Kebab case(states, variants, etc.).
      '^(?:[A-Z][a-zA-Z0-9]*|[a-z][a-z0-9]*(?:-[a-z0-9]+)*)$',
      // NOTE: Lowered severity because some class names depend on certain enum values(e.g. variants, size).
      // TODO: Elevate severity to "error"
      { severity: 'warning' },
    ],
    // NOTE: Set to reduce difficulties caused by selector specificity between components.
    'selector-max-specificity': ['0,2,0'],
  },
}
