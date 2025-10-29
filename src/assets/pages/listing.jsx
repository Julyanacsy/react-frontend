import React, { useMemo, useState } from "react";
import NavBar from "../components/navbar.jsx";
import PrimaryButton from "../components/primarybutton.jsx";

export default function ListingPage() {
	const params = new URLSearchParams(window.location.search);
	const preselectedIndex = parseInt(params.get("selected") || "0", 10);

	const [query, setQuery] = useState("");
	const [segment, setSegment] = useState("all");
	const [sort, setSort] = useState("asc");

	const cars = useMemo(
		() => [
			{
				name: "Sakay E-Trike X1",
				desc: "Smart, sustainable, and perfect for community mobility.",
				img: "/images/etrikex1.jpg",
				price: 350000,
				segment: "utility",
				badge: "Popular",
			},
			{
				name: "Sakay E-Van Lite",
				desc: "Compact electric van ideal for businesses and logistics.",
				img: "/images/evanlite.jpg",
				price: 1150000,
				segment: "utility",
				badge: "New",
			},
			{
				name: "Sakay E-Sedan Pro",
				desc: "Luxury and performance meet sustainability.",
				img: "/images/esedanpro.jpg",
				price: 1850000,
				segment: "passenger",
			},
		],
		[]
	);

	const filteredCars = useMemo(() => {
		const q = query.trim().toLowerCase();
		let list = cars.filter((c) => (segment === "all" ? true : c.segment === segment));
		if (q) list = list.filter((c) => c.name.toLowerCase().includes(q));
		list = [...list].sort((a, b) => (sort === "asc" ? a.price - b.price : b.price - a.price));
		return list;
	}, [cars, query, segment, sort]);

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

				<div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
					<div className="flex flex-wrap items-center gap-2">
						<button onClick={() => setSegment("all")} className={`px-4 py-2 rounded-full border text-sm ${segment === "all" ? "bg-green-500 text-white border-green-500" : "border-gray-200 text-gray-700 hover:bg-gray-50"}`}>All</button>
						<button onClick={() => setSegment("utility")} className={`px-4 py-2 rounded-full border text-sm ${segment === "utility" ? "bg-green-500 text-white border-green-500" : "border-gray-200 text-gray-700 hover:bg-gray-50"}`}>Utility</button>
						<button onClick={() => setSegment("passenger")} className={`px-4 py-2 rounded-full border text-sm ${segment === "passenger" ? "bg-green-500 text-white border-green-500" : "border-gray-200 text-gray-700 hover:bg-gray-50"}`}>Passenger</button>
					</div>
					<div className="flex items-center gap-2">
						<label className="text-sm text-gray-600">Sort by price:</label>
						<select value={sort} onChange={(e) => setSort(e.target.value)} className="px-3 py-2 border border-gray-200 rounded-xl bg-white">
							<option value="asc">Low to High</option>
							<option value="desc">High to Low</option>
						</select>
					</div>
				</div>
			</section>

			<section className="py-12 px-10 md:px-20">
				{filteredCars.length === 0 ? (
					<div className="text-center text-gray-600 py-20 border border-dashed border-gray-200 rounded-2xl">
						No models found. Try a different search or filter.
					</div>
				) : (
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{filteredCars.map((car, index) => {
						const isHighlighted = index === preselectedIndex;
						return (
							<div
								key={car.name}
								className={`group rounded-2xl border transition shadow-sm hover:shadow-xl p-6 bg-white ${
									isHighlighted ? "ring-2 ring-green-400" : "border-gray-100"
								}`}
							>
								<div className="relative">
									<img src={car.img} alt={car.name} className="rounded-xl w-full h-48 object-cover mb-4 transition-transform duration-200 group-hover:scale-[1.02]" />
									{car.badge && (
										<span className="absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-full bg-gradient-to-r from-green-400 to-sky-500 text-white shadow">
											{car.badge}
										</span>
									)}
								</div>
								<h3 className="text-2xl font-semibold text-gray-800">{car.name}</h3>
								<p className="text-gray-600 mt-1">{car.desc}</p>
								<div className="flex items-center justify-between mt-4">
									<span className="text-lg font-bold bg-gradient-to-r from-green-400 to-sky-500 bg-clip-text text-transparent">
										{new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP', maximumFractionDigits: 0 }).format(car.price)}
									</span>
									<div className="flex gap-2">
										<PrimaryButton label="Explore" onClick={() => handleExplore(index)} type="outline" />
										<PrimaryButton label="Order Now" onClick={() => handleOrder(car.name)} type="primary" />
									</div>
								</div>
							</div>
						);
					})}
				</div>
				)}
			</section>

			<footer className="py-10 text-center bg-white border-t border-gray-200">
				<p className="text-gray-500">© {new Date().getFullYear()} Sakay Automotive. All rights reserved.</p>
			</footer>
		</div>
	);
}


