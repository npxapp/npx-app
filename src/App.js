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
import Stripe from './pages/Stripe';
import DashboardTest from './pages/DashboardTest';
import Layout from './layouts/App';
import AppOpen from './AppOpen';
import { DarkMode } from './contexts/DarkMode';
import { DashboardDrawerProvider } from './contexts/DashboardDrawerContext';
import { DrawerProvider } from './contexts/DrawerContext';
import { YiMode } from './contexts/YiMode';
import { ScrolledProvider } from './contexts/ScrolledContext';
import './App.css';
import './Fonts.css';

const RootApp = () => {
  return (
    <YiMode>
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
                      path="/Downloads"
                      element={
                        <AppOpen>
                          <Downloads />
                        </AppOpen>
                      }
                    />
                    <Route
                      path="/Paid"
                      element={
                        <AppOpen>
                          <Paid />
                        </AppOpen>
                      }
                    />
                    <Route
                      path="/Get"
                      element={
                        <AppOpen>
                          <Get />
                        </AppOpen>
                      }
                    />
                    <Route
                      path="/Success"
                      element={
                        <AppOpen>
                          <Success />
                        </AppOpen>
                      }
                    />
                    <Route
                      path=":product/Success"
                      element={
                        <AppOpen>
                          <Success />
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
                      path="/Stripe"
                      element={
                        <AppOpen>
                          <Stripe />
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
    </YiMode>
  );
};

export default RootApp;