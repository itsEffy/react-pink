const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
// const baseConfig = require('./webpack.base.js');

const config = {
	// говорим вебпаку, что бандл мы делаем не для браузера, а для ноды
	target: 'node',
	entry: './src/index.js',
	// куда поместить выходной файл
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname)
	},
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
					presets: ['react', 'node8', 'stage-0']
				}
			}
		]
	},

	// опционально, можно отключить
	externals: [webpackNodeExternals()]
};

module.exports = config;
