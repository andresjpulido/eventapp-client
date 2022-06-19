import React, { useEffect, useState } from "react";
import Breadcrumb from "../../commons/components/breadcrumb";
import AppContext from "../../AppContext";

export default function Conversations() {
	const [events, setEvents] = useState([]);
	const { loading, setLoading, message, setMessage } =
		React.useContext(AppContext);
	const { user, setuser } = React.useContext(AppContext);
	let urlChats = process.env.REACT_APP_URL_CHATS;

	let search = async (query) => {
		setLoading(true);

		const res = await fetch(urlChats + query).catch((error) => {
			setEvents(null);

			setMessage({
				type: "error",
				message: "Connection refused",
				code: 2,
			});
		});

		if (res) {
			const data = await res.json();
			setEvents(data);
		}
		setLoading(false);
	};

	useEffect(() => {
		if (user) search({ to: user._id });
	}, [urlChats]);

	return (
		<section className="page">
			<div className="header-page">
				<h1>Conversations!</h1>
				<Breadcrumb path="home" />
			</div>
			<div className="home-page">
				<div className="groups-column">
					<h2>Mates</h2>
					Conversations
				</div>
				<div className="events-column">
					<div>
						<p>
							EventApp is an community to share events, please check the events
							in your city or login and participate.
						</p>
					</div>

					<h2>Events</h2>

					<div className="message">content</div>

					<h2>Today</h2>

					<p>My next events</p>

					<p>Organized by me</p>
				</div>
			</div>
		</section>
	);
}
