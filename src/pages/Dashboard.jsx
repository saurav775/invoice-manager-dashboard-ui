import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "invoice_manager_customer_ui/Loader";
import {
  KEY_INSIGHTS,
  WELCOME_BACK,
} from "invoice_manager_customer_ui/constants";
import { getStats } from "../store/actions/stats.actions";
import { camelToSentenceCase } from "../utils";

const Dashboard = (props) => {
  const { stats, getStats, statsLoading } = props;

  useEffect(() => {
    getStats();
  }, []);

  const renderStats = () => {
    if (statsLoading) return <Loader />;
    if (!Object.keys(stats).length) return <div>No stats found.</div>;
    return (
      <div className="insights-wrp">
        {Object.keys(stats).map((stat) => (
          <div className="insight-card" key={stat}>
            <p>{camelToSentenceCase(stat)}</p>
            <h1>{stats[stat]}</h1>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="dashboard-container">
      <h1>{WELCOME_BACK}</h1>
      <div className="key-insights-card">
        <p>{KEY_INSIGHTS}</p>
        {renderStats()}
      </div>
    </div>
  );
};

const mapStateToProps = ({ stats }) => ({
  stats: stats.stats,
  statsLoading: stats.isLoading,
});

const mapDispatchToProps = {
  getStats,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
