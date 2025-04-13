import React, { useState } from 'react'
import api from '../api/axiosInstance'

const Rating = ({ storeId }) => {
  const [rating, setRating] = useState(0)
  const [message, setMessage] = useState('')

  const handleRate = async () => {
    try {
      const response = await api.post(`/ratings`, {
        storeId,
        rating,
      })
      setMessage('Rating submitted successfully!')
    } catch (error) {
      setMessage('Error submitting rating.')
      console.error(error)
    }
  }

  return (
    <div className="rating-component">
      <label>Rate: </label>
      <input
        type="number"
        min="1"
        max="5"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      />
      <button onClick={handleRate}>Submit</button>
      {message && <p>{message}</p>}
    </div>
  )
}

export default Rating
