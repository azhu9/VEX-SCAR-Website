import React from 'react'

import {
  FaGithub, FaInstagram, FaLinkedin, FaDiscord
}
from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/azhu9/VEX-SCAR-Website"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.instagram.com/rutgersvex/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/rutgersvex/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://discord.gg/Pf28kh8Use"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaDiscord size={24} />
          </a>
        </div>
        {/* Footer Text */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Rutgers IEEE. All rights reserved.
        </p>
      </div>
    </footer>
    </>
  )
}

export default Footer