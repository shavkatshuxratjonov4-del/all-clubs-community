export default function Statistics() {
  return (
    <section className="mx-auto max-w-6xl px-8 py-20">
      <div className="grid grid-cols-2 gap-10 md:grid-cols-4 text-center">

        <div>
          <h2 className="text-5xl font-black text-white">6</h2>
          <p className="mt-3 text-gray-400">Student Clubs</p>
        </div>

        <div>
          <h2 className="text-5xl font-black text-white">250</h2>
          <p className="mt-3 text-gray-400">Students</p>
        </div>

        <div>
          <h2 className="text-5xl font-black text-white">22</h2>
          <p className="mt-3 text-gray-400">Events</p>
        </div>

        <div>
          <h2 className="text-5xl font-black text-white">1</h2>
          <p className="mt-3 text-gray-400">Partners</p>
        </div>

      </div>
    </section>
  );
}