import React, { useState, useEffect } from "react";
import QuestForm from "./components/QuestForm";
import QuestList from "./components/QuestList";
import Header from "./components/Header";
import Swal from "sweetalert2";
import sword from "./assets/icons/sword.png";

export default function App() {
	const [quests, setQuests] = useState(() => {
		const saved = localStorage.getItem("zelda-quests");
		return saved ? JSON.parse(saved) : [];
	});

	useEffect(() => {
		localStorage.setItem("zelda-quests", JSON.stringify(quests));
	}, [quests]);

	const handleAddQuest = (newQuest) => {
		setQuests((prev) => [newQuest, ...prev]);
	};

	const handleToggleQuest = (id) => {
		setQuests((prev) =>
			prev.map((quest) => {
				if (quest.id === id) {
					const updatedQuest = { ...quest, completed: !quest.completed };

					if (!quest.completed && quest.type === "Main Quest") {
						Swal.fire({
							title: "You did it!",
							text: "A Main Quest is complete!",
							imageUrl: sword,
							imageWidth: 64,
							imageHeight: 64,
							imageAlt: "Master Sword",
							confirmButtonText: "",
							customClass: {
								confirmButton: "btn-circle",
							},
							buttonsStyling: false,
						});
					}

					return updatedQuest;
				}
				return quest;
			})
		);
	};

	const handleDeleteQuest = (id) => {
		setQuests((prev) => prev.filter((quest) => quest.id !== id));
	};

	const handleClearAll = () => {
		Swal.fire({
			title: "Clear All Quests?",
			text: "This will permanently remove all saved quests!",
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
				setQuests([]);
				localStorage.removeItem("zelda-quests");
				Swal.fire({
					title: "Cleared!",
					text: "Your quest log has been reset.",
					icon: "success",
					confirmButtonText: "OK",
					customClass: {
						confirmButton: "btn-circle",
					},
					buttonsStyling: false,
				});
			}
		});
	};

	return (
		<div className="container py-5">
			<Header />
			<div className="quest-wrapper mx-auto">
				<QuestForm onAddQuest={handleAddQuest} />
				<QuestList
					quests={quests}
					onToggle={handleToggleQuest}
					onDelete={handleDeleteQuest}
				/>
			</div>

			{quests.length > 0 && (
				<div className="text-center mt-4">
					<button className="btn btn-outline-danger" onClick={handleClearAll}>
						🗑️ Clear All Quests
					</button>
				</div>
			)}
		</div>
	);
}
