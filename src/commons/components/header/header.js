import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import photo from "../../../assets/images/map.jpeg";

export default function Header() {
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
				Name
				<FontAwesomeIcon
					icon={["fas", "ellipsis-vertical"]}
					className="header-icon"
					title="Menu"
				/>
			</div>
		</header>
	);
}
