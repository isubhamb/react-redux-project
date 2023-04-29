import React from 'react';
import DashBoard from './components/DashBoard';
import './styles.css';

const ControlPanel = () => {
  return (
    <div className='main-container d-flex'>
        <div className="sidebar bg-dark" id="side-nav">
            <div className="header-box text-white">
            </div>
            <div className="sidebar-menu">
                <li className="sidebar-link"><h5>Dashboard</h5></li>
                <li className="sidebar-link"><h5>Search Airlines</h5></li>
                <li className="sidebar-link"><h5>Search Flights</h5></li>
                <li className="sidebar-link"><h5>Check Flight Types</h5></li>
            </div>
        </div>
        
        {<DashBoard />}

        </div>
  );
};

export default ControlPanel;