import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/axiosInstance'
import '../style/auth.css'

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user'
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await api.post('/auth/signup', formData)
      navigate('/login')
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed')
    }
  }

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <select name="role" onChange={handleChange} required>
          <option value="user">User</option>
          <option value="storeOwner">Store Owner</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Signup</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  )
}

export default Signup
