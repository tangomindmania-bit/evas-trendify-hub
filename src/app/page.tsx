import React from 'react';
import Image from 'next/image';

interface Product {
  id: string;
  title: string;
  category: string;
  price: string;
  image: string;
  affiliateUrl: string;
}

const products: Product[] = [
  {
    id: '1',
    title: 'Plant-Based Cookbook for Beginners',
    category: 'Books & Guides',
    price: '$19.99',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800',
    affiliateUrl: '#',
  },
  {
    id: '2',
    title: 'The Probiotic Kitchen Cookbook',
    category: 'Books & Guides',
    price: '$18.50',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    affiliateUrl: '#',
  },
  {
    id: '3',
    title: 'Dog Trainer Bible - Ultimate Guide',
    category: 'Pet Care',
    price: '$24.99',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800',
    affiliateUrl: '#',
  },
  {
    id: '4',
    title: 'Pet Safety Bundle',
    category: 'Pet Care',
    price: '$29.99',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800',
    affiliateUrl: '#',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Light Theme Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
              E
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800">
              Eva's <span className="text-amber-600">Trendify Hub</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <a href="#products" className="hover:text-amber-600 transition-colors">Products</a>
            <a href="#categories" className="hover:text-amber-600 transition-colors">Categories</a>
            <a href="#about" className="hover:text-amber-600 transition-colors">About</a>
            <a href="#inquiries" className="hover:text-amber-600 transition-colors">Inquiries</a>
          </nav>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-b from-amber-50/50 to-slate-50 py-16 sm:py-24 border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto text-center px-4">
          <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-semibold tracking-wide uppercase mb-4">
            Trending Deals & Guides
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Discover Top Curated Digital Products & Books
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Hand-picked resources, guides, and lifestyle essentials designed to inspire and educate.
          </p>
          <a
            href="#products"
            className="inline-flex items-center justify-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg shadow-sm transition-all"
          >
            Explore All Products
          </a>
        </div>
      </section>

      {/* Product Grid Section */}
      <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Featured Collections</h2>
          <p className="text-slate-500 mt-2">Explore our most popular books and digital guides</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Fixed aspect ratio container with object-fit: contain to prevent image cropping */}
                <div className="relative w-full h-64 bg-slate-100 p-4 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-contain p-2"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="text-base font-semibold text-slate-800 mt-1 line-clamp-2 min-h-[3rem]">
                    {product.title}
                  </h3>
                </div>
              </div>

              <div className="px-5 pb-5 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
                <span className="text-lg font-bold text-slate-900">{product.price}</span>
                <a
                  href={product.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-md transition-colors"
                >
                  View Deal
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Eva's Trendify Hub. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
