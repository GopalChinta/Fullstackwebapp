// src/components/Navbar.jsx
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      {!user && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}
      {user && (
        <>
          {user.role === 'admin' && <Link to="/admin">Admin Dashboard</Link>}
          {user.role === 'user' && <Link to="/user">User Dashboard</Link>}
          {user.role === 'storeOwner' && <Link to="/store-owner">Store Owner Dashboard</Link>}
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </nav>
  )
}

export default Navbar
