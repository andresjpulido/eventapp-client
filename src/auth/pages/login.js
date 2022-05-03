import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/images/logo-eventApp.png";
import AppContext from "../../AppContext";
import { Link } from "react-router-dom";
import "./login.css";
import Alert from "../../commons/components/alert";

export default function Login() {
	const [form, setForm] = useState({ email: "", password: "" });
	const { loading, setLoading } = React.useContext(AppContext);
	const { user, setuser } = React.useContext(AppContext);
	let history = useNavigate();

	useEffect(() => {
		localStorage.setItem("sessionEventApp", null);
	}, []);

	const onChange = (ev) => {
		ev.persist();
		setForm((form) => ({ ...form, [ev.target.name]: ev.target.value }));
	};

	const handleSubmit = async (ev) => {
		ev.preventDefault();

		let url = process.env.REACT_APP_URL_SIGNIN;

		setLoading(true);

		const res = await fetch(url).catch((error) => {
			console.log(error);
			setLoading(false);
		});

		if (res) {
			const data = await res.json();
			localStorage.setItem("sessionEventApp", data);
			setuser({
				name: "andres",
				email: "andres@gmail.com",
				id:"id767676"
			});
			history("/home");
		}
		setLoading(false);
	};

	return (
		<div className="content-login">
			<div className="page-login">
				<form className="form-login" onSubmit={handleSubmit}>
					<img src={icon} alt="logo" className="form-login-logo"></img>

					<div className="form-login-label">
						<label htmlFor="email">Email:</label>
					</div>
					<div>
						<input
							type="text"
							name="email"
							value={form.email}
							onChange={onChange}
						/>
					</div>
					<div className="form-login-label">Password:</div>
					<div>
						<input
							type="password"
							value={form.password}
							name="password"
							autoComplete=""
							onChange={onChange}
						/>
					</div>
					<div className="form-login-button">
						<button type="submit">Sign In</button>
					</div>
					<Alert />
					<div className="form-login-link">
						<Link to="/signup">New user</Link>
					</div>
				</form>
			</div>{" "}
		</div>
	);
}
