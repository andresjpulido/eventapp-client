import React from "react";
import { useNavigate } from "react-router-dom";

export default function EventList(props) {
	let events = props.data;
    let history = useNavigate();

	const goTodetails = (id) => { 
        history("/event/"+id);
	};

	if (events === null || !Array.isArray(events) || events.length === 0) return <div>No events to show.</div>;
 

	const eventList = events.map((event, index) => (
		<div key={index}>
			<li onClick={() => goTodetails(`${event._id}`)}>
				<h3>{event.title}</h3>
				<p>{event.description}</p>
			</li>
		</div>
	));

	return <ul className="item-list">{eventList}</ul>;
}
