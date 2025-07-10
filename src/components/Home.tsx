"use client";

import React from "react";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          poster="/images/intro-poster.jpg"
          className="w-full h-full object-cover opacity-60 pointer-events-none"
        >
          <source src="/videos/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-5 flex items-center justify-center min-h-screen pt-20 pointer-events-none">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to Al-Eliza Interior
          </h1>
          <p className="text-xl mb-8">
            Transform your space with our elegant designs
          </p>
          <button
            onClick={() => alert("Get Started Clicked")}
            className="bg-white cursor-pointer text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors pointer-events-auto"
          >
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
}
