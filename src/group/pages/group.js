import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppContext from "../../AppContext";
import Breadcrumb from "../../commons/components/breadcrumb";
import { useHistory } from "react-router-dom";
import AttendeesList from "../../event/components/attendeesList";
import EventList from "../../home/components/eventlist";

export default function Group() {
	const [group, setGroup] = useState({});
	const [events, setEvents] = useState([]);
	const { user, setuser } = React.useContext(AppContext);
	const [error, setError] = useState(null);
	const { loading, setLoading , message, setMessage} = React.useContext(AppContext);

	let history = useNavigate();
	 

	let { id } = useParams();
	let url = process.env.REACT_APP_URL_GROUPS;
	let urlevents = process.env.REACT_APP_URL_EVENTS;

	let searchEvents = async (id) => {
		setLoading(true);

		const res = await fetch(urlevents + "?group=" + id).catch((error) => {
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


	let search = async (id) => {
		setLoading(true);

		const res = await fetch(url + "/" + id).catch((error) => {
			setGroup(null);
			setMessage({
				type:"error",
				message: "Connection refused",
				code: 2
			})
		});

		if (res) {
			const data = await res.json();
			setGroup(data);

			searchEvents(data._id);

		}
		setLoading(false);
	};

	useEffect(() => {
		search(id);
		
	}, [url, id]);

	let handleSubmit = (ev) => {};

	let handleGoBack = () => {
		history(-1)
	};

	if (group.name)
		return (
			<section className="page ">
				<div className="header-page">
					<h1>{group.name}</h1>
					<Breadcrumb path="home > group" />
				</div>

				<h1>{group.name}</h1>
				<h4>
					 {group.city.name}, {group.city.region}
				</h4>
				<p>{group.description}</p>
			 
				<div>Created by {group.creator?group.creator.name:""} at {group.createdAt}</div>
				
                <h3>Last events</h3>
                <EventList data={events} />
 
				<button onClick={handleGoBack}>back</button>

				{user && user.name && <button onClick={handleSubmit}>Join</button>}
			</section>
		);
	else return <div></div>;
}
