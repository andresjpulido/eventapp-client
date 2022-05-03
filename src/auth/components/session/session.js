import React, { useEffect } from "react";
import AppContext from "../../../AppContext";
import { useNavigate } from "react-router-dom";
  
export default function Header() {
	const { user, setuser } = React.useContext(AppContext);
	const { loading, setLoading } = React.useContext(AppContext);
	let history = useNavigate();

	let whoami = async (query) => {
		let url = process.env.REACT_APP_URL_WHOAMI;

		setLoading(true);

		const res = await fetch(url, {
			method: "POST",
			body: JSON.stringify({ token: query }),
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
			setuser(data);
			console.log("data", data);
			//history("/dashboard");
			if (data === null) {
				localStorage.removeItem("sessionEventApp");
				history("/login");
			}
		}
		setLoading(false);
	};

	useEffect(() => {
		console.log(window.location.pathname, user);

		if (
			window.location.pathname === "/signup" ||
			window.location.pathname === "/" ||
			window.location.pathname === "/login"
		)
			return;

		if (user === null) {
			console.log("user", user);

			let token = localStorage.getItem("sessionEventApp");

			if (token !== null) {
				//validate token on server

				whoami(token);
			} else {
				localStorage.removeItem("sessionEventApp");
				history("/login");
			}
		}
	}, [user, history]);

	if (!user) return <div> </div>;

	return <div></div>;
}
