const { dirname } = require("path");
const path = require("path");

module.exports = {
    entry : "./src/app.js",
    output : {
        path : path.resolve(__dirname , "dist/assets"),
        filename: "bundle.js",
        environment: {
            arrowFunction: false,
            bigIntLiteral: false,
            const: false,
            destructuring: false,
            dynamicImport: false,
            forOf: false,
            module: false,
          }
    },
    devServer:{
        contentBase: path.resolve(__dirname,'dist'),
        publicPath : '/assets/' 
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ]
              }
            }
          }
        ]
      }
};