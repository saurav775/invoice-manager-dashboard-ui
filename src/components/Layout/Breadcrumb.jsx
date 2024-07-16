import React from "react";
import { useLocation, Link } from "react-router-dom";
import { DASHBOARD } from "invoice_manager_customer_ui/constants";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((path) => !!path);

  return (
    <header className="breadcrumb-container">
      <Link to="/">{DASHBOARD}</Link>
      {pathnames.map((pathname, index) => {
        const routePath = "/" + pathnames.slice(0, index + 1).join("/");
        return (
          <span key={routePath}>
            <span className="separator"> / </span>
            <Link
              to={routePath}
              className={[index === pathnames.length - 1 ? "active" : ""]
                .join(" ")
                .trim()}
            >
              {pathname}
            </Link>
          </span>
        );
      })}
    </header>
  );
};

export default Breadcrumb;
