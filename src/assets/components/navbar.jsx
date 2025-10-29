import React from "react";
import PrimaryButton from "../components/primarybutton.jsx";
import "../styles/navbar.css";

export default function NavBar({ onGetStarted }) {
	return (
		<header className="sa-navbar flex items-center justify-between px-10 py-6 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
			<h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-sky-500 bg-clip-text text-transparent">
				Sakay Automotive
			</h1>
			<nav className="space-x-8 hidden md:flex">
				<a href="#home" className="hover:text-green-500 transition">
					Home
				</a>
				<a href="#models" className="hover:text-green-500 transition">
					Models
				</a>
				<a href="#about" className="hover:text-green-500 transition">
					About
				</a>
				<a href="#contact" className="hover:text-green-500 transition">
					Contact
				</a>
			</nav>
			<PrimaryButton label="Get Started" onClick={onGetStarted} type="primary" />
		</header>
	);
}


