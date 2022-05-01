import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../AppContext";
import photo from "../../assets/images/map.jpeg"; 


export default function Dashboard() {
	const [events, setEvents] = useState([]);
	const [error, setError] = useState(null);
	const { loading, setLoading } = React.useContext(AppContext);

	let history = useNavigate();
	let url = process.env.REACT_APP_URL_EVENTS;

	let search = async (query) => {
		setLoading(true);

		const res = await fetch(url + query).catch((error) => {
			console.log(error);
			setEvents({
				error: { code: "net", message: "ERR_NAME_NOT_RESOLVED" },
			});
		});

		if (res) {
			const data = await res.json();  
			setEvents(data);
		}
		setLoading(false);
	};

	useEffect(() => {
		search("");
	}, [url]);

	const eventList = events.map((event, index) => (
		<div key={index}>
			<div className="section">{event.title}</div>
		</div>
	));

	return (
		<section className="page">
			<div className="header-page">
				<h1>Dashboard</h1>
				<span>home > Dashboard</span>
			</div>
			<div>
				<h2>Today</h2>
				<div className="section">
					<div>
						<img src={photo} alt="profile" className="header-image" />
					</div>
					<div className="items">
						<div>Meetup en "THE EMPIRE" Primer y Tercer miércoles del mes.</div>
						<div>
							Wed, Apr 20 · 7:00 PM NZST Meetup en "THE EMPIRE" Primer y Tercer
							miércoles del mes.
						</div>
						<div>
							Group name:The Auckland Spanish Language Meetup Group
							(Conversational)
						</div>
						<div>9 attendees</div>
					</div>
				</div>
			</div>
			<p></p>
			<p>My next events</p>
			<div>{eventList}</div>
			<p>Organized by me</p>
		</section>
	);
}
