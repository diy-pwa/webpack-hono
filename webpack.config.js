import CopyPlugin from 'copy-webpack-plugin';
const config = {
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "*.md", to: "[name].md" },
      ]
    })
  ],
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        test: /\.[tj]sx?$/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};

export default config;