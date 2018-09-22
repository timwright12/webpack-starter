import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'mini-css-extract-plugin';
import postcssPresetEnv from 'postcss-preset-env';
import SpriteLoaderPlugin from 'svg-sprite-loader/plugin';

const DIST_PATH = path.resolve( './assets/dist' );

const config = {
	cache: true,
	entry: {
		index: './assets/src/index.js',
	},
	output: {
		path: DIST_PATH,
		filename: '[name].min.js',
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
				options: {
					fix: true
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
				use: [
					'style-loader',
					{ loader: ExtractTextPlugin.loader },
					{ loader: 'css-loader', options: { importLoaders: 1 } },
					{ loader: 'postcss-loader', options: {
						ident: 'postcss',
						plugins: () => [
							require('postcss-import')(),
							postcssPresetEnv( {
								stage: 0,
								autoprefixer: {
									grid: true
								}
							} ),
							require('cssnano')()
						]
					} },
					
				]
			},
			{
				test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
				loader: 'url-loader',
				options: {
					limit: 10000
				}
			},
			{
				test: /assets\/src\/icons\/.*\.svg$/,
				loader: 'svg-sprite-loader',
				options: {
					extract: true,
					spriteFilename: './icons/svg-defs.svg',
					runtimeCompat: true
				}
			},
		]
	},
	mode: 'production',
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new ExtractTextPlugin( 'css/[name].css' ),
		new SpriteLoaderPlugin({
			plainSprite: true
		})
	],
	stats: {
		colors: true
	}
};

module.exports = config;