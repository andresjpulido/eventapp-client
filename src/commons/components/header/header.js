import React, { useState, useEffect } from "react";
import AppContext from "../../../AppContext";
import { useNavigate } from "react-router-dom";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import photo from "../../../assets/images/map.jpeg";


export default function Header() {
	const { user, setuser } = React.useContext(AppContext);
	let history = useNavigate();

	useEffect(() => {

console.log(window.location.pathname)

		if (!user && window.location.pathname !=="/signup") {
			let token = localStorage.getItem("sessionEventApp");
			if (token) {
				//validate token on server
				if (user) {

				} else {
					localStorage.removeItem("sessionEventApp");
					history("/login"); 
				}
			} else {
				localStorage.removeItem("sessionEventApp");	 
				history("/login"); 
			}
		}
	}, [user, history]);

	if (!user) return <div> </div>;

	return (
		<header>
			<div>
				<FontAwesomeIcon
					icon={["fas", "minus"]}
					className="header-icon"
					title="minus"
				/>

				<input type="search"></input>
				<FontAwesomeIcon
					icon={["fas", "magnifying-glass"]}
					className="header-icon"
					title="hidemenu"
				/>
			</div>
			<div>
				<FontAwesomeIcon
					icon={["fas", "flag-usa"]}
					className="header-icon"
					title="language"
				/>
				<FontAwesomeIcon
					icon={["fas", "bell"]}
					className="header-icon"
					title="Notifications"
				/>
				<FontAwesomeIcon
					icon={["fas", "comment"]}
					className="header-icon"
					title="messages"
				/>
				<img src={photo} alt="profile" className="header-image" />
				{user.name}
				<FontAwesomeIcon
					icon={["fas", "ellipsis-vertical"]}
					className="header-icon"
					title="Menu"
				/>
			</div>
		</header>
	);
}
