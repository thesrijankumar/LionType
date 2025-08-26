import React from 'react'

const Timer = () => {
  return (
    <div className='timer flex gap-3 text-xl'>
        <button>15</button>
        <button>30</button>
        <button>60</button>
        <p className='text-gray-600'>seconds</p>
    </div>
  )
}

export default Timer