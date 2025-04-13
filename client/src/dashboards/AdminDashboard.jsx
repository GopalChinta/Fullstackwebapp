import React, { useEffect, useState } from 'react'
import api from '../api/axiosInstance'

const AdminDashboard = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await api.get('/admin/users')
        setUsers(res.data)
      } catch (error) {
        console.error('Failed to fetch users:', error)
      }
    }

    fetchUsers()
  }, [])

  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>
      <h3>Registered Users</h3>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.name} - {user.role}</li>
        ))}
      </ul>
    </div>
  )
}

export default AdminDashboard
