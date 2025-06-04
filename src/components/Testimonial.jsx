import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Ayesha R.",
    text: "Dr. Ali gave me my confidence back! Best veneers in Lahore at Shayan Dental Surgery!",
    image: "/assets/images/T1.jpg",
  },
  {
    name: "Hamza T.",
    text: "Finally found a pain-free dentist in Lahore. My root canal was seamless and comfortable.",
    image: "/assets/images/T2.jpg",
  },
  {
    name: "Sara M.",
    text: "The smile makeover at Shayan Dental Surgery was life-changing. Highly recommend for cosmetic dentistry in Lahore!",
    image: "/assets/images/T3.jpg",
  },
  {
    name: "Muhammad Ibrahim",
    text: "Dr. Ali is very competent and humble. My entire treatment was professional and painless.",
    image: "/assets/images/ibrahim.png",
  },
  {
    name: "Dr. Urooj Muddasar",
    text: "I visited for a broken tooth and received exceptional care. The procedure was precise and comfortable.",
    image: "/assets/images/urooj.png",
  },
  {
    name: "Faisal Ramzii",
    text: "Coming from KSA, I chose Shayan Dental Surgery after comparing quotes. Best decision—outstanding service!",
    image: "/assets/images/faisal.png",
  },
  {
    name: "Amir James",
    text: "Doctor Mohsin Rehmat is very nice. He provided exceptional care and service throughout my treatment.",
    image: "/assets/images/amir1.png",
  },
  {
    name: "Shahid Rasool",
    text: "Extraordinary satisfaction! Very friendly and experienced doctors. Highly recommended.",
    image: "/assets/images/shahid.png",
  },
  {
    name: "Nauman Sabir",
    text: "The entire process was explained clearly. Very friendly staff and a great experience!",
    image: "/assets/images/nauman.png",
  },
  {
    name: "Areej Kashif",
    text: "Excellent family experience. The team at Shayan Dental Surgery is efficient and caring.",
    image: "/assets/images/areej.png",
  },
  {
    name: "Kashif Ali",
    text: "Affordable, excellent, and quick service. Shayan Dental Surgery is the best in Lahore!",
    image: "/assets/images/kashif.png",
  },
  {
    name: "Kiran Kashif",
    text: "Very professional and thorough. I’m extremely satisfied with my treatment.",
    image: "/assets/images/kiran.png",
  },
];

const videoTestimonials = [
  {
    title: "Smile Journey: Veneers Transformation",
    src: "/R2.mp4",
    poster: "/R2.png",
    transcript:
      "“I never imagined I could have such perfect teeth. Shayan Dental Surgery’s veneer process was smooth from day one. The final result? I can’t stop smiling!”",
  },
  {
    title: "Pain-Free Root Canal Experience",
    src: "/R1.mp4",
    poster: "/R1.png",
    transcript:
      "“Root canals used to scare me, but Dr. Ali’s gentle approach and modern tools at Shayan Dental Surgery changed everything. No pain, just relief.”",
  },
  {
    title: "Full Smile Makeover Story",
    src: "/R3.mp4",
    poster: "/R3.png",
    transcript:
      "“From broken teeth to a radiant smile, the team at Shayan Dental Surgery in Lahore delivered beyond my expectations. Thank you!”",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-50 py-24" id="testimonials">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-12 tracking-tight animate-fade-in-up">
          What Our Patients Say <br /> About Shayan Dental Surgery, Lahore
        </h2>

        {/* Rotating Text Testimonials */}
        <div className="relative h-96">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`
                absolute top-0 left-0 w-full transition-all duration-700 ease-in-out transform
                ${
                  i === index
                    ? "opacity-100 scale-100 z-20 animate-fade-in-up"
                    : "opacity-0 scale-95 z-10 pointer-events-none"
                }
              `}
            >
              <div className="bg-white px-8 py-10 rounded-3xl shadow-2xl border-2 border-teal-100 max-w-md mx-auto">
                <img
                  src={t.image}
                  alt={`Photo of ${t.name}`}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
                />
                <p className="text-gray-700 italic text-lg leading-relaxed mb-4">
                  “{t.text}”
                </p>
                <span className="text-teal-700 font-semibold text-base block">
                  – {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`
                w-4 h-4 rounded-full transition-all duration-300
                ${i === index ? "bg-teal-600 scale-125" : "bg-gray-300"}
              `}
              aria-label={`Show testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Multiple Video Testimonials */}
        <div className="mt-20">
          <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 animate-fade-in-up delay-200">
            Watch Our Patients’ Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((v, idx) => (
              <div
                key={idx}
                className="rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-200 animate-fade-in-up"
                style={{ animationDelay: `${0.2 * (idx + 1)}s` }}
              >
                <video
                  className="w-full h-auto"
                  controls
                  poster={v.poster}
                >
                  <source src={v.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="bg-white p-6 text-left">
                  <h4 className="text-xl font-semibold text-blue-800 mb-3">
                    {v.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {v.transcript}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/923001404630"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 animate-fade-in-up delay-600 transition-all duration-300"
          >
            Book Your Consultation
          </a>
        </div>

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              name: "Shayan Dental Surgery",
              medicalSpecialty: [
                "Dentistry",
                "CosmeticDentistry",
                "EmergencyDentalCare",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Shop 1, 592-Airline Society, Khayaban-e-Jinnah Road",
                addressLocality: "Lahore",
                addressRegion: "Punjab",
                postalCode: "54000",
                addressCountry: "PK",
              },
              telephone: "+923001404630",
              url: "https://g.co/kgs/rwGJ9VM",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: testimonials.length.toString(),
              },
              review: testimonials.map((t, i) => ({
                "@type": "Review",
                author: { "@type": "Person", name: t.name },
                reviewBody: t.text,
                reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                datePublished: `2025-01-${String(i + 10).padStart(2, "0")}`,
              })),
              video: videoTestimonials.map((v) => ({
                "@type": "VideoObject",
                name: v.title,
                thumbnailUrl: v.poster,
                uploadDate: "2025-02-01",
                contentUrl: `https://your-domain.com${v.src}`,
                description: v.transcript.slice(0, 100) + "...",
              })),
            }),
          }}
        />
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fade-in-up.delay-200 {
          animation-delay: 0.2s;
        }
        .animate-fade-in-up.delay-300 {
          animation-delay: 0.3s;
        }
        .animate-fade-in-up.delay-400 {
          animation-delay: 0.4s;
        }
        .animate-fade-in-up.delay-500 {
          animation-delay: 0.5s;
        }
        .animate-fade-in-up.delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
