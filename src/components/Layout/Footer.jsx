import React from "react";
import { getCurrentYear } from "../../utils";
import { INVOICE_MANAGER, ALL_RIGHTS_RESERVED } from "invoice_manager_customer_ui/constants";

const Footer = () => {
  const currentYear = getCurrentYear();
  return (
    <footer className="footer-container">
      &copy; {currentYear} {INVOICE_MANAGER} | {ALL_RIGHTS_RESERVED}
    </footer>
  );
};

export default Footer;
