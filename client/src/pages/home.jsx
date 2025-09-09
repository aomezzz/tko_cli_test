import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-base-200 font-sans">
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-md px-4">
        <div className="flex-1">
          <a className="text-xl font-bold tracking-wide">My Restaurant</a>
        </div>
        <div className="flex-none gap-2">
          <a className="btn btn-ghost">Menu</a>
          <a className="btn btn-ghost">Promotions</a>
          <a className="btn btn-ghost">Contact</a>
        </div>
      </div>

      {/* Hero Section */}
      <section
        className="hero min-h-[75vh] bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://source.unsplash.com/1600x900/?restaurant,table)",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-50"></div>
        <div className="hero-content text-center text-white z-10">
          <div>
            <h1 className="mb-4 text-6xl font-bold">
              Welcome to My Restaurant
            </h1>
            <p className="mb-6 text-lg">
              Authentic Thai cuisine made with passion and fresh ingredients.
            </p>
            <button className="btn btn-primary btn-lg">Explore Our Menu</button>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          Chef's Specials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Pad Thai",
              price: 80,
              img: "https://source.unsplash.com/400x300/?padthai",
            },
            {
              name: "Tom Yum Goong",
              price: 120,
              img: "https://source.unsplash.com/400x300/?tomyum",
            },
            {
              name: "Thai Fried Rice",
              price: 70,
              img: "https://source.unsplash.com/400x300/?thaifood",
            },
          ].map((item, i) => (
            <div key={i} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-52 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p className="text-sm text-gray-500">Only {item.price} THB</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-sm btn-primary">Order Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-base-100 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At My Restaurant, we combine tradition and creativity to serve
            dishes that represent the heart of Thai cuisine. From spicy Tom Yum
            to savory Pad Thai, every dish is prepared fresh daily by our
            passionate chefs.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer p-10 bg-base-300 text-base-content">
        <div>
          <span className="footer-title">About Us</span>
          <p>
            Open daily from 10:00 AM - 10:00 PM
            <br /> Tel: 012-345-6789
          </p>
        </div>
        <div>
          <span className="footer-title">Follow Us</span>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Line</a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
