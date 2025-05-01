// src/components/QuestList.jsx
import React from "react";
import QuestItem from "./QuestItem";

export default function QuestList({ quests, onToggle, onDelete }) {
	if (quests.length === 0) {
		return (
			<p className="text-center text-muted">
				No quests yet — go on an adventure!
			</p>
		);
	}

	return (
		<div>
			{quests.map((quest) => (
				<QuestItem
					key={quest.id}
					quest={quest}
					onToggle={onToggle}
					onDelete={onDelete}
				/>
			))}
		</div>
	);
}
