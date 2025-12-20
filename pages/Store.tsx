import React, { useEffect } from 'react';
import { ShoppingBag, ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';

const Store: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      id: "TEE_01",
      name: "FARALLON // SF GRAPHIC TEE",
      price: "$32.00",
      image: "https://i.postimg.cc/dtKwWfZn/Model-(Lower-quality).png",
      link: "https://farallon.printful.me/product/womens-cotton-crew-neck-t-shirt"
    },
    {
      id: "HOOD_01",
      name: "FARALLON // STEALTH HOODIE",
      price: "$65.00",
      image: "https://i.postimg.cc/hG1WJ4tM/Hoodie-ad.png",
      link: "https://farallon.printful.me/product/under-armour-hoodie"
    }
  ];

  return (
    <div className="min-h-screen py-24">
      <SEO 
        title="Official Store - Merchandise"
        description="Shop official Farallon merchandise, including graphic tees and hoodies."
        canonical="/store"
      />
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="size-16 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-6 shadow-inner">
            <ShoppingBag size={32} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-4">Fabrications</h1>
          <p className="text-text-muted text-lg max-w-xl font-light">
             Official physical artifacts from the Farallon signal. Standard issue cotton armor and performance layers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {products.map(product => (
            <div key={product.id} className="group glass-card rounded-[2rem] p-6 hover:shadow-ethereal hover:-translate-y-2 transition-all duration-500">
               <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-8 relative">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 glass-card px-3 py-1 rounded-full text-[10px] font-mono font-bold text-primary">
                    {product.id}
                  </div>
               </div>
               <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                     <h2 className="text-2xl font-bold font-display text-text-main group-hover:text-primary transition-colors max-w-[200px]">{product.name}</h2>
                     <span className="font-mono text-xl font-bold text-secondary">{product.price}</span>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">
                     Limited run fabrication using high-performance textiles. Logistics handled by Node: Printful.
                  </p>
                  <a 
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 h-14 w-full bg-text-main text-white rounded-full font-bold hover:bg-primary transition-all shadow-lg"
                  >
                    Acquire Asset
                    <ExternalLink size={16} />
                  </a>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;