module.exports = {
  stories: ["../stories/**/*.stories.(ts|tsx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-docs",
    // "@storybook/addon-viewport",
    "@storybook/addon-backgrounds",
    "@storybook/addon-a11y",
    "@storybook/addon-knobs",
    "@storybook/addon-storysource"
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("ts-loader"),
          options: {
            transpileOnly: true
          }
        },
        {
          loader: require.resolve("react-docgen-typescript-loader")
        }
      ]
    });

    config.module.rules.push({
      test: /\.stories\.tsx?$/,
      loaders: [
        {
          loader: require.resolve("@storybook/source-loader"),
          options: {
            parser: "typescript",
            prettierConfig: {
              endOfLine: "lf",
              semi: true,
              singleQuote: false,
              tabWidth: 2,
              trailingComma: "none"
            }
          }
        }
      ],
      enforce: "pre"
    });

    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  }
};
