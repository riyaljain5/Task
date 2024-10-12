import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ id, active, handleClick }) => {
  const isActive = active === id;

  return (
    <section className="px-2 mb-6">
      <img
        src="https://i.pinimg.com/736x/a7/5f/c1/a75fc15950775e62d20b5fb1fd5d613b.jpg"
        alt="Card Image"
        className="relative h-[200px] w-[200px] object-cover top-32 left-[50%] transform -translate-x-1/2 z-10 border rounded-lg"
      />

      <motion.div
        className={`relative flex justify-center items-center w-[300px] ${isActive ? "h-[480px] bg-blue-100" : "h-[350px] bg-[#EAEAE6]"} rounded-[60px] overflow-hidden`}
        onClick={() => handleClick(isActive ? null : id)}
        initial={{ scale: 1 }}
        animate={{ scale: isActive ? 1.05 : 1 }} // Scale up when active
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {!isActive ? (
          <div className="flex flex-col justify-start items-start px-2 ml-6">
            <h1 className="text-lg font-semibold">Name</h1>
          </div>
        ) : (
          <div className="px-8 justify-center flex flex-col">
            <h1 className="text-white font-bold text-4xl mt-24">Name</h1>
            <h2>Services </h2>
            <button className="font-bold uppercase rounded-3xl text-[16px] bg-white px-9 py-3" style={{ letterSpacing: "2px" }}>
              Book
            </button>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Card;
