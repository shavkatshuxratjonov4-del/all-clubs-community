import PartnerMarquee from "@/components/partners/PartnerMarquee";

export default function Partners() {
  return (
    <section
      id="partners"
      className="mx-auto max-w-7xl px-8 py-20"
    >
      <div className="text-center">

        <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-green-400">
          Our Partners
        </span>

        <h2 className="mt-5 text-4xl font-black text-white md:text-5xl">
          Trusted Partners
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
          Together with our trusted partners, we create more
          opportunities, innovation and unforgettable experiences for
          students.
        </p>

      </div>

      <div className="mt-14">
        <PartnerMarquee />
      </div>
    </section>
  );
}