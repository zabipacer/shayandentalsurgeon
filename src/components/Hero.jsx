import { useState, useEffect, useRef } from "react";

const slides = [
  {
    title: "Painless Wisdom Tooth Extraction in Lahore",
    text: "Get your wisdom tooth removed safely with zero pain and fast recovery. Trusted by 1,000+ patients.",
    video: "/hero.mp4",
    mobileVideo: "/hero.mp4",
    poster: "/hero-poster.jpg",
    mobilePoster: "/mobile-dental1-poster.jpg",
  },
  {
    title: "Braces & Aligners for Perfect Smile",
    text: "Affordable orthodontic treatment in Lahore with clear aligners and metal braces. Monthly plans available.",
    video: "/R3.mp4",
    mobileVideo: "/R3.mp4",
    poster: "/dental2-poster.jpg",
    mobilePoster: "/mobile-dental2-poster.jpg",
  },
  {
    title: "Root Canal Treatment with Zero Pain",
    text: "Save your natural teeth with our advanced root canal procedures. Quick, painless, and highly rated.",
    video: "/R2.mp4",
    mobileVideo: "/R2.mp4",
    poster: "/R2.jpg",
    mobilePoster: "/mobile-dental3-poster.jpg",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Shayan Dental Surgery",
  image: "/assets/images/shayan-logo.png",
  url: "https://g.co/kgs/rwGJ9VM",
  telephone: "+923001404630",
  priceRange: "PKR 500 - 5000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop 1, 592-Airline Society, Khayaban-e-Jinnah Road",
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    postalCode: "54000",
    addressCountry: "PK",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "21:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/shayandentalsurgery",
    "https://www.instagram.com/shayandentalsurgery/",
  ],
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://wa.me/923001404630",
      inLanguage: "en",
      actionPlatform: [
        "https://schema.org/DesktopWebPlatform",
        "https://schema.org/MobileWebPlatform",
      ],
    },
    result: {
      "@type": "Reservation",
      name: "Dental Appointment",
    },
  },
};

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState({});
  const [videoError, setVideoError] = useState({});
  const videoRefs = useRef({});
  const [preloadedVideos, setPreloadedVideos] = useState(new Set());

  // Detect mobile width
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Preload current and next videos
  useEffect(() => {
    const preloadVideo = (index) => {
      if (preloadedVideos.has(index)) return;
      const slide = slides[index];
      const src = isMobile ? slide.mobileVideo : slide.video;
      const video = document.createElement("video");
      video.src = src;
      video.preload = "metadata";
      video.muted = true;
      video.addEventListener("loadedmetadata", () => {
        setPreloadedVideos((prev) => new Set(prev).add(index));
      });
      video.load();
    };

    preloadVideo(current);
    const timer = setTimeout(() => {
      const nextIndex = (current + 1) % slides.length;
      preloadVideo(nextIndex);
    }, 1000);

    return () => clearTimeout(timer);
  }, [current, isMobile, preloadedVideos]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleVideoLoad = (index) => {
    setVideoLoaded((prev) => ({ ...prev, [index]: true }));
  };

  const handleVideoError = (index) => {
    setVideoError((prev) => ({ ...prev, [index]: true }));
  };

  const currentSlide = slides[current];
  const videoSrc = isMobile ? currentSlide.mobileVideo : currentSlide.video;
  const posterSrc = isMobile ? currentSlide.mobilePoster : currentSlide.poster;

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Inject Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Video Background */}
      <div className="absolute inset-0">
        {!videoError[current] ? (
          <video
            ref={(el) => (videoRefs.current[current] = el)}
            src={videoSrc}
            poster={posterSrc}
            className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500 ${
              videoLoaded[current] ? "opacity-100" : "opacity-0"
            }`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onLoadedData={() => handleVideoLoad(current)}
            onError={() => handleVideoError(current)}
            style={{
              willChange: "transform",
              backfaceVisibility: "hidden",
            }}
          />
        ) : (
          <img
            src={posterSrc}
            alt={currentSlide.title}
            className="absolute inset-0 w-full h-full object-cover z-0"
            loading="eager"
          />
        )}

        {/* Loading spinner */}
        {!videoLoaded[current] && !videoError[current] && (
          <div className="absolute inset-0 bg-gray-800 flex items-center justify-center z-5">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              <p className="text-white/70 text-sm">Loading video...</p>
            </div>
          </div>
        )}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center max-w-4xl px-8 space-y-6">
          <h1
            key={videoSrc}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white animate-fade-in"
            style={{
              textShadow: `
                2px 2px 0px #555,
                -2px -2px 0px #555,
                2px -2px 0px #555,
                -2px 2px 0px #555,
                0px 2px 0px #555,
                2px 0px 0px #555,
                0px -2px 0px #555,
                -2px 0px 0px #555,
                4px 4px 8px rgba(0, 0, 0, 0.5)
              `,
            }}
          >
            {currentSlide.title}
          </h1>

          <p
            key={current + "_text"}
            className="text-lg md:text-xl lg:text-2xl text-white font-medium animate-fade-in-delay"
            style={{
              textShadow: `
                1px 1px 0px #555,
                -1px -1px 0px #555,
                1px -1px 0px #555,
                -1px 1px 0px #555,
                0px 1px 0px #555,
                1px 0px 0px #555,
                0px -1px 0px #555,
                -1px 0px 0px #555,
                3px 3px 6px rgba(0, 0, 0, 0.4)
              `,
            }}
          >
            {currentSlide.text}
          </p>

          <div className="flex justify-center pt-4 animate-fade-in-delay-2">
            <a
              href="https://wa.me/923001404630"
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-3 rounded-md text-lg md:text-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 will-change-transform"
              style={{
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.4)",
              }}
            >
              Book an Appointment
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 z-30">
        <button
          onClick={prevSlide}
          className="bg-white/90 hover:bg-white text-black p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 will-change-transform"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 z-30">
        <button
          onClick={nextSlide}
          className="bg-white/90 hover:bg-white text-black p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 will-change-transform"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              idx === current ? "bg-white shadow-lg scale-125" : "bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDelay {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fadeInDelay 0.8s ease-out 0.3s both;
        }

        .animate-fade-in-delay-2 {
          animation: fadeInDelay 0.8s ease-out 0.6s both;
        }

        .will-change-transform {
          will-change: transform;
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}
