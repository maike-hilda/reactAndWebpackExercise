// entry point --> output 
// module.exports exposes something to another file

const path = require("path");

console.log(path.join(__dirname, "public")); // absolute path to project folder

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "public"), // this needs to be an absolute path
        filename: "bundle.js"
    },
    module: {
        rules: [{
            loader: "babel-loader",
            test: /\.js$/, // regEx to make sure the file ends in .js
            exclude: /node_modules/
        }, {
            test: /\.s?css$/, // all files that end in .scss; ? makes s optional 
            use: [
                "style-loader",
                "css-loader",
                "sass-loader" // uses node-sass behind the scenes
            ] // array of loaders
        }]
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: path.join(__dirname, "public")
    }
};

// loader
