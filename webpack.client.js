const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const autoprefixer = require('autoprefixer');

const config = {
	// входная точка клиентского приложения
	entry: './src/client/index.js',

	// куда поместить выходной файл
	output: {
		filename: 'client-bundle.js',
		// помещаем в директорию сборки. dirname - текущая директория
		path: path.resolve(__dirname)
	}
};

module.exports = merge(baseConfig, config);
