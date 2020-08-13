import React from "react";
import "./Logotip.css";

export default function Logotip(props) {
	return (
		<h1>
			<a className="logotip" href="./index.html">
				Song<span className="logotip_bird">bird</span>
			</a>
		</h1>
	);
}