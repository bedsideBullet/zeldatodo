import React, { useState } from "react";
import Swal from "sweetalert2";

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
				customClass: {
					confirmButton: "btn-circle",
				},
				buttonsStyling: false,
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
		<form onSubmit={handleSubmit} className="mb-4 add-quest">
			<div className="row g-4 align-items-stretch">
				<div className="col-md-6">
					<input
						type="text"
						className="form-control "
						placeholder="Enter a new quest..."
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="col-md-4 ">
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
					<button type="submit" className="btn btn-primary w-100"></button>
				</div>
				<div className="col-md-1"></div>
			</div>
		</form>
	);
}
