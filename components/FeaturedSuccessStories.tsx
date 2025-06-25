'use client'

import React, { useState } from 'react';
import { Quote, Play, X } from 'lucide-react';

const testimonials = [
  {
    quote: "DXFactor understands our industry, delivers real results, and moves fast. Their responsiveness and expertise cut costs by 50%—a true game-changer for us!",
    author: "Don Dickerson",
    title: "Vice President",
    company: "Fitness SF",
    avatar: "/headshots/Don-Dickerson-Fitness-SF.png",
    logo: "/logos/fitnessSF.svg",
    videoSrc: "/testimonialvideo/Fitness SF _ Dharmesh  Industry Understanding.mp4"
  },
  {
    quote: "The technology integration has streamlined our operations, giving us a unified view of our data and enabling faster, more informed decisions.",
    author: "Rob Koehler",
    title: "Director of Technology Development",
    company: "Wisconsin Athletic Club",
    avatar: "/headshots/Rob-Koehler-WAC.jpeg",
    logo: "/logos/wac-logo.svg",
    videoSrc: null
  },
  {
    quote: "DXFactor was critical in delivering a reliable and scalable streaming platform for CRUNCH+ on time and within budget, transforming our digital content delivery.",
    author: "Mike Neff",
    title: "Executive Vice President",
    company: "Crunch",
    avatar: "/headshots/Mike-Neff-Crunch.jpeg",
    logo: "/logos/crunch.svg",
    videoSrc: "/testimonialvideo/crunch.mp4"
  },
];

const VideoModal = ({ src, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={onClose}>
    <div className="relative bg-black w-full max-w-4xl rounded-lg overflow-hidden mx-4" onClick={(e) => e.stopPropagation()}>
      <button onClick={onClose} className="absolute top-4 right-4 text-white z-10" title="Close video">
        <X size={24} />
      </button>
      <video src={src} className="w-full h-full" controls autoPlay />
    </div>
  </div>
);

const FeaturedSuccessStories = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Industry leaders share their experiences working with DXFactor
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-100 hover:shadow-lg transition-shadow h-full relative cursor-pointer"
              onClick={() => testimonial.videoSrc && setSelectedVideo(testimonial.videoSrc)}
            >
              <div className="flex justify-center mb-4">
                <img 
                  src={testimonial.logo} 
                  alt={`${testimonial.company} logo`}
                  className="h-8 w-auto opacity-70"
                />
              </div>
              <div className="flex items-start mb-4">
                <Quote className="w-10 h-10 text-green-200 mr-2 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed italic text-base">
                  {testimonial.quote}
                </p>
              </div>
              <div className="mt-6">
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-white shadow-sm"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                    <div className="text-sm font-medium text-green-600">{testimonial.company}</div>
                  </div>
                </div>
              </div>
               {testimonial.videoSrc && (
                <div className="text-center mt-4">
                  <div className="inline-flex items-center text-xs text-gray-500 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full border border-gray-200">
                    <Play className="w-3 h-3 mr-1" />
                    Click to watch video
                  </div>
                </div>
               )}
            </div>
          ))}
        </div>
      </div>
      {selectedVideo && <VideoModal src={selectedVideo} onClose={() => setSelectedVideo(null)} />}
    </section>
  );
};

export default FeaturedSuccessStories;  