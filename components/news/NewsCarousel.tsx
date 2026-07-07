"use client";
import * as React from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { news } from "./newsData";
import FeaturedNewsCard from "./cards/FeaturedNewsCard";
import SideNewsCard from "./cards/SideNewsCard";
export default function NewsCarousel() {
  const sortedNews = [...news].sort(
    (a, b) =>
      new Date(a.publishedAt).getTime() -
      new Date(b.publishedAt).getTime()
  );
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(
    sortedNews.length - 1
  );
  React.useEffect(() => {
    if (!api) return;
    api.scrollTo(sortedNews.length - 1);
    const update = () => {
      setCurrent(api.selectedScrollSnap());
    };
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api, sortedNews.length]);
  return (
    <div className="w-full">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "end",
        }}
        className="w-full"
      >
        <CarouselContent>
          {sortedNews.map((item, index) => {
            const active = current === index;
            return (
              <CarouselItem
                key={item.id}
                className={
                  active
                    ? "basis-[90%] lg:basis-[65%]"
                    : "basis-[75%] md:basis-[40%] lg:basis-[24%]"
                }
              >
                {active ? (
                  <FeaturedNewsCard
                    news={item}
                    active={active}
                  />
                ) : (
                  <SideNewsCard
                    news={item}
                    active={active}
                  />
                )}
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      <div className="mt-8 flex items-center justify-center gap-3">
        {sortedNews.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              current === index
                ? "w-8 bg-green-500"
                : "w-3 bg-zinc-600 hover:bg-zinc-400"
            }`}
            aria-label={`Go to news ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}