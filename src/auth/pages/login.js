import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/images/logo-eventApp.png";
import AppContext from "../../AppContext";
import { Link } from "react-router-dom";
import "./login.css"; 

export default function Login() {
	const [form, setForm] = useState({ email: "", password: "" });
	const { loading, setLoading } = React.useContext(AppContext);
	const { user, setuser } = React.useContext(AppContext);
	const { message, setMessage } = React.useContext(AppContext);
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

		const res = await fetch(url, {
			method: "POST",
			body: JSON.stringify(form),
			headers: {
				"Content-Type": "application/json",
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
		
		}).then(function(response) {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			return response;

		}).catch((error) => {
			setLoading(false);
			setMessage({code: "404", message: "User doesn't exist." })
		});

		if (res) {
			const data = await res.json();

			console.log(data);

			localStorage.setItem("sessionEventApp", data.token);
			setuser({
				name: data.user.name,
				email: data.user.email,
				id: data.user._id,
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
					
					<div className="form-login-link">
						<Link to="/signup">New user</Link>
					</div>
				</form>
			</div> 
		</div>
	);
}
