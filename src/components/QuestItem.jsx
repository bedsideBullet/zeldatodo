// src/components/QuestItem.jsx
import React from "react";
import sword from "../assets/icons/sword.png";
import feather from "../assets/icons/feather.png";
import hourglass from "../assets/icons/hourglass.png";
import Swal from "sweetalert2";

const questIcons = {
	"Main Quest": sword,
	"Side Quest": feather,
	"Daily Quest": hourglass,
};

export default function QuestItem({ quest, onToggle, onDelete }) {
	return (
		<div className="card mb-3 shadow-sm">
			<div className="card-body d-flex align-items-center justify-content-between">
				<div className="d-flex align-items-center">
					<img
						src={questIcons[quest.type]}
						alt={quest.type}
						style={{ width: "28px", height: "28px", marginRight: "12px" }}
					/>
					<div>
						<h5
							className={`mb-0 ${
								quest.completed ? "text-decoration-line-through text-muted" : ""
							}`}
						>
							{quest.title}
						</h5>
						<small className="text-muted">{quest.type}</small>
					</div>
				</div>
				<div>
					<button
						className={`btn btn-sm ${
							quest.completed ? "btn-warning" : "btn-success"
						} me-2`}
						onClick={() => onToggle(quest.id)}
					>
						{quest.completed ? "Undo" : "Complete"}
					</button>
					<button
						className="btn btn-sm btn-danger"
						onClick={() => {
							Swal.fire({
								title: "Delete this quest?",
								text: `"${quest.title}" will be lost forever!`,
								icon: "warning",
								showCancelButton: true,
								confirmButtonColor: "#d33",
								cancelButtonColor: "#3085d6",
								confirmButtonText: "Yes, delete it!",
							}).then((result) => {
								if (result.isConfirmed) {
									onDelete(quest.id);
									Swal.fire("Deleted!", "The quest is gone.", "success");
								}
							});
						}}
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
}
