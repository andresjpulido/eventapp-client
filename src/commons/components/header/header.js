import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../../AppContext";
import { useNavigate } from "react-router-dom";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import photo from "../../../assets/images/map.jpeg";
import Logo from "../logo";
import SessionMenu from "../sessionmenu/sessionmenu";

export default function Header() {
	const { user, setuser } = React.useContext(AppContext);
	const { loading, setLoading } = React.useContext(AppContext);
	let history = useNavigate();

	const goEvent = () => {
		history("event");
	};

	return (
		<header>
			<div className="header-left">
				<Logo />
				<div>
					<input type="search"></input>
					<FontAwesomeIcon
						icon={["fas", "magnifying-glass"]}
						className="header-icon"
						title="hidemenu"
					/>
				</div>
			</div>
			<div className="header-right">
				{user && user.name && <Link to="/newevent">Create event</Link>}
				{user && user.name && (
					<FontAwesomeIcon
						icon={["fas", "bell"]}
						className="header-icon"
						title="Notifications"
					/>
				)}

				{user && user.name && (
					<Link to="/conversations">
						<FontAwesomeIcon
							icon={["fas", "comment"]}
							className="header-icon"
							title="chat"
						/>
					</Link>
				)}

				{user && user.name && (
					<img src={photo} alt="profile" className="header-image" />
				)}

				{user && user.name && <span>{user.name}</span>}

				{user && user.name && <SessionMenu />}

				{(!user || !user.name) && (
					<div className="header-buttons">
						<div>
							<Link to="/login">signIn</Link>
						</div>
						or
						<div>
							<Link to="/signup">signUp</Link>
						</div>
					</div>
				)}
			</div>
		</header>
	);
}
