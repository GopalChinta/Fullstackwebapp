import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login'; // Correct path to Login component
import AdminDashboard from './components/AdminDashboard'; // Correct path to Admin Dashboard
import UserDashboard from './components/UserDashboard'; // Correct path to User Dashboard
import StoreOwnerDashboard from './components/StoreOwnerDashboard'; // Correct path to Store Owner Dashboard
import PrivateRoute from './components/PrivateRoute'; // Custom PrivateRoute component
import NotFound from './components/NotFound'; // 404 Page Not Found component

const AppRoutes = () => {
  return (
    <Switch>
      {/* Public Route */}
      <Route path="/" exact component={Login} />

      {/* Private Routes (Protected based on role) */}
      <PrivateRoute path="/admin-dashboard" component={AdminDashboard} role="admin" />
      <PrivateRoute path="/user-dashboard" component={UserDashboard} role="user" />
      <PrivateRoute path="/storeowner-dashboard" component={StoreOwnerDashboard} role="storeowner" />

      {/* Fallback for undefined routes */}
      <Route component={NotFound} />
    </Switch>
  );
};

export default AppRoutes;
