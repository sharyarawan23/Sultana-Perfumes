import React, { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useLanguage } from "@/contexts/LanguageContext";

const useCards = [
  { title: "HOME", subtitle: "A fresher, warmer space.", image: "/assets/use-home.png" },
  { title: "CAR", subtitle: "A luxurious drive.", image: "/assets/use-car.png" },
  { title: "CLOTHES & LINEN", subtitle: "Lasting freshness.", image: "/assets/use-clothes.png" },
];

const sprayImageOverrides: Record<string, string> = {
  "black-london": "/assets/spray-products-final/black-london-new.png",
  "sweet-rose": "/assets/spray-products-final/sweet-rose-new.png",
  "velvet-night": "/assets/spray-products-final/velvet-night-new.png",
  machmoun: "/assets/spray-products-final/machmoun-new.png",
  "cotton-candy": "/assets/spray-products-final/cotton-candy-new.png",
  "royal-fruity": "/assets/spray-products-final/royal-fruity-new.png",
  "wood-bouquet": "/assets/spray-products-final/wood-bouquet-new.png",
  "my-mood": "/assets/spray-products-final/my-mood-new.png",
  "blanc-imperial": "/assets/spray-products-final/blanc-imperial-new.png",
};

export default function RoomSprays() {
  const { language } = useLanguage();
  const [searchParams] = useSearchParams();
  const [activeUse, setActiveUse] = useState<string | null>(null);

  const sprays = useMemo(
    () => products
      .filter((product) => product.category === "spray")
      .map((product) => ({ ...product, image: sprayImageOverrides[product.id] ?? product.image })),
    []
  );

  useEffect(() => {
    const use = searchParams.get("use");
    setActiveUse(use);
  }, [searchParams]);

  const filteredSprays = useMemo(() => {
    if (!activeUse) return sprays;
    return sprays.filter((product) =>
      product.tags?.some((tag) => tag.toLowerCase() === activeUse.toLowerCase())
    );
  }, [sprays, activeUse]);

  return (
    <main className="bg-[#fbf9f5] text-[#18140f]">
      <section className="w-full overflow-hidden">
        <picture>
          <source media="(max-width: 767px)" srcSet="/assets/campaigns/hero-spray-mobile.webp" />
          <img src="/assets/campaigns/hero-spray-unified.webp" alt="Luxury Home Spray" className="block w-full h-auto" />
        </picture>
      </section>

      <section className="w-full px-5 md:px-8 lg:px-10 xl:px-12 py-14 md:py-20">
        <div className="flex items-end justify-between gap-6 mb-8">
          <h1 className="font-serif text-4xl md:text-5xl">One Mist. Many Moments.</h1>
          <Link to="/shop?collection=spray" className="hidden sm:flex items-center gap-6 text-sm">
            <span>View all</span><span className="text-2xl">↗</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {useCards.map((card) => (
            <Link key={card.title} to={`/room-sprays?use=${encodeURIComponent(card.title.toLowerCase())}`} className="group block w-full overflow-hidden bg-[#2a2119]">
              <div className="relative w-full aspect-[307/204] overflow-hidden">
                <img src={card.image} alt={card.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="w-full px-5 md:px-8 lg:px-10 xl:px-12 pb-16 md:pb-24">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-serif text-4xl md:text-5xl">The Ambiance Collection</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 w-full">
          {filteredSprays.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
    </main>
  );
}
