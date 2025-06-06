import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  // Preventive Care
  {
    title: "Dental Checkup in Lahore",
    description:
      "Comprehensive dental exams with advanced diagnostics—including oral cancer screening and digital X-rays—to ensure optimal oral health in Lahore.",
    image: "/assets/images/dc.png",
    link: "/",
  },
  {
    title: "Scaling & Polishing in Lahore",
    description:
      "State-of-the-art ultrasonic cleaning to remove tartar and plaque buildup, preventing gum disease and promoting long-term dental health.",
    image: "/assets/images/Scp.png",
    link: "/",
  },
  {
    title: "Fluoride Treatment in Lahore",
    description:
      "Professional fluoride application to strengthen your enamel and safeguard against cavities—for both adults and children.",
    image: "/assets/images/ft.png",
    link: "/",
  },
  // Cosmetic Dentistry
  {
    title: "Teeth Whitening in Lahore",
    description:
      "Chairside LED-accelerated whitening for a smile up to 8 shades brighter in under an hour—using enamel-safe solutions.",
    image: "/assets/images/tw.png",
    link: "/",
  },
  {
    title: "Smile Makeover in Lahore",
    description:
      "Personalized cosmetic plans combining veneers, crowns, and whitening to achieve a complete smile transformation.",
    image: "/assets/images/sm.png",
    link: "/",
  },
  {
    title: "Veneers in Lahore",
    description:
      "Custom-crafted porcelain veneers to correct chips, gaps, and discoloration—delivering a natural, long-lasting smile.",
    image: "/assets/images/v.png",
    link: "/",
  },
  // Restorative Dentistry
  {
    title: "Dental Fillings in Lahore",
    description:
      "Tooth-colored composite fillings that blend seamlessly with your natural enamel and prevent future decay.",
    image: "/assets/images/fil.png",
    link: "/",
  },
  {
    title: "Crowns & Bridges in Lahore",
    description:
      "CEREC same-day ceramic crowns and fixed bridges restore both functionality and aesthetics of damaged teeth.",
    image: "/assets/images/dcb.png",
    link: "/",
  },
  {
    title: "Dental Implants in Lahore",
    description:
      "Permanent titanium implant solutions paired with natural-looking crowns to restore full chewing function.",
    image: "/assets/images/dental-implants.png",
    link: "/",
  },
  // Orthodontics
  {
    title: "Braces & Aligners in Lahore",
    description:
      "Straighten your teeth with fixed braces or clear aligners—tailored for comfort, efficiency, and minimal visibility.",
    image: "/assets/images/braces.png",
    link: "/",
  },
  // Root Canal & Surgery
  {
    title: "Root Canal Treatment in Lahore",
    description:
      "Pain-free root canal procedures using the latest techniques to save infected teeth and relieve discomfort.",
    image: "/assets/images/root-canal.png",
    link: "/",
  },
  {
    title: "Wisdom Tooth Extraction in Lahore",
    description:
      "Expert removal of impacted wisdom teeth under local anesthesia—ensuring minimal discomfort and faster recovery.",
    image: "/assets/images/wisdom.png",
    link: "/",
  },
  // Pediatric Dentistry
  {
    title: "Pediatric Dentistry in Lahore",
    description:
      "Gentle and friendly dental care for children, including preventive exams, fluoride treatments, and habit counseling.",
    image: "/assets/images/pediatric.png",
    link: "/",
  },
  // Gum & Periodontal Care
  {
    title: "Gum Disease Treatment in Lahore",
    description:
      "Specialized therapy for gingivitis and advanced periodontal disease—employing deep cleaning, root planing, and maintenance.",
    image: "/assets/images/gum.png",
    link: "/",
  },
  // Emergency Dental Care
  {
    title: "Emergency Dentist in Lahore",
    description:
      "24/7 urgent dental care for trauma, severe toothaches, and broken restorations—available when you need immediate relief.",
    image: "/assets/images/emergency.png",
    link: "/",
  },
  // Specialty Surgery
  {
    title: "Maxillofacial Surgery in Lahore",
    description:
      "Advanced facial and jaw surgeries—ranging from corrective jaw realignment to facial trauma management.",
    image: "/assets/images/max.png",
    link: "/",
  },
  {
    title: "TMJ & Jaw Pain Treatment in Lahore",
    description:
      "Comprehensive TMJ therapy—including splints, physiotherapy referrals, and conservative pain management.",
    image: "/assets/images/jaw.png",
    link: "/",
  },
  {
    title: "Zirconia Crowns in Lahore",
    description:
      "High-strength, natural-looking zirconia crowns—restoring both tooth function and aesthetic appeal.",
    image: "/assets/images/zirconia1.png",
    link: "/",
  },
];

const FeaturedServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Adjust itemsPerPage based on window width
  useEffect(() => {
    const updateItemsPerPage = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setItemsPerPage(1);
      } else if (w < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const maxIndex = Math.max(services.length - itemsPerPage, 0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Each card takes up (100 / itemsPerPage)% of the container
  const cardWidthPercent = 100 / itemsPerPage;

  return (
    <section
      id="services"
      className="relative bg-white py-16 overflow-hidden"
      style={{
        backgroundImage: "url('/assets/images/office.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">
          Top Dental Services in Lahore
        </h2>

        {/* Left Arrow */}
        <button
          aria-label="Previous services"
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-blue-800 rounded-full p-2 shadow-lg transition-colors"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Arrow */}
        <button
          aria-label="Next services"
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-blue-800 rounded-full p-2 shadow-lg transition-colors"
        >
          <ChevronRight size={24} />
        </button>

        {/* Carousel Wrapper */}
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: `-${currentIndex * cardWidthPercent}%`,
            }}
            transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
          >
          {services.map(({ title, description, image, link }, idx) => (
  <div
    key={idx}
    className="px-4"
    style={{ minWidth: `${cardWidthPercent}%` }}
  >
    <article className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
      {/* Image at top */}
      <a
        href={link}
        title={title}
        className="block w-full h-40 overflow-hidden"
        aria-label={`Learn more about ${title}`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain rounded-sm transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </a>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold text-blue-900 group-hover:text-blue-600 mb-2">
          <a href={link} title={title}>
            {title}
          </a>
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>
        <div className="mt-auto">
          <a
            href={link}
            className="
              inline-block
              w-full
              bg-gradient-to-r from-blue-600 to-blue-800
              hover:from-blue-700 hover:to-blue-900
              text-white
              text-center
              py-2
              rounded-full
              font-medium
              shadow-md
              transition-all duration-300 transform hover:-translate-y-1
            "
            aria-label={`Explore ${title}`}
          >
            Learn More
          </a>
        </div>
      </div>
    </article>
  </div>
))}

            {/* Duplicate first few for wrap-around */}
            {currentIndex + itemsPerPage > services.length &&
              services.slice(0, itemsPerPage).map(({ title, description, image, link }, idx) => (
                <div
                  key={`dup-${idx}`}
                  className="px-4"
                  style={{ minWidth: `${cardWidthPercent}%` }}
                >
                  <article className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
                    <a
                      href={link}
                      title={title}
                      className="flex flex-col items-center text-center p-6 flex-grow"
                      aria-label={`Learn more about ${title}`}
                    >
                      <div className="w-24 h-24 mb-4 rounded-full overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-105">
                        <img
                          src={image}
                          alt={title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-200 mb-2">
                        {title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
                        {description}
                      </p>
                    </a>
                    <div className="p-4">
                      <a
                        href={link}
                        className="
                          block
                          w-full
                          bg-gradient-to-r from-blue-500 to-blue-700
                          hover:from-blue-600 hover:to-blue-800
                          text-white
                          text-center
                          px-4 py-2
                          rounded-md
                          text-sm font-medium
                          shadow-sm
                          transition-all duration-300 transform hover:scale-105
                        "
                        aria-label={`Explore ${title}`}
                      >
                        Learn More
                      </a>
                    </div>
                  </article>
                </div>
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServicesCarousel;
