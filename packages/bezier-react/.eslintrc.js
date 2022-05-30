module.exports = {
  rules: {
    'import/order': [
      'error',
      {
        groups: ['external', 'builtin', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: 'Foundation',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'Foundation/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'Providers/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'Hooks/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'Worklets/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@(Constants|Types|Utils)/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@(Components|Layout)/**',
            group: 'internal',
            position: 'before',
          },
        ],
      },
    ],
  },
}
