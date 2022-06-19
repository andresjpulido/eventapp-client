import React from "react";
import { useNavigate } from "react-router-dom";

export default function GroupList(props) {
	 
    let groups = props.data;  
	let history = useNavigate();

	const goTodetails = (id) => { 
        history("/group/"+id);
	};

	if (groups === null || !Array.isArray(groups) || groups.length === 0) return <div>No groups to show.</div>;
    

	const groupList = groups.map((event, index) => (
		<div key={index}>
			<li onClick={() => goTodetails(`${event._id}`)}>{event.name}
            </li>
		</div>
	));

	return (
		<ul className="item-list">			
			{groupList}
		</ul>
	);
}
