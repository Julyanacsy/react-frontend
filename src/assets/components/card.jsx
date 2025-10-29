import React from "react";
import "../styles/card.css";

export default function FeatureCard({ icon, title, description, onClick }) {
	return (
		<div
			role="button"
			onClick={onClick}
			tabIndex={0}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") onClick?.();
			}}
			className="sa-feature-card bg-white hover:bg-green-50 border border-gray-100 rounded-2xl shadow hover:shadow-xl transition p-6 cursor-pointer select-none"
		>
			<div className="sa-feature-icon text-4xl mb-4">{icon}</div>
			<h4 className="text-xl font-semibold text-gray-800 mb-2">{title}</h4>
			<p className="text-gray-600">{description}</p>
		</div>
	);
}


