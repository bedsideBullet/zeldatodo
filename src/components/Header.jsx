// src/components/Header.jsx
import React from "react";
import favicon from "../assets/icons/favicon.png";

export default function Header() {
	return (
		<div className="text-center mb-5">
			<img
				src={favicon}
				alt="favicon"
				style={{ width: "64px", height: "64px" }}
			/>
			<h1 className="display-5 mt-3">Zelda Quest Log</h1>
			<p className="text-muted">Track your Main, Side, and Daily quests</p>
		</div>
	);
}
