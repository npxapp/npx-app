import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Demo from './pages/Demo';
import DemoDashboard from './pages/DemoDashboard';
import DemoDashboardPro from './pages/DemoDashboardPro';
import Downloads from './pages/Downloads';
import Paid from './pages/Paid';
import Get from './pages/Get';
import Success from './pages/Success';
import Dashboard from './pages/Dashboard';
import Layout from './layouts/App';
import AppOpen from './AppOpen';
import { DarkMode } from './contexts/DarkMode';
import { DrawerMode } from './contexts/DrawerMode';
import './App.css';
import './Fonts.css';

const RootApp = () => {
  return (
    <DrawerMode>
      <DarkMode>
        <Router>
          <Layout>
            <Routes>
              <Route path="/Demo" element={<AppOpen><Demo /></AppOpen>} />
              <Route path="/DemoDashboard" element={<AppOpen><DemoDashboard /></AppOpen>} />
              <Route path="/DemoDashboardPro" element={<AppOpen><DemoDashboardPro /></AppOpen>} />
              <Route path="/Downloads" element={<AppOpen><Downloads /></AppOpen>} />
              <Route path="/Paid" element={<AppOpen><Paid /></AppOpen>} />
              <Route path="/Get" element={<AppOpen><Get /></AppOpen>} />
              <Route path="/Success" element={<AppOpen><Success /></AppOpen>} />
              <Route path="/Dashboard" element={<AppOpen><Dashboard /></AppOpen>} />
              <Route path="/" element={<AppOpen><Home /></AppOpen>} />
            </Routes>
          </Layout>
        </Router>
      </DarkMode>
    </DrawerMode>
  );
};

export default RootApp;