import React from "react";
import "../styles/button.css";

export default function PrimaryButton({ label, onClick, type = "primary" }) {
	const baseClasses =
		"inline-flex items-center justify-center rounded-xl font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

	const typeClasses = {
		primary:
			"bg-gradient-to-r from-green-400 to-sky-500 text-white shadow px-6 py-3 hover:scale-[1.02]",
		secondary:
			"bg-green-100 text-green-700 border border-green-300 px-6 py-3 hover:bg-green-200",
		outline:
			"border border-green-400 text-green-500 px-6 py-3 hover:bg-green-50",
	};

	const className = `${baseClasses} ${typeClasses[type] || typeClasses.primary} sa-primary-button ${
		type === "outline" ? "sa-primary-button--outline" : ""
	} ${type === "secondary" ? "sa-primary-button--secondary" : ""}`;

	return (
		<button type="button" className={className} onClick={onClick}>
			{label}
		</button>
	);
}


