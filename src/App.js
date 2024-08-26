import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import DeviceList from './components/DeviceList';
import AnomalyViewer from './components/AnomalyViewer';
import ModelPerformance from './components/ModelPerformance';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/devices" element={<DeviceList />} />
          <Route path="/anomalies" element={<AnomalyViewer />} />
          <Route path="/performance" element={<ModelPerformance />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
