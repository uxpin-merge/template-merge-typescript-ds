module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/Button/Button.tsx',
          'src/components/ImportedProps/ImportedProps.tsx',
          'src/components/ImportedExtendedProps/ImportedExtendedProps.tsx',
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'TypeScript Design System'
};
