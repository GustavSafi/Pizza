"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["ALLA", "PIZZA", "PASTA", "DESSERT"];

const products = [
  {
    id: "1",
    name: "Margherita di Lusso",
    description: "San Marzano tomater, krämig buffelmozzarella, extra jungfruolivolja och färsk basilika.",
    price: 145,
    category: "PIZZA",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "2",
    name: "Diavola Infernal",
    description: "Kryddig salame piccante, mozzarella, röd chili och vår egengjorda chilihonung.",
    price: 165,
    category: "PIZZA",
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "4",
    name: "Pappardelle al Ragu",
    description: "Långkokt högrevsragu med rödvin, San Marzano-tomater och nyriven parmesan.",
    price: 175,
    category: "PASTA",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "5",
    name: "Tiramisu della Casa",
    description: "Klassisk italiensk dessert med savoiardikex, espresso och mascarponekräm.",
    price: 95,
    category: "DESSERT",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "6",
    name: "Spaghetti Vongole",
    description: "Färsk spaghetti med hjärtmusslor, vitlök, chili och persilja.",
    price: 185,
    category: "PASTA",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("ALLA");

  const filteredProducts = activeCategory === "ALLA" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-primary-black pt-32 pb-24 px-6 md:px-12">
      <Navbar />
      
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif text-primary-beige mb-8 uppercase tracking-widest">Meny</h1>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-sans tracking-[0.2em] uppercase text-xs font-bold px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-primary-red text-white" 
                    : "glass text-primary-beige/50 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}
