import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const mockData = [
    { id: 1, location: 'Delhi', title: 'Meeting in Delhi', description: 'This is a meeting in Delhi.' },
    { id: 2, location: 'Mumbai', title: 'Meeting in Mumbai', description: 'This is a meeting in Mumbai.' },
    { id: 3, location: 'Pune', title: 'Meeting in Pune', description: 'This is a meeting in Pune.' },
    { id: 4, location: 'Chennai', title: 'Meeting in Chennai', description: 'This is a meeting in Chennai.' },
    { id: 5, location: 'Kolkata', title: 'Meeting in Kolkata', description: 'This is a meeting in Kolkata.' },
    { id: 6, location: 'Delhi', title: 'Meeting in Delhi', description: 'This is a meeting in Delhi.' },
    { id: 7, location: 'Mumbai', title: 'Meeting in Mumbai', description: 'This is a meeting in Mumbai.' },
    { id: 8, location: 'Pune', title: 'Meeting in Pune', description: 'This is a meeting in Pune.' },
    { id: 9, location: 'Chennai', title: 'Meeting in Chennai', description: 'This is a meeting in Chennai.' },
    { id: 10, location: 'Kolkata', title: 'Meeting in Kolkata', description: 'This is a meeting in Kolkata.' },
    { id: 11, location: 'Delhi', title: 'Meeting in Delhi', description: 'This is a meeting in Delhi.' },
    { id: 12, location: 'Mumbai', title: 'Meeting in Mumbai', description: 'This is a meeting in Mumbai.' },
    { id: 13, location: 'Pune', title: 'Meeting in Pune', description: 'This is a meeting in Pune.' },
    { id: 14, location: 'Chennai', title: 'Meeting in Chennai', description: 'This is a meeting in Chennai.' },
    { id: 15, location: 'Kolkata', title: 'Meeting in Kolkata', description: 'This is a meeting in Kolkata.' },
    { id: 16, location: 'Delhi', title: 'Meeting in Delhi', description: 'This is a meeting in Delhi.' },
    { id: 17, location: 'Mumbai', title: 'Meeting in Mumbai', description: 'This is a meeting in Mumbai.' },
    { id: 18, location: 'Pune', title: 'Meeting in Pune', description: 'This is a meeting in Pune.' },
    { id: 19, location: 'Chennai', title: 'Meeting in Chennai', description: 'This is a meeting in Chennai.' },
    { id: 20, location: 'Kolkata', title: 'Meeting in Kolkata', description: 'This is a meeting in Kolkata.' },
  // More data...
];

const cityOptions = ['Delhi', 'Mumbai', 'Pune', 'Chennai', 'Kolkata'];

const AllCards = () => {
  const location = useLocation();
  const { state } = location;
  const [selectedLocation, setSelectedLocation] = useState(state?.location || 'Delhi');
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const filteredCards = mockData.filter((card) => card.location === selectedLocation);

  const handleCitySelection = (city) => {
    setSelectedLocation(city);
    setSearchQuery(city);
    setShowDropdown(false);
  };

  const filteredCities = cityOptions.filter((city) =>
    city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle card click to navigate to the Content page
  const handleCardClick = (card) => {
    navigate('/content', { state: { card } }); // Navigate to content and pass card data
  };

  return (
    <section className="flex flex-col items-center justify-center py-12 px-4 bg-gray-100">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">All Meetings in {selectedLocation}</h1>

      <div className="relative mb-4 w-full max-w-md">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setShowDropdown(true);
          }}
          placeholder="Search or select a city..."
          className="px-4 py-2 border rounded-lg w-full"
        />
        {showDropdown && (
          <ul className="absolute z-10 bg-white border rounded-lg w-full mt-1 max-h-40 overflow-auto">
            {filteredCities.length > 0 ? (
              filteredCities.map((city, index) => (
                <li
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleCitySelection(city)}
                >
                  {city}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500">No cities found</li>
            )}
          </ul>
        )}
      </div>

      <div className="flex space-x-4 mb-6">
        {cityOptions.map((city) => (
          <button
            key={city}
            onClick={() => setSelectedLocation(city)}
            className={`px-4 py-2 rounded-lg ${selectedLocation === city ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {city}
          </button>
        ))}
      </div>

      <div className="flex flex-col space-y-6 w-full max-w-6xl">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <div
              key={card.id}
              className="flex bg-white shadow-md rounded-lg overflow-hidden w-full cursor-pointer"
              onClick={() => handleCardClick(card)} // Navigate on card click
            >
              <div className="flex-shrink-0 w-1/3 pd-4">
                <img
                  src={`https://via.placeholder.com/150?text=Image+${card.id}`}
                  alt={`Meeting ${card.id}`}
                  className="w-[60%] object-cover rounded-l-lg"
                />
              </div>
              <div className="p-4 flex flex-col gap-3 w-2/3 items-start justify-start">
                <h1 className="text-3xl font-bold mb-2">{card.title}</h1>
                <h2 className="text-gray-600 text-xl mb-0">{card.description}</h2>
              </div>
            </div>
          ))
        ) : (
          <p>No meetings available for {selectedLocation}.</p>
        )}
      </div>
    </section>
  );
};

export default AllCards;
