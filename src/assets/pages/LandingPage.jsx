

import React from "react";
import NavBar from "../components/navbar.jsx";
import PrimaryButton from "../components/primarybutton.jsx";
import "../styles/landing.css";

export default function LandingPage() {
  const handleExplore = (index = 0) => {
    window.location.assign(`/car-listing?selected=${index}`);
  };

  const handleOrder = () => {
    window.location.assign("/order");
  };

  return (
    <div className="landing-page min-h-screen flex flex-col bg-white text-gray-800">

      <NavBar onGetStarted={handleOrder} />

      <section
        id="home"
        className="hero-section flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-24 bg-gradient-to-r from-green-50 to-sky-50"
      >
        <div className="hero-content md:w-1/2 space-y-6">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Driving the Future of{" "}
            <span className="bg-gradient-to-r from-green-400 to-sky-500 bg-clip-text text-transparent">
              Eco Mobility
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Revolutionizing sustainable transportation —{" "}
            <strong>Mula sa Bayan, Para sa Bayan.</strong> Our mission is to
            empower communities through green innovation and locally built
            electric vehicles.
          </p>
          <div className="space-x-4">
            <PrimaryButton label="Explore Models" onClick={() => handleExplore(0)} type="primary" />
            <PrimaryButton label="Order Now" onClick={handleOrder} type="outline" />
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <img
            src="/images/sakay-hero.png"
            alt="Sakay Electric Vehicle"
            className="rounded-2xl shadow-2xl w-3/4"
          />
        </div>
      </section>

      <section
        id="models"
        className="models-section py-20 px-10 md:px-20 text-center bg-white border-t border-gray-100"
      >
        <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-sky-500 bg-clip-text text-transparent">
          Featured Models
        </h3>
        <p className="text-gray-600 mb-12">
          Discover our latest eco-electric vehicles designed for efficiency,
          performance, and sustainability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              name: "Sakay E-Trike X1",
              desc: "Smart, sustainable, and perfect for community mobility.",
              img: "/images/etrikex1.jpg",
            },
            {
              name: "Sakay E-Van Lite",
              desc: "Compact electric van ideal for local businesses and logistics.",
              img: "/images/evanlite.jpg",
            },
            {
              name: "Sakay E-Sedan Pro",
              desc: "Luxury and performance meet sustainability.",
              img: "/images/esedanpro.jpg",
            },
          ].map((car, index) => (
            <div
              key={index}
              onClick={() => handleExplore(index)}
              className="model-card bg-gradient-to-b from-white to-green-50 border border-gray-100 rounded-2xl shadow hover:shadow-xl transition p-6 cursor-pointer"
            >
              <img
                src={car.img}
                alt={car.name}
                className="rounded-xl mb-6 w-full h-48 object-cover"
              />
              <h4 className="text-2xl font-semibold text-gray-800 mb-2">
                {car.name}
              </h4>
              <p className="text-gray-600">{car.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="about-section py-20 px-10 md:px-20 bg-gradient-to-r from-green-50 to-sky-50 text-center"
      >
        <h3 className="text-4xl font-bold mb-6 text-gray-800">
          About Sakay Automotive
        </h3>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
          Sakay Automotive is a Philippine-based electric vehicle startup
          committed to sustainable innovation. Our goal is to provide reliable,
          eco-friendly mobility solutions that serve communities and support
          national progress.
        </p>
      </section>

      <footer className="py-10 text-center bg-white border-t border-gray-200">
        <p className="text-gray-500">
          © {new Date().getFullYear()} Sakay Automotive. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
