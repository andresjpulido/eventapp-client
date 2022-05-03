import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppContext from "../../AppContext";

export default function Event() {
	const [event, setEvent] = useState({});
	const [error, setError] = useState(null);
	const { loading, setLoading } = React.useContext(AppContext);

	let history = useNavigate();
	let { id } = useParams();
	let url = process.env.REACT_APP_URL_EVENTS;

	let search = async (id) => {
		setLoading(true);

		const res = await fetch(url + "/" + id).catch((error) => {
			console.log(error);
			setEvent({
				error: { code: "net", message: "ERR_NAME_NOT_RESOLVED" },
			});
		});

		if (res) {
			const data = await res.json();
			setEvent(data);
		}
		setLoading(false);
	};

	useEffect(() => {
		search(id);
	}, [url, id]);

	let handleSubmit = (ev) => {};

 
	if (event.title)
		return (
			<div>
				 
				<h1>{event.title}</h1>
				<h4>
					{event.createdAt} {event.city.name}, {event.city.region}
				</h4>
				<p>{event.description}</p>
				<div>map</div>
				<div>Created by {event.creator.name}</div>
				<div>Attendees:</div>
				<div>{JSON.stringify(event.attendees)}</div>

				<button onClick={handleSubmit}>back</button>

				<button onClick={handleSubmit}>Join</button>
			</div>
		);
	else return <div></div>;
}
