import React, { useState } from "react";
import axios from "axios";

function Home() {
  const [apiResponse, setApiResponse] = useState(null);

  const handleApiCall = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/hello", {
        name: "Gemini",
        age: 1,
      });
      alert(JSON.stringify(response.data, null, 2));
      setApiResponse(response.data);
    } catch (error) {
      console.error("Error calling API:", error);
      alert("Failed to fetch data");
      setApiResponse({ error: "Failed to fetch data" });
    }
  };

  return (
    <div className="min-h-screen bg-base-200 font-sans">
      {/* Navbar */}
      <div className="navbar sticky top-0 z-30 bg-base-100/80 backdrop-blur-sm shadow-md px-4">
        <div className="flex-1">
          <a className="text-2xl font-bold tracking-wide flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM5.28 4.22a.75.75 0 010 1.06l-1.06 1.06a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zM14.72 4.22a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06l-1.06-1.06a.75.75 0 010-1.06zM2 10a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 012 10zM15.25 10a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM8.28 15.78a.75.75 0 010-1.06l-1.06-1.06a.75.75 0 01-1.06 1.06l1.06 1.06a.75.75 0 011.06 0zM11.72 15.78a.75.75 0 011.06 0l1.06-1.06a.75.75 0 011.06 1.06l-1.06 1.06a.75.75 0 01-1.06 0zM10 18a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5A.75.75 0 0110 18zM10 5a5 5 0 100 10 5 5 0 000-10z" clipRule="evenodd" />
            </svg>
            My Restaurant
          </a>
        </div>
        <div className="flex-none gap-2">
          <a href="#menu" className="btn btn-ghost">Menu</a>
          <a href="#about" className="btn btn-ghost">About</a>
          <a href="#contact" className="btn btn-ghost">Contact</a>
          <button className="btn btn-sm btn-outline btn-accent" onClick={handleApiCall}>API Test</button>
        </div>
      </div>

      {/* Hero Section */}
      <section
        className="hero min-h-[85vh] bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://source.unsplash.com/1600x900/?restaurant,dining)",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content z-10">
          <div className="max-w-md">
            <h1 className="mb-5 text-7xl font-extrabold">Savor the Taste of Thailand</h1>
            <p className="mb-5 text-xl">
              Experience authentic Thai cuisine, crafted with passion and the freshest ingredients.
            </p>
            <a href="#menu" className="btn btn-primary btn-lg">Explore Our Menu</a>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section id="menu" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">
          Chef's Specials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              name: "Pad Thai",
              price: 80,
              description: "Classic stir-fried noodles with shrimp, tofu, and peanuts.",
              img: "https://source.unsplash.com/400x300/?padthai",
            },
            {
              name: "Tom Yum Goong",
              price: 120,
              description: "Spicy and sour soup with shrimp, mushrooms, and lemongrass.",
              img: "https://source.unsplash.com/400x300/?tomyum",
            },
            {
              name: "Green Curry",
              price: 100,
              description: "Rich and creamy curry with chicken, bamboo shoots, and basil.",
              img: "https://source.unsplash.com/400x300/?greencurry",
            },
          ].map((item, i) => (
            <div key={i} className="card bg-base-100 shadow-xl transition-transform duration-300 hover:scale-105">
              <figure>
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-56 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl">{item.name}</h2>
                <p className="text-gray-600">{item.description}</p>
                <div className="card-actions justify-between items-center mt-4">
                  <span className="text-xl font-semibold text-primary">{item.price} THB</span>
                  <button className="btn btn-primary">Order Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-base-100 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Our Story</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            At My Restaurant, we combine tradition and creativity to serve
            dishes that represent the heart of Thai cuisine. From spicy Tom Yum
            to savory Pad Thai, every dish is prepared fresh daily by our

            passionate chefs.
          </p>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">Contact Us</h2>
        <div className="card bg-base-100 shadow-xl p-8">
          <form className="space-y-4">
            <div className="form-control">
              <label className="label"><span className="label-text">Your Name</span></label>
              <input type="text" placeholder="John Doe" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Your Email</span></label>
              <input type="email" placeholder="john.doe@example.com" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Message</span></label>
              <textarea className="textarea textarea-bordered h-32" placeholder="Your message..."></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Send Message</button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-base-300 text-base-content">
        <div>
          <div className="grid grid-flow-col gap-4">
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.581-.666 2.477 0 1.61.82 3.027 2.053 3.848-.764-.024-1.482-.232-2.11-.583v.062c0 2.256 1.605 4.14 3.737 4.568-.39.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.307 3.2 4.34 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.092 7.14 2.092 8.57 0 13.255-7.098 13.255-13.254 0-.202-.005-.403-.014-.602A9.46 9.46 0 0024 4.557z"></path></svg></a> 
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> 
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
          </div>
        </div> 
        <div>
          <p>Copyright © 2024 - All right reserved by My Restaurant</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
