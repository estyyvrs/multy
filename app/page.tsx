
import Image from 'next/image';

const properties = [
  {
    id: 'C-412',
    title: 'The Modeva • Bang Tao',
    spec: '90m² • 3BR • 6F • Sea View',
    location: 'Phuket, Bang Tao, The Modeva',
    price: 2000,
    type: 'YEARLY CONTRACT',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    featured: true
  },
  {
    id: 'B-210',
    title: 'Laguna • 2BR Condo',
    spec: '65m² • 2BR • 2F',
    location: 'Phuket, Bang Tao',
    price: 1200,
    type: 'Yearly',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    featured: false
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="px-6 py-6 flex justify-between items-center border-b border-white/10">
        <div className="text-xl font-bold tracking-widest">MULTY</div>
        <div className="text-sm opacity-60">Thailand • Long-term Rentals</div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 py-10">
        <div className="mb-10">
          <h1 className="text-5xl font-bold mb-3">Your parents' property,<br/>but for $2000/mo.</h1>
          <p className="text-white/60 max-w-xl">Premium yearly rentals in Bang Tao. No daily tourists. No cleaning fees. Just stable $24k/year.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map(p => (
            <div key={p.id} className={`rounded-[20px] overflow-hidden bg-[#161616] border ${p.featured ? 'border-white/30' : 'border-white/10'} group hover:border-white/30 transition`}>
              <div className="relative h-[240px] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                {p.featured && <div className="absolute top-3 left-3 bg-white text-black text-[10px] font-bold px-3 py-1 rounded-full tracking-widest">PARENTS' APARTMENT</div>}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur text-white text-[10px] px-3 py-1 rounded-full">{p.type}</div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-semibold text-[18px]">{p.title}</div>
                    <div className="text-white/50 text-[13px]">{p.spec}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-xl">${p.price}</div>
                    <div className="text-[11px] text-white/50">/ month</div>
                  </div>
                </div>
                <div className="text-[12px] text-white/40 mb-4">{p.location} • ID: {p.id}</div>
                <a href={`https://wa.me/66999999999?text=Hi!%20I%20want%20to%20rent%20${p.id}%20for%20$${p.price}/mo`} target="_blank" className="block w-full text-center bg-white text-black font-semibold py-3 rounded-full text-sm hover:bg-white/90 transition">
                  Contact on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-white/[0.05] border border-white/10">
          <h3 className="font-semibold mb-2">How to connect Supabase later:</h3>
          <code className="text-sm text-white/60">NEXT_PUBLIC_SUPABASE_URL + ANON_KEY in Vercel Env Vars, then replace static array with fetch.</code>
        </div>
      </main>
    </div>
  )
}


