import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const works = [
  {
    id: 1,
    title: "Portfolio Website",
    desc: "A modern portfolio with animations.",
    img: "./Work-1.avif",
  },
  {
    id: 2,
    title: "E-commerce Store",
    desc: "Responsive online store design.",
    img: "./Work-1.avif",
  },
  {
    id: 3,
    title: "Agency Landing Page",
    desc: "Work Description",
    img: "./Work-1.avif",
  },
  {
    id: 3,
    title: "Agency Landing Page",
    desc: "Work Description",
    img: "./Work-1.avif",
  },
  {
    id: 3,
    title: "Agency Landing Page",
    desc: "Work Description",
    img: "./Work-1.avif",
  },
  {
    id: 3,
    title: "Agency Landing Page",
    desc: "Work Description",
    img: "./Work-1.avif",
  },
];

const Work = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 80, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          delay: index * 0.2,
        }
      );
    });
  }, []);

  return (
    <section className="w-full py-16 bg-gray-100 font-[font-4] spacing" id="work">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font- text-center mb-12">
          My <span className="">Work</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div
              key={work.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <img
                src={work.img}
                alt={work.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <h3 className="text-[15px] font-semibold">{work.title}</h3>
                <p className="text-gray-600 text-sm ">{work.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
