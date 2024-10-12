import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Services = () => {
  const navigate = useNavigate();

  // Function to handle clicks on images
  const handleImageClick = (location) => {
    navigate('/all-cards', { state: { location } }); // Navigate to AllCards with location state
  };

  return (
    <section className="flex flex-col items-center justify-center py-12 px-4 bg-white mb-16">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Our Services</h1>
      <h3 className="text-xl md:text-2xl text-gray-600 text-center mb-6">Find your service at your location</h3>
      
      <div className='w-auto py-4 px-6 mt-12 gap-10 border-2 rounded-lg flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center' onClick={() => handleImageClick('Delhi')}>
          <img src="https://i.pinimg.com/564x/61/49/60/6149600e89247cebe96fdd5ca0997230.jpg" className='w-32 h-32 object-cover' />
          <h1>Delhi</h1>
        </div>
        <div className='flex flex-col items-center justify-center' onClick={() => handleImageClick('Mumbai')}>
          <img src="https://i.pinimg.com/564x/83/be/4f/83be4f890675f7edda8111bb1b2a7b64.jpg" className='w-32 h-32 object-cover' />
          <h1>Mumbai</h1>
        </div>
        <div className='flex flex-col items-center justify-center' onClick={() => handleImageClick('Pune')}>
          <img src="https://i.pinimg.com/564x/61/49/60/6149600e89247cebe96fdd5ca0997230.jpg" className='w-32 h-32 object-cover' />
          <h1>Pune</h1>
        </div>
        <div className='flex flex-col items-center justify-center' onClick={() => handleImageClick('Chennai')}>
          <img src="https://i.pinimg.com/564x/61/49/60/6149600e89247cebe96fdd5ca0997230.jpg" className='w-32 h-32 object-cover' />
          <h1>Chennai</h1>
        </div>
        <div className='flex flex-col items-center justify-center' onClick={() => handleImageClick('Kolkata')}>
          <img src="https://i.pinimg.com/564x/61/49/60/6149600e89247cebe96fdd5ca0997230.jpg" className='w-32 h-32 object-cover' />
          <h1>Kolkata</h1>
        </div>
      </div>



      <div className='w-auto py-4 px-6 mt-12 gap-10 border-2 rounded-lg flex items-center justify-center  ' >
     
     <div className='flex flex-col items-center justify-center ' onClick={() => handleImageClick('Delhi')}>
     <img src="https://i.pinimg.com/736x/27/72/fc/2772fcb68543a339d7da0e20d3a9b283.jpg"
        className='w-32 h-32 rounded-lg  object-cover'
     />
     <h1 className=''>Call Girls</h1>
     </div>

     <div className='flex flex-col items-center justify-center' onClick={() => handleImageClick('Delhi')}>
     <img src="https://i.pinimg.com/736x/27/72/fc/2772fcb68543a339d7da0e20d3a9b283.jpg"
        className='w-32 h-32 rounded-lg  object-cover'
     />
     <h1 className=''>Massages</h1>
     </div>


     <div className='flex flex-col items-center justify-center' onClick={() => handleImageClick('Delhi')}>
     <img src="https://i.pinimg.com/736x/27/72/fc/2772fcb68543a339d7da0e20d3a9b283.jpg"
        className='w-32 h-32 rounded-lg  object-cover'/>
     <h1 className=''>Transsexual</h1>
     </div>

   
     <div className='flex flex-col items-center justify-center' onClick={() => handleImageClick('Delhi')}>
     <img src="https://i.pinimg.com/736x/27/72/fc/2772fcb68543a339d7da0e20d3a9b283.jpg"
        className='w-32 h-32 rounded-lg  object-cover'
     />
     <h1 className=''>Adult Meetings</h1>
     </div>


     <div className='flex flex-col items-center justify-center' onClick={() => handleImageClick('Delhi')}>
     <img src="https://i.pinimg.com/736x/27/72/fc/2772fcb68543a339d7da0e20d3a9b283.jpg"
        className='w-32 h-32 rounded-lg  object-cover'
     />
     <h1 className=''>Male Escorts</h1>
     </div>

     </div>
     
    </section>
  );
};

export default Services;
