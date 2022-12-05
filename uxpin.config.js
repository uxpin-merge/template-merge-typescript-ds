module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/Modal/Modal.tsx',
          'src/components/Toast/Toast.tsx',
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'TypeScript Design System'
};
