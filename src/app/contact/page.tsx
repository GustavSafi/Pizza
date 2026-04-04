import { Navbar } from "@/components/Navbar";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-primary-black pt-32 pb-24 px-6 md:px-12">
      <Navbar />
      
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-24 space-y-4">
          <span className="text-primary-red font-sans tracking-[0.3em] uppercase text-sm block">Hör av dig</span>
          <h1 className="text-5xl md:text-8xl font-serif text-primary-beige uppercase tracking-tighter italic">Benvenuto</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Info */}
          <div className="space-y-16">
            <div className="space-y-8">
              <h2 className="text-3xl font-serif text-primary-beige">Kontaktinformation</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-primary-red transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-primary-beige/30 uppercase tracking-widest mb-1">Telefon</p>
                    <p className="text-lg font-sans">+46 (0) 8 123 45 67</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-primary-red transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-primary-beige/30 uppercase tracking-widest mb-1">E-post</p>
                    <p className="text-lg font-sans">ciao@bellapizzeria.se</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-primary-red transition-all">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-primary-beige/30 uppercase tracking-widest mb-1">Adress</p>
                    <p className="text-lg font-sans">Storgatan 12, 114 44 Stockholm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-serif text-primary-beige">Följ oss</h2>
              <div className="flex gap-4">
                <a href="#" className="w-14 h-14 glass rounded-full flex items-center justify-center hover:bg-primary-red transition-all">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="w-14 h-14 glass rounded-full flex items-center justify-center hover:bg-primary-red transition-all">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="p-8 glass-dark rounded-[2rem] border-l-4 border-primary-red">
              <h3 className="text-xl font-serif mb-4">Öppettider</h3>
              <div className="grid grid-cols-2 gap-4 text-sm font-sans">
                <span className="text-primary-beige/50">Mån - Tor:</span>
                <span>11:00 - 22:00</span>
                <span className="text-primary-beige/50">Fre - Lör:</span>
                <span>11:00 - 23:00</span>
                <span className="text-primary-beige/50">Söndag:</span>
                <span>12:00 - 21:00</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-8 md:p-12 rounded-[3rem] space-y-8">
            <h2 className="text-3xl font-serif text-primary-beige">Skicka ett meddelande</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Namn" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary-red transition-all"
                />
                <input 
                  type="email" 
                  placeholder="E-post" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary-red transition-all"
                />
              </div>
              <input 
                type="text" 
                placeholder="Ärende" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary-red transition-all"
              />
              <textarea 
                placeholder="Ditt meddelande..." 
                rows={6}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary-red transition-all resize-none"
              ></textarea>
              <button className="w-full bg-primary-green hover:bg-primary-red text-white py-5 rounded-full font-sans font-bold tracking-[0.2em] uppercase transition-all">
                Skicka Meddelande
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
