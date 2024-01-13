/** @type {import('stylelint').Config} */
export default {
  "extends": [
    "stylelint-config-standard-scss",
    "stylelint-config-clean-order/error",
  ],
  "rules": {
    // NOTE: Turn off a rule because you have a case that depends on a specific enum value(e.g. variants, size).
    "selector-class-pattern": null,
  }
}
