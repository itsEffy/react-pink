const path = require('path');
const autoprefixer = require('autoprefixer');

const config = {
  // входная точка клиентского приложения
  entry: './index.js',

  // куда поместить выходной файл
  output: {
    filename: '.client-bundle.js',
    // помещаем в директорию сборки. dirname - текущая директория
    path: path.resolve(__dirname, 'public')
  },
  devtool: 'cheap-eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        // лодер-модуль для вебпака, запускающий бабель
        loader: 'babel-loader',
        // исключаем файлы в определенной директории, понятное дело - сторонние модули (это RegExp)
        exclude: /node_modules/,
        // опции для ббель-лодера
        options: {
          // какие пресеты мы хотим использовать: react - для JSX, stage-0 - для async-code
          presets: [
            'react',
            'stage-0',
            [
              'env',
              {
                targets: {
                  browsers: ['last 2 versions', 'not ie < 11']
                }
              }
            ]
          ]
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 2,
              modules: true,
              sourceMap: true,
              localIdentName: '[local]__[hash:3]'
            }
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'), // eslint-disable-line global-require
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 11'
                  ],
                  flexbox: 'no-2009'
                })
              ]
            }
          },
          {
            loader: require.resolve('sass-loader'),
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
