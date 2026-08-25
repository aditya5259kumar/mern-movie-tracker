import React from "react";

const Home = () => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center px-6">
        <div className="max-w-6xl w-full mx-auto flex flex-col items-center justify-center gap-8">
          <h1 className="max-w-4xl text-5xl md:text-7xl font-bold text-center leading-tight">
            TRACK YOUR MARVEL JOURNEY
          </h1>

          <p className="max-w-2xl text-xl md:text-3xl font-semibold text-gray-500 text-center">
            Discover, track and review every Marvel movie in one place.
          </p>

          <button className="bg-red-500 hover:bg-red-600 transition font-medium text-white px-8 py-3 rounded-full">
            Explore
          </button>
        </div>
      </section>

      {/* Popular Movies Section */}
      <section className="border-t border-gray-200 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            POPULAR MARVEL MOVIES
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="aspect-2/3 bg-gray-200 rounded-xl">Movie</div>

            <div className="aspect-2/3 bg-gray-200 rounded-xl">Movie</div>

            <div className="aspect-2/3 bg-gray-200 rounded-xl">Movie</div>

            <div className="aspect-2/3 bg-gray-200 rounded-xl">Movie</div>
          </div>
        </div>
      </section>

      {/* Watch Order Section */}
      <section className="border-t border-gray-200 py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            WHERE SHOULD YOU START?
          </h2>

          <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition">
            View Watch Order
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
