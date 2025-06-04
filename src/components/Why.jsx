import React from "react";
import { FaTooth } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20" id="why-us">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 leading-tight animate-fade-in-up">
            Why Lahore Chooses <br />
            <span className="text-teal-600">Shayan Dental Surgery</span>
          </h2>
          <div className="space-y-6">
            <div className="flex items-start animate-fade-in-up delay-100">
              <FaTooth className="text-teal-500 text-3xl mr-4 flex-shrink-0 animate-bounce" />
              <p className="text-gray-700 text-lg leading-relaxed">
                <strong>Pain-Free Dentistry:</strong> We use state-of-the-art tools—like
                laser technology and gentle sedation—so every visit feels calm, quick,
                and comfortable, even for anxious patients.
              </p>
            </div>
            <div className="flex items-start animate-fade-in-up delay-200">
              <FaTooth className="text-teal-500 text-3xl mr-4 flex-shrink-0 animate-bounce" />
              <p className="text-gray-700 text-lg leading-relaxed">
                <strong>Same-Day Emergency Care:</strong> As a trusted
                <span className="text-blue-800 font-semibold"> 24/7 emergency dentist in Lahore</span>,
                we’re ready to handle toothaches, broken crowns, and other urgent
                needs—often within hours of your call.
              </p>
            </div>
            <div className="flex items-start animate-fade-in-up delay-300">
              <FaTooth className="text-teal-500 text-3xl mr-4 flex-shrink-0 animate-bounce" />
              <p className="text-gray-700 text-lg leading-relaxed">
                <strong>Premium, FDA-Approved Materials:</strong> Your safety and
                smile quality matter. We only use globally certified ceramics, implants,
                and fillings—guaranteeing durability and natural aesthetics.
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-full animate-fade-in-up delay-400">
          <img
            src="/shayaninterior.jpg"
            alt="Modern interior of Shayan Dental Surgery Lahore"
            className="rounded-3xl shadow-2xl w-full object-cover"
          />
        </div>
      </div>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalOrganization",
            name: "Shayan Dental Surgery",
            medicalSpecialty: ["Dentistry", "Emergency", "Cosmetic"],
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
            description:
              "Shayan Dental Surgery in Lahore offers pain-free dentistry, 24/7 emergency care, and FDA-approved materials—ensuring every patient leaves with a healthy, confident smile.",
          }),
        }}
      />
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
        .animate-fade-in-up.delay-100 {
          animation-delay: 0.1s;
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
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
