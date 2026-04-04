"use client";

import { Navbar } from "@/components/Navbar";
import { LayoutDashboard, ShoppingBag, Utensils, Users, TrendingUp } from "lucide-react";
import { useState } from "react";

const stats = [
  { label: "Dagens Beställningar", value: "42", icon: ShoppingBag, color: "text-blue-500" },
  { label: "Intäkter Idag", value: "8,450 kr", icon: TrendingUp, color: "text-green-500" },
  { label: "Aktiva Bord", value: "12", icon: Utensils, color: "text-primary-red" },
  { label: "Nya Kunder", value: "8", icon: Users, color: "text-purple-500" },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("DASHBOARD");

  return (
    <main className="min-h-screen bg-primary-black pt-32 pb-24 px-6 md:px-12">
      <Navbar />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full md:w-64 space-y-4">
          <button 
            onClick={() => setActiveTab("DASHBOARD")}
            className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${activeTab === "DASHBOARD" ? "bg-primary-red text-white" : "glass hover:bg-white/10"}`}
          >
            <LayoutDashboard className="w-5 h-5" />
            <span className="font-sans font-bold text-sm tracking-widest uppercase">Dashboard</span>
          </button>
          <button 
            onClick={() => setActiveTab("ORDERS")}
            className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${activeTab === "ORDERS" ? "bg-primary-red text-white" : "glass hover:bg-white/10"}`}
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="font-sans font-bold text-sm tracking-widest uppercase">Beställningar</span>
          </button>
          <button 
            onClick={() => setActiveTab("MENU")}
            className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${activeTab === "MENU" ? "bg-primary-red text-white" : "glass hover:bg-white/10"}`}
          >
            <Utensils className="w-5 h-5" />
            <span className="font-sans font-bold text-sm tracking-widest uppercase">Hantera Meny</span>
          </button>
        </aside>

        {/* Content Area */}
        <div className="flex-1 space-y-12">
          <header className="flex justify-between items-end">
            <div>
              <h1 className="text-4xl font-serif text-primary-beige mb-2 uppercase tracking-widest">Admin Panel</h1>
              <p className="text-primary-beige/40 font-sans text-sm">Välkommen tillbaka, Admin.</p>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-dark p-8 rounded-[2rem] border border-white/5">
                <stat.icon className={`w-8 h-8 ${stat.color} mb-6`} />
                <p className="text-primary-beige/40 text-xs uppercase tracking-widest mb-2">{stat.label}</p>
                <p className="text-3xl font-serif text-primary-beige">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="glass-dark p-8 rounded-[3rem] border border-white/5">
            <h2 className="text-2xl font-serif text-primary-beige mb-8">Senaste Beställningar</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-sans text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-primary-beige/30 uppercase tracking-widest text-[10px]">
                    <th className="pb-4 px-4">ID</th>
                    <th className="pb-4 px-4">Kund</th>
                    <th className="pb-4 px-4">Status</th>
                    <th className="pb-4 px-4 text-right">Summa</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-6 px-4 font-mono text-primary-beige/50">#8291</td>
                    <td className="py-6 px-4">Erik Johansson</td>
                    <td className="py-6 px-4">
                      <span className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-[10px] font-bold uppercase">Levererad</span>
                    </td>
                    <td className="py-6 px-4 text-right font-bold text-primary-beige">345 kr</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-6 px-4 font-mono text-primary-beige/50">#8292</td>
                    <td className="py-6 px-4">Anna Berg</td>
                    <td className="py-6 px-4">
                      <span className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-[10px] font-bold uppercase">Tillagas</span>
                    </td>
                    <td className="py-6 px-4 text-right font-bold text-primary-beige">210 kr</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-6 px-4 font-mono text-primary-beige/50">#8293</td>
                    <td className="py-6 px-4">Marcus Ek</td>
                    <td className="py-6 px-4">
                      <span className="bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full text-[10px] font-bold uppercase">Väntar</span>
                    </td>
                    <td className="py-6 px-4 text-right font-bold text-primary-beige:">165 kr</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
