"use client"
import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

const Contact = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    const whatsappURL = `https://wa.me/qr/FWX3BWWPABVRG1?text=Hello! My name is ${encodeURIComponent(name)}.%0A%0A${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.3792427175094!2d67.06637771100232!3d24.95320854144762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb341f77f4ffccf%3A0x66b99b5918c3fefc!2sCafe%20Ignite!5e0!3m2!1sen!2s!4v1737966700403!5m2!1sen!2s"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          />
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Order Here & Send Your Feedback!
            </h2>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              onClick={handleSendMessage}
              className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              <div className="flex gap-2 lg:ml-14">Send via WhatsApp <FaWhatsapp className='text-green-400 text-2xl'/></div>
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Your feedback fuels our passion and motivates us to keep delivering the best!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
