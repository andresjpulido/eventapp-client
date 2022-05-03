import React from "react";
import { useNavigate } from "react-router-dom";

export default function EventList(props) {
	let events = props.data;
    let history = useNavigate();

	const goTodetails = (id) => {
		console.log(id);
        history("event/"+id);
	};

	if (!events) return <div></div>;

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
