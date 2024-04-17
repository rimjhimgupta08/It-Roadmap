import React from 'react'

const Home = ({ onLogout }) => {
  return (
      <>
      <div>Home</div>
      <button onClick={onLogout}>Logout</button>
      </>
    
  )
}

export default Home