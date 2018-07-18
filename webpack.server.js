const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.js');

const config = {
	// говорим вебпаку, что бандл мы делаем не для браузера, а для ноды
	target: 'node',
	entry: './src/index.js',
	// куда поместить выходной файл
	output: {
		filename: 'bundle.js',
		// помещаем в директорию сборки. dirname - текущая директория, в которой мы находимсяю build - конечная папка, которую вебпак сам создаст
		path: path.resolve(__dirname)
	},

	// опционально, можно отключить
	externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
