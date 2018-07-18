module.exports = {
  // пропускать каждый js? файл через бабель (для транспиляции JSX и модулей, а также ESnext в ES5)
  devtool: 'cheap-eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        // лодер-модуль для вебпака, запускающий бабель
        loader: 'babel-loader',
        // исключаем файлы в определенной директории, понятное дело - сторонние модули (это RegExp)
        exclude: /node_modules/,
        // опции для бабель-лодера
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
      }
    ]
  }
};
