import React, { useState } from "react";
import icon from "../../assets/images/logo-eventApp.png";
import AppContext from "../../AppContext";
import { Link } from "react-router-dom";
import "./login.css";
import Alert from "../../commons/components/alert";
import { useNavigate } from "react-router-dom";

export default function Signup() {
	const [form, setForm] = useState({
		email: "",
		password: "",
		name: "",
		passwordCopy: "",
	});
	const { loading, setLoading } = React.useContext(AppContext);
	let history = useNavigate();
	const { user, setuser } = React.useContext(AppContext);

	const onChange = (ev) => {
		setForm((form) => ({ ...form, [ev.target.name]: ev.target.value }));
	};

	const handleSubmit = async (ev) => {
		let url = process.env.REACT_APP_URL_SIGNUP;

		ev.preventDefault();

		setLoading(true);

		const res = await fetch(url, {
			method: "POST",
			body: JSON.stringify(form),
			headers: {
				"Content-Type": "application/json",
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
		}).catch((error) => {
			console.log(error);
		});

		if (res) {
			const data = await res.json();
			localStorage.setItem("sessionEventApp", data.token);
			setuser(data.user);
			history("/home");
		}
		setLoading(false);
	};

	return (
		<div className="content-login">
			<div className="page-login">
				<form className="form-login">
					<img src={icon} alt="logo" className="form-login-logo"></img>

					<div className="form-login-label">
						<label htmlFor="name">Name:</label>
					</div>
					<div>
						<input
							type="text"
							value={form.name}
							name="name"
							onChange={onChange}
						/>
					</div>
					<div className="form-login-label">
						<label htmlFor="email">Email:</label>
					</div>
					<div>
						<input
							type="text"
							value={form.email}
							name="email"
							onChange={onChange}
						/>
					</div>
					<div className="form-login-label">
						<label htmlFor="email">Password:</label>
					</div>

					<div>
						<input
							type="password"
							value={form.password}
							name="password"
							onChange={onChange}
							autoComplete=""
						/>
					</div>
					<div className="form-login-label">
						<label htmlFor="email">Repear password:</label>
					</div>
					<div>
						<input
							type="password"
							value={form.passwordCopy}
							name="passwordCopy"
							onChange={onChange}
							autoComplete=""
						/>
					</div>
					<div className="form-login-button">
						<button onClick={handleSubmit}>Sign up</button>
					</div>
					<Alert />
				</form>
			</div>{" "}
		</div>
	);
}
