"use client";
import React, { useMemo, useState } from "react";
import Marquee from "react-fast-marquee";

export default function Page() {
  const products = [
    { id: 1, name: "Acme Tote Bag", price: "$15 USD", img: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbag-1-dark.png%3Fv%3D1689796304&w=1920&q=75", category: "Bags" },
    { id: 2, name: "Acme Mug", price: "$14 USD", img: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fmug-1.png%3Fv%3D1690003527&w=3840&q=75", category: "Drinkware" },
    { id: 3, name: "Acme Keyboard", price: "$145.55 USD", img: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fkeyboard.png%3Fv%3D1690003507&w=1920&q=75", category: "Electronics" },
    { id: 4, name: "Acme Shoes", price: "$70 USD", img: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fshoes-1.png%3Fv%3D1690004109&w=1920&q=75", category: "Footwear" },
    { id: 5, name: "Acme Beanie", price: "$11 USD", img: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&w=1920&q=75", category: "Headwear" },
    { id: 6, name: "Acme Hoodie", price: "$79.99 USD", img: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-2.png%3Fv%3D1690003482&w=1920&q=75", category: "Hoodies" },
    { id: 7, name: "Acme Baseball Cap", price: "$20", img: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhat-1.png%3Fv%3D1690002833&w=1920&q=75", category: "Headwear" },
    { id: 9, name: "Acme T-Shirt", price: "$25 USD", img: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=1920&q=75", category: "Shirt" },
  ];

  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const filtered = useMemo(
    () =>
      products.filter((p) => {
        if (selectedCategory !== "All" && p.category !== selectedCategory) return false;
        if (!query) return true;
        return p.name.toLowerCase().includes(query.toLowerCase());
      }),
    [products, query, selectedCategory]
  );
  
  const fixedProducts = products.slice(0, 3);
  const scrollingProducts = products.slice(3);

  return (
    <div className="bg-[#0B0B0B] text-white"> 
      <header className="flex items-center gap-6 px-6 py-4 border-b border-neutral-800 sticky top-0 bg-[#0B0B0B] z-10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-neutral-900 rounded flex items-center justify-center text-white font-bold">A</div>
          <div className="font-bold">ACME STORE</div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="w-[560px]">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for products..."
              className="w-full bg-neutral-900 border border-neutral-700 rounded-md px-4 py-2 text-sm focus:outline-none"
            />
          </div>
        </div>

        <div className="ml-6">
          <button className="w-10 h-10 rounded border border-neutral-800 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-neutral-300">
              <path d="M3 3h2l.4 2M7 13h10l4-8H6.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </header>

      <div className="flex">
        <aside className="w-56 p-6 border-r border-neutral-800 sticky top-[72px] h-[calc(100vh-72px)] overflow-auto">
          <div className="text-sm text-neutral-400 mb-3">Collections</div>
          <ul className="text-sm space-y-2">
            {categories.map((c) => (
              <li
                key={c}
                onClick={() => setSelectedCategory(c)}
                className={`cursor-pointer ${c === selectedCategory ? "text-white font-medium" : "text-neutral-400 hover:text-white"}`}
              >
                {c}
              </li>
            ))}
          </ul>
        </aside>

        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <div
                key={p.id}
                onClick={() => { setSelectedProduct(p); setGalleryIndex(0); }}
                className="relative bg-black border border-neutral-800 rounded-lg overflow-hidden h-[360px] group transition-all duration-300 hover:border-blue-500 hover:shadow-[0_0_0_6px_rgba(59,130,246,0.12)] cursor-pointer"
              >
                <div className="absolute inset-0 bg-black/90 flex items-center justify-center overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute left-4 bottom-4 right-4 flex items-center justify-between gap-4">
                  <div className="bg-neutral-900/70 px-3 py-1 rounded-full text-sm text-neutral-200">{p.name}</div>
                  <div className="bg-blue-600 text-xs px-3 py-1 rounded-full">{p.price}</div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      
      <section className="mt-12 py-12 px-6 overflow-hidden">
        <h2 className="text-xl font-semibold mb-6">Featured Products</h2>
        
        <div className="w-full">
          <Marquee speed={40} gradient={false} pauseOnHover={true} autoFill>
            {scrollingProducts.map((p) => (
              <div 
                key={p.id}
                className="w-[200px] h-[200px] mx-2 flex-shrink-0 bg-black border border-neutral-800 rounded-lg overflow-hidden flex items-center justify-center"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      <footer className="mt-12 border-t border-neutral-800 text-neutral-400">
        <div className="max-w-7xl mx-auto px-6 py-10 flex justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-neutral-900 rounded flex items-center justify-center text-white font-bold">A</div>
            <div className="font-semibold">ACME STORE</div>
          </div>
          <div>© 2023-2025 ACME, Inc.</div>
        </div>
      </footer>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">
          <div className="w-full max-w-7xl bg-[#0B0B0B] rounded-md p-8 relative flex gap-12">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute right-4 top-4 text-neutral-400 hover:text-white"
            >
              ✕
            </button>

            <div className="flex-1">
              <div className="w-full h-[560px] bg-black rounded-md flex items-center justify-center overflow-hidden border border-neutral-800">
                <img src={selectedProduct.img} alt={selectedProduct.name} className="max-h-full max-w-full object-contain" />
              </div>
              <div className="mt-6 flex items-center gap-4">
                {[0, 1, 2].map((i) => (
                  <button
                    key={i}
                    onClick={() => setGalleryIndex(i)}
                    className={`w-16 h-16 rounded-md border ${galleryIndex === i ? "border-blue-500" : "border-neutral-800"} overflow-hidden`}
                  >
                    <img src={selectedProduct.img} alt={`${selectedProduct.name} ${i}`} className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            </div>

            <div className="w-96">
              <h1 className="text-3xl font-semibold mb-3">{selectedProduct.name}</h1>
              <div className="mb-6">
                <span className="inline-block bg-blue-600 text-xs px-3 py-1 rounded-full">{selectedProduct.price}</span>
              </div>
              <hr className="border-neutral-800 my-4" />
              <button className="w-full bg-blue-600 py-3 rounded-full text-sm">Add To Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}