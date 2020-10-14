import React from "react";
import "./Score.css";

export default function Score(props) {
	return (
		<h2 className="score">
			Score: <span className="score_number">{props.score}</span>
		</h2>
	);
}