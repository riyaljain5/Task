import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Terms of Conditions Link */}
        <div>
          <a href="/terms" className="text-gray-400 hover:text-white">
            Terms of Conditions
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="h-6 w-6 text-gray-400 hover:text-white" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="h-6 w-6 text-gray-400 hover:text-white" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="h-6 w-6 text-gray-400 hover:text-white" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="h-6 w-6 text-gray-400 hover:text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
