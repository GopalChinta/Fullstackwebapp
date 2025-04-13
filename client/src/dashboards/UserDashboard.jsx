import React, { useEffect, useState } from 'react'
import api from '../api/axiosInstance'
import Rating from '../components/Rating'

const UserDashboard = () => {
  const [stores, setStores] = useState([])

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const res = await api.get('/stores')
        setStores(res.data)
      } catch (error) {
        console.error('Error fetching stores:', error)
      }
    }

    fetchStores()
  }, [])

  return (
    <div className="dashboard">
      <h2>User Dashboard</h2>
      <div>
        {stores.map(store => (
          <div key={store._id} className="store-card">
            <h3>{store.name}</h3>
            <p>{store.address}</p>
            <Rating storeId={store._id} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserDashboard
