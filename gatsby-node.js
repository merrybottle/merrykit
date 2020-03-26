const path = require('path');

exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      // ⚠ Note the '..' in the path because the docz gatsby project lives in the `.docz` directory
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
      alias: {
        'assets': path.resolve(__dirname, '../src/assets/'),
        'components': path.resolve(__dirname, '../src/components/'),
        'styles': path.resolve(__dirname, '../src/styles/'),
      },
    },
  })
};
