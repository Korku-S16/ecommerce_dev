import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="hidden md:block">
      <footer className="bg-black text-white px-6 py-12 sm:px-16 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">logo</h2>
            <p className="text-sm text-gray-300 mb-4">
              We offer one place to a multitude of amazing products across
              fashion and lifestyle to cater to the needs of the entire family.
              We are a complete house of leading national and international
              brands for an exciting and memorable shopping experience.
            </p>
            <div className="flex gap-4 text-gray-400 text-lg">
              <FaTwitter />
              <FaFacebookF />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Bonus program</li>
              <li>Gift cards</li>
              <li>Credit and payment</li>
              <li>Service contracts</li>
              <li>Non-cash account</li>
              <li>Payment</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-3">
              Assistance to the buyer
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Find an order</li>
              <li>Terms of delivery</li>
              <li>Exchange and return of goods</li>
              <li>Guarantee</li>
              <li>Frequently asked questions</li>
              <li>Terms of use of the site</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-3">Let Us Help You</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Your Account</li>
              <li>Return Centers</li>
              <li>Recalls and Product safety alerts</li>
              <li>Purchase Protection</li>
              <li>Delivery Policy</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
