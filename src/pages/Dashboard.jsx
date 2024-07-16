import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { KEY_INSIGHTS, WELCOME_BACK } from "invoice_manager_customer_ui/constants";

const Dashboard = (props) => {

  const insights = [
    {
      title: "Total customers",
      count: 20,
    },
    {
      title: "Total products",
      count: 50,
    },
    {
      title: "Total orders delivered",
      count: 100,
    },
    {
      title: "Total orders declined",
      count: 5,
    },
  ];

  return (
    <div className="dashboard-container">
      <h1>{WELCOME_BACK}</h1>
      <div className="key-insights-card">
        <p>{KEY_INSIGHTS}</p>
        <div className="insights-wrp">
          {insights.map(({ title, count }) => (
            <div className="insight-card" key={title}>
              <p>{title}</p>
              <h1>{count}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ customers }) => ({
    customers: customers
})

export default connect(mapStateToProps)(Dashboard);
