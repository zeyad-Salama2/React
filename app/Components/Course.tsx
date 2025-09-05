import React from 'react';
import SwiperCards from './SwiperCards';

export const Course = () => {
  return (
    <section className="py-8">
      <h2 className="text-4xl font-bold text-white mb-6 text-center tracking-wide">
        Featured Courses
      </h2>
      <div className="">
        <SwiperCards
          paginationImages
          items={[
            {
              src: "/images/Amazon-Web-Services-slider.webp",
              card: (
                <div className="relative w-full h-full">
                  <video
                    src="/images/background1.mp4"
                    className="w-full h-full rounded-lg object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <h3 className="text-white text-2xl font-semibold absolute top-28 left-4 bg-black bg-opacity-50 p-2 rounded">
                    Learn AWS from Scratch
                  </h3>
                  <p className="text-white text-sm absolute bottom-28 left-4 right-4 font-light bg-black bg-opacity-50 p-2 rounded">
                    Master AWS through immersive hands-on labs and real-world projects, gaining practical experience, confidence, and expertise to design, deploy, and manage cloud solutions effectively while preparing for industry-recognized certifications.
                  </p>
                  <button className="absolute bottom-4 left-4 bg-gradient-to-r from-grey-700 to-blue-800 text-white text-sm font-semibold py-2 px-4 rounded hover:from-blue-700 hover:to-blue-900 transition duration-300 shadow-lg transform hover:scale-105">
                    Find More
                  </button>
                </div>
              ),
            },
            {
              src: "/images/python.png",
              card: (
                <div className="relative w-full h-full">
                  <video
                    src="/images/background2.mp4"
                    className="w-full h-full rounded-lg object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <h3 className="text-white text-2xl font-semibold absolute bottom-28 left-4 bg-black bg-opacity-50 p-2 rounded">
                    Learn Python Programming
                  </h3>
                  <p className="text-white text-sm absolute bottom-20 left-4 right-4 font-light bg-black bg-opacity-50 p-2 rounded">
                    Dive into Python programming with hands-on projects, mastering the fundamentals and advanced concepts to build real-world applications.
                  </p>
                  <button className="absolute bottom-4 left-4 bg-gradient-to-r from-grey-700 to-blue-800 text-white text-sm font-semibold py-2 px-4 rounded hover:from-blue-700 hover:to-blue-900 transition duration-300 shadow-lg transform hover:scale-105">
                    Find More
                  </button>
                </div>
              ),
            },
            {
              src: "/images/pikaso_embed.webp",
              card: (
                <div className="relative w-full h-full">
                  <video
                    src="/images/background3.mp4"
                    className="w-full h-full rounded-lg object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <h3 className="text-white text-2xl font-semibold absolute bottom-28 left-4 bg-black bg-opacity-50 p-2 rounded">
                    Master Data Science
                  </h3>
                  <p className="text-white text-sm absolute bottom-20 left-4 right-4 font-light bg-black bg-opacity-50 p-2 rounded">
                    Explore data science techniques and tools, gaining insights into data analysis, machine learning, and statistical modeling.
                  </p>
                  <button className="absolute bottom-4 left-4 bg-gradient-to-r from-grey-700 to-blue-800 text-white text-sm font-semibold py-2 px-4 rounded hover:from-blue-700 hover:to-blue-900 transition duration-300 shadow-lg transform hover:scale-105">
                    Find More
                  </button>
                </div>
              ),
            },
          ]}
        />
      </div>
    </section>
  );
};
