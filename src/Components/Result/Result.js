import React from "react";
import "./Result.css";

export default function Result(props) {
	console.log('3= ' + props.score);
	return (
		<h2 className="result">
			Score: <span className="score_number">{props.score}</span>
		</h2>
	);
}