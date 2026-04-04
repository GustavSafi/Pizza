"use client";

import { useCart } from "@/store/useCart";
import { Navbar } from "@/components/Navbar";
import { Trash2, Plus, Minus, CreditCard, Truck } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function OrderPage() {
  const { items, updateQuantity, removeItem, clearCart } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);
  
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
    clearCart();
  };

  if (isOrdered) {
    return (
      <main className="min-h-screen bg-primary-black flex items-center justify-center p-6">
        <Navbar />
        <div className="glass-dark p-12 rounded-[3rem] text-center max-w-xl space-y-8">
          <div className="w-24 h-24 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-8">
            <Truck className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-primary-beige">Grazie Mille!</h1>
          <p className="text-primary-beige/60 text-lg">
            Din beställning är på väg. Vi har skickat en bekräftelse till din e-post.
          </p>
          <Link href="/" className="inline-block bg-primary-red text-white px-10 py-4 rounded-full font-sans tracking-widest uppercase text-sm">
            Tillbaka till start
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-primary-black pt-32 pb-24 px-6 md:px-12">
      <Navbar />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        {/* Cart Summary */}
        <div className="flex-1 space-y-8">
          <h1 className="text-4xl md:text-5xl font-serif text-primary-beige mb-12">Din Varukorg</h1>
          
          {items.length === 0 ? (
            <div className="glass-dark p-12 rounded-[2rem] text-center">
              <p className="text-primary-beige/40 mb-8 font-sans">Varukorgen är tom.</p>
              <Link href="/menu" className="text-primary-red font-bold uppercase tracking-widest text-sm hover:underline">
                Se vår meny
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="glass-dark p-6 rounded-[2rem] flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-serif text-primary-beige mb-1">{item.name}</h3>
                    <p className="text-primary-red font-bold">{item.price} kr</p>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-4 bg-white/5 rounded-full px-4 py-2">
                      <button onClick={() => updateQuantity(item.id, -1)} className="hover:text-primary-red"><Minus className="w-4 h-4" /></button>
                      <span className="font-bold min-w-[20px] text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="hover:text-primary-red"><Plus className="w-4 h-4" /></button>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-white/20 hover:text-primary-red transition-colors">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
              
              <div className="pt-8 border-t border-white/5 flex justify-between items-end">
                <span className="text-primary-beige/40 font-sans uppercase tracking-[0.2em] text-sm">Totalt att betala</span>
                <span className="text-4xl font-serif text-primary-beige font-bold">{total} kr</span>
              </div>
            </div>
          )}
        </div>

        {/* Checkout Form */}
        <div className="w-full lg:w-[450px]">
          <form onSubmit={handleCheckout} className="glass p-8 md:p-12 rounded-[3rem] space-y-8">
            <h2 className="text-3xl font-serif text-primary-beige mb-8">Leveransuppgifter</h2>
            
            <div className="space-y-4">
              <input 
                required
                type="text" 
                placeholder="Fullständigt namn" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary-red transition-all"
              />
              <input 
                required
                type="email" 
                placeholder="E-postadress" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary-red transition-all"
              />
              <input 
                required
                type="tel" 
                placeholder="Telefonnummer" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary-red transition-all"
              />
              <textarea 
                required
                placeholder="Leveransadress" 
                rows={3}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary-red transition-all resize-none"
              ></textarea>
            </div>

            <div className="pt-4">
              <button 
                disabled={items.length === 0}
                className="w-full bg-primary-red hover:bg-[#8B2323] disabled:bg-white/5 disabled:text-white/20 text-white py-5 rounded-full font-sans font-bold tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-3"
              >
                <CreditCard className="w-5 h-5" />
                Slutför Köp
              </button>
              <p className="text-[10px] text-center text-primary-beige/30 mt-6 font-sans uppercase tracking-widest">
                Säker betalning via Stripe & Klarna
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
