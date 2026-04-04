"use client";

import { useCart } from "@/store/useCart";
import { Plus } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const ProductCard = ({ id, name, description, price, image }: ProductCardProps) => {
  const { addItem } = useCart();

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="glass-dark rounded-[2rem] overflow-hidden group border border-white/5 transition-all hover:border-white/20"
    >
      <div className="relative h-64 overflow-hidden">
        <Image 
          src={image} 
          alt={name} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 glass px-4 py-2 rounded-full font-serif font-bold text-lg text-primary-beige">
          {price} kr
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-serif text-primary-beige mb-3 tracking-wide">{name}</h3>
        <p className="text-primary-beige/60 font-sans text-sm mb-8 line-clamp-2 leading-relaxed">
          {description}
        </p>
        
        <button 
          onClick={() => addItem({ id, name, price })}
          className="w-full flex items-center justify-center gap-2 bg-primary-green hover:bg-primary-red text-white py-4 rounded-full transition-all duration-300 font-sans tracking-widest uppercase text-xs font-bold"
        >
          <Plus className="w-4 h-4" />
          Lägg i varukorg
        </button>
      </div>
    </motion.div>
  );
};
