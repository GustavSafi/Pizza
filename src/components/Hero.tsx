"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop')`,
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-primary-red font-sans tracking-[0.3em] uppercase text-sm mb-4 block"
        >
          Hantverksmässig Tradition
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-serif text-primary-beige mb-8"
        >
          Äkta Italiensk <br /> <span className="italic">Pizza-upplevelse</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <Link 
            href="/menu" 
            className="bg-primary-red hover:bg-[#8B2323] text-white px-10 py-4 rounded-full font-sans uppercase tracking-widest transition-all duration-300 transform hover:scale-105"
          >
            Se Menyn
          </Link>
          <Link 
            href="/order" 
            className="glass hover:bg-white/20 text-white px-10 py-4 rounded-full font-sans uppercase tracking-widest transition-all duration-300"
          >
            Beställ Nu
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary-beige/50"
      >
        <div className="w-[1px] h-16 bg-primary-beige/30 mx-auto" />
      </motion.div>
    </section>
  );
};
