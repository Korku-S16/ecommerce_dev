import React from 'react';
import HeaderTop from "@/app/home/component/HeaderTop";
import Footer from "@/app/home/component/footer";
import Container from "@/app/home/component/container";
import { HiOutlineGlobeAlt } from "react-icons/hi";

const AboutUsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <HeaderTop />
      <div className="flex-grow overflow-y-auto">
      <Container>
        <div className="flex justify-between items-center mt-8">
          <h1 className="text-3xl font-bold text-center flex-grow text-black">
            About Us
          </h1>
          <div className="flex items-center space-x-2">
            <HiOutlineGlobeAlt className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="mt-6 overflow-y-auto space-y-6 text-base leading-relaxed">
          <h2 className="text-xl font-semibold mt-4">Our Story</h2>
          <p>
            Founded in [YEAR], [COMPANY_NAME] was created with a singular vision: to provide customers with a convenient, secure, and reliable shopping experience online. Our journey began with a small team of passionate individuals, determined to transform the way people shop online. Today, we have become a leading e-commerce platform, offering a wide range of products across various categories such as electronics, fashion, home appliances, and more.
          </p>

          <h2 className="text-xl font-semibold mt-4">Our Mission</h2>
          <p>
            Our mission is simple: to make shopping easy, affordable, and accessible to everyone. We strive to provide the best quality products at the most competitive prices, while ensuring fast and reliable delivery. We are committed to continuously improving our services to meet the ever-evolving needs of our customers.
          </p>

          <h2 className="text-xl font-semibold mt-4">Why Choose Us?</h2>
          <p>
            At [COMPANY_NAME], we understand that shopping online can be overwhelming. That’s why we focus on delivering a seamless shopping experience with:
          </p>
          <ul className="list-disc ml-6">
            <li>High-quality products across multiple categories</li>
            <li>Secure and easy payment methods</li>
            <li>Fast, reliable, and trackable delivery</li>
            <li>24/7 customer support</li>
            <li>Easy returns and refunds</li>
          </ul>

          <h2 className="text-xl font-semibold mt-4">Our Values</h2>
          <p>
            Our values define who we are and how we operate. We are dedicated to:
          </p>
          <ul className="list-disc ml-6">
            <li>Customer satisfaction: Putting our customers first in everything we do.</li>
            <li>Integrity: Conducting business with honesty and transparency.</li>
            <li>Innovation: Continuously evolving and improving our services.</li>
            <li>Community: Contributing to the betterment of society through responsible business practices.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-4">Our Team</h2>
          <p>
            Our team consists of talented and dedicated professionals from diverse backgrounds, all working towards the common goal of providing the best shopping experience. Whether it's the development team working tirelessly behind the scenes, the customer service team offering 24/7 support, or the logistics team ensuring timely deliveries – every member plays a vital role in our success.
          </p>

          <h2 className="text-xl font-semibold mt-4">Our Vision for the Future</h2>
          <p>
            Looking ahead, [COMPANY_NAME] aims to expand its product offerings, improve technology infrastructure, and enhance customer service to continue leading the e-commerce industry. We aspire to be the preferred choice for online shoppers globally, ensuring quality, affordability, and reliability in everything we do.
          </p>

          <h2 className="text-xl font-semibold mt-4">Contact Us</h2>
          <p>
            We’d love to hear from you! If you have any questions or feedback, feel free to reach out to us:
          </p>
          <ul className="list-disc ml-6">
            <li>Email: [COMPANY_EMAIL]</li>
            <li>Phone: [COMPANY_PHONE]</li>
            <li>Address: [COMPANY_ADDRESS]</li>
          </ul>

          <p className="text-sm text-gray-400 mt-4">Last Updated: [LAST_UPDATED_DATE]</p>
        </div>
      </Container>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
