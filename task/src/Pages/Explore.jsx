import React, { useState, useRef } from 'react';
import Card from '../Components/Card'; // Ensure the correct path to your Card component
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Explore = () => {
  const [active, setActive] = useState(null); // State to keep track of the active card
  const navigate = useNavigate(); // Initialize useNavigate
  const scrollRef = useRef(null); // Ref to the scrolling container

  const handleSeeAll = () => {
    navigate('/all-cards'); // Navigate to the "All Cards" page
  };

  const smoothScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300; // Adjust scroll amount based on card width
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth', // Smooth scroll behavior
      });
    }
  };

  return (
    <section className="flex flex-col items-center justify-center py-12 px-4 bg-gray-100 mt-16">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Meetings in your City</h1>
      <h3 className="text-xl md:text-2xl text-gray-600 text-center mb-6">Find your favorite</h3>

      {/* Horizontal scrolling container */}
      <div className="relative w-full max-w-7xl">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow z-10"
          onClick={() => smoothScroll('left')}
        >
          &lt; {/* Left Arrow */}
        </button>
        <div
          ref={scrollRef} // Attach ref to the container
          className="flex overflow-x-auto space-x-8 py-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollSnapType: 'x mandatory' }} // Ensures snapping behavior
        >
          {/* Render multiple Card components */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
            <div className="flex-shrink-0 w-1/4 snap-start" key={id}> {/* Set each card width to 1/4 of the container */}
              <Card id={id} active={active} handleClick={setActive} />
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow z-10"
          onClick={() => smoothScroll('right')}
        >
          &gt; {/* Right Arrow */}
        </button>
      </div>

      {/* See All button */}
      <button
        onClick={handleSeeAll}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        See All
      </button>

      <p className='mt-16 text-wrap w-3/4 items-center justify-center'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </section>
  );
};

export default Explore;
