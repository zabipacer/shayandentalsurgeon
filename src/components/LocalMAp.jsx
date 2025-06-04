import React from 'react';

const LocalSEOSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-12" id="location">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl tracking-wide text-[#A6BF39] mb-8">
          OUR LOCATIONS
        </h2>

        {/* Map + Info */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          {/* Google Map */}
          <div className="w-full lg:w-4/5 h-96 rounded-xl overflow-hidden shadow-lg">
        <iframe
  title="Shayan Dental Surgery Lahore Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27231.23441669034!2d74.2477051196059!3d31.44379139344608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901870b0d4bcf%3A0xf034efa74824ac7a!2sShayan%20Dental%20Surgery!5e0!3m2!1sen!2s!4v1717508668576!5m2!1sen!2s"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>


          </div>
        </div>

        {/* Clinic Info */}
        <div className="mt-10 max-w-3xl mx-auto text-left">
          <p className="text-lg text-gray-700 mb-4">
            <strong>Address:</strong>Shop no. 1, 592 Khayaban-e-Jinnah, Airline Society, Lahore, 54000
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Phone:</strong>{' '}
            <a href="tel:+923001404630" className="text-blue-600 hover:underline">
              +92 300-1404630
            </a>
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Service Areas:</strong> Lahore and surrounding areas.
          </p>
          <a
            href="https://g.co/kgs/9g2VKYJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 md:ml-50 px-6 py-3 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700 transition duration-300"
          >
            Need Help Finding our Clinic?
          </a>
        </div>

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            "name": "Shayan Dental Surgery",
            "image": "https://example.com/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "New Defense Colony, Jampur Road",
              "addressLocality": "Dera Ghazi Khan",
              "addressRegion": "Punjab",
              "postalCode": "32200",
              "addressCountry": "PK"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 30.032486,
              "longitude": 70.640244
            },
            "url": "https://g.co/kgs/9g2VKYJ",
            "telephone": "+92-300-1404630",
            "openingHours": "Mo-Su 09:00-23:00"
          })}
        </script>
      </div>
    </section>
  );
};

export default LocalSEOSection;
