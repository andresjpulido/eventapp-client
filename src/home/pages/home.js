import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../AppContext"; 
import Breadcrumb from "../../commons/components/breadcrumb";
import GroupList from "../components/grouplist";
import EventList from "../components/eventlist";

export default function Home() {
	const [events, setEvents] = useState([]);
	const [groups, setGroups] = useState([]);
	const [error, setError] = useState(null);
	const { loading, setLoading } = React.useContext(AppContext);

	let history = useNavigate();
	let url = process.env.REACT_APP_URL_EVENTS;
	let urlgroups = process.env.REACT_APP_URL_GROUPS;

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

	const eventList = events.map((event, index) => (
		<div key={index}>
			<div className="section">{event.title}</div>
		</div>
	));

	return (
		<section className="page ">
			<div className="header-page">
				<h1>Welcome home!</h1>
				<Breadcrumb path="home" />
				
			</div>
			<div className="home-page">
				<div className="groups-column">
					<h2>Groups</h2>
					<GroupList data={groups} />
				</div>

				<div className="events-column">
					<div>
						<p>
							EventApp is an community to share events, please check the events
							in your city or login and participate.
						</p>
					</div>

                    <h2>Events</h2>

					<EventList data={events} />

					<h2>Today</h2>

					 
					<p>My next events</p>

					<p>Organized by me</p>
				</div>

			</div>
			<p></p>
			<p>My next events</p>
			<div>{eventList}</div>
			<p>Organized by me</p>
		</section>
	);
}
