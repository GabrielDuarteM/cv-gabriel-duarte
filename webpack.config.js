const { resolve, join } = require("path")
var webpack = require("webpack")
var HtmlWebpackPlugin = require("html-webpack-plugin")
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var CleanWebpackPlugin = require("clean-webpack-plugin")

function buildConfig(options) {
  const env = options.env

  let config = {
    entry: ["./src/index"],
    devtool: "inline-source-map",
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.tpl.html",
        inject: "body",
        favicon: "src/assets/favicon.ico",
        filename: "index.html",
      }),
      new webpack.NoEmitOnErrorsPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: "pre",
          exclude: /node_modules/,
          use: [
            {
              loader: "standard-loader",
              options: {
                error: true,
                parser: "babel-eslint",
              },
            },
          ],
        },
        {
          test: /\.js$/,
          include: join(__dirname, "src"),
          use: [{ loader: "babel-loader" }],
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: ["url-loader?limit=10000", "img-loader"],
        },
        {
          test: /\.(ttf|otf|eot|svg|woff2?)(\?.+)?$/,
          loader: "url-loader",
          options: {
            limit: 10000,
          },
        },
      ],
    },
  }

  // DEV Configs
  if (env === "dev") {
    config = Object.assign({}, config, {
      output: {
        path: join(__dirname, "dist"),
        filename: "[hash].bundle.js",
        publicPath: "/",
      },
      devServer: {
        hot: true,
        port: 3000,
        contentBase: resolve(__dirname, "dist"),
        publicPath: "/",
      },
    })

    config.entry.unshift("react-hot-loader/patch", "webpack-dev-server/client", "webpack/hot/only-dev-server")

    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("development"),
        },
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
    )

    config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
    })
  } else {
    // PROD Configs
    config = Object.assign({}, config, {
      entry: join(__dirname, "src/index.js"),
      output: {
        path: join(__dirname, "dist"),
        filename: "assets/js/[chunkhash].bundle.js",
        publicPath: "/",
      },
    })

    config.plugins.push(
      new ExtractTextPlugin("assets/css/[chunkhash].bundle.css"),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production"),
        },
      }),
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: true,
          screw_ie8: true,
        },
        comments: false,
        compress: true,
      }),
      new CleanWebpackPlugin(["dist"]),
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        minChunks: function(module) {
          return module.context && module.context.indexOf("node_modules") !== -1
        },
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: "manifest",
      })
    )

    config.module.rules.push({
      test: /\.css$/,
      // Extracts the css portion out of the js files. Increases performance.
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader",
      }),
    })
  }

  return config
}

module.exports = buildConfig
