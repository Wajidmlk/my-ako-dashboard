import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import FilterBar from './components/Filterbar'; // Import the FilterBar component
import './styles/App.scss';
import logo from './assets/Advanced_Logo.png';

const App: React.FC = () => {
  const [invertData, setInvertData] = useState<boolean>(false);
  return (
    <>
      <header className="app-header">
        <img src={logo} alt="Logo" className="app-logo" />
      </header>
      <div className="app">
        <FilterBar invertData={invertData} setInvertData={setInvertData} /> 
        <div className="dashboard-container">
          <Dashboard invertData={invertData} />
        </div>
      </div>
    </>
  );
};

export default App;
