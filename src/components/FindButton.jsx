// FindButton.jsx
import React from 'react'

const FindButton = ({ onGenraClick }) => { // Add onGenraClick prop
  return (
    <div className='flex justify-center mt-8'>
      <button
        onClick={onGenraClick} // Add onClick handler
        className='px-4 py-1.5 bg-transparent border border-orange-400 text-orange-400 font-medium text-sm rounded hover:bg-orange-400 hover:text-black transition-all duration-300 tracking-wide'>
        Find
      </button>
    </div>
  )
}

export default FindButton