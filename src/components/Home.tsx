"use client";

import React from "react";
import { cubicBezier, motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const containerVariant = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const customEase = cubicBezier(0.42, 0, 0.58, 1);
  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: customEase,
      },
    },
  };
  return (
    <main>
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0 bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className="w-full h-full object-cover opacity-60 pointer-events-none"
          >
            <source
              width="720"
              src="https://res.cloudinary.com/dpzuexs49/video/upload/v1753213392/intro2_1_eacnbz.mp4"
              type="video/mp4"
            />
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
      </section>

      <section className="min-h-screen h-full bg-[#050913] flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1440px]">
          <div className="flex flex-col justify-center px-8 py-10 relative">
            <h2 className="absolute top-4 md:top-4 lg:top-4 xl:top-14 whitespace-nowrap -right-32 lg:right-0 sm:right-10 md:-right-28 xl:right-10 2xl:right-14 left-1/2 -translate-x-1/2 text-6xl text-gray-700 font-bold z-0 select-none opacity-50">
              About us
            </h2>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative text-center text-6xl font-extrabold z-10 text-[#c38e24] mb-20"
            >
              About us
            </motion.h2>

            <motion.div
              variants={containerVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              {[
                <p
                  key="1"
                  className="text-xl underline underline-offset-8 [text-decoration-color:#70541d]"
                >
                  Established in 2021
                </p>,
                <p key="2" className="text-xl tracking-wide">
                  At Al Eliza Interior Design, we specialize in transforming
                  residential and commercial spaces into stunning, aesthetically
                  pleasing environments. Our designs elevate your mood, enhance
                  functionality, and increase the value of your space.
                </p>,
                <p key="3" className="text-xl">
                  Our dedicated team of professionals works closely with each
                  client to uncover their unique needs, preferences, and style.
                  Together, we create luxurious yet practical designs that
                  balance elegance with purpose.
                </p>,
                <p key="4" className="text-xl">
                  Collaborate with us to implement exceptional designs that
                  leave remarkable first impressions and exceed expectations.
                </p>,
                <p key="5" className="text-xl">
                  Contact us today to bring your vision to life.
                </p>,
              ].map((paragraph, index) => (
                <motion.div key={index} variants={itemVariant}>
                  {paragraph}
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
            className="flex items-center justify-end h-[700px] px-6"
          >
            <div className="border-[14px] border-t-0 border-r-0 border-[#70541d] h-full w-[90%] ml-auto relative top-0 flex justify-end items-start">
              <Image
                src="https://res.cloudinary.com/dpzuexs49/image/upload/v1753108837/main-sample.png"
                alt="Main Sample"
                className="w-[97%] h-[97%] object-cover"
                width={800}
                height={800}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
