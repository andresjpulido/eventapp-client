import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../AppContext";
import "./home.css";
import people from "../../assets/images/people.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Public() {
	const [events, setEvents] = useState([]);
	const [groups, setGroups] = useState([]);
	const { loading, setLoading, message, setMessage } =
		React.useContext(AppContext);

	let history = useNavigate();
	let url = process.env.REACT_APP_URL_EVENTS;
	let urlgroups = process.env.REACT_APP_URL_GROUPS;

	let search = async (query) => {
		setLoading(true);

		const res = await fetch(url + query).catch((error) => {
			setEvents(null);

			setMessage({});
		});

		if (res) {
			const data = await res.json();
			setEvents(data);
		}
		setLoading(false);
	};

	let getGroups = async () => {
		setLoading(true);

		const res = await fetch(urlgroups).catch((error) => {
			setGroups(null);
			//{				error: { code: "net", message: "ERR_NAME_NOT_RESOLVED" },			}
		});

		if (res) {
			const data = await res.json();
			setGroups(data);
		}
		setLoading(false);
	};

	useEffect(() => {
		search("");
		getGroups();
	}, [url]);

	return (
		<section className="page">
			<h1>Welcome!</h1>
			<p>
				Esta es una pagina de creacion de eventos, tenemos una serie de
				caterorias disponibles para ti.
			</p>
			<p>
				<img src={people} alt="people" />
			</p>
			<p>
				Crea tus propios eventos o juntate con gente que comparte tus mismas
				espectativas.
			</p>
			<p>Las categorias mas solicitadas.</p>

			<p>
				<FontAwesomeIcon
					icon={["fas", "baseball"]}
					className="error-icon"
					title="minus"
				/>
				<FontAwesomeIcon
					icon={["fas", "bicycle"]}
					className="error-icon"
					title="minus"
				/>
				<FontAwesomeIcon
					icon={["fas", "user-graduate"]}
					className="error-icon"
					title="minus"
				/>
				<FontAwesomeIcon
					icon={["fas", "user-pen"]}
					className="error-icon"
					title="minus"
				/>
				<FontAwesomeIcon
					icon={["fas", "user-doctor"]}
					className="error-icon"
					title="minus"
				/>
				<FontAwesomeIcon
					icon={["fas", "user-music"]}
					className="error-icon"
					title="minus"
				/>
				<FontAwesomeIcon
					icon={["fas", "wheelchair-move"]}
					className="error-icon"
					title="minus"
				/>
				<FontAwesomeIcon
					icon={["fas", "user-tie"]}
					className="error-icon"
					title="minus"
				/>
				<FontAwesomeIcon
					icon={["fas", "users"]}
					className="error-icon"
					title="minus"
				/>
				<FontAwesomeIcon
					icon={["fas", "baby"]}
					className="error-icon"
					title="minus"
				/>
				<FontAwesomeIcon
					icon={["fas", "user-astronaut"]}
					className="error-icon"
					title="minus"
				/>
				<FontAwesomeIcon
					icon={["fas", "bed"]}
					className="error-icon"
					title="minus"
				/>
				<FontAwesomeIcon
					icon={["fas", "child"]}
					className="error-icon"
					title="minus"
				/>
				<FontAwesomeIcon
					icon={["fas", "user-group"]}
					className="error-icon"
					title="minus"
				/>
				<FontAwesomeIcon
					icon={["fas", "user-gear"]}
					className="error-icon"
					title="minus"
				/>
				<FontAwesomeIcon
					icon={["fas", "users-rays"]}
					className="error-icon"
					title="minus"
				/>
				<FontAwesomeIcon
					icon={["fas", "user-shield"]}
					className="error-icon"
					title="minus"
				/>
			</p>
		</section>
	);
}
