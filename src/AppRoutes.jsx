import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const CustomersPage = lazy(() =>
  import("invoice_manager_customer_ui/CustomersPage")
);
const ProductsPage = lazy(() =>
  import("invoice_manager_product_ui/ProductsPage")
);
const InvoicesPage = lazy(() =>
  import("invoice_manager_invoice_ui/InvoicesPage")
);

export const routes = [
  {
    path: "/",
    element: <Dashboard />,
    name: "Dashboard",
  },
  {
    path: "/customers",
    element: <CustomersPage />,
    name: "Customers",
  },
  {
    path: "/products",
    element: <ProductsPage />,
    name: "Products",
  },
  {
    path: "/invoices",
    element: <InvoicesPage />,
    name: "Invoices",
  },
];

const AppRoutes = () => {
  return (
    <Suspense fallback={"loading..."}>
      <Routes>
        {routes.map(({ path, element, name }) => {
          if (path === "/invoices")
            return <Route key={path} element={element} path={`${path}/*`} />;
          return (
            <Route key={path} exact element={element} path={path} name={name} />
          );
        })}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
