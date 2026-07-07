"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import EventCard from "./EventCard";
import { events } from "./eventsData";

export default function EventCarousel() {
  const plugin = React.useRef(
    Autoplay({
      delay: 7000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
    api.on("reInit", () => {
      setCurrent(api.selectedScrollSnap());
      setCount(api.scrollSnapList().length);
    });
  }, [api]);

  if (events.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {events.map((event, index) => (
            <CarouselItem
              key={event.id}
              className="basis-[90%] md:basis-[70%] lg:basis-[55%]"
            >
              <div
                className={`transition-all duration-700 ${
                  current === index
                    ? "scale-100 opacity-100"
                    : "scale-90 opacity-60"
                }`}
              >
                <EventCard event={event} active={current === index} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Pagination */}
      <div className="mt-8 flex items-center justify-center gap-3">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              current === index
                ? "w-8 bg-green-500"
                : "bg-zinc-600 hover:bg-zinc-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="mt-4 text-center text-sm text-zinc-400">
        {count > 0 ? `${current + 1} / ${count}` : ""}
      </div>
    </div>
  );
}