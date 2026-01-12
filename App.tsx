import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import UserLayout from './pages/user/UserLayout';
import Dashboard from './pages/user/Dashboard';
import Jobs from './pages/user/Jobs';
import Withdraw from './pages/user/Withdraw';
import Profile from './pages/user/Profile';
import Deposit from './pages/user/Deposit';
import PendingVerification from './pages/user/PendingVerification';
import Submissions from './pages/user/Submissions';

import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageUsers from './pages/admin/ManageUsers';
import ManageJobs from './pages/admin/ManageJobs';
import ManageDeposits from './pages/admin/ManageDeposits';
import ManageWithdrawals from './pages/admin/ManageWithdrawals';
import ManageSubmissions from './pages/admin/ManageSubmissions';
import Settings from './pages/admin/Settings';

import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import ForgotPassword from './pages/auth/ForgotPassword';
import ProtectedRoute from './components/ProtectedRoute';
import AdminProtectedRoute from './components/AdminProtectedRoute';

import StaticLayout from './pages/static/StaticLayout';
import AboutUs from './pages/static/AboutUs';
import PrivacyPolicy from './pages/static/PrivacyPolicy';
import TermsAndConditions from './pages/static/TermsAndConditions';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      
      <Route element={<StaticLayout />}>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/user" element={<UserLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="submissions" element={<Submissions />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="profile" element={<Profile />} />
          <Route path="deposit" element={<Deposit />} />
          <Route path="pending-verification" element={<PendingVerification />} />
        </Route>
      </Route>

      <Route element={<AdminProtectedRoute />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<ManageUsers />} />
          <Route path="jobs" element={<ManageJobs />} />
          <Route path="submissions" element={<ManageSubmissions />} />
          <Route path="deposits" element={<ManageDeposits />} />
          <Route path="withdrawals" element={<ManageWithdrawals />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <DataProvider>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </DataProvider>
  );
}

export default App;
