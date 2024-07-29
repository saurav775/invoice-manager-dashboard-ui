import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "invoice_manager_dashboard_ui/store";
import Layout from "./components/Layout";
import ErrorBoundary from "./components/ErrorBoundary";
import AppRoutes from "./AppRoutes";
import { ROOT } from "invoice_manager_customer_ui/constants";
import "./style/index.scss";

const rootElement = document.getElementById(ROOT);
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={"/"}>
        <Layout>
          <ErrorBoundary>
            <AppRoutes />
          </ErrorBoundary>
        </Layout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
