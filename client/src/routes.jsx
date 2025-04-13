import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import AdminDashboard from './dashboards/AdminDashboard'
import UserDashboard from './dashboards/UserDashboard'
import StoreOwnerDashboard from './dashboards/StoreOwnerDashboard'
import ProtectedRoute from './components/ProtectedRoute'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute roles={['admin']}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/user"
        element={
          <ProtectedRoute roles={['user']}>
            <UserDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/store-owner"
        element={
          <ProtectedRoute roles={['store_owner']}>
            <StoreOwnerDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default AppRoutes

