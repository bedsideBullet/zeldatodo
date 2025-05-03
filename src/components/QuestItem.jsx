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
		<div className="card mb-3 shadow-xl">
			<div className="card-body d-flex align-items-center justify-content-between">
				<div className="d-flex align-items-center">
					<img
						src={questIcons[quest.type]}
						alt={quest.type}
						style={{ width: "60px", height: "60px", marginRight: "12px" }}
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
				<div className="btn-group ">
					<button
						className="btn btn-circle"
						onClick={() => onToggle(quest.id)}
					></button>
					<button
						className="btn btn-b"
						onClick={() => {
							Swal.fire({
								title: "Delete this quest?",
								text: `"${quest.title}" will be lost forever!`,
								icon: "warning",
								showCancelButton: true,
								confirmButtonText: "",
								cancelButtonText: "",
								customClass: {
									confirmButton: "btn-circle",
									cancelButton: "btn-b",
								},
								buttonsStyling: false,
							}).then((result) => {
								if (result.isConfirmed) {
									onDelete(quest.id);
									Swal.fire({
										title: "Deleted!",
										text: "The quest is gone.",
										icon: "success",
										confirmButtonText: "",
										customClass: {
											confirmButton: "btn-circle",
										},
										buttonsStyling: false,
									});
								}
							});
						}}
					></button>
				</div>
			</div>
		</div>
	);
}
