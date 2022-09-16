import React from "react";
import { useNavigate } from "react-router-dom";
import "./logo.css";

export default function Logo() {
	let history = useNavigate();

	let handleLink = () => {
		history("/");
	};

	return (
		<div className="logo" onClick={handleLink}>
			<h1>
				 EventsApp
				 
			</h1>
		</div>
	);
}
