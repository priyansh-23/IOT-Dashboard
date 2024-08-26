import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>IoT Project Dashboard</h1>
      <div className="summary">
        <h3>Total Devices: 5</h3>
        <h3>Anomalies Detected: 2</h3>
        <h3>Model Accuracy: 98%</h3>
      </div>
    </div>
  );
}

export default Dashboard;
