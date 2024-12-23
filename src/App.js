import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Demo from './pages/Demo';
import DemoDashboard from './pages/DemoDashboard';
import DemoDashboardPro from './pages/DemoDashboardPro';
import Dashboard from './pages/Dashboard';
import DashboardTest from './pages/DashboardTest';
import Pro from './pages/Pro';
import Layout from './layouts/App';
import AppOpen from './AppOpen';
import { DarkMode } from './contexts/DarkMode';
import { DashboardDrawerProvider } from './contexts/DashboardDrawerContext';
import { DrawerProvider } from './contexts/DrawerContext';
import { DialerProvider } from './contexts/DialerContext';
import { YiMode } from './contexts/YiMode';
import { ScrolledProvider } from './contexts/ScrolledContext';
import './App.css';
import './Fonts.css';

const RootApp = () => {
  return (
    <YiMode>
      <DialerProvider>
        <ScrolledProvider>
          <DashboardDrawerProvider>
            <DrawerProvider>
              <DarkMode>
                <Router>
                  <Layout>
                    <Routes>
                      <Route
                        path="/Demo"
                        element={
                          <AppOpen>
                            <Demo />
                          </AppOpen>
                        }
                      />
                      <Route
                        path="/DemoDashboard"
                        element={
                          <AppOpen>
                            <DemoDashboard />
                          </AppOpen>
                        }
                      />
                      <Route
                        path="/DemoDashboardPro"
                        element={
                          <AppOpen>
                            <DemoDashboardPro />
                          </AppOpen>
                        }
                      />
                      <Route
                        path="/Dashboard"
                        element={
                          <AppOpen>
                            <Dashboard />
                          </AppOpen>
                        }
                      />
                      <Route
                        path="/DashboardTest"
                        element={
                          <AppOpen>
                            <DashboardTest />
                          </AppOpen>
                        }
                      />
                      <Route
                        path="/Pro"
                        element={
                          <AppOpen>
                            <Pro />
                          </AppOpen>
                        }
                      />
                      <Route
                        path="/"
                        element={
                          <AppOpen>
                            <Home />
                          </AppOpen>
                        }
                      />
                    </Routes>
                  </Layout>
                </Router>
              </DarkMode>
            </DrawerProvider>
          </DashboardDrawerProvider>
        </ScrolledProvider>
      </DialerProvider>
    </YiMode>
  );
};

export default RootApp;