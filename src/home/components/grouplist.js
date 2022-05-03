import React from "react"; 

export default function EventList(props) {
	 
    let events = props.data;

    if(!events)
    return <div></div>

	const groupList = events.map((event, index) => (
		<div key={index}>
			<li>{event.name}
            </li>
		</div>
	));

	return (
		<ul className="item-list">			
			{groupList}
		</ul>
	);
}
