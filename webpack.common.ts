import path from 'path';
import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

const resolve: (path: string) => string = path.resolve.bind(__dirname);

module.exports = (env: any) => {
  return {
    entry: './src/main.tsx',
    output: {
      path: resolve('./dist'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    devServer: {
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              },
            },
            'postcss-loader',
          ],
        },
        {
          test: /\.(jpe?g|gif|png|svg)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      alias: {
        '@': resolve('./src'),
      },
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/assets/index.html',
      }),
      new Dotenv({
        path: `.env.${env.development ? 'development' : 'production'}`,
      }),
      new CopyPlugin({
        patterns: [{ from: './src/assets', to: 'assets' }],
      }),
    ],
  };
};
