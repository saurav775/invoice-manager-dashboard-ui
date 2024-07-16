import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../AppRoutes";
import {
  INVOICE_MANAGER,
  IM,
  INVOICE_MANAGER_DESC,
  ACTIVE_ITEM,
} from "invoice_manager_customer_ui/constants";

const Sidebar = () => {
  const location = useLocation();

  const dashboardLink = routes[0].path;
  const [activeItem, setActiveItem] = useState(
    location.pathname || dashboardLink
  );

  const handleLinkClick = (clickedPath) => {
    setActiveItem(clickedPath);
  };

  const checkActiveItem = (currentItem) => {
    if (currentItem === "/" && activeItem === currentItem) return ACTIVE_ITEM;
    else if (currentItem !== "/" && activeItem.includes(currentItem))
      return ACTIVE_ITEM;
    return "";
  };

  return (
    <nav className="sidebar-container">
      <Link to={dashboardLink}>
        <div className="logo-container">
          <h1 className="short-logo">{IM}</h1>
          <div className="logo-desc-wrp">
            <h2 className="logo">{INVOICE_MANAGER}</h2>
            <h6 className="logo-desc">{INVOICE_MANAGER_DESC}</h6>
          </div>
        </div>
      </Link>
      <ul className="nav-links">
        {routes.map(({ path, name }) => (
          <li key={path} onClick={() => handleLinkClick(path)}>
            <Link to={path}>
              <div
                className={["link-item", checkActiveItem(path)]
                  .join(" ")
                  .trim()}
              >
                <div className="short-link">{name.substring(0, 2)}</div>
                {name}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Sidebar;
