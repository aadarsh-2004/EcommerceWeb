import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 md:px-10 lg:px-20 ">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <span className="text-blue-400 text-3xl font-bold">Your Logo</span>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="font-semibold text-blue-400 mb-4 ">Solutions</h3>
          <ul className="space-y-2 cursor-pointer">
            <li>Marketing</li>
            <li>Analytics</li>
            <li>Automation</li>
            <li>Commerce</li>
            <li>Insights</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-blue-400 mb-4 ">Support</h3>
          <ul className="space-y-2 cursor-pointer">
            <li>Submit ticket</li>
            <li>Documentation</li>
            <li>Guides</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-blue-400 mb-4 ">Company</h3>
          <ul className="space-y-2 cursor-pointer">
            <li>About</li>
            <li>Blog</li>
            <li>Jobs</li>
            <li>Press</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold text-blue-400 mb-4">Legal</h3>
          <ul className="space-y-2 cursor-pointer">
            <li>Terms of service</li>
            <li>Privacy policy</li>
            <li>License</li>
          </ul>
        </div>
      </div>

     
      

      {/* Footer Bottom */}
      <div className="max-w-screen-xl mx-auto mt-8 flex flex-col md:flex-row items-center justify-between border-t border-gray-700 pt-4 text-gray-400 text-sm">
        <p>&copy; 2024 Your Company, Inc. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0 cursor-pointer">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaGithub />
          <FaYoutube />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
