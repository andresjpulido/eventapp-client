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
 
import SessionMenu from "../sessionmenu/sessionmenu";

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
		history.push(page);
	}

	return (
		<header>
			<div className="header-columns">
				<div className="letf-side">{user && user.name && <SessionMenu />}
					<button className="menu-mobile-icon" onClick={updateIsMenuOpen}>
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
					className={page === "neofeed" ? "active-item" : ""}
					onClick={() => updatePage("neofeed")}
				>
					<span>Neo feed</span>
				</li>

				<li
					className={page === "nimages" ? "active-item" : ""}
					onClick={() => updatePage("nimages")}
				>
					<span>Images</span>
				</li>

				<li
					className={page === "mrover" ? "active-item" : ""}
					onClick={() => updatePage("mrover")}
				>
					<span>Rovers</span>
				</li>

				<li
					className={page === "weather" ? "active-item" : ""}
					onClick={() => updatePage("weather")}
				>
					<span>Weather</span>
				</li>
			</ul>
		</header>
	);
}
