// Navbar.jsx - Top navigation component
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import
import { assets } from '../assets/assets';

const Navbar = ({ onGenraClick }) => {
  const navigate = useNavigate(); // Add this hook

  // Add handler for favourite button click
  const handleFavouriteClick = () => {
    navigate('/favourite');
  };

  return (
    <div className='flex items-center justify-between px-4 py-4 relative'>
      {/* Left Section - Genre Button with Animated Icon */}
      <div className='flex items-center space-x-2'>
        {/* Animated lord-icon for genre button */}
        <span className="flex items-center">
          <lord-icon
            src="https://cdn.lordicon.com/olfvnikl.json"
            trigger="hover"
            colors="primary:#ffffff,secondary:#e4e4e4"
            style={{width: '24px', height: '24px'}}
          />
        </span>
        {/* Genre selection button */}
        <button 
          onClick={onGenraClick}
          className='text-white font-light hover:text-orange-400 transition-colors duration-200 cursor-pointer'
        >
          Genre
        </button>
      </div>
           
      {/* Center Section - Brand Logo */}
      {/* Positioned absolutely to ensure perfect centering */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <img
          src={assets.horror_logo} 
          alt="horror_logo"
          className='w-8 h-8 object-contain'
        />
      </div>
           
      {/* Right Section - Find Button */}
      <div className='flex items-center'>
        <button
          onClick={onGenraClick} // Add onClick handler
          className='px-4 py-1.5 bg-transparent border border-orange-400 text-orange-400 font-medium text-sm rounded hover:bg-orange-400 hover:text-black transition-all duration-300 tracking-wide'
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default Navbar;