import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav className="navbar">
      <h2>Store Rating App</h2>
      <div className="nav-links">
        {!user ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        ) : (
          <>
            {user.role === 'admin' && <Link to="/admin">Admin</Link>}
            {user.role === 'user' && <Link to="/user">User</Link>}
            {user.role === 'store_owner' && <Link to="/store-owner">Store Owner</Link>}
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
