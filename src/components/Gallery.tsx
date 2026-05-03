import { motion } from 'motion/react';
import { User, Sparkles, Footprints, Zap } from 'lucide-react';

const galleryItems = [
  {
    type: "text",
    bgColor: "bg-[#E0E2FF]",
    tag: "Premium Pod Selection",
    title: "The Zenith VIP: Absolute solitude for focus.",
    buttonText: "Book Space",
    icon: <Sparkles className="text-zinc-900" size={24} />
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    alt: "Premium Service"
  },
  {
    type: "text",
    bgColor: "bg-[#D1F2D6]",
    tag: "Rest & Recovery",
    title: "Lumina Dream: Designed for restorative sleep.",
    buttonText: "Explore",
    icon: <Zap className="text-zinc-900" size={24} />
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1517502884422-01d80af1d90d?auto=format&fit=crop&q=80&w=1200",
    alt: "Lumina Design"
  },
  {
    type: "text",
    bgColor: "bg-[#FFF0D1]",
    tag: "Modern Living",
    title: "Essential Refresh: The ultimate pit stop.",
    buttonText: "View Details",
    icon: <Footprints className="text-zinc-900" size={24} />
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=1200",
    alt: "Tech Pod"
  }
];

export default function Gallery() {
  return (
    <section className="py-24 bg-zinc-50 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-2">
            <span className="text-primary font-headline font-bold text-xs uppercase tracking-widest block">
              Premium Experience
            </span>
            <h2 className="text-3xl md:text-5xl font-headline font-extrabold tracking-tight text-zinc-900">
              The Gallery Collection
            </h2>
          </div>
          <button className="text-zinc-900 font-headline font-bold border-b-2 border-zinc-900 pb-1 hover:text-primary hover:border-primary transition-all cursor-pointer">
            View All Spaces
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 aspect-[4/5] ${
                item.type === 'text' ? item.bgColor : 'bg-white'
              }`}
            >
              {item.type === 'text' ? (
                <div className="p-10 flex flex-col h-full bg-linear-to-br from-white/20 to-transparent">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="bg-white/50 backdrop-blur-sm p-3 rounded-2xl text-zinc-900 shadow-sm border border-white/50">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-900/80">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-headline font-bold text-zinc-900 leading-[1.2] mb-10">
                    {item.title}
                  </h3>
                  <div className="mt-auto">
                    <button className="bg-black text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:scale-105 active:scale-95 transition-all cursor-pointer">
                      {item.buttonText}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="relative h-full group">
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
