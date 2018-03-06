import path from 'path';
import webpack from 'webpack';
import ImageminPlugin from 'imagemin-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const DIST_PATH = path.resolve( './assets/dist' );
const SRC_PATH = path.resolve( './assets/src' );

const config = {
	cache: true,
	entry: {
		site: SRC_PATH + '/site.js'
	},
	output: {
		path: DIST_PATH,
		filename: 'js/[name].min.js',
	},
	resolve: {
		modules: ['node_modules'],
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				enforce: 'pre',
				loader: 'eslint-loader',
				query: {
					configFile: './.eslintrc'
				}
			},
			{
				test: /\.js$/,
				use: [{
					loader: 'babel-loader',
					options: {
						babelrc: true,
					}
				}]
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract( {
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1
							}
						},
						'postcss-loader'
					]
				} )
			}
		]
	},
	mode: 'production',
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new ExtractTextPlugin( 'css/[name].css' ),
		new CopyWebpackPlugin( [{
			from: SRC_PATH + '/images',
			to: 'images'
		}] ),
		new ImageminPlugin( {
			test: /\.(jpe?g|png|gif|svg)$/i
		} )
	],
	stats: {
		colors: true
	},
};

module.exports = config;
