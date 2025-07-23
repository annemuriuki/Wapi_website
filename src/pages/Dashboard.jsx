import React from 'react';
import CountUp from 'react-countup';
import '../styles/pages/Dashboard.css';

const stats = [
  { label: 'Users', value: 1245, icon: '👥', prefix: '', suffix: '' },
  { label: 'Sales', value: 8430, icon: '💰', prefix: '$', suffix: '' },
  { label: 'Active Sessions', value: 312, icon: '⚡', prefix: '', suffix: '' },
];

function Dashboard() {
  return (
    <main className="dashboard-page">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome! Here’s a quick overview of your platform’s activity.</p>
      </header>
      <section className="dashboard-stats">
        {stats.map((stat) => (
          <div className="dashboard-card" key={stat.label}>
            <div className="dashboard-card-icon">{stat.icon}</div>
            <div className="dashboard-card-value">
              <CountUp
                end={stat.value}
                duration={1.5}
                separator="," 
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
            </div>
            <div className="dashboard-card-label">{stat.label}</div>
          </div>
        ))}
      </section>
      <section className="dashboard-placeholder">
        <h2>Recent Activity</h2>
        <p>This is a placeholder for recent activity, charts, or other dashboard widgets.</p>
      </section>
    </main>
  );
}

export default Dashboard; 