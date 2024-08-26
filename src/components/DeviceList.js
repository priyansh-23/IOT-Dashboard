import React from 'react';

const devices = [
  { id: 1, name: 'Device 1', status: 'Online' },
  { id: 2, name: 'Device 2', status: 'Offline' },
  
];

function DeviceList() {
  return (
    <div className="device-list">
      <h2>Connected Devices</h2>
      <ul>
        {devices.map(device => (
          <li key={device.id}>
            {device.name} - {device.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DeviceList;
