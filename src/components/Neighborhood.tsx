import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const neighborhoodCards = [
  {
    title: "Travel Guide",
    description: "Essential tips for navigating the city's best routes and transport links.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCo71nX5JpJ7TOt644LhW_Pj6DHRYDAzq1XfM0cs1QhdfT65s8tKU9qpm_569vqAdRv-2oJWdZxLnLCfrqFIXrlAi4uaJeWZpdwcRYnkqV_009PLx-8XRWj0LHVgyIh9OqktFLCyfyzREy6oU8SXi6bXI7-Fhfs30imM7k8-31Mw-yghj4ytYMkpEpL2sHDQEmGaCk8SGX2UIksSy2fzA1ibQ5uWV66viwSmlkoJsoY3flSxRApgW-NzhFqr7DxcqX8EY_srKx9i8o"
  },
  {
    title: "Places to Go",
    description: "Curated list of quiet parks and vibrant business hubs within walking distance.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfT2FSq-xMF-AUZ2GZVS8VJ7dFPpwdALxeaAcJiPai--N0dZ7oBPz_eLwhNM1BRnwXTy9D5cvbbVq3qD4aNdbyD0UrZdJVm2gEKNNrvR3F4ShcNLDCy4W9OSECMAREGME7_9Oi9z40nI38uGPdEpar7DNA7Ui-5EFkqWoekiT4sZ4kx-YF-LgWjPZ4MavRK1JtF6bBt8JcXTyPhuceeqJMDzbCjbVDf3LNKV3pqSjQFenEjwcALGA_s25W84UhTqVIfdHv2U6gu9s"
  },
  {
    title: "Food Spots",
    description: "From quick artisanal coffee to fine dining, discover the taste of the district.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAB964A9E3FKP-e8FFS-wmBvH6MsgHFJbbYX5XFXZKGWKik18mBsCeTmsQE50oB2ujp38jb4GIqQjMSfIuirSzyK6S5cPBOcnc57XH_PRJUdK1A6WQiFzxU8VOvl6lb5LilCg1Kf0nwLUg1eae-VbjZgeyvpu82gphYK0kPOVuzWiKCCtwENNbAi5oBGo1cpvaD6YGedgvoOXm1tcxmbxj34HZ64ujUtDpdKd87Syh2z57jrSUUdKdaicKtN2Mn4S5CDwPA3e9zcgc"
  },
  {
    title: "Nearby Attractions",
    description: "Don't miss the iconic landmarks and hidden galleries just around the corner.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDF3ZJn-LE9jz9FgNI9OgK6Dr7k2SrXlsOVeyaaR_Z8HJ1eEgt1o8EI-k08IGv5sYCAHEhOrtBPj36jewrL4wVJI7-XnB3F6d9T6E2RDublMbrLkTw9ctr0WEcY_fQHmr59l39huyQx4LiIcw2RCIxbnIS13j1-vVtzH5dvm864yigjC4uSFytmLoATumYXP3qP3eO940eJo1lMChqvo6TrtD-txBFFuVs5e46lrbdjWg_LaqH16zwTmFFqTnL9VhzjzX86_wrDK7s"
  }
];

export default function Neighborhood() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-headline font-extrabold tracking-tight text-zinc-900 leading-tight">
            Explore the Neighborhood
          </h2>
          <p className="text-zinc-500 font-light max-w-2xl mx-auto leading-relaxed text-lg">
            Make the most of your stay. Discover local gems and navigate the city like a pro.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {neighborhoodCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-zinc-100/50 flex flex-col"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  alt={card.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src={card.image} 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="p-8 space-y-3 flex-grow flex flex-col items-start">
                <h4 className="font-headline font-bold text-xl text-zinc-900 group-hover:text-primary transition-colors">
                  {card.title}
                </h4>
                <p className="text-sm text-zinc-500 font-light leading-relaxed flex-grow">
                  {card.description}
                </p>
                <a href="#" className="mt-4 flex items-center gap-1 text-sm font-bold text-primary group-hover:underline">
                  Learn more <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
