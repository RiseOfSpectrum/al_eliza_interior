'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
     import { FaHandsHelping, FaStar, FaUserCog } from "react-icons/fa"; // Add this at top


export default function Page() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="relative h-screen bg-cover bg-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/aboutus.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute top-0 left-0 w-full h-32 bg-[#050913] opacity-90 z-10" />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white mt-12 px-4">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Welcome to our company! We are dedicated to delivering the best services and products with passion and professionalism.
            </p>
          </div>
        </div>
      </div>



      {/* INFO SECTION WITHOUT ANIMATION */}
      <section className="py-16 sm:py-24 relative bg-[#050913]">
        <div className="w-full max-w-7xl px-4 md:px-8 lg:px-10 mx-auto">
          <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center gap-12">
            {/* Image Section */}
            <div className="relative w-full flex items-center justify-center lg:justify-end">
              <div className="relative w-full h-[400px] flex items-center justify-center">
                <img
                  className="absolute top-2 left-12 rounded-xl object-cover shadow-lg"
                  src="/images/about_1.jpg"
                  alt="About software services"
                  style={{
                    width: "60%",
                    height: "80%",
                    objectFit: "cover",
                    borderRadius: "20px",
                    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
                  }}
                />
                <img
                  className="absolute bottom-[-14px] right-[16px] rounded-xl object-cover shadow-lg"
                  src="/images/about_2.jpg"
                  alt="software services"
                  style={{
                    width: "50%",
                    height: "60%",
                    objectFit: "cover",
                    borderRadius: "20px",
                    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
                  }}
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left px-6 sm:px-8">
              <h2 className="text-white text-3xl sm:text-4xl font-bold font-manrope leading-snug">
                <span className="text-[#FCBA06]">Al Eliza</span> Interior Company
              </h2>

              <p className="text-gray-200 text-justify text-sm sm:text-base font-normal leading-relaxed mt-4">
                We transform your residential or commercial space with aesthetically pleasing and stunning designs that elevate your mood, increase value and enhance your purpose. Our team of professionals is dedicated to working personally with each client to uncover their specific wants, needs and style to infuse their space with luxurious yet functional design that balance style with necessity. Collaborate with us and implement exceptional designs, that deliver remarkable first impressions and exceed your expectations.              </p>

              <div className="w-full flex justify-center lg:justify-center mt-6">
                <Link href="/about">
                  <button className="px-6 py-3 bg-[#FCBA06] hover:bg-[#761768] transition-all duration-300 ease-in-out rounded-lg shadow-md">
                    <span className="text-white text-sm sm:text-base font-medium">ContactUs</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


{/* CORE PILLARS SECTION */}
<div
  className="w-full py-16 px-6 md:px-12 lg:px-20 bg-cover bg-center relative"
  style={{ backgroundImage: "url('/images/intro-poster.jpg')" }} // Replace with your image
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

  <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12">
    {/* Left Section with Image and Pillars Text */}
    <div className="w-full lg:w-[400px] flex justify-center items-center relative">
      <div className="relative w-full max-w-lg">
        <img
          src="/images/about_2.jpg"
          alt="Careers"
          className="rounded-lg shadow-xl w-full h-auto object-cover"
        />
        <div
          className="absolute bottom-[-30px] left-5 right-5 bg-white text-[#FCBA06] shadow-lg rounded-lg py-4 px-6 max-w-md mx-auto text-center"
          style={{ zIndex: 10 }}
        >
          <p className="font-bold text-lg md:text-xl">Our Core Pillars</p>
          <p className="text-sm md:text-base text-black">
            We offer a dynamic and inclusive work environment that fosters
            growth, creativity, and innovation.
          </p>
        </div>
      </div>
    </div>

    {/* Right Section with Cards */}
    <div className="w-full lg:w-1/2 flex flex-col items-center space-y-6">
      {/* Card 1 - Trust */}
      <div className="w-full bg-white shadow-md rounded-lg p-6 flex items-center">
        <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-[#FCBA06] text-white mr-4 rounded-full">
          <FaHandsHelping className="text-2xl md:text-3xl" />
        </div>
        <div className="flex-1">
          <p className="text-black text-sm md:text-base">
            <strong>Trust</strong> Our clients choose us for our transparency, commitment to
            promises, and consistent dedication to surpassing expectations.
          </p>
        </div>
      </div>

      {/* Card 2 - Quality */}
      <div className="w-full bg-white shadow-md rounded-lg p-6 flex items-center">
        <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-[#FCBA06] text-white mr-4 rounded-full">
          <FaStar className="text-2xl md:text-3xl" />
        </div>
        <div className="flex-1">
          <p className="text-black text-sm md:text-base">
            <strong>Quality</strong> We achieve unmatched quality by adhering to the highest
            standards, utilizing skilled craftsmanship, and sourcing premium
            materials to deliver exceptional results.
          </p>
        </div>
      </div>

      {/* Card 3 - Service */}
      <div className="w-full bg-white shadow-md rounded-lg p-6 flex items-center">
        <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-[#FCBA06] text-white mr-4 rounded-full">
          <FaUserCog className="text-2xl md:text-3xl " />
        </div>
        <div className="flex-1">
          <p className="text-black text-sm md:text-base">
            <strong>Service</strong> We provide personalized, client-focused solutions, ensuring a
            smooth and timely project experience tailored to each unique vision.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
