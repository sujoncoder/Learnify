"use client"

import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h5 className="text-xl font-semibold mb-4">About Us</h5>
          <p className="text-sm text-gray-400">
            We are committed to providing high-quality learning experiences to help you achieve your goals.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h5 className="text-xl font-semibold mb-4">Quick Links</h5>
          <ul>
            <li><a href="#" className="text-sm text-gray-400 hover:underline">Courses</a></li>
            <li><a href="#" className="text-sm text-gray-400 hover:underline">Pricing</a></li>
            <li><a href="#" className="text-sm text-gray-400 hover:underline">Contact</a></li>
            <li><a href="#" className="text-sm text-gray-400 hover:underline">Support</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h5 className="text-xl font-semibold mb-4">Follow Us</h5>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook">
              <FaFacebookF className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
              <FaLinkedinIn className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} LMS Web App. All rights reserved.
      </div>
    </footer>
  );
}
