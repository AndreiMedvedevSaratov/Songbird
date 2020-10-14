import React from "react";
import "./Logotip.css";

export default function Logotip(props) {
	return (
		<h1>
			<a className="logotip" href="./index.html">
				Animal<span className="logotip_bird">Song</span>
			</a>
		</h1>
	);
}