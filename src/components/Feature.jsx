import React from "react";

const services = [
  // Preventive Care
  {
    title: "Dental Checkup in Lahore",
    description:
      "Comprehensive dental exams with advanced diagnostics—including oral cancer screening and digital X-rays—to ensure optimal oral health in Lahore.",
    image: "/assets/images/dc.png",
    link: "/dental-checkup-lahore",
  },
  {
    title: "Scaling & Polishing in Lahore",
    description:
      "State-of-the-art ultrasonic cleaning to remove tartar and plaque buildup, preventing gum disease and promoting long-term dental health.",
    image: "/assets/images/Scp.png",
    link: "/scaling-and-polishing-in-lahore",
  },
  {
    title: "Fluoride Treatment in Lahore",
    description:
      "Professional fluoride application to strengthen your enamel and safeguard against cavities—for both adults and children.",
    image: "/assets/images/ft.png",
    link: "/fluoride-treatment-in-lahore",
  },

  // Cosmetic Dentistry
  {
    title: "Teeth Whitening in Lahore",
    description:
      "Chairside LED-accelerated whitening for a smile up to 8 shades brighter in under an hour—using enamel-safe solutions.",
    image: "/assets/images/tw.png",
    link: "/teeth-whitening-in-lahore",
  },
  {
    title: "Smile Makeover in Lahore",
    description:
      "Personalized cosmetic plans combining veneers, crowns, and whitening to achieve a complete smile transformation.",
    image: "/assets/images/sm.png",
    link: "/smile-makeover-lahore",
  },
  {
    title: "Veneers in Lahore",
    description:
      "Custom-crafted porcelain veneers to correct chips, gaps, and discoloration—delivering a natural, long-lasting smile.",
    image: "/assets/images/v.png",
    link: "/veneers-lahore",
  },

  // Restorative Dentistry
  {
    title: "Dental Fillings in Lahore",
    description:
      "Tooth-colored composite fillings that blend seamlessly with your natural enamel and prevent future decay.",
    image: "/assets/images/fil.png",
    link: "/dental-fillings-lahore",
  },
  {
    title: "Crowns & Bridges in Lahore",
    description:
      "CEREC same-day ceramic crowns and fixed bridges restore both functionality and aesthetics of damaged teeth.",
    image: "/assets/images/dcb.png",
    link: "/crowns-and-bridges-lahore",
  },
  {
    title: "Dental Implants in Lahore",
    description:
      "Permanent titanium implant solutions paired with natural-looking crowns to restore full chewing function.",
    image: "/assets/images/dental-implants.png",
    link: "/dental-implants-lahore",
  },

  // Orthodontics
  {
    title: "Braces & Aligners in Lahore",
    description:
      "Straighten your teeth with fixed braces or clear aligners—tailored for comfort, efficiency, and minimal visibility.",
    image: "/assets/images/braces.png",
    link: "/braces-and-aligners-lahore",
  },

  // Root Canal & Surgery
  {
    title: "Root Canal Treatment in Lahore",
    description:
      "Pain-free root canal procedures using the latest techniques to save infected teeth and relieve discomfort.",
    image: "/assets/images/root-canal.png",
    link: "/root-canal-lahore",
  },
  {
    title: "Wisdom Tooth Extraction in Lahore",
    description:
      "Expert removal of impacted wisdom teeth under local anesthesia—ensuring minimal discomfort and faster recovery.",
    image: "/assets/images/wisdom.png",
    link: "/wisdom-tooth-extraction-lahore",
  },

  // Pediatric Dentistry
  {
    title: "Pediatric Dentistry in Lahore",
    description:
      "Gentle and friendly dental care for children, including preventive exams, fluoride treatments, and habit counseling.",
    image: "/assets/images/pediatric.png",
    link: "/pediatric-dentistry-lahore",
  },

  // Gum & Periodontal Care
  {
    title: "Gum Disease Treatment in Lahore",
    description:
      "Specialized therapy for gingivitis and advanced periodontal disease—employing deep cleaning, root planing, and maintenance.",
    image: "/assets/images/gum.png",
    link: "/gum-disease-treatment-lahore",
  },

  // Emergency Dental Care
  {
    title: "Emergency Dentist in Lahore",
    description:
      "24/7 urgent dental care for trauma, severe toothaches, and broken restorations—available when you need immediate relief.",
    image: "/assets/images/emergency.png",
    link: "/emergency-dentistry-lahore",
  },

  // Specialty Surgery
  {
    title: "Maxillofacial Surgery in Lahore",
    description:
      "Advanced facial and jaw surgeries—ranging from corrective jaw realignment to facial trauma management.",
    image: "/assets/images/max.png",
    link: "/maxillofacial-surgery-lahore",
  },
  {
    title: "TMJ & Jaw Pain Treatment in Lahore",
    description:
      "Comprehensive TMJ therapy—including splints, physiotherapy referrals, and conservative pain management.",
    image: "/assets/images/jaw.png",
    link: "/tmj-treatment-lahore",
  },
  {
    title: "Zirconia Crowns in Lahore",
    description:
      "High-strength, natural-looking zirconia crowns—restoring both tooth function and aesthetic appeal.",
    image: "/assets/images/zirconia1.png",
    link: "/zirconia-crowns-lahore",
  },
];

const FeaturedServices = () => {
  return (
    <section
      id="services"
      className="bg-white py-16"
      aria-labelledby="services-heading"
      style={{
        backgroundImage: "url('/assets/images/office.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6">
        <h2
          id="services-heading"
          className="text-3xl font-bold text-center mb-12 text-blue-800"
        >
          Top Dental Services in Lahore
        </h2>
        <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
          At Shayan Dental Surgery in Lahore, we offer a comprehensive range of preventive,
          cosmetic, restorative, and emergency dental services performed by experienced
          professionals using state-of-the-art technology.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ title, description, image, link }) => (
            <article
              key={title}
              className="group bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <a
                href={link}
                title={title}
                className="flex flex-col items-center text-center p-6 h-full"
                aria-label={`Learn more about ${title}`}
              >
                <div className="w-32 h-32 mb-4 rounded-full overflow-hidden shadow-lg group-hover:shadow-blue-300 transition-shadow duration-300">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-200 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {description}
                </p>
                <button
                  className="
                    mt-auto
                    bg-gradient-to-r from-blue-500 to-blue-700
                    hover:from-blue-600 hover:to-blue-800
                    text-white
                    px-4 py-2
                    rounded-md
                    text-sm font-medium
                    shadow-sm
                    transition-all duration-300
                    transform hover:scale-105 hover:animate-pulse
                  "
                  aria-label={`Explore ${title}`}
                >
                  Learn More
                </button>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
