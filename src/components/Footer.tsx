// components/Footer.js
import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-12 rounded-lg">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h2 className="text-2xl font-bold mb-4">Qtee.ai</h2>
          <p className="mb-4">
            Our mission is to harness the power of AI to solve complex business challenges & decision-makers with data-driven insights, and enhance user experiences across digital platforms.
          </p>
          <div className="flex space-x-4 mb-4">
            <FaTwitter className="text-2xl" />
            <FaFacebookF className="text-2xl" />
            <FaInstagram className="text-2xl" />
            <FaLinkedinIn className="text-2xl" />
          </div>
          <button className="bg-white text-black font-bold py-2 px-4 rounded-full hover:bg-gray-200">
            Sign up for free
          </button>
        </div>
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h3 className="text-xl font-bold mb-4">Primary Pages</h3>
          <ul>
            <li className="mb-2">Demos</li>
            <li className="mb-2">About Us</li>
            <li className="mb-2">Services</li>
            <li className="mb-2">Pages</li>
            <li className="mb-2">Contact</li>
          </ul>
        </div>
        <div className="w-full sm:w-1/3">
          <h3 className="text-xl font-bold mb-4">Terms & Conditions</h3>
          <ul>
            <li className="mb-2">Privacy Policy</li>
            <li className="mb-2">Terms & Conditions</li>
            <li className="mb-2">Data Privacy</li>
            <li className="mb-2">Copyright & Intellectual Property</li>
          </ul>
          <form className="mt-4">
            <input
              type="text"
              placeholder="Name"
              className="bg-black text-white border border-white rounded-full py-2 px-4 mb-2 w-full hover:border-gray-300 hover:bg-gray-800 focus:outline-none focus:border-gray-300"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-black text-white border border-white rounded-full py-2 px-4 mb-2 w-full hover:border-gray-300 hover:bg-gray-800 focus:outline-none focus:border-gray-300"
            />
            <textarea
              placeholder="Message"
              className="bg-black text-white border border-white rounded-full py-2 px-4 mb-2 w-full hover:border-gray-300 hover:bg-gray-800 focus:outline-none focus:border-gray-300"
            />
            <button
              type="submit"
              className="bg-white text-black font-bold py-2 px-4 rounded-full w-full hover:bg-gray-200"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm">A venture of <span className="text-red-500">Mushroom World Umbrella</span></p>
        <p className="text-sm">© Copyright 2024, All Rights Reserved by Qtee.ai</p>
      </div>
    </footer>
  );
};

export default Footer;
