import React from "react";

const works = [
  {
    id: 1,
    title: "Portfolio Website",
    year: "2025",
    image:
      "https://i.pinimg.com/736x/7f/fa/70/7ffa706f44b09ba67a96c63cc2c2ad4b.jpg",
  },
  {
    id: 2,
    title: "E-commerce App",
    year: "2025",
    image:
      "https://i.pinimg.com/736x/7f/fa/70/7ffa706f44b09ba67a96c63cc2c2ad4b.jpg",
  },
  {
    id: 3,
    title: "Dashboard UI",
    year: "2025",
    image:
      "https://i.pinimg.com/736x/7f/fa/70/7ffa706f44b09ba67a96c63cc2c2ad4b.jpg",
  },
  {
    id: 4,
    title: "Mobile App",
    year: "2025",
    image:
      "https://i.pinimg.com/736x/7f/fa/70/7ffa706f44b09ba67a96c63cc2c2ad4b.jpg",
  },
  {
    id: 4,
    title: "Mobile App",
    year: "2025",
    image:
      "https://i.pinimg.com/736x/7f/fa/70/7ffa706f44b09ba67a96c63cc2c2ad4b.jpg",
  },
  {
    id: 4,
    title: "Mobile App",
    year: "2025",
    image:
      "https://i.pinimg.com/736x/7f/fa/70/7ffa706f44b09ba67a96c63cc2c2ad4b.jpg",
  },
];

const Work = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-6 md:px-12 lg:px-20 font-[font-4] spacing">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 spacing ">Our Work</h2>
        <p className="mt-4 text-gray-600 text-base md:text-lg">
          A showcase of some of my recent projects ✨
        </p>
      </div>

      {/* Work Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {works.map((work) => (
          <div
            key={work.id}
            className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
          >
            {/* Image */}
            <div className="h-60 w-full overflow-hidden">
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Info */}
            <div className="p-5 flex items-center justify-between">
              <h3 className="text-lg md:text-xl font-semibold">{work.title}</h3>
              <span className="text-sm text-gray-500">{work.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
