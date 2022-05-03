import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppContext from "../../../AppContext";

export default function Menu() {
	const [isMenuOpen, setisMenuOpen] = useState(false);
	const [page, setpage] = useState("home");
	const { user, setuser } = React.useContext(AppContext);

	let history = useNavigate();

	function updateIsMenuOpen() {
		setisMenuOpen(!isMenuOpen);
	}

	function updatePage(page) {
		console.log("--> " + page);
		setpage(page);
		setisMenuOpen(false);
		history(page);
	}

	if(!user)
		return(<div> </div>)

	return (
		<nav >
			
			<div>
				<div
					className={page === "dashboard" ? "active" : ""}
					onClick={() => updatePage("dashboard")}
				>
					<div>
						<FontAwesomeIcon
							icon={["fas", "gauge-high"]}
							className="menu-icon"
						/>
					</div>
					<div>Dashboard</div>
				</div>
				<div
					className={page === "reports" ? "active" : ""}
					onClick={() => updatePage("reports")}
				>
					<div>
						<FontAwesomeIcon
							icon={["fas", "chart-line"]}
							className="menu-icon"
						/>
					</div>
					<div>Reports</div>
				</div>
				<div
					className={page === "users" ? "active" : ""}
					onClick={() => updatePage("users")}
				>
					<div>
						<FontAwesomeIcon icon={["fas", "user"]} className="menu-icon" />
					</div>
					<div>Your profile</div>
				</div>
				<div
					className={page === "users" ? "active" : ""}
					onClick={() => updatePage("users")}
				>
					<div>
						<FontAwesomeIcon
							icon={["fas", "user-gear"]}
							className="menu-icon"
						/>
					</div>
					<div>User Managment</div>
				</div>
				<div
					className={page === "activities" ? "active" : ""}
					onClick={() => updatePage("activities")}
				>
					<div>
						<FontAwesomeIcon
							icon={["fas", "list-check"]}
							className="menu-icon"
						/>
					</div>
					<div>Activities</div>
				</div>
				<div
					className={page === "setup" ? "active" : ""}
					onClick={() => updatePage("setup")}
				>
					<div>
						<FontAwesomeIcon icon={["fas", "gears"]} className="menu-icon" />
					</div>
					<div>Settings</div>
				</div>
				<div
					className={page === "feedback" ? "active" : ""}
					onClick={() => updatePage("feedback")}
				>
					<div>
						<FontAwesomeIcon icon={["fas", "comments"]} className="menu-icon" />
					</div>
					<div>Feedback</div>
				</div>
				<div></div>
				<div></div>
			</div>
		</nav>
	);
}
