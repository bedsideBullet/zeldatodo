// src/components/Header.jsx
import React from "react";
import king from "../assets/icons/king.png";

export default function Header() {
	return (
		<div className="text-center mb-5 ">
			<img
				src={king}
				alt="king
				"
				style={{ width: "600px", height: "400px" }}
			/>

			<p className="triforce-yellow h2">
				Track your Main, Side, and Daily quests
			</p>
		</div>
	);
}
