'use client';
import { motion } from 'framer-motion';
import SocialIcons from './SocialIcons';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-10 md:mb-16"
        >
          Contact
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-6 md:mb-8 text-center text-gray-400 italic">
            I'm not great at the advice.<br />
            Can I interest you in a sarcastic comment?
          </p>
          <div className="mb-8">
            <SocialIcons />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <a 
              href="mailto:devarshradadia2580@gmail.com"
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-base md:text-lg"
            >
              Say Hello
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
