const path = require("path");

module.exports = {
  entry: {
    main: "./src/main.ts", // Main entry point
    game: "./src/client/game.ts", // Entry point for game related files
  },

  target: "electron-renderer", // For Electron's renderer process

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js", // Use [name] placeholder for dynamic bundle names
  },

  resolve: {
    extensions: [".ts", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
