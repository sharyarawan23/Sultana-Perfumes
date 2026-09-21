import React, { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useLanguage } from "@/contexts/LanguageContext";

const useCards = [
  { title: "HOME", subtitle: "A fresher, warmer space.", image: "/assets/use-home.png" },
  { title: "CAR", subtitle: "A luxurious drive.", image: "/assets/use-car.png" },
  { title: "CLOTHES & LINEN", subtitle: "Lasting freshness.", image: "/assets/use-clothes.png" },
  { title: "ROOM & SPA", subtitle: "A relaxing atmosphere.", image: "/assets/use-living.png" },
];

const sprayImageOverrides: Record<string, string> = {
  "black-london": "/assets/black-london-new.png",
  "sweet-rose": "/assets/sweet-rose-new.png",
  "velvet-night": "/assets/velvet-night-new.png",
  machmoun: "/assets/machmoun-new.png",
  "cotton-candy": "/assets/cotton-candy-new.png",
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

      <section className="px-5 md:px-12 lg:px-20 py-14 md:py-20">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl">One Mist. Many Moments.</h1>
          </div>
          <Link to="/shop?collection=spray" className="hidden sm:flex items-center gap-6 text-sm">
            <span>View all</span><span className="text-2xl">↗</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {useCards.map((card) => (
            <Link key={card.title} to={`/room-sprays?use=${encodeURIComponent(card.title.toLowerCase())}`} className="group relative aspect-[4/3] overflow-hidden bg-[#2a2119]">
              <img src={card.image} alt={card.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 text-white">
                <h2 className="font-serif text-2xl md:text-3xl leading-tight">{card.title}</h2>
                <p className="mt-2 text-xs md:text-sm text-white/90">{card.subtitle}</p>
                <div className="mt-2 flex items-center justify-between text-xs tracking-wide"><span>SHOP NOW</span><span className="text-xl">↗</span></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-5 md:px-12 lg:px-20 pb-16 md:pb-24">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl">The Ambiance Collection</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
          {filteredSprays.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
    </main>
  );
}
