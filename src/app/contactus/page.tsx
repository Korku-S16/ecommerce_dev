import React from 'react';
import HeaderTop from "@/app/home/component/HeaderTop";
import Footer from "@/app/home/component/footer";
import Container from "@/app/home/component/container";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <HeaderTop />
      <div className="flex-grow overflow-y-auto">
      <Container>
        <div className="flex justify-between items-center mt-8">
          <h1 className="text-3xl font-bold text-center flex-grow text-black">
            Contact Us
          </h1>
          <div className="flex items-center space-x-2">
            <HiOutlineGlobeAlt className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="mt-6 overflow-y-auto space-y-8 text-base leading-relaxed">
          <h2 className="text-xl font-semibold mt-4">Get In Touch</h2>
          <p>
            We are here to assist you! If you have any questions, concerns, or feedback, feel free to reach out to us using any of the methods below. Our customer support team is ready to help you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaPhoneAlt className="h-10 w-10 text-yellow-400 mb-6" />
              <h3 className="text-2xl font-bold text-white">Call Us</h3>
              <p className="mt-4 text-gray-300">For immediate assistance, call us directly:</p>
              <p className="text-xl mt-6 text-yellow-400 font-semibold">
                +1 (800) 123-4567
              </p>
            </div>

            <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaEnvelope className="h-10 w-10 text-yellow-400 mb-6" />
              <h3 className="text-2xl font-bold text-white">Email Us</h3>
              <p className="mt-4 text-gray-300">For general inquiries, you can email us at:</p>
              <p className="text-xl mt-6 text-yellow-400 font-semibold underline hover:text-yellow-300 transition duration-300">
                support@[COMPANY_NAME].com
              </p>
            </div>

            <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaMapMarkerAlt className="h-10 w-10 text-yellow-400 mb-6" />
              <h3 className="text-2xl font-bold text-white">Our Location</h3>
              <p className="mt-4 text-gray-300">You can also visit us at our office:</p>
              <p className="text-xl mt-6 text-yellow-400 font-semibold">
                [COMPANY_ADDRESS]
              </p>
            </div>
          </div>

          <h2 className="text-xl font-semibold mt-8">Send Us a Message</h2>
          <p>We would love to hear from you! Fill out the form below and we will get back to you as soon as possible.</p>

          <form className="mt-6 space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg font-semibold">Your Name</label>
              <input
                type="text"
                id="name"
                className="mt-2 p-3 rounded-lg bg-gray-500 text-white"
                placeholder="Enter your name"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg font-semibold">Your Email</label>
              <input
                type="email"
                id="email"
                className="mt-2 p-3 rounded-lg bg-gray-500 text-white"
                placeholder="Enter your email"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg font-semibold">Your Message</label>
              <textarea
                id="message"
                rows="4"
                className="mt-2 p-3 rounded-lg bg-gray-500 text-white"
                placeholder="Write your message here"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-400 transition duration-300"
            >
              Send Message
            </button>
          </form>

          <p className="text-sm text-gray-400 mt-4">Last Updated: [LAST_UPDATED_DATE]</p>
        </div>
      </Container>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUsPage;
