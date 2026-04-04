"use client";

import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/store/useCart";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useCart();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="fixed w-full z-50 glass-dark py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
      <Link href="/" className="text-2xl md:text-3xl font-serif font-bold text-primary-beige hover:text-white transition-colors">
        BELLA PIZZERIA
      </Link>

      <div className="hidden md:flex gap-8 items-center font-sans text-sm tracking-widest uppercase">
        <Link href="/menu" className="hover:text-primary-red transition-colors">Meny</Link>
        <Link href="/about" className="hover:text-primary-red transition-colors">Vår Story</Link>
        <Link href="/contact" className="hover:text-primary-red transition-colors">Kontakt</Link>
        <Link href="/order" className="relative p-2 hover:bg-white/10 rounded-full transition-all">
          <ShoppingCart className="w-6 h-6" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary-red text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
              {itemCount}
            </span>
          )}
        </Link>
      </div>

      <div className="md:hidden flex items-center gap-4">
        <Link href="/order" className="relative p-2">
          <ShoppingCart className="w-6 h-6" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary-red text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
              {itemCount}
            </span>
          )}
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-primary-black z-40 flex flex-col items-center justify-center gap-8 font-serif text-3xl md:hidden">
          <Link href="/menu" onClick={() => setIsOpen(false)}>Meny</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>Vår Story</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Kontakt</Link>
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6">
            <X className="w-8 h-8" />
          </button>
        </div>
      )}
    </nav>
  );
};
