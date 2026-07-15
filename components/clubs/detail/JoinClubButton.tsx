"use client";

export default function JoinClubButton() {
  return (
    <section className="mt-16 rounded-3xl border border-green-600/30 bg-gradient-to-r from-green-900/20 to-emerald-900/20 p-10">

      <div className="mx-auto max-w-3xl text-center">

        <h2 className="text-4xl font-black">
          Ready to Join?
        </h2>

        <p className="mt-5 leading-8 text-zinc-300">
          Become part of the community, participate in
          exciting events, improve your skills and build
          lifelong friendships with students who share
          your interests.
        </p>

        <button
          className="
            mt-10
            rounded-2xl
            bg-green-600
            px-10
            py-4
            text-lg
            font-bold
            text-white
            transition-all
            duration-300
            hover:scale-105
            hover:bg-green-700
          "
        >
          🚀 Join Club
        </button>

      </div>

    </section>
  );
}