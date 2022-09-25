import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../../AppContext";
import "./Header.css";
import icon from "../../../assets/images/menu-icon.png";
import icon_closed from "../../../assets/images/menu-icon-closed.png";
import { useNavigate } from "react-router-dom";
import Logo from "../logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import photo from "../../../assets/images/map.jpeg";  

export default function Header() {
	const { user, setuser } = React.useContext(AppContext);
	const [isMenuOpen, setisMenuOpen] = useState(false);
	const [page, setpage] = useState("home");

	let history = useNavigate();

	function updateIsMenuOpen() {
		setisMenuOpen(!isMenuOpen);
	}

	function updatePage(page) {
		setpage(page);
		setisMenuOpen(false);
		history(page);
	}

	if(!user || !user.name) return(<div></div>)

	return (
		<header className="header">
			<div className="header-columns">
				<div className="letf-side">
					<button onClick={updateIsMenuOpen} className="mobile-menu">
						<img
							src={isMenuOpen ? icon_closed : icon}
							width="25px"
							alt="Menu"
						/>
					</button>
					<Logo />
				</div>

				<div className="right-side">
				
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

				
                
                	{(!user || !user.name) && (
						<span>
							<Link to="/login">signIn </Link>
							 or 
							<Link to="/signup"> signUp</Link>
						</span>
					)}
				</div>
			</div>

			<ul className={isMenuOpen ? "dropdown-child active" : "dropdown-child"}>
				<li
					className={page === "home" ? "active-item" : ""}
					onClick={() => updatePage("home")}
				>
					<span>Home</span>
				</li>

				<li
					className={page === "myevents" ? "active-item" : ""}
					onClick={() => updatePage("myevents")}
				>
					<span>Your events</span>
				</li>

				<li
					className={page === "mygroups" ? "active-item" : ""}
					onClick={() => updatePage("mygroups")}
				>
					<span>Your groups</span>
				</li>

				<li
					className={page === "messages" ? "active-item" : ""}
					onClick={() => updatePage("messages")}
				>
					<span>Messages</span>
				</li>

				<li
					className={page === "/settings/notifications" ? "active-item" : ""}
					onClick={() => updatePage("/settings/notifications")}
				>
					<span>Notifications</span>
				</li>

				<li
					className={page === "weather" ? "active-item" : ""}
					onClick={() => updatePage("weather")}
				>
					<span>Settings</span>
				</li>

				<li
					className={page === "/settings/interest" ? "active-item" : ""}
					onClick={() => updatePage("/settings/interest")}
				>
					<span>Interests</span>
				</li>

				<li
					className={page === "/settings/profile" ? "active-item" : ""}
					onClick={() => updatePage("/settings/profile")}
				>
					<span>View profile</span>
				</li>
			</ul>
		</header>
	);
}
