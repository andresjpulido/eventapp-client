import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../../AppContext";
import { useNavigate } from "react-router-dom";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import photo from "../../../assets/images/map.jpeg";
import Logo from "../logo";

export default function Header() {
	const { user, setuser } = React.useContext(AppContext);
	const { loading, setLoading } = React.useContext(AppContext);

	return (
		<header>
			<Logo />
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
				{user && user.name && (
					<div>
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
				)}

				{!user && <span><Link to="/login">signIn</Link> or <Link to="/signup">signUp</Link></span>}
			</div>
		</header>
	);
}
