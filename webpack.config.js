const path = require('path');

module.exports = {
    
  entry: './src/codeflask.js',
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'codeflask.bundle.js',
    library: 'EditorJs_CodeFlask',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.svg$/,
        use : [{
            loader  : 'svg-inline-loader',
            options : {
                removeSVGTagAttrs : false
            }
        }]
      }
    ]
  }
};