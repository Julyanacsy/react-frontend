import React, { useMemo, useState } from "react";
import NavBar from "../components/navbar.jsx";
import PrimaryButton from "../components/primarybutton.jsx";

export default function ListingPage() {
	const params = new URLSearchParams(window.location.search);
	const preselectedIndex = parseInt(params.get("selected") || "0", 10);

	const [query, setQuery] = useState("");

	const cars = useMemo(
		() => [
			{
				name: "Sakay E-Trike X1",
				desc: "Smart, sustainable, and perfect for community mobility.",
				img: "/images/etrikex1.jpg",
				price: "₱350,000",
			},
			{
				name: "Sakay E-Van Lite",
				desc: "Compact electric van ideal for businesses and logistics.",
				img: "/images/evanlite.jpg",
				price: "₱1,150,000",
			},
			{
				name: "Sakay E-Sedan Pro",
				desc: "Luxury and performance meet sustainability.",
				img: "/images/esedanpro.jpg",
				price: "₱1,850,000",
			},
		],
		[]
	);

	const filteredCars = useMemo(() => {
		const q = query.trim().toLowerCase();
		if (!q) return cars;
		return cars.filter((c) => c.name.toLowerCase().includes(q));
	}, [cars, query]);

	const handleExplore = (index = 0) => {
		// Potential detail view; for now, keep on listing with highlight
		window.location.assign(`/car-listing?selected=${index}`);
	};

	const handleOrder = (carName) => {
		window.location.assign(`/order?model=${encodeURIComponent(carName)}`);
	};

	return (
		<div className="min-h-screen flex flex-col bg-white text-gray-800">
			<NavBar onGetStarted={() => handleOrder(filteredCars[preselectedIndex]?.name || cars[0].name)} />

			<section className="px-10 md:px-20 py-10 bg-gradient-to-r from-green-50 to-sky-50 border-b border-gray-100">
				<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
					<div>
						<h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
							Find Your <span className="bg-gradient-to-r from-green-400 to-sky-500 bg-clip-text text-transparent">Electric</span>
						</h2>
						<p className="text-gray-600 mt-2">Browse our latest eco-electric lineup.</p>
					</div>
					<div className="flex items-center gap-3">
						<input
							type="text"
							placeholder="Search models..."
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							className="w-64 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
						/>
						<PrimaryButton label="Clear" type="secondary" onClick={() => setQuery("")} />
					</div>
				</div>
			</section>

			<section className="py-12 px-10 md:px-20">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{filteredCars.map((car, index) => {
						const isHighlighted = index === preselectedIndex;
						return (
							<div
								key={car.name}
								className={`rounded-2xl border transition shadow-sm hover:shadow-xl p-6 bg-white ${
									isHighlighted ? "ring-2 ring-green-400" : "border-gray-100"
								}`}
							>
								<img src={car.img} alt={car.name} className="rounded-xl w-full h-48 object-cover mb-4" />
								<h3 className="text-2xl font-semibold text-gray-800">{car.name}</h3>
								<p className="text-gray-600 mt-1">{car.desc}</p>
								<div className="flex items-center justify-between mt-4">
									<span className="text-lg font-bold bg-gradient-to-r from-green-400 to-sky-500 bg-clip-text text-transparent">{car.price}</span>
									<div className="flex gap-2">
										<PrimaryButton label="Explore" onClick={() => handleExplore(index)} type="outline" />
										<PrimaryButton label="Order Now" onClick={() => handleOrder(car.name)} type="primary" />
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</section>

			<footer className="py-10 text-center bg-white border-t border-gray-200">
				<p className="text-gray-500">© {new Date().getFullYear()} Sakay Automotive. All rights reserved.</p>
			</footer>
		</div>
	);
}


