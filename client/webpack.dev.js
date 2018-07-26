const path = require("path");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const config = {
  // входная точка клиентского приложения
  entry: "./client.js",

  // куда поместить выходной файл
  output: {
    filename: "client-bundle.js",
    // помещаем в директорию сборки. dirname - текущая директория
    path: path.resolve(__dirname, "public")
  },
  devtool: "cheap-eval-source-map",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
      canPrint: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        // лодер-модуль для вебпака, запускающий бабель
        loader: "babel-loader",
        // исключаем файлы в определенной директории, понятное дело - сторонние модули (это RegExp)
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: "./public"
            }
          },
          {
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 2,
              modules: false,
              sourceMap: true,
              localIdentName: "[local]__[hash:3]"
            }
          },
          {
            loader: require.resolve("postcss-loader"),
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              ident: "postcss",
              plugins: () => [
                require("postcss-flexbugs-fixes"), // eslint-disable-line global-require
                autoprefixer({
                  browsers: [
                    ">1%",
                    "last 4 versions",
                    "Firefox ESR",
                    "not ie < 11"
                  ],
                  flexbox: "no-2009"
                })
              ]
            }
          },
          {
            loader: require.resolve("sass-loader"),
            options: {
              sourceMap: false
            }
          }
        ]
      }
    ]
  }
};

module.exports = config;
