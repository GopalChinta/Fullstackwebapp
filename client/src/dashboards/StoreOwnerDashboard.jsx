import React, { useEffect, useState } from 'react'
import api from '../api/axiosInstance'

const StoreOwnerDashboard = () => {
  const [myStores, setMyStores] = useState([])

  useEffect(() => {
    const fetchMyStores = async () => {
      try {
        const res = await api.get('/store-owner/stores')
        setMyStores(res.data)
      } catch (error) {
        console.error('Failed to fetch your stores:', error)
      }
    }

    fetchMyStores()
  }, [])

  return (
    <div className="dashboard">
      <h2>Store Owner Dashboard</h2>
      <h3>My Stores</h3>
      <ul>
        {myStores.map(store => (
          <li key={store._id}>
            {store.name} — {store.address}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StoreOwnerDashboard
