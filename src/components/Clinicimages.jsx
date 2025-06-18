import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";

export default function ClinicImages() {
  return (
    <section className="bg-white py-12 px-4 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <ImageIcon className="w-6 h-6 text-teal-600" />
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            A Glimpse Inside Shayan Dental Surgery
          </h2>
        </div>

        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          Modern equipment, hygienic environment, and a caring team – Shayan Dental Surgery
          ensures a smooth and professional dental experience. Take a quick look inside!
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src="/shayan1.jpg" // replace with your image path
              alt="Shayan Dental Surgery Interior"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src="/shayan2.jpg" // replace with your image path
              alt="Shayan Dental Equipment"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
