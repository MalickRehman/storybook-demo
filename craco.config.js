// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('postcss-flexbugs-fixes'),
        require('postcss-preset-env')({
          autoprefixer: {
            flexbox: 'no-2009',
          },
          stage: 3,
        }),
      ],
    },
    less: {
      javascriptEnabled: true,
    },
  },
  webpack: {
    configure: (webpackConfig) => {
      const lessRule = {
        test: /\.less$/,
        use: [
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                modifyVars: {
                  // Customize Ant Design theme variables here
                  '@primary-color': '#1890ff', // Example modification for primary color
                  // Add more variables to customize other aspects
                },
                javascriptEnabled: true,
              },
            },
          },
        ],
      };

      webpackConfig.module.rules.push(lessRule);
      return webpackConfig;
    },
  },
};
