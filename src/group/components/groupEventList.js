import React from "react";
import "./groupEventList.css";

export default function GroupEventList(props) {
	let groups = props.data;

	if (groups === null || !Array.isArray(groups) || groups.length === 0)
		return <div>No groups to show.</div>;

	const groupList = groups.map((event, index) => (
		<div key={index} className="groupEventList-item">
			<div>{event.name}</div>
		</div>
	));

	return <div className="groupEventList">{groupList}</div>;
}
