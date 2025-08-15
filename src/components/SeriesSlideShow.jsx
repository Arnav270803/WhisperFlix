// SeriesSlideShow.jsx - Animated series carousel component
import React from 'react';
import { motion } from "framer-motion";
import { assets } from '../assets/assets';

// Array of all series images with metadata
const seriesImages = [
  { src: assets.midnightclub, alt: "midnight club" },
  { src: assets.midnightmass, alt: "midnight mass" },
  { src: assets.nightHouse, alt: "night House" },
  { src: assets.terrortuesday, alt: "terror tuesday" },
  { src: assets.thehauntingofblymirror, alt: "the haunting of bly mirror" },
  { src: assets.thehauntingofhillhouse, alt: "the haunting of hill house" },
  { src: assets.theoutsider, alt: "the outsider" },
  { src: assets.theterror, alt: "the terror" },
  { src: assets.lovedeathrobots, alt: "love deat+hrobots" },
  { src: assets.dark, alt: "dark" },
  { src: assets.labrea, alt: "la brea" },
  { src: assets.threebodyproblem, alt: "three body problem" },
  { src: assets.killingthemsoftlypeg, alt: "killing them softlypeg" },
  { src: assets.ozark, alt: "ozark" },
  { src: assets.peakyblinders, alt: "peakyb linders" }, 
  { src: assets.supernatural, alt: "supernatural" }, 
  { src: assets.theoa, alt: "the oa" }, 
  { src: assets.hemlockgrove , alt: "hemlock grove " }, 
  { src: assets.stationeleven, alt: "statione leven" }, 
  { src: assets.intothenight, alt: "into the night" }, 
  { src: assets.fallingskies, alt: "fallingskies" }, 
  { src: assets.thelastship, alt: "the last ship" }, 

];

// Duplicate the array for sea  mless infinite scroll effect
const duplicatedImages = [...seriesImages, ...seriesImages];

const SeriesSlideShow = () => {
  return (
    // Container with full width and transparent background
    <div className='w-full py-8 bg-transparent overflow-hidden relative'>
      
      {/* Optional: Series title section */}
      {/* Uncomment below to add a "SERIES" title similar to movies */}
      {/* 
      <div className="absolute -top-2 left-4 z-10">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent tracking-wide">
          SERIES
        </h2>
      </div> 
      */}
      
      {/* Slideshow container */}
      <div className="flex whitespace-nowrap mt-12">
        {/* Animated motion div for continuous scrolling */}
<motion.div
 initial={{ x: `-${(seriesImages.length) * (144 + 16)}px` }}
 animate={{ x: 0 }}
 transition={{
   ease: "linear",
   repeat: Infinity,
   duration: 30,
   repeatType: "loop"
 }}
 className="flex gap-4"
>
          {/* Map through duplicated images for seamless loop */}
          {duplicatedImages.map((item, index) => (
            // Individual series card container
            <div 
              key={index}
              className="flex-shrink-0 p-1 bg-gradient-to-br from-orange-300 to-orange-400 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {/* Series poster image */}
              <img
                src={item.src}
                alt={item.alt}
                className='h-48 w-36 object-cover rounded-md shadow-lg'
                draggable={false}  // Prevent drag behavior
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SeriesSlideShow;