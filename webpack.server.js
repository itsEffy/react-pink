const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const baseConfig = require('./webpack.base.js');

const config = {
	// говорим вебпаку, что бандл мы делаем не для браузера, а для ноды
	target: 'node',
	externals: [nodeExternals()],
	entry: './src/index.js',
	// куда поместить выходной файл
	output: {
		filename: 'bundle.js',
		// помещаем в директорию сборки. dirname - текущая директория, в которой мы находимсяю build - конечная папка, которую вебпак сам создаст
		path: path.resolve(__dirname)
	},
	devtool: 'cheap-eval-source-map',
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		})
	],
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
			},
			{
				test: /\.(css|scss)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							// you can specify a publicPath here
							// by default it use publicPath in webpackOptions.output
							publicPath: './public'
						}
					},
					{
						loader: require.resolve('css-loader/locals'),
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
	},

	// опционально, можно отключить
	externals: [webpackNodeExternals()]
};

module.exports = config;
