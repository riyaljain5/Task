import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Import the back arrow icon

const Content = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { card } = location.state;

  return (
    <section className="bg-gray-300 p-6 min-h-screen flex flex-col items-center relative">
      {/* Back Button with Icon in Top Left */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        Back
      </button>

      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl mt-10">
        <h1 className="text-4xl font-bold mb-4">{card.title}</h1>
        <p className="text-gray-600 text-xl">{card.description}</p>
        <p className="text-gray-500 mt-4">Location: {card.location}</p>
      </div>
    </section>
  );
};

export default Content;
