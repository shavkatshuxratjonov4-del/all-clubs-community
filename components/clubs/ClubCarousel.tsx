"use client";

import * as React from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import ClubMobileCard from "./ClubMobileCard";
import { Club } from "./types";

interface ClubCarouselProps {
  clubs: Club[];
}

export default function ClubCarousel({
  clubs,
}: ClubCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    api.on("reInit", () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => {
      api.off("select", () => {});
      api.off("reInit", () => {});
    };
  }, [api]);

  return (
    <div className="mt-12 w-full">
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {clubs.map((club, index) => (
            <CarouselItem
              key={club.id}
              className="basis-[88%]"
            >
              <div
                className={`transition-all duration-500 ${
                  current === index
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-60"
                }`}
              >
                <ClubMobileCard club={club} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mt-6 flex items-center justify-center gap-2">
        {clubs.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index
                ? "w-8 bg-green-500"
                : "w-2 bg-zinc-600"
            }`}
            aria-label={`Go to club ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}