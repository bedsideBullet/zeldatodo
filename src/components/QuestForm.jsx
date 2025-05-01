// src/components/QuestForm.jsx
import React, { useState } from "react";

export default function QuestForm({ onAddQuest }) {
	const [title, setTitle] = useState("");
	const [type, setType] = useState("Main Quest");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!title.trim()) {
			Swal.fire({
				icon: "error",
				title: "Oops!",
				text: "You must enter a quest title.",
			});
			return;
		}

		const newQuest = {
			id: Date.now(),
			title: title.trim(),
			type,
			completed: false,
		};

		onAddQuest(newQuest);
		setTitle("");
		setType("Main Quest");
	};

	return (
		<form onSubmit={handleSubmit} className="mb-4">
			<div className="row g-2">
				<div className="col-md-6">
					<input
						type="text"
						className="form-control"
						placeholder="Enter a new quest..."
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="col-md-4">
					<select
						className="form-select"
						value={type}
						onChange={(e) => setType(e.target.value)}
					>
						<option>Main Quest</option>
						<option>Side Quest</option>
						<option>Daily Quest</option>
					</select>
				</div>
				<div className="col-md-2">
					<button type="submit" className="btn btn-primary w-100">
						Add
					</button>
				</div>
			</div>
		</form>
	);
}
