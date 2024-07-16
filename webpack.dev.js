const { ModuleFederationPlugin } = require("webpack").container;
const { merge } = require("webpack-merge");
const path = require("path");
const commonConfig = require("./webpack.common");
const packageJson = require("./package.json");

module.exports = () => {
  const devConfig = {
    mode: "development",
    output: {
      path: path.join(__dirname, "dist"),
      filename: "bundle.[name].[contenthash].js",
      publicPath: "http://localhost:3000/",
    },
    devServer: {
      port: 3000,
      historyApiFallback: true,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "invoice_manager_dashboard_ui",
        filename: "remoteEntry.js",
        remotes: {
          invoice_manager_dashboard_ui:
            "invoice_manager_dashboard_ui@http://localhost:3000/remoteEntry.js",
          invoice_manager_customer_ui:
            "invoice_manager_customer_ui@http://localhost:3001/remoteEntry.js",
          invoice_manager_product_ui:
            "invoice_manager_product_ui@http://localhost:3002/remoteEntry.js",
          invoice_manager_invoice_ui:
            "invoice_manager_invoice_ui@http://localhost:3003/remoteEntry.js",
        },
        exposes: {
          "./store": "./src/store",
          "./actionTypes": "./src/store/actionTypes",
        },
        shared: packageJson.dependencies,
      }),
    ],
  };

  return merge(commonConfig, devConfig);
};
