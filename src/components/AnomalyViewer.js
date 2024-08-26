import React from 'react';

const anomalies = [
  { id: 1, device: 'Device 1', severity: 'High', timestamp: '2024-08-22 10:30:00' },
  { id: 2, device: 'Device 2', severity: 'Low', timestamp: '2024-08-22 12:45:00' },
  
];

function AnomalyViewer() {
  return (
    <div className="anomaly-viewer">
      <h2>Anomalies</h2>
      <ul>
        {anomalies.map(anomaly => (
          <li key={anomaly.id}>
            {anomaly.device} - {anomaly.severity} - {anomaly.timestamp}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnomalyViewer;
