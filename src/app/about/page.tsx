import { Navbar } from "@/components/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-primary-black pt-32 pb-24 px-6 md:px-12">
      <Navbar />
      
      <div className="max-w-5xl mx-auto space-y-24">
        <header className="text-center space-y-6">
          <span className="text-primary-red font-sans tracking-[0.3em] uppercase text-sm block">Vårt Arv</span>
          <h1 className="text-5xl md:text-8xl font-serif text-primary-beige">En resa genom <br /> <span className="italic">smaker</span></h1>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square rounded-[3rem] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop" 
              alt="Interiör" 
              className="object-cover w-full h-full"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl font-serif text-primary-beige">Från Neapel till Stockholm</h2>
            <p className="text-primary-beige/70 font-sans leading-relaxed text-lg">
              Allt började i en liten gränd i Neapel, där receptet på vår signaturdeg har gått i arv i generationer. Idag för vi den stolta traditionen vidare här i Sverige, med samma passion och kompromisslösa kvalitet.
            </p>
            <p className="text-primary-beige/70 font-sans leading-relaxed text-lg">
              Vi tror på enkelhet. De bästa tomaterna, den finaste mozzarellan och en ugn som brinner med kärlek. Det är hemligheten bakom den perfekta pizzan.
            </p>
          </div>
        </section>

        <section className="glass-dark p-12 md:p-24 rounded-[4rem] text-center space-y-12">
          <h2 className="text-4xl md:text-6xl font-serif text-primary-beige">Våra Tre Pelare</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <span className="text-primary-red font-serif italic text-4xl">01</span>
              <h3 className="text-xl font-bold uppercase tracking-widest">Kvalitet</h3>
              <p className="text-primary-beige/50 text-sm">Endast DOP-certifierade råvaror direkt från Italien.</p>
            </div>
            <div className="space-y-4">
              <span className="text-primary-red font-serif italic text-4xl">02</span>
              <h3 className="text-xl font-bold uppercase tracking-widest">Tid</h3>
              <p className="text-primary-beige/50 text-sm">Vår deg jäser i 72 timmar för maximal smak och lätthet.</p>
            </div>
            <div className="space-y-4">
              <span className="text-primary-red font-serif italic text-4xl">03</span>
              <h3 className="text-xl font-bold uppercase tracking-widest">Gemenskap</h3>
              <p className="text-primary-beige/50 text-sm">Vi skapar minnen runt bordet, en pizza i taget.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
