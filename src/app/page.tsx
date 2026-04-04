import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";

const featuredPizzas = [
  {
    id: "1",
    name: "Margherita di Lusso",
    description: "San Marzano tomater, krämig buffelmozzarella, extra jungfruolivolja och färsk basilika.",
    price: 145,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "2",
    name: "Diavola Infernal",
    description: "Kryddig salame piccante, mozzarella, röd chili och vår egengjorda chilihonung.",
    price: 165,
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "3",
    name: "Tartufo Bianco",
    description: "Vit tryffelkräm, fior di latte, tryffelsalami och färskriven parmesan.",
    price: 185,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Featured Section */}
      <section className="py-24 px-6 md:px-12 bg-primary-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary-red font-sans tracking-widest uppercase text-sm mb-4 block">
              Våra Favoriter
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-primary-beige">
              Utvalda Mästarklassiker
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredPizzas.map((pizza) => (
              <ProductCard key={pizza.id} {...pizza} />
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 md:px-12 bg-primary-green relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif text-primary-beige leading-tight">
              Tradition möter <br /> <span className="italic">passion</span>
            </h2>
            <p className="text-primary-beige/80 text-lg leading-relaxed font-sans">
              Varje deg vi knådar vilar i minst 72 timmar för att uppnå den perfekta balansen mellan frasighet och luftighet. Vi använder enbart importerade råvaror från småskaliga italienska producenter som delar vår kärlek till hantverket.
            </p>
            <div className="pt-4">
              <span className="font-serif italic text-3xl text-primary-red block">Bella Famiglia</span>
              <span className="text-xs tracking-[0.3em] uppercase text-primary-beige/50">Grundat 1984</span>
            </div>
          </div>
          <div className="flex-1 relative aspect-[4/5] w-full rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=1974&auto=format&fit=crop" 
              alt="Pizzabagare" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Footer Placeholder */}
      <footer className="py-12 text-center bg-primary-black border-t border-white/5 text-primary-beige/30 text-xs tracking-widest uppercase">
        © 2026 Bella Pizzeria - Premium Italian Experience
      </footer>
    </main>
  );
}
