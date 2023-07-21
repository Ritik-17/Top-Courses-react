import React from 'react'

function Spinner() {
  return (
    <div className='flex flex-col items-center space-y-2' >
        <img src='spinner' />
        <p>Loading...</p>
    </div>
  )
}

export default Spinner