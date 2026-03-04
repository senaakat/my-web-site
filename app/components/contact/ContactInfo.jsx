"use client"

import React from 'react'
import { FaMailBulk, FaUser, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactInfo() {
  return (
    <div className="flex flex-col w-[90%] bg-black/30 items-start mt-12 p-4 space-y-6 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-125 hover:shadow-2xl"
          >
        <h3 className="text-3xl font-bold">Contact Info</h3>

        <div className="space-y-5">
          {/* Name */}
          <div className="flex items-start">
            <FaUser className="text-white text-2xl mt-1 mr-3 w-6" />
            <div className="border-l-2 border-gray-600 pl-4 flex flex-col items-start">
              <h4 className="font-semibold mb-1">Name</h4>
              <p className="text-gray-300">Sena AKAT</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start">
            <FaMapMarkerAlt className="text-[rgb(232,104,55)] text-2xl mt-1 mr-3 w-6" />
            <div className="border-l-2 border-gray-600 pl-4 flex flex-col items-start">
              <h4 className="font-semibold mb-1">Location</h4>
              <p className="text-gray-300">Istanbul, Turkey</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start">
            <FaMailBulk className="text-[rgb(21,173,203)] text-2xl mt-1 mr-3 w-6" />
            <div className="border-l-2 border-gray-600 pl-4 flex flex-col items-start">
              <h4 className="font-semibold mb-1">Email</h4>
              <p className="text-gray-300">senaakatt@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
  )
}