module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/tme-button/tme-button.tsx',
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.tsx',
    webpackConfig: 'webpack.config.js',
  },
  name: 'TypeScript Design System'
};
