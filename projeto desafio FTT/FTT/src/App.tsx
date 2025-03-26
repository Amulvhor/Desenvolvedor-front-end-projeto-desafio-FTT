import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import MyReservations from './pages/MyReservations';
import Reports from './pages/Reports';
import Notifications from './pages/Notifications';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="reservations" element={<MyReservations />} />
        <Route path="reports" element={<Reports />} />
        <Route path="notifications" element={<MyReservations />} />
      </Route>
    </Routes>
  );
}

export default App;