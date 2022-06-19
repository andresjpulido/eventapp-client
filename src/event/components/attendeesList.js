import React from "react";
import "./attendeesList.css";

export default function AttendeesList(props) {
	let attendees = props.data;

	if (attendees === null || !Array.isArray(attendees) || attendees.length === 0)
		return <div>No attendees to show.</div>;

	const attendeesList = attendees.map((attendee, index) => (
		<div key={index} className="item">
			<div className="avatar">{attendee.name.substring(0, 1)}</div>
			<div className="name">{attendee.name}</div>
		</div>
	));

	return <div className="attendeesList">{attendeesList}</div>;
}
