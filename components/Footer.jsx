// src/Footer.js
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { MdContactMail, MdHome, MdInfo, MdSchool } from 'react-icons/md';
import { Logo } from './logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 bg-opacity-90 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* LMS Logo & Description */}
          <div>
            <Logo />
            <h2 className="text-xl font-semibold mb-4">Learnify EduPlatform</h2>
            <p className="text-gray-400">
              Enhancing learning experiences with quality educational content and tools.
            </p>
          </div>

          {/* LMS Links Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2 flex items-center">
                <MdHome className="mr-2" />
                <a href="#home" className="hover:text-gray-300">Home</a>
              </li>
              <li className="mb-2 flex items-center">
                <MdInfo className="mr-2" />
                <a href="#about" className="hover:text-gray-300">About Us</a>
              </li>
              <li className="mb-2 flex items-center">
                <MdSchool className="mr-2" />
                <a href="#courses" className="hover:text-gray-300">Courses</a>
              </li>
              <li className="mb-2 flex items-center">
                <MdContactMail className="mr-2" />
                <a href="#contact" className="hover:text-gray-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* LMS Social Media Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#facebook" className="hover:text-gray-300">
                <FaFacebookF />
              </a>
              <a href="#twitter" className="hover:text-gray-300">
                <FaTwitter />
              </a>
              <a href="#instagram" className="hover:text-gray-300">
                <FaInstagram />
              </a>
              <a href="#linkedin" className="hover:text-gray-300">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Learnify EduPlatform. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
