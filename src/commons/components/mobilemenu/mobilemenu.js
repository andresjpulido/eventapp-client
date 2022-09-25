import React, { useState, useEffect, Fragment } from "react";

import { useNavigate } from "react-router-dom";
import "./mobilemenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppContext from "../../../AppContext";

export default function SessionMenu() {
	const { user, setuser } = React.useContext(AppContext);
	const { loading, setLoading } = React.useContext(AppContext);
	let history = useNavigate();
	let [isOpen, setisopen] = useState(false);

	const showSessionMenu = () => {
		console.log("pico");
		setisopen(!isOpen);
	};

	const logout = async (ev) => {
		ev.preventDefault();

		let url = process.env.REACT_APP_URL_SIGNOUT;

		setLoading(true);

		const res = await fetch(url, {
			method: "POST",
			body: null,
			headers: {
				"Content-Type": "application/json",
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
		}).catch((error) => {
			console.log(error);
			setLoading(false);
		});

		if (res) {
			const data = await res.json();

			console.log(data);

			localStorage.setItem("sessionEventApp", null);
			setuser(null);
			history("/");
		}
		setLoading(false);
	};

	const seeprofile = () => {
		history("/user");
	};

	const goMyGroups = () => {
		history("/mygroups");
	}

	return (
		<div className="mobile-menu">
			<FontAwesomeIcon
				icon={["fas", "ellipsis-vertical"]}
				className="header-icon"
				title="Menu"
				onClick={showSessionMenu}
			/>
			{isOpen && (
				<div className="menusession">
					<ul>
						<li onClick={seeprofile}>Profile</li>
						<li onClick={goMyGroups}>My groups</li>
						<li>My events</li>
						<li onClick={logout}>Logout</li>
					</ul>
				</div>
			)}
		</div>
	);
}
